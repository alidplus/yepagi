import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Home from "./Home";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { getQueryClient } from "@repo/context";
import { trpc } from "@repo/context/server";

export default async function HomePage() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(trpc.user.list.queryOptions())

  const state = dehydrate(queryClient)
  
  return (
    <HydrationBoundary state={state}>
      <pre>{JSON.stringify({ API_HOST: process.env.API_HOST, NODE_ENV: process.env.NODE_ENV }, null, 2)}</pre>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}
