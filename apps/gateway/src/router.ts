import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import * as def from "@repo/defs";
import { eq } from "drizzle-orm";
export { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const appRouter = router({
  user: router({
    list: publicProcedure
      .output( z.array(def.user.zSelectSchema) )
      .query(async ({ ctx }) => {
        const users = await ctx.db.select().from(def.user.table).all()
        return users;
      }),
    byId: publicProcedure
      .input(z.number())
      .query(async ({ input, ctx }) => {
        const user = await ctx.db.select().from(def.user.table).where(eq(def.user.table.id, input))
        return user;
      }),
    remoevById: publicProcedure
      .input(z.number())
      .mutation(async ({ input, ctx }) => {
        const user = await ctx.db.delete(def.user.table).where(eq(def.user.table.id, input))
        return user;
      }),
    create: publicProcedure
      .input(def.user.zInsertSchema)
      .mutation(async ({ ctx, input }) => {
        return ctx.db.insert(def.user.table).values(input);
      }),
  })
});
 
export type AppRouter = typeof appRouter;