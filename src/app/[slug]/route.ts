import { db } from "@/db";
import { linksTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    // Find the link in the database
    const [link] = await db
      .select()
      .from(linksTable)
      .where(eq(linksTable.slug, slug))
      .limit(1);

    if (!link) {
      return new Response("Link not found", { status: 404 });
    }

    // TODO: implement ratelimits before widespread use

    // Increment the click count
    await db
      .update(linksTable)
      .set({ clicks: link.clicks + 1 })
      .where(eq(linksTable.id, link.id));

    // Redirect to the original URL
    // return Response.json({ yo: link.originalUrl });
    return Response.redirect(link.originalUrl);
  } catch (error) {
    console.error("Error processing redirect:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
