import { ArrayFieldTemplateProps } from "@rjsf/utils";

export function ArrayFieldTemplate(props: ArrayFieldTemplateProps) {
  return (
    <div>
      {props.items.map((element) => element.children)}
      {props.canAdd && (
        <button type="button" onClick={props.onAddClick}></button>
      )}
    </div>
  );
}
