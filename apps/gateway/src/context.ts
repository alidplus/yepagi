import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { DrizzleD1Database } from "drizzle-orm/d1";

export const createContext = async (opts: CreateNextContextOptions) => {
  // const session = await getSession({ req: opts.req });
 
  return {
    // session,
  };
};
 
export type Context = Awaited<ReturnType<typeof createContext>> & {
  // user is nullable
  db: DrizzleD1Database<TSchema> & {
      $client: D1Database;
  }
  transport: string;
  user?: {
    id: string;
    isAdmin: boolean
  };
}