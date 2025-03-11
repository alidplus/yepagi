/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { appRouter, fetchRequestHandler } from "./router";
import { drizzle } from 'drizzle-orm/d1';
import { KvStore } from "./utils/kv-store";
import * as defs from "@repo/defs";

export default {
	async fetch(req, env, ctx): Promise<Response> {
    const db = drizzle(env.DB);
    const usersCache = new KvStore<defs.users.TSelect>('ns', env.NS);
    
    return fetchRequestHandler({
      endpoint: '/trpc',
      req,
      router: appRouter,
      createContext: () => ({
        transport: 'rpc-gateway',
        db,
        usersCache
      }),
    });
	},
} satisfies ExportedHandler<CloudflareEnv>;
