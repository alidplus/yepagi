import 'server-only'; // <-- ensure this file cannot be imported from the client

import { dehydrate } from '@tanstack/query-core';
import { HydrationBoundary } from '@tanstack/react-query';
import { createTRPCClient } from '@trpc/react-query';
import { createTRPCOptionsProxy, ResolverDef, TRPCInfiniteQueryOptions } from '@trpc/tanstack-react-query';
import { getQueryClient } from './query-client';
import type { AppRouter } from '@repo/rpc';
import { getSharedTRPCClientOptions } from './trpc-options';

export const queryClient = getQueryClient();

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: createTRPCClient(getSharedTRPCClientOptions()),
  queryClient,
});

export function HydrateClient(props: { children: React.ReactNode }) {
  const state = dehydrate(queryClient)
  return (
    <HydrationBoundary state={state}>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {props.children}
    </HydrationBoundary>
  );
}

export async function prefetch<T extends ReturnType<TRPCInfiniteQueryOptions<ResolverDef>>>(
  queryOptions: T,
) {
  if (queryOptions.queryKey[1]?.type === 'infinite') {
    void queryClient.prefetchInfiniteQuery(queryOptions);
  } else {
    void queryClient.prefetchQuery(queryOptions);
  }
}
