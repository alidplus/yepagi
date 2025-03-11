"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SigninForm } from "@repo/ui/molecules";
import { useTRPC } from "@/providers";

export default function SigninFormClient() {
  const queryClient = useQueryClient();
  const trpc = useTRPC()
  const options = trpc.user.create.mutationOptions({
    async onSuccess () {
      const userlistQueryKey = trpc.user.list.queryKey()
      await queryClient.invalidateQueries({ queryKey: userlistQueryKey })
    }
  })
  const mutation = useMutation(options)
  return (
    <SigninForm />
  )
}
