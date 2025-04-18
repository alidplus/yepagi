import * as def from '@repo/defs';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import UsersController from './controller';
import { zQueryResponse } from '../utils/schema';

export const userRouter = router({
	list: publicProcedure
		.input(z.object({ c: z.number().optional() }))
		.output(zQueryResponse(z.array(z.number())))
		.query(async ({ ctx }) => {
			const users = await ctx.db.select().from(def.users.table).all();
			return {
				res: users.map((u) => u.id),
				attachments: users,
			};
		}),
	byId: publicProcedure
		.input(z.number())
		.output(def.users.zSelectSchema)
		.query(async ({ ctx, input }) => new UsersController(ctx).read(input)),

	remoevById: publicProcedure.input(z.number()).mutation(async ({ input, ctx }) => {
		const user = await ctx.db.delete(def.users.table).where(eq(def.users.table.id, input));
		return user;
	}),
	create: publicProcedure
		.input(def.users.zInsertSchema)
		.output(def.users.zSelectSchema)
		.mutation(({ ctx, input }) => new UsersController(ctx).create(input)),
});
