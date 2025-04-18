import { router } from './trpc';
import { authRouter } from './auth';
import { tenantRouter } from './tenats';
import { userRouter } from './users';
import { collectionRouter } from './collections';
export { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const appRouter = router({
	user: userRouter,
	auth: authRouter,
	tenant: tenantRouter,
	collections: collectionRouter,
});

export type AppRouter = typeof appRouter;
