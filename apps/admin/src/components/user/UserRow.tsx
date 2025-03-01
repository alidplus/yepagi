import { useTRPC } from "@/providers";
import * as defs from "@repo/defs";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export default function UserRow({ user }: { user: defs.user.TSelect }) {
  return (
    <div key={user.id} className="flex flex-row gap-2 w-full">
      <strong className="w-5">#{user.id}</strong>
      <div>{`${user.name}<${user.email}>`}</div>
      <div className="ms-auto">Age: {user.age}</div>
      <RemoveUserBtn user={user} />
    </div>
  )
}

function RemoveUserBtn({ user }: { user: defs.user.TSelect }) {
  const queryClient = useQueryClient();
  const trpc = useTRPC()
  const options = trpc.user.remoevById.mutationOptions({
    async onSuccess() {
      const userlistQueryKey = trpc.user.list.queryKey()
      await queryClient.invalidateQueries({ queryKey: userlistQueryKey })
    }
  })
  const mutation = useMutation(options)
  return (
    <button className="bg-red-500 text-black" onClick={() => mutation.mutate(user.id!)}>Remove</button>
  )
}