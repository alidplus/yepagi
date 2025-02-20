import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server';

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({ caller: 'client-query' })
  });
}
export { handler as GET, handler as POST };