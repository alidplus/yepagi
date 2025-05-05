
import { TRPCProxyFactory } from "@repo/feat.context/server";
import { DemoRouter } from "./router";

export const trpc = TRPCProxyFactory<DemoRouter>()
export { HydrateClient, prefetch } from '@repo/feat.context/server'