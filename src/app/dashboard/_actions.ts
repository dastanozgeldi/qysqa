import { db } from "@/db";
import { linksTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";

export async function createShortLink(
  formData: FormData,
  userId: string | null
) {
  const url = formData.get("url") as string;

  if (!url) {
    throw new Error("URL is required");
  }

  try {
    // Generate a short, unique identifier
    const shortId = nanoid(6);

    // Insert the new link into the database
    await db.insert(linksTable).values({
      userId,
      slug: shortId,
      originalUrl: url,
    });

    // Revalidate the dashboard page to show the new link
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Error creating short link:", error);
    throw new Error("Failed to create short link");
  }
}
