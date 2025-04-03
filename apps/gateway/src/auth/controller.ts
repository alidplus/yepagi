import * as defs from "@repo/defs";
import { TRPCError } from "@trpc/server";
import AuthService from "./jwt";
import { assertProtectedProcedure, Context } from "../context";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import UsersController from "../users/controller";
import { getTrpcError } from "../utils/errors";
import { TGeneralSuccesResponse } from "../utils/schema";
import JWT from "./jwt";

const users = defs.users.table
const oneDay_ms = 24 * 60 * 60 * 1000;
const refreshTokenOptions = {
  name: 'refreshToken',
  httpOnly: true,
  path: '/',
  sameSite: 'strict',
} as const

export default class AuthController {
  constructor(protected ctx: Context, protected signal?: AbortSignal) {
    this.ctx = ctx
    this.signal = signal
  }

  // @Measure
  public async signup(input: defs.auth.TSignup): Promise<defs.users.TSelect> {
    const { email, password } = input;
    const { db, authUsersKv, cookies } = this.ctx;

    try {
      const user = (
        await db.select().from(users).where(eq(users.email, email)).limit(1)
      )[0];

      if (user) {
        throw new TRPCError({
          code: "CONFLICT",
          message:
            "This email is associated with an existing account. Please login instead.",
        });
      }


      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      return new UsersController(this.ctx).create({
        email,
        passwordHash,
        username: email
      })

    } catch (error) {
      console.log(error);
      if (error instanceof TRPCError) throw error

      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Something went wrong",
      });
    }

  }

  // @Measure
  public async signin(input: defs.auth.TSignin): Promise<defs.auth.TAccess> {
    const { email, password } = input;
    const { db, authUsersKv, cookies } = this.ctx;

    try {
      const user = (
        await db.select().from(users).where(eq(users.email, email)).limit(1)
      )[0];

      if (!user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password 1",
        });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

      if (!isPasswordCorrect) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password 2",
        });
      }

      const accessToken = JWT.createAccessToken(user.id);
      const refreshToken = JWT.createRefreshToken(user.id);

      // Store refresh token in redis to track active sessions
      authUsersKv.put(String(user.id), user)

      cookies.set({
        ...refreshTokenOptions,
        value: refreshToken,
        expires: Date.now() + 7 * oneDay_ms,
      })

      return {
        accessToken,
      };
    } catch (error) {
      console.log(error);
      if (error instanceof TRPCError) throw error

      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Something went wrong",
      });
    }
  }

  public async refreshToken(): Promise<defs.auth.TAccess> {
    const { authUsersKv, cookies } = this.ctx;
    const refreshToken = await cookies.get('refreshToken');
    if (!refreshToken) throw getTrpcError('Missing refreshToken')
    try {
      const userId = AuthService.verifyRefreshToken(refreshToken.value);
      if (!userId) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid refresh token",
        });
      }
      const validSession = await authUsersKv.get(userId)
      if (!validSession) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid refresh token",
        })
      }

      const accessToken = JWT.createAccessToken(parseInt(userId));
      const nextRefreshToken = JWT.createRefreshToken(parseInt(userId));
  
      cookies.set({
        ...refreshTokenOptions,
        value: nextRefreshToken,
        expires: Date.now() + 7 * oneDay_ms,
      })
  
      return { accessToken };

    } catch (error) {
      throw getTrpcError(error)
    }
  }

  public async logout(): Promise<TGeneralSuccesResponse> {
    assertProtectedProcedure(this.ctx);
    const { cookies, user, authUsersKv } = this.ctx

    try {
      authUsersKv.drop(String(user.id))
      cookies.set({
        ...refreshTokenOptions,
        value: '',
        expires: Date.now() - 1000,
      })

      return { success: true };
    } catch (error) {
      throw getTrpcError(error)
    }
  }

  public async logoutAll(): Promise<TGeneralSuccesResponse> {
    return { success: false }
  }

  public async logoutOthers(): Promise<TGeneralSuccesResponse> {
    return { success: false }
  }
}