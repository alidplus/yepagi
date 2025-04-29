import { FieldTemplateProps } from "@rjsf/utils";

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
    null
    // <ATOMs.Box gap="md">
    //   <LAYOUTs.Fieldset
    //     className={classNames}
    //     label={label}
    //     footer={description}
    //     // legend={}
    //     // search={}
    //     // dropdown={}
    //     // prefix={}
    //     // suffix={}
    //     // startIcon={}
    //     // endIcon={}
    //   >
    //     {children}
    //   </LAYOUTs.Fieldset>
    // </ATOMs.Box>
  );
}
