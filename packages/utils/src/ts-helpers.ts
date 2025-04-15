export type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

export interface ValueProps<T> {
  value: T;
}

export interface ModelProps<T> {
  value?: T;
  onChange?(change: T): unknown;
}

export interface FormProps<T>
  extends Omit<React.ComponentProps<"form">, "onSubmit"> {
  onSubmit?(data: T): void;
}
