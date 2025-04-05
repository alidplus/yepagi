import Home from "./Home";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { prefetch, trpc, HydrateClient } from "@repo/context/server";

export default async function HomePage() {
  await prefetch(trpc.user.list.queryOptions())
  
  return (
    <HydrateClient>
      <pre>{JSON.stringify({ API_HOST: process.env.API_HOST, NODE_ENV: process.env.NODE_ENV }, null, 2)}</pre>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
