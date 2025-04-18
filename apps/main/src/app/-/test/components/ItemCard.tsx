import { useTRPC } from "@repo/context/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function ItemCard({ id }: { id: number }) {
  const trpc = useTRPC();
  const opt = trpc.user.byId.queryOptions(id)
  const getById = useSuspenseQuery(opt);
  const data = getById.data
  return (
    <div key={data.id} className="flex flex-row gap-2 w-full">
      <strong className="w-5">#{data.id}</strong>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}