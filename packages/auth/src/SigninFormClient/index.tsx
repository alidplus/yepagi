"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SigninForm } from "@repo/ui/molecules";
import { useTRPC } from "@repo/context/client";

export default function SigninFormClient() {
  const queryClient = useQueryClient();
  
  const trpc = useTRPC();
  const options = trpc.auth.signin.mutationOptions({
    async onSuccess() {
      const userlistQueryKey = trpc.user.list.queryKey();
      await queryClient.invalidateQueries({ queryKey: userlistQueryKey });
    },
    onSettled(data, error, variables, context) {
      console.log({ data, error, variables, context }, 'on onSettled');
    },
  });
  const mutation = useMutation(options);
  return <SigninForm onSubmit={(d) => {
    console.log('mutating....', d, typeof d);
    mutation.mutate(d)
    
  }} />;
}
