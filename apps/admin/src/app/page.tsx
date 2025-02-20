import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Home from "./Home";
import { getQueryClient } from "@/client/query";
import { trpc } from "@/client/trpc.server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function HomePage() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(trpc.userList.queryOptions())

  const state = dehydrate(queryClient)
  
  return (
    <HydrationBoundary state={state}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}
