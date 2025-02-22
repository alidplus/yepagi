import 'server-only'; // <-- ensure this file cannot be imported from the client

import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import { cache } from 'react';
// import { createTRPCContext } from './init';
import { makeQueryClient } from './query';
import { appRouter } from '@repo/server';
// IMPORTANT: Create a stable getter for the query client that
//            will return the same client during the same request.
export const getQueryClient = cache(makeQueryClient);

export const trpc = createTRPCOptionsProxy({
  ctx: { transport: 'server-query' },
  router: appRouter,
  queryClient: getQueryClient,
});

export const caller = appRouter.createCaller({ transport: 'caller' });