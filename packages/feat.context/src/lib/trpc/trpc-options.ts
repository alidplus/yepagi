import { AppRouter } from "@repo/rpc";
import { superjson } from "@repo/utils/superjson";
import { CreateTRPCClientOptions, httpLink, HTTPLinkOptions } from "@trpc/react-query";
// import { accessTokenStore, refreshToken } from "./stores";
// import { handleTrpcUnauthError } from "./errors";
import { getUrl } from "./utils";
import type { AnyRouter } from '@trpc/server/unstable-core-do-not-import';

// const routesWithAllowedCredentials = [
//   '/trpc/auth.signin',
//   '/trpc/auth.refreshToken',
//   '/trpc/auth.logout',
// ]

interface ClientConfigs<TRouter extends AnyRouter = AnyRouter> extends Pick<HTTPLinkOptions<TRouter['_def']['_config']['$types']>, 'fetch'> {
  mock?: true
}

export function getSharedTRPCClientOptions<TRouter extends AnyRouter = AnyRouter>({ mock, ...config }: ClientConfigs<TRouter> = {}): CreateTRPCClientOptions<AppRouter> {
  return {
    links: [
      httpLink({
        ...config,
        transformer: superjson,
        url: getUrl(mock),
        // async headers() {
        //   let authHeaders: Record<string, string> = {};
        //   let accessToken = accessTokenStore.state
  
        //   if (!accessToken) {
        //     try {
        //       accessToken = await refreshToken(mock)
        //     } catch {}
        //   }
  
        //   if (accessToken) {
        //     authHeaders = {
        //       Authorization: `Bearer ${accessToken}`,
        //     };
        //   }
  
        //   if (mock) {
        //     authHeaders['X-Mock-Api-Call'] = 'mock'
        //   }
        //   console.log('authHeaders', authHeaders);
          
        //   return authHeaders;
        // },
        // fetch: async (url: RequestInfo | URL, options?: RequestInit): Promise<Response> => {
        //   const path = url.toString().split('?')[0]
          
        //   const res = await fetch(url, {
        //     ...options,
        //     credentials: routesWithAllowedCredentials.includes(path) ? 'include' : 'omit',
        //   });
  
        //   // TODO: if the response is a multi-status, we need to check all the responses
        //   // if (res.status === 207) {
        //   //   const responses = await res.json();
        //   //   // if any of the responses is an unauthorized
        //   //   if (responses.some((r) => r.error.data.code === 'UNAUTHORIZED')) {
        //   //     // then try to rerun all the requests after auth (some of them might not be UNAUTHORIZED, but not the end of the world)
        //   //     return await handleTrpcUnauthError(res, url, options);
        //   //   }
        //   // }
  
        //   // in this case all the batched requests have the same code, the the whole batch can be handled
        //   if (res.status === 401) {
        //     return await handleTrpcUnauthError(res, url, options);
        //   }
  
        //   // if nothing happens, carry on with the procedure
        //   return res;
        // },
      }),
    ],
  }
}