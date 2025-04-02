import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { getTrpcError } from "../utils/errors";

export default abstract class JWT {
  static createAccessToken(userId: number) {
    const accessToken = jwt.sign({ sub: userId }, process.env.ACCESS_TOKEN_SECRET!, {
      expiresIn: "1m",
    });

    return accessToken;
  }

  static createRefreshToken(userId: number) {
    const refreshToken = jwt.sign({ sub: userId }, process.env.REFRESH_TOKEN_SECRET!, {
      expiresIn: "7d",
    });

    return refreshToken;
  }

  static verifyAccessToken(accessToken: string) {
    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!) as {
        sub: string;
      };

      return decoded.sub;
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  static verifyRefreshToken(refreshToken: string) {
    try {
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!) as {
        sub: string;
      };

      return decoded.sub;
    } catch (error) {
      console.log(error);

      return null;
    }
  }
}