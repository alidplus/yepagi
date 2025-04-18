import * as def from '@repo/defs';
import { protectedProcedure, router } from '../trpc';
import CollectionsController from './controller';

export const collectionRouter = router({
	create: protectedProcedure
		.input(def.collections.zInsertSchema)
		.output(def.collections.zSelectSchema)
		.mutation(({ ctx, input }) => new CollectionsController(ctx).create(input)),
});
