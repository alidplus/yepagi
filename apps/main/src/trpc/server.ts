
import { TRPCProxyFactory } from "@repo/feat.context/server";
import type { AppRouter } from "@repo/rpc";

export const trpc = TRPCProxyFactory<AppRouter>()
export { HydrateClient, prefetch } from '@repo/feat.context/server'