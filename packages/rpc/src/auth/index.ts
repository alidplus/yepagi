import { protectedProcedure, publicProcedure, router } from '../trpc';
import * as def from '@repo/db.d1';
import AuthController from './controller';
import { zGeneralSuccesResponse } from '../utils/schema';

export const authRouter = router({
	signin: publicProcedure
		.input(def.auth.zSigninSchema)
		.output(def.auth.zAccessSchema)
		.mutation(({ input, ctx }) => new AuthController(ctx).signin(input)),

	signup: publicProcedure
		.input(def.auth.zSignupSchema)
		.output(def.users.zSelectSchema)
		.mutation(({ ctx, input }) => new AuthController(ctx).signup(input)),

	refreshToken: publicProcedure.output(def.auth.zAccessSchema).query(({ ctx }) => new AuthController(ctx).refreshToken()),

	whoami: protectedProcedure.output(def.users.zSelectSchema).query(({ ctx }) => {
		console.log('-------- whoami --------');
		return ctx.user;
	}),

	logout: protectedProcedure.output(zGeneralSuccesResponse).mutation(({ ctx }) => new AuthController(ctx).logout()),

	logoutAll: protectedProcedure.output(zGeneralSuccesResponse).mutation(({ ctx }) => new AuthController(ctx).logoutAll()),

	logoutOthers: protectedProcedure.output(zGeneralSuccesResponse).mutation(({ ctx }) => new AuthController(ctx).logoutOthers()),
});
