"use client";

import { accessTokenStore, refreshToken } from "@repo/feat.context/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectOnToken() {
  const router = useRouter()
  
  useEffect(() => {
    if (accessTokenStore.state) router.push('/')
    else refreshToken()
  }, [])

  useEffect(() => accessTokenStore.subscribe((token) => {
    if (token) router.push('/')
  }), [])

  return null
}