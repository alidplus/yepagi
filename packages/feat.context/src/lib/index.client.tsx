'use client';
// ^-- to make sure we can mount the Provider from a server component

import { QueryClientProvider } from '@tanstack/react-query';
import { createTRPCClient } from '@trpc/client';
import type { AnyTRPCRouter } from '@trpc/server';
import { createTRPCContext } from '@trpc/tanstack-react-query';
import { getQueryClient } from './trpc/query-client';
import { getSharedTRPCClientOptions } from './trpc/trpc-options';
import { useState } from 'react';

export function TRPCContextFactory<T extends AnyTRPCRouter>() {
  const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<T>();
  function TRPCReactProvider(
    props: Readonly<{
      children: React.ReactNode;
      mock?: true
    }>,
  ) {
    const queryClient = getQueryClient(props.mock);
    const [trpcClient] = useState(() =>
      createTRPCClient<T>(getSharedTRPCClientOptions({ mock: props.mock })),
    );
    return (
      <QueryClientProvider client={queryClient}>
        <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
          {props.children}
        </TRPCProvider>
      </QueryClientProvider>
    );
  }
  return { TRPCReactProvider, useTRPC, useTRPCClient }
}

// export { setToken, getToken, refreshToken, accessTokenStore } from './trpc/stores'