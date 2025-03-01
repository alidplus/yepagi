import { CreateNextContextOptions } from "@trpc/server/adapters/next";
export declare const createContext: (opts: CreateNextContextOptions) => Promise<{}>;
export type Context = Awaited<ReturnType<typeof createContext>> & {
    transport: string;
    user?: {
        id: string;
        isAdmin: boolean;
    };
};
