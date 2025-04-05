'use client';
// ^-- to make sure we can mount the Provider from a server component

import { QueryClientProvider } from '@tanstack/react-query';
import { createTRPCClient } from '@trpc/client';
import { createTRPCContext } from '@trpc/tanstack-react-query';
import { useState } from 'react';
import { getQueryClient } from './query-client';
import { AppRouter } from '@repo/rpc';
import { getSharedTRPCClientOptions } from './trpc-options';

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();

export function TRPCReactProvider(
  props: Readonly<{
    children: React.ReactNode;
    mock?: true
  }>,
) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient(props.mock);
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>(getSharedTRPCClientOptions(props.mock)),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {props.children}
      </TRPCProvider>
    </QueryClientProvider>
  );
}