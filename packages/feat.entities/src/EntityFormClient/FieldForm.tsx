import { cn, FormProps, ValueProps } from "@repo/utils";

import {
  Button,
  DrawerContent,
  DrawerHeader,
  DrawerNestedRoot,
  DrawerTrigger,
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
import { HorizontalItemCard } from "@repo/ui/molecules";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { OptionForm, OptionHorizontalItemCard } from "./OptionForm";

interface Field {
  label: string;
  name: string;
  values?: Array<{
    label: string;
    value: string;
  }>;
}

export function FieldHorizontalItemCard({ value }: ValueProps<Field>) {
  return (
    <HorizontalItemCard icon="twitter" title={value.label} desc={value.name}>
      <span />
    </HorizontalItemCard>
  );
}

export function FieldForm({
  className,
  onSubmit = console.log,
  defaultValues,
  ...props
}: FormProps<Field>) {
  const form = useForm<Field>({
    resolver: zodResolver(
      z.object({
        label: z.string(),
        name: z.string(),
      }),
    ),
    defaultValues,
    resetOptions: {
      keepIsSubmitSuccessful: false,
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "values",
  });
  const [valuesWatch] = form.watch(["values"]);

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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
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
        <FormItem className="col-span-full">
          <FormLabel>Fields</FormLabel>
          <div className="flex max-h-[50vh] flex-col gap-2 overflow-auto">
            {fields.map((field, index) => {
              const v = valuesWatch ? valuesWatch[index] : field;
              return (
                <DrawerNestedRoot key={field.id}>
                  <DrawerTrigger className="text-start">
                    <OptionHorizontalItemCard value={v} />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <OptionHorizontalItemCard value={v} />
                    </DrawerHeader>
                    <OptionForm
                      className="max-h-[50vh] overflow-auto p-4"
                      defaultValues={v}
                      onSubmit={(data) => {
                        form.setValue(`values.${index}`, data);
                      }}
                    />
                  </DrawerContent>
                </DrawerNestedRoot>
              );
            })}
          </div>
          <FormDescription>
            This is your collections's properties
          </FormDescription>
          <FormMessage />
        </FormItem>
        <Button type="submit" className="col-span-full" data-testid="submit">
          Save
        </Button>
      </form>
    </Form>
  );
}
