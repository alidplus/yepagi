import { router } from "./trpc";
import { authRouter } from "./auth";
import { tenantRouter } from "./tenats";
import { userRouter } from "./users";
export { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const appRouter = router({
  user: userRouter,
  auth: authRouter,
  tenant: tenantRouter
});
 
export type AppRouter = typeof appRouter;