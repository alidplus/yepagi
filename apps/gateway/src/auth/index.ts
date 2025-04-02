import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import * as def from "@repo/defs";
import AuthController from "./controller";
import UsersController from "../users/controller";
import { zGeneralSuccesResponse } from "../utils/schema";
export { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const authRouter = router({
  signin: publicProcedure
    .input(def.auth.zSigninSchema)
    .output(def.auth.zAccessSchema)
    .mutation(({ input, ctx }) => new AuthController(ctx).signin(input)),

  signup: publicProcedure
    .input(def.auth.zSignupSchema)
    .output(def.users.zSelectSchema)
    .mutation(({ ctx, input }) => new AuthController(ctx).signup(input)),

  refreshToken: publicProcedure
    .input(def.auth.zRefreshSchema)
    .output(zGeneralSuccesResponse)
    .mutation(({ input, ctx }) => new AuthController(ctx).refreshToken(input)),

  whoami: protectedProcedure
    .output(def.users.zSelectSchema)
    .query(({ input, ctx }) => ctx.user),

  logout: protectedProcedure
    .output(zGeneralSuccesResponse)
    .mutation(({ input, ctx }) => new AuthController(ctx).logout()),

  logoutAll: protectedProcedure
    .output(zGeneralSuccesResponse)
    .mutation(({ input, ctx }) => new AuthController(ctx).logoutAll()),

  logoutOthers: protectedProcedure
    .output(zGeneralSuccesResponse)
    .mutation(({ input, ctx }) => new AuthController(ctx).logoutOthers()),
})