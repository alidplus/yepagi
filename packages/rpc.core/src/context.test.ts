import { RequestCookieStore } from '@worker-tools/request-cookie-store';
import { publicProcedure, router } from '.';
import { test, expect, beforeEach, suite } from 'vitest';
import { DeepMockProxy, mockDeep } from 'vitest-mock-extended';
import { DrizzleD1Database } from 'drizzle-orm/d1';

const testAppRouter = router({
	accessToken: publicProcedure.query(({ ctx }) => ctx.accessToken),
});

suite('GET REQUESTS', () => {
	let caller: ReturnType<typeof testAppRouter.createCaller>;

	beforeEach(async () => {
		const db: DeepMockProxy<DrizzleD1Database> = mockDeep();
		const cookies: DeepMockProxy<RequestCookieStore> = mockDeep();
		caller = testAppRouter.createCaller({
			accessToken: 'faketoken',
			transport: 'jest-trpc-caller',
			cookies,
			db,
		});
	});

	test('GET /posts', async () => {
		const accessToken = await caller.accessToken();
		expect(accessToken).toBe('faketoken');
	});
});
