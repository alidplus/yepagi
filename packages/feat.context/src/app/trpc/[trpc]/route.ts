import { demoRouter } from '@/app/server/router';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { RequestCookieStore } from '@repo/rpc.core';
import { NextRequest } from 'next/server';

async function handler(req: NextRequest) {
  return fetchRequestHandler({
    endpoint: '/trpc',
    req,
    router: demoRouter,
    createContext () {
      return {
        transport: '',
        headers: req.headers,
        cookies: new RequestCookieStore(req),
        db: {} as any
      }
    }
  });
}

export { handler as GET, handler as POST };