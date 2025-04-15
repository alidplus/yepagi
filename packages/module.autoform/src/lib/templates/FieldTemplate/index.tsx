import { FieldTemplateProps } from "@rjsf/utils";

import { LAYOUTs, ATOMs } from "@repo/atoms";

export function FieldTemplate(props: FieldTemplateProps) {
  const {
    id,
    classNames,
    style,
    label,
    help,
    required,
    description,
    errors,
    children,
  } = props;
  return (
    <ATOMs.Box gap="md">
      <LAYOUTs.Fieldset
        className={classNames}
        label={label}
        footer={description}
        // legend={}
        // search={}
        // dropdown={}
        // prefix={}
        // suffix={}
        // startIcon={}
        // endIcon={}
      >
        {children}
      </LAYOUTs.Fieldset>
    </ATOMs.Box>
  );
}
