import * as dz from "drizzle-zod";
import { z } from "zod";
import { users, usersRelations } from "./schema";
import { COMMON_SCHEMA_FIELDS } from "./utils";
import zodToJsonSchema from "zod-to-json-schema";

const PROTECTED_SCHEMA_FIELDS = {
  password: true,
} as const;

export const table = users;
export const relations = usersRelations;

export const zSelectSchema = dz
  .createSelectSchema(table)
  .omit(PROTECTED_SCHEMA_FIELDS);
export const selectSchema = zodToJsonSchema(zSelectSchema, "userSelectSchema");
export type TSelect = z.infer<typeof zSelectSchema>;

export const zInsertSchema = dz
  .createInsertSchema(table)
  .omit(COMMON_SCHEMA_FIELDS);
export type TInsert = z.infer<typeof zInsertSchema>;
export const insertSchema = zodToJsonSchema(zInsertSchema, "userInsertSchema");

export const zUpdateSchema = dz
  .createUpdateSchema(table)
  .omit(COMMON_SCHEMA_FIELDS)
  .omit(PROTECTED_SCHEMA_FIELDS);
export type TUpdate = z.infer<typeof zUpdateSchema>;
