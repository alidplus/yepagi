import { health, router } from "@repo/rpc.core";
import { entitiesRoute } from "@/lib/route";

export const demoRouter = router({
  health,
  enentities: entitiesRoute
});

export type DemoRouter = typeof demoRouter