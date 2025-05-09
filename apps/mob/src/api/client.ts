import { TRPCContextFactory } from '@repo/feat.context/client'
import type { AppRouter } from '@repo/rpc'

export const { TRPCReactProvider, useTRPC } = TRPCContextFactory<AppRouter>()
