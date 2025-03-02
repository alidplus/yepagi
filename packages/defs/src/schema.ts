import { relations } from 'drizzle-orm';
import { int, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { pk, timestamp } from './utils';

// User Table
export const users = sqliteTable('users', {
  id: pk(),
  email: text('email', { length: 255 }).notNull().unique(),
  username: text('username', { length: 50 }).notNull().unique(),
  passwordHash: text('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

// Profile Table
export const profiles = sqliteTable('profiles', {
  id: pk(),
  userId: int('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  fullName: text('full_name', { length: 100 }),
  bio: text('bio'),
  avatarUrl: text('avatar_url', { length: 255 }),
  backgroundImageUrl: text('background_image_url', { length: 255 }),
  slug: text('slug', { length: 50 }).notNull().unique(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
}, (table) => ([
  uniqueIndex('slug_idx').on(table.slug)
]));

// SocialLink Table
export const socialLinks = sqliteTable('social_links', {
  id: pk(),
  profileId: int('profile_id')
    .notNull()
    .references(() => profiles.id, { onDelete: 'cascade' }),
  platform: text('platform', { length: 50 }).notNull(), // e.g., "twitter", "linkedin"
  url: text('url', { length: 255 }).notNull(),
  displayText: text('display_text', { length: 100 }),
  order: int('order').default(0).notNull(), // For sorting links
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
}, (table) => ([
  uniqueIndex('profile_order_idx').on(table.profileId, table.order)
]));

// Relations
export const usersRelations = relations(users, ({ one }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
}));

export const profilesRelations = relations(profiles, ({ one, many }) => ({
  user: one(users, {
    fields: [profiles.userId],
    references: [users.id],
  }),
  socialLinks: many(socialLinks),
}));

export const socialLinksRelations = relations(socialLinks, ({ one }) => ({
  profile: one(profiles, {
    fields: [socialLinks.profileId],
    references: [profiles.id],
  }),
}));