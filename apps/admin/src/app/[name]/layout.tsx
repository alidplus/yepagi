import { getQueryClient } from "@repo/context";
import { trpc } from "@/ssr/trpc.server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

type TenantParams = {
  name: string
}

export default async function TenantLayout({ children, params }: PropsWithChildren<RouteParams<TenantParams>>) {
  const { name } = await params

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(trpc.user.list.queryOptions())

  const state = dehydrate(queryClient)
  return (
    <HydrationBoundary state={state}>
      <h1>{name.toUpperCase()} (as tenant) layout</h1>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}

