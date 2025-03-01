import 'server-only'; // <-- ensure this file cannot be imported from the client

import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import { cache } from 'react';
import { makeQueryClient } from './query';
import { makeTRpcClient } from './trpc';

export const getQueryClient = cache(makeQueryClient);

export const trpc = createTRPCOptionsProxy({
  client: makeTRpcClient(),
  queryClient: getQueryClient,
});