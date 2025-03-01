import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import * as def from "@repo/defs";
export { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const tenantRouter = router({
  list: publicProcedure
    .output( z.array(def.user.zSelectSchema) )
    .query(async ({ ctx }) => {
      const users = await ctx.db.select().from(def.user.table).all()
      return users;
    }),
})