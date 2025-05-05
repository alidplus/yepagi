import { DescriptionFieldProps } from "@rjsf/utils";

export function DescriptionFieldTemplate(props: DescriptionFieldProps) {
  const { id, description } = props;
  return <p id={id}>{description}</p>;
}
