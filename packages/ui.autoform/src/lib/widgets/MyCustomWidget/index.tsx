import { WidgetProps } from "@rjsf/utils";

export function MyCustomWidget(props: WidgetProps) {
  return (
    <input
      type="text"
      className="custom"
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
}
