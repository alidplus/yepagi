import { relations } from "drizzle-orm";
import { int, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { pk, timestamp } from "./utils";

// User Table
export const users = sqliteTable("users", {
  id: pk(),
  email: text("email", { length: 255 }).notNull().unique(),
  username: text("username", { length: 50 }).notNull().unique(),
  password: text("password_hash", { length: 255 }).notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
export const usersRelations = relations(users, ({ one }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
}));

// Profile Table
export const profiles = sqliteTable(
  "profiles",
  {
    id: pk(),
    userId: int("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    fullName: text("full_name", { length: 100 }),
    bio: text("bio"),
    avatarUrl: text("avatar_url", { length: 255 }),
    coverUrl: text("cover_url", { length: 255 }),
    slug: text("slug", { length: 50 }).notNull().unique(),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
  },
  (table) => [uniqueIndex("slug_idx").on(table.slug)],
);
export const profilesRelations = relations(profiles, ({ one, many }) => ({
  user: one(users, {
    fields: [profiles.userId],
    references: [users.id],
  }),
  socialLinks: many(socialLinks),
}));

// SocialLink Table
export const socialLinks = sqliteTable(
  "social_links",
  {
    id: pk(),
    profileId: int("profile_id")
      .notNull()
      .references(() => profiles.id, { onDelete: "cascade" }),
    platform: text("platform", { length: 50 }).notNull(), // e.g., "twitter", "linkedin"
    url: text("url", { length: 255 }).notNull(),
    displayText: text("display_text", { length: 100 }),
    order: int("order").default(0).notNull(), // For sorting links
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
  },
  (table) => [
    uniqueIndex("profile_order_idx").on(table.profileId, table.order),
  ],
);
export const socialLinksRelations = relations(socialLinks, ({ one }) => ({
  profile: one(profiles, {
    fields: [socialLinks.profileId],
    references: [profiles.id],
  }),
}));

// Collections Table
export const collections = sqliteTable("collections", {
  id: pk(),
  title: text("title", { length: 255 }).notNull(),
  slug: text("slug", { length: 50 }).notNull().unique(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
export const collectionsRelations = relations(collections, ({ many }) => ({
  fields: many(fields),
}));

// Fields Table
export const fields = sqliteTable("fields", {
  id: pk(),
  title: text("title", { length: 255 }).notNull(),
  key: text("key", { length: 50 }).notNull().unique(),
  type: text("type", { length: 50 }).notNull(),
  collectionId: int("collection_id")
    .references(() => collections.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
export const fieldsRelations = relations(fields, ({ one }) => ({
  collection: one(collections, {
    fields: [fields.collectionId],
    references: [collections.id],
  }),
}));
