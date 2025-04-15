import { cn, FormProps, ValueProps } from "@repo/utils";

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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HorizontalItemCard } from "@repo/ui/molecules";

interface Option {
  label: string;
  value: string;
}

export function OptionHorizontalItemCard({ value }: ValueProps<Option>) {
  return (
    <HorizontalItemCard icon="linkedin" title={value.label}>
      <span>value: {value.value}</span>
    </HorizontalItemCard>
  );
}

export function OptionForm({
  className,
  onSubmit = console.log,
  defaultValues,
  ...props
}: FormProps<Option>) {
  const form = useForm<Option>({
    resolver: zodResolver(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
    defaultValues,
    resetOptions: {
      keepIsSubmitSuccessful: false,
    },
  });

  return (
    <Form {...form}>
      <form
        className={cn(className, "grid gap-2 gap-x-8 md:grid-cols-2")}
        onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
        onReset={() => form.reset()}
        {...props}
      >
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input
                  placeholder="My Awesome Items"
                  {...field}
                  data-testid="title"
                />
              </FormControl>
              <FormDescription>
                This is your collection's display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Value</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="my-awesome-items"
                  {...field}
                  data-testid="slug"
                />
              </FormControl>
              <FormDescription>
                This is your collections's uniq name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="col-span-full" data-testid="submit">
          Save
        </Button>
      </form>
    </Form>
  );
}
