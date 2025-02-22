"use client";
import { getQueryClient } from '@/client/query';
import { getTRcpClient } from '@/client/trpc';
import { AppRouter } from '@repo/server';
import { QueryClientProvider } from '@tanstack/react-query';
import { createTRPCContext } from '@trpc/tanstack-react-query';
import { PropsWithChildren, useState } from 'react';
 
export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();

export function Providers({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(getTRcpClient);
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {children}
      </TRPCProvider>
    </QueryClientProvider>
  );
}