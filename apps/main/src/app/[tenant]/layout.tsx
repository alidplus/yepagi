import { prefetch, trpc, HydrateClient } from "@repo/context/server";
import Link from "next/link";
import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

type TenantParams = {
  tenant: string
}

export default async function TenantLayout({ children, params }: PropsWithChildren<RouteParams<TenantParams>>) {
  const { tenant } = await params

  await prefetch(trpc.user.list.queryOptions())

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-col w-56 border-s border-gray-300 fixed end-0 top-0 h-full">
            <div className="flex flex-col flex-grow p-4 overflow-auto">
              <Link className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href={`/${tenant}`}>
                <span className="leading-none">My Home</span>
              </Link>
              <Link className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href={`/${tenant}/config`}>
                <span className="leading-none">Configs</span>
              </Link>
              <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                  <span className="leading-none">Item 3</span>
              </a>
              <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                  <span className="leading-none">Item 4</span>
              </a>
              <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                  <span className="leading-none">Item 5</span>
              </a>
              <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                  <span className="leading-none">Item 6</span>
              </a>
              <Link className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
                  href="/">
                  <span className="ml-2 leading-none">Back</span>
              </Link>
            </div>
          </div>
          {children}
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}

