"use client";

import { accessTokenStore, useTRPC } from "@repo/context/client";
import { Button } from "@repo/ui/atoms";
import { SigninForm } from "@repo/ui/molecules";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function SigninFormClient() {
  const queryClient = useQueryClient();

  const trpc = useTRPC();
  const options = trpc.auth.signin.mutationOptions({
    async onSuccess(data) {
      accessTokenStore.setState(() => data.accessToken)
      const whoamiQueryKey = trpc.auth.whoami.queryKey();
      await queryClient.invalidateQueries({ queryKey: whoamiQueryKey });
      // router.refresh()
    },
    onSettled(data, error, variables, context) {
      console.log({ data, error, variables, context }, "on onSettled");
    },
  });
  const mutation = useMutation(options);

  const refref = trpc.auth.refreshToken.mutationOptions({
    async onSuccess(data) {
      accessTokenStore.setState(() => data.accessToken)
      const whoamiQueryKey = trpc.auth.whoami.queryKey();
      await queryClient.invalidateQueries({ queryKey: whoamiQueryKey });
    },
  })
  const refresh = useMutation(refref);

  const lll = trpc.auth.logout.mutationOptions({
    async onSuccess() {
      accessTokenStore.setState(() => undefined)
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
      <Button onClick={() => refresh.mutate()}>Refresh</Button>
      <Button onClick={() => lo.mutate()}>Logout</Button>
    </div>
  );
}
