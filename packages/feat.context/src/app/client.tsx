"use client"
import { useTRPC } from "@/lib/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function HomeClient() {
  const trpc = useTRPC()
  const q = useQuery(trpc.auth.whoami.queryOptions())
  return (
    <pre>{JSON.stringify(q.data, null, 2)}</pre>
  );
}
