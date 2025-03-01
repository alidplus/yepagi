import { router } from "../trpc";
import { tenantRouter } from "./tenant";
import { userRouter } from "./user";
export { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const appRouter = router({
  user: userRouter,
  tenant: tenantRouter
});
 
export type AppRouter = typeof appRouter;