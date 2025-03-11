import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { DrizzleD1Database } from "drizzle-orm/d1";
import type { KvStore } from "./utils/kv-store";
import * as defs from "@repo/defs";
export declare const createContext: (opts: CreateNextContextOptions) => Promise<{}>;
export type Context = Awaited<ReturnType<typeof createContext>> & {
    db: DrizzleD1Database & {
        $client: D1Database;
    };
    usersCache: KvStore<defs.users.TSelect>;
    transport: string;
    user?: {
        id: string;
        isAdmin: boolean;
    };
};
