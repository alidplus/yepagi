"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SigninForm } from "@repo/ui/molecules";
import { useTRPC } from "@repo/context";

export default function SigninFormClient() {
  const queryClient = useQueryClient();
  const trpc = useTRPC()
  const options = trpc.auth.signin.mutationOptions({
    async onSuccess () {
      const userlistQueryKey = trpc.user.list.queryKey()
      await queryClient.invalidateQueries({ queryKey: userlistQueryKey })
    }
  })
  const mutation = useMutation(options)
  return (
    <SigninForm onSubmit={(d) => mutation.mutate(d)} />
  )
}
