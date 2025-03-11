export interface MyMeta {
    authRequired: boolean;
}
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export declare const router: <TInput extends import("@trpc/server/unstable-core-do-not-import").CreateRouterOptions>(input: TInput) => import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
    ctx: {
        db: import("drizzle-orm/d1").DrizzleD1Database & {
            $client: D1Database;
        };
        usersCache: import("./utils/kv-store").KvStore<{
            email: string;
            username: string;
            passwordHash: string;
            id?: number | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }>;
        transport: string;
        user?: {
            id: string;
            isAdmin: boolean;
        };
    };
    meta: MyMeta;
    errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    transformer: true;
}, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<TInput>>;
export declare const publicProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<{
    db: import("drizzle-orm/d1").DrizzleD1Database & {
        $client: D1Database;
    };
    usersCache: import("./utils/kv-store").KvStore<{
        email: string;
        username: string;
        passwordHash: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }>;
    transport: string;
    user?: {
        id: string;
        isAdmin: boolean;
    };
}, MyMeta, object, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, false>;
export declare const adminProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<{
    db: import("drizzle-orm/d1").DrizzleD1Database & {
        $client: D1Database;
    };
    usersCache: import("./utils/kv-store").KvStore<{
        email: string;
        username: string;
        passwordHash: string;
        id?: number | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    }>;
    transport: string;
    user?: {
        id: string;
        isAdmin: boolean;
    };
}, MyMeta, {
    user: {
        id: string;
        isAdmin: boolean;
    };
}, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, false>;
