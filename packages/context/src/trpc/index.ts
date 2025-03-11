import { isServer } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink, TRPCClient } from "@trpc/client";
import { type AppRouter } from "rpc-gateway";
import SuperJSON from "superjson";

export function makeTRpcClient() {
  return createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: `${process.env.NEXT_PUBLIC_API_HOST ?? process.env.API_HOST ?? ""}/trpc`,
        transformer: SuperJSON,
      }),
    ],
  });
}

let tRpcClient: TRPCClient<AppRouter> | undefined = undefined;

export function getTRcpClient(mock?: true) {
  if (mock) {
    return 
  }
  if (isServer) {
    // Server: always make a new query client
    return makeTRpcClient();
  }

  // Browser: make a new query client if we don't already have one
  // This is very important, so we don't re-make a new client if React
  // suspends during the initial render. This may not be needed if we
  // have a suspense boundary BELOW the creation of the query client
  if (!tRpcClient) tRpcClient = makeTRpcClient();
  return tRpcClient;
}
