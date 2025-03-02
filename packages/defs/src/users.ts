import * as dz from 'drizzle-zod';
import { z } from "zod";
import { users, usersRelations } from "./schema";

export const table = users
export const relations = usersRelations

export const zSelectSchema = dz.createSelectSchema(table);
export type TSelect = z.infer<typeof zInsertSchema>;

export const zInsertSchema = dz.createInsertSchema(table);
export type TInsert = z.infer<typeof zInsertSchema>;

export const zUpdateSchema = dz.createUpdateSchema(table);
export type TUpdate = z.infer<typeof zUpdateSchema>;
