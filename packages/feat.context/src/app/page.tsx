import HomeClient from "./client";
import { HydrateClient, prefetch, trpc } from "./server/prefetch";

export default async function Home() {
  prefetch(trpc.hello.queryOptions())
  return (
    <HydrateClient debug>
      <HomeClient />
    </HydrateClient>
  );
}
