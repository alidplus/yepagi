import { initTRPC, TRPCError } from '@trpc/server';
import SuperJSON from 'superjson';
import type { Context } from './context';

export interface MyMeta {
  authRequired: boolean;
}

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().meta<MyMeta>().create({
  transformer: SuperJSON,
})

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure
 
export const adminProcedure = publicProcedure.use(async (opts) => {
  const { ctx } = opts;
  if (!ctx.user?.isAdmin) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});