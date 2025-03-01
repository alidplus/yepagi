"use client";
import UserRow from "@/components/user/UserRow";
import UserForm from "@/components/UserForm";
import { useTRPC } from "@/providers";
import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  const trpc = useTRPC(); // use `import { trpc } from './utils/trpc'` if you're using the singleton pattern
  const userQuery = useQuery(trpc.user.list.queryOptions());

  console.log('userQuery', userQuery.data);
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Client Home</h1>
        <div className="">
          {userQuery.data?.map(user => (
            <UserRow key={user.id} user={user} />
          ))}
        </div>
        <button onClick={() => userQuery.refetch()}>refetch</button>
      </main>
      <UserForm />
    </div>
  );
}
