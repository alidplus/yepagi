export type TypedHTMLFormProps<T> = Omit<
  React.ComponentProps<"form">,
  "onSubmit"
> & {
  onSubmit?(data: T): void;
};
