export { fetchRequestHandler } from '@trpc/server/adapters/fetch';
export declare const appRouter: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
    ctx: {
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
                id: string;
                name: string;
                bd: Date;
            }[];
        }>;
        userById: import("@trpc/server").TRPCQueryProcedure<{
            input: string;
            output: {
                id: string;
                name: string;
                bd: Date;
            } | undefined;
        }>;
        userCreate: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                age: number;
                email: string;
                id?: number | undefined;
            };
            output: {
                name: string;
                id: string;
            };
        }>;
    }>>;
}>>;
export type AppRouter = typeof appRouter;
