import { db } from "@/db";
import { linksTable } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function getLinks(userId: string | null) {
  if (!userId) return;

  try {
    const links = await db
      .select()
      .from(linksTable)
      .where(eq(linksTable.userId, userId))
      .orderBy(desc(linksTable.createdAt))
      .limit(50);

    return links;
  } catch (error) {
    console.error("Error fetching links:", error);
    return [];
  }
}
