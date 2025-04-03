import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import * as def from '@repo/defs';

export const tenantRouter = router({
	list: publicProcedure.output(z.array(def.users.zSelectSchema)).query(async ({ ctx }) => {
		const users = await ctx.db.select().from(def.users.table).all();
		return users;
	}),
});
