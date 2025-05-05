"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@repo/ui/atoms";
import { useRouter } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

interface InterceptorModalProps {
  title?: ReactNode
}

export default function InterceptorModal({ title, children }: PropsWithChildren<InterceptorModalProps>) {
  const router = useRouter()
  // const handleOpneChange = useCallback(() => {

  // }, [])
  return (
    <Dialog open onOpenChange={router.back}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}