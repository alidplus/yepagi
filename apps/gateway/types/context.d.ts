import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { DrizzleD1Database } from "drizzle-orm/d1";
export declare const createContext: (opts: CreateNextContextOptions) => Promise<{}>;
export type Context = Awaited<ReturnType<typeof createContext>> & {
    db: DrizzleD1Database<TSchema> & {
        $client: D1Database;
    };
    transport: string;
    user?: {
        id: string;
        isAdmin: boolean;
    };
};
