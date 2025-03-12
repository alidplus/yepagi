import { isServer } from "@tanstack/react-query";
import { createTRPCClient, httpLink, TRPCClient } from "@trpc/client";
import { type AppRouter } from "rpc-gateway";
import SuperJSON from "superjson";

const url = `${process.env.NEXT_PUBLIC_API_HOST ?? process.env.API_HOST ?? ""}/trpc`;
const mockUrl = "http://localhost:3030/trpc";

export function makeTRpcClient(mock?: true) {
  if (mock) {
    console.log("mock");
  }

  const trpcC = createTRPCClient<AppRouter>({
    links: [
      mock
        ? httpLink({
            url: mockUrl,
            transformer: SuperJSON,
            headers: {
              "X-Mock-Api-Call": "mock",
            },
          })
        : httpLink({
            url,
            transformer: SuperJSON,
          }),
    ],
  });

  console.log(
    "trpcC",
    trpcC,
    "API_HOST:",
    process.env.API_HOST,
    "NEXT_PUBLIC_API_HOST:",
    process.env.NEXT_PUBLIC_API_HOST,
  );

  return trpcC;
}

let tRpcClient: TRPCClient<AppRouter> | undefined = undefined;

export function getTRcpClient(mock?: true) {
  if (isServer) {
    // Server: always make a new query client
    return makeTRpcClient(mock);
  }

  // Browser: make a new query client if we don't already have one
  // This is very important, so we don't re-make a new client if React
  // suspends during the initial render. This may not be needed if we
  // have a suspense boundary BELOW the creation of the query client
  if (!tRpcClient) tRpcClient = makeTRpcClient(mock);
  return tRpcClient;
}
