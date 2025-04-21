import 'server-only'; // <-- ensure this file cannot be imported from the client

import { dehydrate } from '@tanstack/query-core';
import { HydrationBoundary } from '@tanstack/react-query';
import { createTRPCClient } from '@trpc/react-query';
import { createTRPCOptionsProxy, ResolverDef, TRPCInfiniteQueryOptions, TRPCQueryOptions } from '@trpc/tanstack-react-query';
import { getQueryClient } from './trpc/query-client';
import { getSharedTRPCClientOptions } from './trpc/trpc-options';
import { PropsWithChildren } from 'react';
import type { AnyTRPCRouter } from '@trpc/server';

export const queryClient = getQueryClient();

export function HydrateClient(props: PropsWithChildren<{ debug?: true }>) {
  const state = dehydrate(queryClient)
  return (
    <HydrationBoundary state={state}>
      {props.debug ? <pre>{JSON.stringify(state, null, 2)}</pre> : null}
      {props.children}
    </HydrationBoundary>
  );
}

type DirQOpt = ReturnType<TRPCQueryOptions<ResolverDef>>
type InfQOpt = ReturnType<TRPCInfiniteQueryOptions<ResolverDef>>

function isInfiniteQueryOption(qop: DirQOpt | InfQOpt): qop is InfQOpt {
  return qop.queryKey[1]?.type === 'infinite'
}

export async function prefetch(
  qop: DirQOpt | InfQOpt
) {
  if (isInfiniteQueryOption(qop)) {
    await queryClient.prefetchInfiniteQuery(qop);
  } else {
    await queryClient.prefetchQuery(qop);
  }
}

export function TRPCProxyFactory<T extends AnyTRPCRouter>(mock?: true) {
  const trpc = createTRPCOptionsProxy<T>({
    client: createTRPCClient(getSharedTRPCClientOptions()),
    queryClient: getQueryClient(mock),
  });

  return trpc
}

