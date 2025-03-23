import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const linksTable = pgTable("links", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  slug: varchar("pathname", { length: 256 }).notNull().unique(),
  originalUrl: varchar("original_url", { length: 2048 }).notNull(),
  clicks: integer("clicks").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  userId: varchar("user_id", { length: 256 }), // Optional: for Clerk authentication
});
