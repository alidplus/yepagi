import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import HomeClient from "./client";

export default async function Home() {
  prefetch(trpc.enentities.health.queryOptions())
  return (
    <HydrateClient>
      <HomeClient />
    </HydrateClient>
  );
}
