import { db } from "@/db";
import { linksTable } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";

export async function getLinks() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

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

export function getLink(id: number) {
  return db.select().from(linksTable).where(eq(linksTable.id, id));
}
