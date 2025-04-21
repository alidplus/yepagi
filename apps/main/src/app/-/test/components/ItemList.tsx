"use client";

import { QueryObserver, useQuery, useQueryClient } from "@tanstack/react-query";
import ItemCard from "./ItemCard";
import { useEffect } from "react";
import { useTRPC } from "@/trpc/client";

export default function ItemList() {
  const queryClient = useQueryClient();
  const trpc = useTRPC();
  const qOpt = trpc.user.list.queryOptions({ c: 88 })
  const userQuery = useQuery(qOpt);

  useEffect(() => {
    const observer = new QueryObserver(queryClient, qOpt)

    return observer.subscribe((result) => {
      const records = result.data as typeof userQuery.data
      records?.forEach((rec) => {
        const qk = trpc.user.byId.queryKey(rec.id)
        queryClient.setQueryData(qk, rec)
      })
    })
  }, [qOpt, queryClient, trpc.user.byId, trpc.user.list, userQuery])

  return (
    <div className="grid grid-cols-2">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Item List</h1>
        <button onClick={() => userQuery.refetch()}>refetch</button>
        <div className="flex flex-col gap-3">
          {userQuery.data?.map(user => (
            <ItemCard key={user.id} id={user.id} />
          ))}
        </div>
      </main>
      {/* <UserForm /> */}
    </div>
  );
}
