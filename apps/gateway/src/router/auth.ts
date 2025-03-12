import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import * as def from "@repo/defs";
export { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const authRouter = router({
  signin: publicProcedure
    .input(def.auth.zSigninSchema)
    .output(def.auth.zAccessSchema)
    .mutation(async ({ input }) => {
      console.log('unnnnnn', input);
      
      return {
        accessToken: 'some token'
      }
    }),
})