'use client';
// ^-- to make sure we can mount the Provider from a server component

export { useTRPC, TRPCReactProvider } from './trpc/client'
export { setToken, getToken, refreshToken, accessTokenStore } from './trpc/stores'