import { superjson } from '@repo/utils/superjson';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import type { Context } from './context';

export interface Meta {
	authRequired: boolean;
}

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().meta<Meta>().create({
	transformer: superjson,
});
export const publicProcedure = t.procedure;

export const health = publicProcedure.output(z.object({ health: z.literal('ok') })).query(() => {
	return {
		health: 'ok',
	};
});

// Middleware to check if user is authenticated
// const isAuthenticated = t.middleware(({ ctx, next }) => {
// 	if (!ctx.user) {
// 		throw new TRPCError({
// 			code: 'UNAUTHORIZED',
// 			message: 'You must be logged in to access this resource',
// 		});
// 	}

// 	return next({ ctx });
// });

// Using the middleware, create a protected procedure
export const protectedProcedure = publicProcedure; //.use<ProtectedContext>(isAuthenticated);

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
