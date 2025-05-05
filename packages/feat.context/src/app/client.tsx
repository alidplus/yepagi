"use client"
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "./components/provider";

export default function HomeClient() {
  const trpc = useTRPC()
  const q = useQuery(trpc.hello.queryOptions())
  return (
    <pre>{JSON.stringify(q.data, null, 2)}</pre>
  );
}
