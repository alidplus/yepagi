import { TitleFieldProps } from "@rjsf/utils";

export function TitleFieldTemplate(props: TitleFieldProps) {
  const { id, required, title } = props;
  return (
    <header id={id}>
      {title}
      {required && <mark>*</mark>}
    </header>
  );
}
