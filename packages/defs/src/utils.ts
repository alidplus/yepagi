import { sql } from "drizzle-orm";
import { integer } from "drizzle-orm/sqlite-core";

export const timestamp = (name: string) =>
  integer(name, { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => sql`CURRENT_TIMESTAMP`);

export const pk = () => integer().primaryKey({ autoIncrement: true });
