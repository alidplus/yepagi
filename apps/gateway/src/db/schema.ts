import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import * as dz from 'drizzle-zod';

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const zUserSelectSchema = dz.createSelectSchema(usersTable);
export const zUserInsertSchema = dz.createInsertSchema(usersTable);
