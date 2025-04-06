import { superjson } from '@repo/utils';
import {
  defaultShouldDehydrateQuery,
  isServer,
  QueryClient,
} from '@tanstack/react-query';

export function makeQueryClient(mock?: true) {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: mock ? Infinity : 60 * 1000,
      },
      dehydrate: {
        serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
      hydrate: {
        deserializeData: superjson.deserialize,
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