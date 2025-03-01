import { z } from "zod";
import { db } from "./db";
import { publicProcedure, router } from "./trpc";
import { zUserInsertSchema } from "./db/schema";
export { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const appRouter = router({
  user: router({
    list: publicProcedure
      .query(async ({ ctx }) => {
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
      .input(zUserInsertSchema)
      .mutation(async (opts) => {
        const { input } = opts;
        const user = await db.user.create(input);
        return user;
      }),
  })
});
 
export type AppRouter = typeof appRouter;