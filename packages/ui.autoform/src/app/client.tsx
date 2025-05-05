"use client";
import AutoForm from '@/lib';
import { users } from '@repo/defs'

export default function HomeClient() {
  return (
    <AutoForm
      schema={users.zInsertSchema}
      onChange={console.log.bind(console, 'changed')}
      onSubmit={console.log.bind(console, 'submitted')}
      onError={console.log.bind(console, 'errors')}
      uiSchema={{
        "ui:classNames": "xxxxxxxxx-cls",
        email: {
          "ui:options": {
            "title": "qqqq"
          }
        }
      }}
    />
  );
}
