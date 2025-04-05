import 'server-only'; // <-- ensure this file cannot be imported from the client

import { dehydrate } from '@tanstack/query-core';
import { HydrationBoundary } from '@tanstack/react-query';
import { createTRPCClient } from '@trpc/react-query';
import { createTRPCOptionsProxy, TRPCQueryOptions } from '@trpc/tanstack-react-query';
import { getQueryClient } from './query-client';
import { AppRouter } from '@repo/rpc';
import { getSharedTRPCClientOptions } from './trpc-options';
// IMPORTANT: Create a stable getter for the query client that
//            will return the same client during the same request.

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: createTRPCClient(getSharedTRPCClientOptions()),
  queryClient: getQueryClient,
});

export function HydrateClient(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  const state = dehydrate(queryClient)
  return (
    <HydrationBoundary state={state}>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {props.children}
    </HydrationBoundary>
  );
}

export async function prefetch<T extends ReturnType<TRPCQueryOptions<any>>>(
  queryOptions: T,
) {
  const queryClient = getQueryClient();
  if (queryOptions.queryKey[1]?.type === 'infinite') {
    void queryClient.prefetchInfiniteQuery(queryOptions as any);
  } else {
    void queryClient.prefetchQuery(queryOptions);
  }
}
