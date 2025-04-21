import { RequestCookieStore, fetchRequestHandler } from '@repo/rpc.core';
import { NextRequest } from 'next/server';
import { demoRouter } from '@/trpc/router';
import { getRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from 'drizzle-orm/d1';
// import { drizzle } from 'drizzle-orm/pg-proxy';

export const runtime = 'edge'

async function handler(req: NextRequest) {
  const env = getRequestContext().env;

  return fetchRequestHandler({
    endpoint: '/trpc',
    req,
    router: demoRouter,
    createContext () {
      return {
        transport: '',
        headers: req.headers,
        cookies: new RequestCookieStore(req),
        db: drizzle(env.DB)
      }
    }
  });
}

export { handler as GET, handler as POST };