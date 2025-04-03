"use client";

import LiveAppContext from "@/AppContext/LiveAppContext";
import { getQueryClient } from "@/query";
import { getTRcpClient } from "@/trpc";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTRPCContext } from "@trpc/tanstack-react-query";
import { PropsWithChildren, useState } from "react";
import type { AppRouter } from "rpc-gateway";

export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<AppRouter>();

export function Providers({
  children,
  mock,
}: PropsWithChildren<{ mock?: true }>) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() => getTRcpClient(mock));
  // console.log({ queryClient, trpcClient, mock }, "on llllllll");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        <LiveAppContext>
          {children}
        </LiveAppContext>
      </TRPCProvider>
    </QueryClientProvider>
  );
}
