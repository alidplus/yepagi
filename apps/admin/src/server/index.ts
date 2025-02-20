import { z } from "zod";
import { db } from "./db";
import { publicProcedure, router } from "./trpc";
 
export const appRouter = router({
  userList: publicProcedure
    .query(async ({ ctx }) => {
      console.log('ctx', ctx);
      
      const users = await db.user.findMany();
      return users;
    }),
  userById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts;
      const user = await db.user.findById(input);
      return user;
    }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const user = await db.user.create(input);
      return user;
    }),
});
 
export type AppRouter = typeof appRouter;