import { TRPCProxyFactory } from "@/lib/index.server";
import type { DemoRouter } from "./router";

export const trpc = TRPCProxyFactory<DemoRouter>()
export { HydrateClient, prefetch } from '@/lib/index.server'