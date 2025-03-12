"use server";

import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import { cache } from 'react';
import { makeTRpcClient } from '.';
import { makeQueryClient } from '@/query';

export const getQueryClient = cache(makeQueryClient);

export const trpc = createTRPCOptionsProxy({
  client: makeTRpcClient(),
  queryClient: getQueryClient,
});