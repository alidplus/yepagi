"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@repo/ui/atoms";
import { SigninForm } from "@repo/ui/molecules";
import { useTRPC } from "@repo/context/client";
import { useEffect, useState } from "react";

export default function SigninFormClient() {
  const [refreshToken, setRefreshToken] = useState<string | undefined>()
  const queryClient = useQueryClient();

  const trpc = useTRPC();
  const options = trpc.auth.signin.mutationOptions({
    async onSuccess(data) {
      setRefreshToken(data.refreshToken)
      const userlistQueryKey = trpc.user.list.queryKey();
      await queryClient.invalidateQueries({ queryKey: userlistQueryKey });
    },
    onSettled(data, error, variables, context) {
      console.log({ data, error, variables, context }, "on onSettled");
    },
  });
  const mutation = useMutation(options);

  const refref = trpc.auth.refreshToken.mutationOptions({
    async onSuccess() {
      const whoamiQueryKey = trpc.auth.whoami.queryKey();
      await queryClient.invalidateQueries({ queryKey: whoamiQueryKey });
    },
  })
  const refresh = useMutation(refref);

  const lll = trpc.auth.logout.mutationOptions({
    async onSuccess() {
      setRefreshToken(undefined)
      const whoamiQueryKey = trpc.auth.whoami.queryKey();
      await queryClient.invalidateQueries({ queryKey: whoamiQueryKey });
    },
  })
  const lo = useMutation(lll);

  const qqq = trpc.auth.whoami.queryOptions();
  const q = useQuery({
    ...qqq,
    refetchInterval: 10000,
    // throwOnError(error, query) {
      
    // },
  });
  useEffect(() => {
    console.log('whoami', q.data)
  }, [q.data])
  return (
    <div>
      <SigninForm
        onSubmit={(d) => {
          console.log("mutating....", d, typeof d);
          mutation.mutate(d);
        }}
      />
      <Button onClick={() => q.refetch()}>Who I'm</Button>
      <Button onClick={() => refreshToken && refresh.mutate({ refreshToken })} disabled={!refreshToken}>Refresh</Button>
      <Button onClick={() => lo.mutate()}>Logout</Button>
    </div>
  );
}
