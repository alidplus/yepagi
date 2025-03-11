"use client";

import { getQueryClient } from "@/query";
import { getTRcpClient } from "@/trpc";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTRPCContext } from "@trpc/tanstack-react-query";
import { PropsWithChildren, useState } from "react";
import type { AppRouter } from "rpc-gateway";

export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<AppRouter>();

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
