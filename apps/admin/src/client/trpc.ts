import { isServer } from '@tanstack/react-query';
import { createTRPCClient, httpLink, TRPCClient } from '@trpc/client';
import SuperJSON from 'superjson';
import { AppRouter } from 'rpc-gateway';

export function makeTRpcClient() {
  return createTRPCClient<AppRouter>({
    links: [
      httpLink({
        url: `${process.env.NEXT_PUBLIC_API_HOST ?? process.env.API_HOST ?? ''}/trpc`,
        transformer: SuperJSON
      }),
    ],
  })
}

let tRpcClient: TRPCClient<AppRouter> | undefined = undefined

export function getTRcpClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeTRpcClient()
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!tRpcClient) tRpcClient = makeTRpcClient()
    return tRpcClient
  }
}

// export function getPrefetchKit() {
//   const queryClient = getQueryClient()
//   const trpcClient = getTRcpClient()
//   const trpc = createTRPCOptionsProxy<AppRouter>({
//     client: trpcClient,
//     queryClient,
//   });

//   return { queryClient, trpcClient, trpc }
// }
