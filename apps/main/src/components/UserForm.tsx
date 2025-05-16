import * as defs from "@repo/db.d1";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { useTRPC } from "../trpc/client";

export default function UserForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm<defs.users.TInsert>({ resolver: zodResolver(defs.users.zInsertSchema) });
  const trpc = useTRPC()

  const options = trpc.user.create.mutationOptions({
    async onSuccess () {
      const userlistQueryKey = trpc.user.list.queryKey()
      await queryClient.invalidateQueries({ queryKey: userlistQueryKey })
    }
  })
  const mutation = useMutation(options)
  
  return (
    <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="flex flex-col gap-3">
      <input className="text-black" type="text" placeholder="Name" {...register("username", {required: true})} />
      <input className="text-black" type="number" placeholder="Age" {...register("age", {required: true, valueAsNumber: true})} />
      <input className="text-black" type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />

      <input type="submit" />
    </form>
  );
}