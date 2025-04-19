import { health, publicProcedure, router } from "@repo/rpc.core";
import { collections } from "@repo/defs";
import CollectionsController from "./controller";
import { z } from "zod";

export const entitiesRoute = router({
  health,
	create: publicProcedure
		.input(collections.zInsertSchema)
		.output(collections.zSelectSchema)
		.mutation(({ ctx, input }) => new CollectionsController(ctx).create(input)),
  list: publicProcedure
    .output(z.array(collections.zSelectSchema))
    .query(() => []),
})