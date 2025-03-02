ALTER TABLE `users_table` RENAME TO `users`;--> statement-breakpoint
CREATE TABLE `profiles` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`full_name` text(100),
	`bio` text,
	`avatar_url` text(255),
	`background_image_url` text(255),
	`slug` text(50) NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `profiles_slug_unique` ON `profiles` (`slug`);--> statement-breakpoint
CREATE UNIQUE INDEX `slug_idx` ON `profiles` (`slug`);--> statement-breakpoint
CREATE TABLE `social_links` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profile_id` integer NOT NULL,
	`platform` text(50) NOT NULL,
	`url` text(255) NOT NULL,
	`display_text` text(100),
	`order` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `profile_order_idx` ON `social_links` (`profile_id`,`order`);--> statement-breakpoint
DROP INDEX `users_table_email_unique`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text(255) NOT NULL,
	`username` text(50) NOT NULL,
	`password_hash` text(255) NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_users`("id", "email", "username", "password_hash", "created_at", "updated_at") SELECT "id", "email", "username", "password_hash", "created_at", "updated_at" FROM `users`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
ALTER TABLE `__new_users` RENAME TO `users`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);