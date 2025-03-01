import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import * as dz from 'drizzle-zod';
import { z } from "zod";

export const table = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const zSelectSchema = dz.createSelectSchema(table);
export type TSelect = z.infer<typeof zInsertSchema>;

export const zInsertSchema = dz.createInsertSchema(table);
export type TInsert = z.infer<typeof zInsertSchema>;

export const zUpdateSchema = dz.createUpdateSchema(table);
export type TUpdate = z.infer<typeof zUpdateSchema>;
