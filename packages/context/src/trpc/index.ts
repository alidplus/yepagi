import { accessTokenStore } from "@/stores";
import { isServer } from "@tanstack/react-query";
import { createTRPCClient, httpLink, TRPCClient } from "@trpc/client";
import { type AppRouter } from "rpc-gateway";
import SuperJSON from "superjson";
import { handleTrpcUnauthError } from "./errors";
// import { handleTrpcUnauthError } from "./errors";

const url = `${process.env.NEXT_PUBLIC_API_HOST ?? process.env.API_HOST ?? ""}/trpc`;
const mockUrl = "http://localhost:3030/trpc";



const routesWithAllowedCredentials = [
  '/trpc/auth.signin',
  '/trpc/auth.refreshToken',
  '/trpc/auth.logout',
]

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
            headers() {
              let authHeaders: { Authorization?: string } = {};
              const token = accessTokenStore.state
              if (token) {
                authHeaders = {
                  Authorization: `Bearer ${token}`,
                };
              }
              return authHeaders;
            },
            fetch: async (url, options): Promise<Response> => {
              const res = await fetch(url, {
                ...options,
                credentials: routesWithAllowedCredentials.includes(url.toString()) ? 'include' : 'omit',
              });

              console.log('ffffffffffff', res.status);
              
  
              // if the response is a multi-status, we need to check all the responses
              // if (res.status === MULTI_STATUS) {
              //   const responses = await res.json();
              //   // if any of the responses is an unauthorized
              //   if (responses.some((r) => r.error.data.code === 'UNAUTHORIZED')) {
              //     // then try to rerun all the requests after auth (some of them might not be UNAUTHORIZED, but not the end of the world)
              //     return await handleTrpcUnauthError(res, url, options);
              //   }
              // }
  
              // in this case all the batched requests have the same code, the the whole batch can be handled
              if (res.status === 401) {
                return await handleTrpcUnauthError(res, url, options);
              }
  
              // if nothing happens, carry on with the procedure
              return res;
            },
          }),
    ],
  });

  // console.log(
  //   "trpcC",
  //   trpcC,
  //   "API_HOST:",
  //   process.env.API_HOST,
  //   "NEXT_PUBLIC_API_HOST:",
  //   process.env.NEXT_PUBLIC_API_HOST,
  // );

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
