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
  signup: publicProcedure
    .input(def.auth.zSignupSchema)
    // .output(def.users.zSelectSchema.optional())
    .mutation(async ({ input, ctx }) => {
      return ctx.db.insert(def.users.table).values({
        email: input.email,
        username: input.name,
        passwordHash: input.password,
      });
    }),
})