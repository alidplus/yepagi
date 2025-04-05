import { initTRPC, TRPCError } from '@trpc/server';
import type { Context, ProtectedContext } from './context';
import { superjson } from '@repo/utils';

export interface MyMeta {
	authRequired: boolean;
}

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().meta<MyMeta>().create({
	transformer: superjson,
});

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;

// Middleware to check if user is authenticated
const isAuthenticated = t.middleware(({ ctx, next }) => {
	if (!ctx.user) {
		throw new TRPCError({
			code: 'UNAUTHORIZED',
			message: 'You must be logged in to access this resource',
		});
	}

	return next({ ctx });
});

// Using the middleware, create a protected procedure
export const protectedProcedure = publicProcedure.use<ProtectedContext>(isAuthenticated);
