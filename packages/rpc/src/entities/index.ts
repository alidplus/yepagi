import * as def from '@repo/db.d1';
import { protectedProcedure, router } from '@repo/rpc.core';
import CollectionsController from './controller';

export const entitiesRouter = router({
	create: protectedProcedure
		.input(def.collections.zInsertSchema)
		.output(def.collections.zSelectSchema)
		.mutation(({ ctx, input }) => new CollectionsController(ctx).create(input)),
});
