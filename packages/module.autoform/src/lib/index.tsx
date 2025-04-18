'use client';
// ^-- to make sure we can mount the Provider from a server component
import { FormProps as RJSFFormProps, ThemeProps, withTheme } from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { useMemo } from 'react';
import { type ZodTypeAny } from 'zod';
import zodToJsonSchema, { jsonDescription } from 'zod-to-json-schema';

// import * as templates from "./templates";
// import * as fields from "./fields";
// import * as widgets from "./widgets";

// const theme: ThemeProps = { templates, fields, widgets };
const theme: ThemeProps = {};

const ThemedForm = withTheme(theme);

interface FormProps extends Omit<RJSFFormProps, 'validator' | 'schema'> {
  schema: ZodTypeAny
}

export default function AutoForm({ schema, ...props }: FormProps) {
  const jsonSchema = useMemo(() => zodToJsonSchema(schema, {
    postProcess: jsonDescription
  }) as RJSFSchema, [schema])
  return (
    <ThemedForm
      schema={jsonSchema}
      validator={validator}
      {...props}
    />
  );
}
