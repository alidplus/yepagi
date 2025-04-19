import { router } from '@repo/rpc.core';
import { authRouter } from './auth';
import { tenantRouter } from './tenats';
import { userRouter } from './users';
import { entitiesRouter } from './entities';

export const appRouter = router({
	user: userRouter,
	auth: authRouter,
	tenant: tenantRouter,
	entities: entitiesRouter,
});

export type AppRouter = typeof appRouter;
