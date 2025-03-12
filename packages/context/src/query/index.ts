import {
  defaultShouldDehydrateQuery,
  isServer,
  QueryClient,
} from "@tanstack/react-query";

export function makeQueryClient(mock?: true) {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: mock ? Infinity : 60 * 1000,
      },
      dehydrate: {
        // serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        // deserializeData: superjson.deserialize,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient(mock?: true) {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient(mock);
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient(mock);
    return browserQueryClient;
  }
}
