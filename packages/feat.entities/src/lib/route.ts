import { health, publicProcedure, router, zQueryRequest } from "@repo/rpc.core";
import { collections } from "@repo/defs";
import CollectionsController from "./controller";
import { z } from "zod";

export const entitiesRoute = router({
  health,
	get: publicProcedure
		.input(z.number())
		.output(collections.zSelectSchema)
		.query(({ ctx, input }) => new CollectionsController(ctx).read(input)),
		// bySlug: health,
	find: publicProcedure
		.input(zQueryRequest())
		.output(z.array(collections.zSelectSchema))
		.query(({ ctx, input }) => new CollectionsController(ctx).list(input)),
	create: publicProcedure
		.input(collections.zInsertSchema)
		.output(collections.zSelectSchema)
		.mutation(({ ctx, input }) => new CollectionsController(ctx).create(input)),
})