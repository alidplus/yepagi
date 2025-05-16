import * as dz from "drizzle-zod";
import { z } from "zod";
import { profiles, profilesRelations } from "./schema";
import { sqliteTable } from "drizzle-orm/sqlite-core";
import { pk, timestamp } from "./utils";

export const table = sqliteTable("common", {
  id: pk(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
export const relations = undefined;

export const zSelectSchema = dz.createSelectSchema(table);
export type TSelect = z.infer<typeof zInsertSchema>;

export const zInsertSchema = dz.createInsertSchema(table);
export type TInsert = z.infer<typeof zInsertSchema>;

export const zUpdateSchema = dz.createUpdateSchema(table);
export type TUpdate = z.infer<typeof zUpdateSchema>;
