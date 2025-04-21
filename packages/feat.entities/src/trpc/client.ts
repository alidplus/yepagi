
import { TRPCContextFactory } from "@repo/feat.context/client";
import { DemoRouter } from "./router";

export const { TRPCReactProvider, useTRPC } = TRPCContextFactory<DemoRouter>()