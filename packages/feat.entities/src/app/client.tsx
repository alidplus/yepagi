"use client"

import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AutoForm from "@repo/autoform";
import GridView from "@repo/gridview";
import QueryBuilder, { RuleGroup, Field, formatQuery } from "@repo/query";
import { collections } from "@repo/db.d1";
import { useMemo, useState } from "react";
import 'react-querybuilder/dist/query-builder.css';

function InsertClient() {
  const q = useQueryClient()
  const trpc = useTRPC()
  const createEntities = useMutation(trpc.enentities.create.mutationOptions({
    onSuccess() {
      const queryKey = trpc.enentities.find.queryKey()
      q.invalidateQueries({ queryKey, exact: false })
    }
  }))
  return (
    <AutoForm schema={collections.zInsertSchema} onSubmit={(data) => { createEntities.mutate(data.formData) }} />
  );
}

const fields: Field[] = [
  { name: 'title', label: 'Title' },
  { name: 'slug', label: 'Slug' },
];

export default function HomeClient() {
  const [query, setQuery] = useState<RuleGroup>({
    combinator: 'and',
    rules: [
      { field: 'title', operator: 'contains', value: '' },
    ],
  });
  const trpc = useTRPC()
  const q = useQuery({
    ...trpc.enentities.find.queryOptions({ query }),
    placeholderData: d => d
  })

  const human = useMemo(() => formatQuery(query, {
    format: 'natural_language',
    fields
  }), [query])
  return (
    <div className="grid grid-cols-2">
      <QueryBuilder fields={fields} query={query} onQueryChange={setQuery}  />
      <p>{human}</p>
      <GridView data={q.data ?? []} toString={(rec) => `${rec.title} [${rec.slug}]`} />
      <InsertClient />
    </div>
  );
}
