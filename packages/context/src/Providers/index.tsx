import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import LiveAppContext from "@/AppContext/LiveAppContext";
import { getQueryClient } from "@/query";
import { getTRcpClient } from "@/trpc";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTRPCContext } from "@trpc/tanstack-react-query";
import { PropsWithChildren, useState } from "react";
import type { AppRouter } from "@repo/rpc";

export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();

export async function Providers({
  children,
  mock,
}: PropsWithChildren<{ mock?: true }>) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() => getTRcpClient(mock));
  // console.log({ queryClient, trpcClient, mock }, "on llllllll");
  
  // await queryClient.prefetchQuery(trpc.auth.whoami.queryOptions())
  const state = dehydrate(queryClient)
  
  // console.log('??????', trpc, state);
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        <HydrationBoundary state={state}>
          <LiveAppContext>
            {children}
          </LiveAppContext>
        </HydrationBoundary>
      </TRPCProvider>
    </QueryClientProvider>
  );
}
