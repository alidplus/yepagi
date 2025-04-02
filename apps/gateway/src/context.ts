import * as defs from "@repo/defs";
import { type WithRequiredProperty } from "@repo/utils";
import { RequestCookieStore } from "@worker-tools/request-cookie-store";
import { drizzle } from "drizzle-orm/d1";
import JWT from "./auth/jwt";
import { KvStore } from "./utils/kv-store";

export const createWorkerContext = async (env: CloudflareEnv, req: Request) => {
  const db = drizzle(env.DB);
  const authUsersKv = new KvStore<defs.users.TSelect>(
    'auth_users',
    env.NS, 
    {
      expirationTtl: 7 * 24 * 3600000 // 7 days needed
    }
  );
  const cookies = new RequestCookieStore(req);

  try {
    const accessToken = await cookies.get("accessToken");
    if (!accessToken) throw '';
  
    const userId = JWT.verifyAccessToken(accessToken.value);
    if (!userId) throw '';
  
    const user = await authUsersKv.get(userId);
    if (!user) throw '';
  
    return {
      db,
      user,
      cookies,
      authUsersKv
    };
  } catch {
    return {
      db,
      cookies,
      authUsersKv
    };
  }

};
 
export type Context = Awaited<ReturnType<typeof createWorkerContext>> & {
  transport: string;
  isMock?: boolean;
}
export type ProtectedContext = WithRequiredProperty<Context, 'user'>
export function assertProtectedProcedure (ctx: Context): asserts ctx is ProtectedContext {
  if (!('user' in ctx)) throw 'this controller needs to use "protectedProcedure"'
}