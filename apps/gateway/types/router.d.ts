export { fetchRequestHandler } from '@trpc/server/adapters/fetch';
export declare const appRouter: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
    ctx: {
        db: import("drizzle-orm/d1").DrizzleD1Database<TSchema> & {
            $client: D1Database;
        };
        transport: string;
        user?: {
            id: string;
            isAdmin: boolean;
        };
    };
    meta: import("./trpc").MyMeta;
    errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    transformer: true;
}, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<{
    user: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
        ctx: {
            db: import("drizzle-orm/d1").DrizzleD1Database<TSchema> & {
                $client: D1Database;
            };
            transport: string;
            user?: {
                id: string;
                isAdmin: boolean;
            };
        };
        meta: import("./trpc").MyMeta;
        errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        transformer: true;
    }, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<{
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                id: number;
                name: string;
                age: number;
                email: string;
            }[];
        }>;
        byId: import("@trpc/server").TRPCQueryProcedure<{
            input: number;
            output: {
                id: number;
                name: string;
                age: number;
                email: string;
            }[];
        }>;
        remoevById: import("@trpc/server").TRPCMutationProcedure<{
            input: number;
            output: D1Result<unknown>;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                age: number;
                email: string;
                id?: number | undefined;
            };
            output: D1Result<unknown>;
        }>;
    }>>;
}>>;
export type AppRouter = typeof appRouter;
