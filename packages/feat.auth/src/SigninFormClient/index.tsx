"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { setToken, useTRPC } from "@repo/feat.context/client";
import { auth } from "@repo/db.d1";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@repo/ui/atoms";
import { cn, FormProps } from "@repo/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function SigninForm({
  className,
  onSubmit,
  ...props
}: FormProps<auth.TSignin>) {
  const form = useForm<auth.TSignin>({
    resolver: zodResolver(auth.zSigninSchema),
    resetOptions: {
      keepIsSubmitSuccessful: false,
    },
  });

  return (
    <Form {...form}>
      <form
        className={cn(className, "flex flex-col gap-2")}
        onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
        onReset={() => form.reset()}
        {...props}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@example.com"
                  {...field}
                  data-testid="email"
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} data-testid="password" />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" data-testid="submit">
          Login
        </Button>
      </form>
    </Form>
  );
}

export default function SigninFormClient() {
  const queryClient = useQueryClient();

  const router = useRouter();
  const trpc = useTRPC();
  const options = trpc.auth.signin.mutationOptions({
    async onSuccess(data) {
      setToken(data.accessToken);
      const whoamiQueryKey = trpc.auth.whoami.queryKey();
      await queryClient.invalidateQueries({ queryKey: whoamiQueryKey });
      router.refresh();
    },
    onSettled(data, error, variables, context) {
      console.log({ data, error, variables, context }, "on onSettled");
    },
  });
  const mutation = useMutation(options);

  const lll = trpc.auth.logout.mutationOptions({
    async onSuccess() {
      setToken(undefined);
      const whoamiQueryKey = trpc.auth.whoami.queryKey();
      await queryClient.invalidateQueries({ queryKey: whoamiQueryKey });
    },
  });
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
