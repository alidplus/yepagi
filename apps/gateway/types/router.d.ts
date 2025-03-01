export { fetchRequestHandler } from '@trpc/server/adapters/fetch';
export declare const appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
        transport: string;
        user?: {
            id: string;
            isAdmin: boolean;
        };
    };
    meta: import("./trpc").MyMeta;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: typeof import("superjson").default;
}>, {
    userList: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: {
                transport: string;
                user?: {
                    id: string;
                    isAdmin: boolean;
                };
            };
            meta: import("./trpc").MyMeta;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: typeof import("superjson").default;
        }>;
        _ctx_out: {
            transport: string;
            user?: {
                id: string;
                isAdmin: boolean;
            };
        };
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: import("./trpc").MyMeta;
    }, {
        id: string;
        name: string;
        bd: Date;
    }[]>;
    userById: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: {
                transport: string;
                user?: {
                    id: string;
                    isAdmin: boolean;
                };
            };
            meta: import("./trpc").MyMeta;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: typeof import("superjson").default;
        }>;
        _meta: import("./trpc").MyMeta;
        _ctx_out: {
            transport: string;
            user?: {
                id: string;
                isAdmin: boolean;
            };
        };
        _input_in: string;
        _input_out: string;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        id: string;
        name: string;
        bd: Date;
    } | undefined>;
    userCreate: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: {
                transport: string;
                user?: {
                    id: string;
                    isAdmin: boolean;
                };
            };
            meta: import("./trpc").MyMeta;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: typeof import("superjson").default;
        }>;
        _meta: import("./trpc").MyMeta;
        _ctx_out: {
            transport: string;
            user?: {
                id: string;
                isAdmin: boolean;
            };
        };
        _input_in: {
            name: string;
        };
        _input_out: {
            name: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        name: string;
        id: string;
    }>;
}>;
export type AppRouter = typeof appRouter;
