import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import * as def from "@repo/defs";
import { eq } from "drizzle-orm";
import HErr from 'http-errors'
export { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const userRouter = router({
  list: publicProcedure
    .output( z.array(def.users.zSelectSchema) )
    .query(async ({ ctx }) => {
      const users = await ctx.db.select().from(def.users.table).all()
      return users;
    }),
  byId: publicProcedure
    .input(z.number())
    .query(async ({ input, ctx }) => {
      let user = await ctx.usersCache.get(String(input))
      if (!user) {
        const find = await ctx.db.select().from(def.users.table).where(eq(def.users.table.id, input))
        if (find.length) user = find[0]
        if (user) await ctx.usersCache.put(String(input), user)
      }
      if (!user) throw new HErr.NotFound('user not foundeee')
      return user;
    }),
  remoevById: publicProcedure
    .input(z.number())
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.db.delete(def.users.table).where(eq(def.users.table.id, input))
      return user;
    }),
  create: publicProcedure
    .input(def.users.zInsertSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.insert(def.users.table).values(input);
    }),
})