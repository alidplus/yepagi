"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTRPC } from "@repo/feat.context/client";
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
import { useForm } from "react-hook-form";

function SignupForm({
  className,
  onSubmit,
  ...props
}: FormProps<auth.TSignup>) {
  const form = useForm<auth.TSignup>({
    resolver: zodResolver(auth.zSignupSchema),
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormDescription>This is your uniq identifier</FormDescription>
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
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign Up!
        </Button>
      </form>
    </Form>
  );
}

export default function SignupFormClient() {
  const queryClient = useQueryClient();

  const trpc = useTRPC();
  const options = trpc.auth.signup.mutationOptions({
    async onSuccess() {
      const userlistQueryKey = trpc.user.list.queryKey();
      await queryClient.invalidateQueries({ queryKey: userlistQueryKey });
    },
    onSettled(data, error, variables, context) {
      console.log({ data, error, variables, context }, "on onSettled");
    },
  });
  const mutation = useMutation(options);
  return (
    <SignupForm
      onSubmit={(d) => {
        console.log("mutating....", d, typeof d);
        mutation.mutate(d);
      }}
    />
  );
}
