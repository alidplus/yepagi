// import { HydrateClient, prefetch, trpc } from "@/lib/trpc/server";
import { HydrateClient } from "@/lib/index.server";
import HomeClient from "./client";

export default async function Home() {
  // prefetch(trpc.auth.whoami.queryOptions())
  return (
    <HydrateClient>
      <HomeClient />
    </HydrateClient>
  );
}
