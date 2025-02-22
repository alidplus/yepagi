import { appRouter, fetchRequestHandler } from '@repo/server';

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({ transport: 'client-query' })
  });
}
export { handler as GET, handler as POST };