import { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = async (opts: CreateNextContextOptions) => {
  // const session = await getSession({ req: opts.req });
 
  return {
    // session,
  };
};
 
export type Context = Awaited<ReturnType<typeof createContext>> & {
  // user is nullable
  transport: string;
  user?: {
    id: string;
    isAdmin: boolean
  };
}