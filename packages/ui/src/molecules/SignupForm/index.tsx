"use client";

import {
  Input,
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/atoms";
import { useForm } from "react-hook-form";
import { cn } from "@repo/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "@repo/defs";
import { TypedHTMLFormProps } from "@/types/forms";

export default function SigninForm({
  className,
  onSubmit,
  ...props
}: TypedHTMLFormProps<auth.TSignup>) {
  const form = useForm<auth.TSignup>({
    resolver: zodResolver(auth.zSignupSchema),
    resetOptions: {
      keepIsSubmitSuccessful: false,
    },
  });

  // const { isValid, isLoading, isSubmitting, isSubmitSuccessful } =
  //   form.formState;

  // const disabled = !isValid || isLoading || isSubmitting || isSubmitSuccessful;
  // const loading = isLoading || isSubmitting

  // console.log({ disabled, errors, onSubmit }, "errors");

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
