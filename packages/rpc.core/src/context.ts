import { WithRequiredProperty } from '@repo/utils';
import { RequestCookieStore } from '@worker-tools/request-cookie-store';
import { DrizzleD1Database } from 'drizzle-orm/d1';

interface BaseContext {
	db: DrizzleD1Database;
	cookies: RequestCookieStore;
	headers: Request['headers'];
}

export const createCoreContext = ({ db, cookies, headers }: BaseContext) => {
	const AuthorizationHeader = headers.get('Authorization');

	try {
		if (!AuthorizationHeader) throw '';
		const [, accessToken] = AuthorizationHeader.split(' ');
		if (!accessToken) throw '';

		return {
			db,
			cookies,
			accessToken,
		};
	} catch {
		return {
			db,
			cookies,
			accessToken: undefined,
		};
	}
};

export type Context = ReturnType<typeof createCoreContext> & {
	transport: string;
	isMock?: boolean;
	accessToken?: string;
	user?: unknown;
};

export type ProtectedContext = WithRequiredProperty<Context, 'accessToken' | 'user'>;
export function assertProtectedContext(ctx: Context): asserts ctx is ProtectedContext {
	if (!('accessToken' in ctx)) throw 'this controller needs to use "protectedProcedure"';
}
