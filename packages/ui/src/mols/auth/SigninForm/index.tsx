"use client";

import { Label, Input, Button } from "@repo/ui/atoms";
import { cn } from "@repo/utils";

export default function SigninForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn(className, "flex flex-col gap-6")} {...props}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <a
            href="#"
            className="ml-auto text-sm underline-offset-2 hover:underline"
          >
            Forgot your password?
          </a>
        </div>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  )
}
