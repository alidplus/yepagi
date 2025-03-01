"use client";
import UserRow from "@/components/user/UserRow";
import UserForm from "@/components/UserForm";
import { useTRPC } from "@/providers";
import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

export default function ById() {
  const [state, setState] = useState(0)
  const [id, setId] = useState(0)
  const trpc = useTRPC(); // use `import { trpc } from './utils/trpc'` if you're using the singleton pattern
  const userQuery = useQuery(trpc.user.byId.queryOptions(id));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="">
          {JSON.stringify(userQuery.data, null, 2)}
        </div>
        <input className="text-black" type="number" value={state} onChange={e => setState(+e.target.value || 0)} />
        <button onClick={() => setId(state)}>fetch</button>
      </main>
    </div>
  );
}
