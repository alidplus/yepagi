"use client";
import { PropsWithChildren, useEffect, useMemo } from "react";
import { useTRPC } from "@/Providers";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AppContext } from ".";
import { accessTokenStore } from "@/stores";

export default function LiveAppContext({ children }: PropsWithChildren) {
  const trpc = useTRPC();

  const whoamiOptions = trpc.auth.whoami.queryOptions();
  const whoami = useQuery({
    ...whoamiOptions,
    enabled: false,
    retry(_, error) {
      return error.data?.code !== 'UNAUTHORIZED'
    },
  });
  
  const refreshTokenOptions = trpc.auth.refreshToken.mutationOptions({
    onSuccess({ accessToken }) {
      accessTokenStore.setState(() => accessToken)
      whoami.refetch()
    },
  });
  const refreshToken = useMutation(refreshTokenOptions)
  
  useEffect(() => {
    refreshToken.mutate()
  }, [])

  const ctx = useMemo<AppContext>(() => ({
    translationMap: {},
    me: whoami.data
  }), [whoami.data])

  return (
    <AppContext value={ctx}>
      {children}
    </AppContext>
  )
}