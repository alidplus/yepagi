"use client";

import AutoForm from "@repo/autoform/client";
import { collections } from "@repo/db.d1";

export function NewEntityClient() {
  return (
    <AutoForm schema={collections.zInsertSchema} />
  )
}