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

import { appRouter, fetchRequestHandler, createWorkerContext } from "@repo/rpc";

type T = ExportedHandler<CloudflareEnv>


class Worker implements T {
  constructor() {
    console.log('.................Worker', {
      ALL: process.env, SEC: process.env.DEEP_ENV_SECRET, ENV: process.env.NODE_ENV
    });
  }
  tail() {
    console.log('.................tail');
  }
  trace() {
    console.log('.................trace');
  }
  scheduled() {
    console.log('.................scheduled');
  }
  test() {
    console.log('.................test');
  }
  email() {
    console.log('.................email');
  }
  queue() {
    console.log('.................queue');
  }
  fetch: T['fetch'] = async (request, env, ctx) => {
    const isMockCall = !!request.headers.get('x-mock-api-call')
    process.env.ACCESS_TOKEN_SECRET = env.ACCESS_TOKEN_SECRET
    process.env.REFRESH_TOKEN_SECRET = env.REFRESH_TOKEN_SECRET
    
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
    };

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

    async function handleRequest() {
      const ctxt = await createWorkerContext(env, request)
      return fetchRequestHandler({
        endpoint: PROXY_ENDPOINT,
        req: request,
        router: appRouter,
        createContext: () => ({
          transport: 'worker',
          isMock: isMockCall,
          ...ctxt,
        }),
      })
      .then((res) => {
        ctxt.cookies.headers.forEach(([name, value]) => {
          res.headers.append(name, value)
        })
        return res
      });
    }

    async function handleOptions() {
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
        return handleOptions();
      } else if (
        request.method === "GET" ||
        request.method === "HEAD" ||
        request.method === "POST"
      ) {
        // Handle requests to the API server
        if (isMockCall) {
          const res = await handleRequest();
          res.headers.append('Access-Control-Allow-Origin', '*')
          res.headers.append('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS')
          res.headers.append('Access-Control-Max-Age', '86400')
  
          return res
        }
        return handleRequest()
      } else {
        return new Response(null, {
          status: 405,
          statusText: "Method Not Allowed",
        });
      }
    } else {
      return rawHtmlResponse(DEMO_PAGE);
    }
  }
}

const w = new Worker()
export default w
