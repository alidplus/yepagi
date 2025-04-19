import { TRPCContextFactory } from "@/lib/index.client";
import type { DemoRouter } from "../server/router";

export const { TRPCReactProvider, useTRPC } = TRPCContextFactory<DemoRouter>()