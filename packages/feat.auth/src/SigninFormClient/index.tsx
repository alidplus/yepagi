"use client";

import { setToken, useTRPC } from "@repo/context/client";
import { Button } from "@repo/ui/atoms";
import { SigninForm } from "@repo/ui/molecules";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function SigninFormClient() {
  const queryClient = useQueryClient();

  const router = useRouter();
  const trpc = useTRPC();
  const options = trpc.auth.signin.mutationOptions({
    async onSuccess(data) {
      setToken(data.accessToken)
      const whoamiQueryKey = trpc.auth.whoami.queryKey();
      await queryClient.invalidateQueries({ queryKey: whoamiQueryKey });
      router.refresh()
    },
    onSettled(data, error, variables, context) {
      console.log({ data, error, variables, context }, "on onSettled");
    },
  });
  const mutation = useMutation(options);

  const lll = trpc.auth.logout.mutationOptions({
    async onSuccess() {
      setToken(undefined)
      const whoamiQueryKey = trpc.auth.whoami.queryKey();
      await queryClient.invalidateQueries({ queryKey: whoamiQueryKey });
    },
  })
  const lo = useMutation(lll);
  return (
    <div>
      <SigninForm
        onSubmit={(d) => {
          mutation.mutate(d);
        }}
      />
      <Button onClick={() => lo.mutate()}>Logout</Button>
    </div>
  );
}
