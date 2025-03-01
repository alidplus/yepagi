import SuperJSON from 'superjson';
export interface MyMeta {
    authRequired: boolean;
}
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export declare const router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
        transport: string;
        user?: {
            id: string;
            isAdmin: boolean;
        };
    };
    meta: MyMeta;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: typeof SuperJSON;
}>, TProcRouterRecord>;
export declare const publicProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            transport: string;
            user?: {
                id: string;
                isAdmin: boolean;
            };
        };
        meta: MyMeta;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: typeof SuperJSON;
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
    _meta: MyMeta;
}>;
export declare const adminProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            transport: string;
            user?: {
                id: string;
                isAdmin: boolean;
            };
        };
        meta: MyMeta;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: typeof SuperJSON;
    }>;
    _meta: MyMeta;
    _ctx_out: {
        transport: string;
        user: {
            id: string;
            isAdmin: boolean;
        };
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}>;
