import 'server-only'; // <-- ensure this file cannot be imported from the client

export { trpc, HydrateClient, prefetch } from './trpc/server'