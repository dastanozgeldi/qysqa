"use server";
import { db } from "@/db";
import { linksTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";
import { auth } from "@clerk/nextjs/server";

export async function createLinkAction(prevState: unknown, formData: FormData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const url = formData.get("url") as string;
  const customSlug = formData.get("slug") as string;

  if (!url) {
    throw new Error("URL is required");
  }

  try {
    // Generate a short, unique identifier
    const slug = customSlug || nanoid(6);

    // Insert the new link into the database
    await db.insert(linksTable).values({
      userId,
      slug,
      originalUrl: url,
    });

    // Revalidate the dashboard page to show the new link
    revalidatePath("/dashboard");
    return { status: "success" };
  } catch (error) {
    console.error("Error creating short link:", error);
    return { status: "error" };
  }
}
