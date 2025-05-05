// import { WithRequiredProperty } from '@repo/utils';
import { RequestCookieStore } from '@worker-tools/request-cookie-store';
import { DrizzleD1Database } from 'drizzle-orm/d1';

export { RequestCookieStore };

interface BaseContext {
	db: DrizzleD1Database;
	cookies: RequestCookieStore;
	headers: Request['headers'];
}

export const createCoreContext = ({ db, cookies, headers }: BaseContext) => {
	return {
		db,
		cookies,
		headers,
	};
};

export interface Context extends BaseContext {
	transport: string;
	isMock?: boolean;
}

// export type ProtectedContext = WithRequiredProperty<Context, 'accessToken' | 'user'>;
// export function assertProtectedContext(ctx: Context): asserts ctx is ProtectedContext {
// 	if (!('accessToken' in ctx)) throw 'this controller needs to use "protectedProcedure"';
// }

export type ProtectedContext = never;
export function assertProtectedContext(ctx: Context): asserts ctx is ProtectedContext {
	throw '';
}
