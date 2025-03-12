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
  async fetch(request, env, ctx): Promise<Response> {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
    };

    // The URL for the remote third party API you want to fetch from
    // but does not implement CORS
    const API_URL = "https://examples.cloudflareworkers.com/demos/demoapi";

    // The endpoint you want the CORS reverse proxy to be on
    const PROXY_ENDPOINT = '/trpc';

    // The rest of this snippet for the demo page
    function rawHtmlResponse(html: string) {
      return new Response(html, {
        headers: {
          "content-type": "text/html;charset=UTF-8",
        },
      });
    }

    const DEMO_PAGE = `
      <!DOCTYPE html>
      <html>
      <body style="width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;margin:0;padding:0">
        <h1>API Gateway</h1>
      </body>
      </html>
    `;

    async function handleRequest(_req: Request, _env: any) {
      const db = drizzle(_env.DB);
      const usersCache = new KvStore<defs.users.TSelect>('ns', _env.NS);
      
      return fetchRequestHandler({
        endpoint: PROXY_ENDPOINT,
        req: _req,
        router: appRouter,
        createContext: () => ({
          transport: 'rpc-gateway',
          db,
          usersCache
        }),
      });
    }

    async function handleOptions(request: Request) {
      if (
        request.headers.get("Origin") !== null &&
        request.headers.get("Access-Control-Request-Method") !== null &&
        request.headers.get("Access-Control-Request-Headers") !== null
      ) {
        // Handle CORS preflight requests.
        return new Response(null, {
          headers: {
            ...corsHeaders,
            "Access-Control-Allow-Headers": request.headers.get(
              "Access-Control-Request-Headers",
            ) || '',
          },
        });
      } else {
        // Handle standard OPTIONS request.
        return new Response(null, {
          headers: {
            Allow: "GET, HEAD, POST, OPTIONS",
          },
        });
      }
    }

    const url = new URL(request.url);
    if (url.pathname.startsWith(PROXY_ENDPOINT)) {
      if (request.method === "OPTIONS") {
        // Handle CORS preflight requests
        return handleOptions(request);
      } else if (
        request.method === "GET" ||
        request.method === "HEAD" ||
        request.method === "POST"
      ) {
        // Handle requests to the API server
        const res = await handleRequest(request, env);
        res.headers.append('Access-Control-Allow-Origin', '*')
        res.headers.append('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS')
        res.headers.append('Access-Control-Max-Age', '86400')

        return res
      } else {
        return new Response(null, {
          status: 405,
          statusText: "Method Not Allowed",
        });
      }
    } else {
      return rawHtmlResponse(DEMO_PAGE);
    }
  },
} satisfies ExportedHandler;
