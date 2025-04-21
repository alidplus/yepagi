import { superjson } from '@repo/utils/superjson';
import {
  defaultShouldDehydrateQuery,
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
        shouldDehydrateQuery: (query) => {
          const shouldDehydrate = defaultShouldDehydrateQuery(query),
          isPending = query.state.status === 'pending'
          
          return shouldDehydrate || isPending
        }
      },
      hydrate: {
        deserializeData: superjson.deserialize,
      },
    },
  });
}

let qc: QueryClient | undefined;

export function getQueryClient(mock?: true) {
  if (qc) return qc
  qc = makeQueryClient(mock);
  return qc
}