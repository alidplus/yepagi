"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { collections } from "@repo/defs";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
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
import { cn, FormProps } from "@repo/utils";
import { useFieldArray, useForm } from "react-hook-form";
import { FieldForm, FieldHorizontalItemCard } from "./FieldForm";

const defaultValues: collections.TInsert = {
  slug: "my-data",
  title: "My Data",
  fields: [
    {
      label: "First Name",
      name: "firstname",
      values: [
        { label: "Item I", value: "1" },
        { label: "Item II", value: "2" },
        { label: "Item III", value: "3" },
        { label: "Item IV", value: "4" },
        { label: "Item V", value: "5" },
        { label: "Item VI", value: "6" },
        { label: "Item VII", value: "7" },
        { label: "Item VIII", value: "8" },
        { label: "Item IX", value: "9" },
      ],
    },
    { label: "Last Name", name: "lastname" },
    { label: "Email Address", name: "email" },
  ],
};

export default function EntityFormClient() {
  // const queryClient = useQueryClient();

  // const router = useRouter();
  // const trpc = useTRPC();
  // const options = trpc.auth.signin.mutationOptions({
  //   async onSuccess(data) {
  //     setToken(data.accessToken);
  //     const whoamiQueryKey = trpc.auth.whoami.queryKey();
  //     await queryClient.invalidateQueries({ queryKey: whoamiQueryKey });
  //     router.refresh();
  //   },
  //   onSettled(data, error, variables, context) {
  //     console.log({ data, error, variables, context }, "on onSettled");
  //   },
  // });

  // const mutation = useMutation(options);

  return <EntityForm />;
}

function EntityForm({
  className,
  onSubmit = console.log,
  ...props
}: FormProps<collections.TInsert>) {
  const form = useForm<collections.TInsert>({
    resolver: zodResolver(collections.zInsertSchema),
    defaultValues,
    resetOptions: {
      keepIsSubmitSuccessful: false,
    },
  });
  const { fields } = useFieldArray({
    control: form.control,
    name: "fields",
  });
  const [fieldsWatch] = form.watch(["fields"]);

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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
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
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
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
              const v = fieldsWatch ? fieldsWatch[index] : field;
              return (
                <Drawer key={field.id}>
                  <DrawerTrigger className="text-start">
                    <FieldHorizontalItemCard value={v} />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <FieldHorizontalItemCard value={v} />
                    </DrawerHeader>
                    <FieldForm
                      className="p-4"
                      defaultValues={v}
                      onSubmit={(data) => {
                        form.setValue(`fields.${index}`, data);
                      }}
                    />
                  </DrawerContent>
                </Drawer>
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
