import { FieldProps } from "@rjsf/utils";

import { Input } from "@repo/ui/atoms";

export function StringField(props: FieldProps) {
  return (
    <Input
      type="text"
      {...props}
      onBlur={({ target }) => {
        props.onBlur(target.id, target.value)
      }}
      onFocus={({ target }) => {
        props.onFocus(target.id, target.value)
      }}
    />
  )
}
