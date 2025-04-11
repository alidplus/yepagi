import * as dz from "drizzle-zod";
import { z } from "zod";
import { collections } from "./schema";
import { COMMON_SCHEMA_FIELDS } from "./utils";

const PROTECTED_SCHEMA_FIELDS = {
} as const

export const table = collections;
// export const relations = usersRelations;

export const zSelectSchema = dz.createSelectSchema(table)
.omit(PROTECTED_SCHEMA_FIELDS);
export type TSelect = z.infer<typeof zSelectSchema>;

export const zInsertSchema = dz.createInsertSchema(table)
.omit(COMMON_SCHEMA_FIELDS)
export type TInsert = z.infer<typeof zInsertSchema>;

export const zUpdateSchema = dz.createUpdateSchema(table)
.omit(COMMON_SCHEMA_FIELDS)
.omit(PROTECTED_SCHEMA_FIELDS)
export type TUpdate = z.infer<typeof zUpdateSchema>;
