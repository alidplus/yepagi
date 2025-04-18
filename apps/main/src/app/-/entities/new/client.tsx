"use client";

import AutoForm from "@repo/autoform/client";
import { collections } from "@repo/defs";

export function NewEntityClient() {
  return (
    <AutoForm schema={collections.zInsertSchema} />
  )
}