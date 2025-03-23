import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Copy, ExternalLink, Plus, Trash2 } from "lucide-react";
import { db } from "@/db";
import { linksTable, SelectLink } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";
import { desc, eq } from "drizzle-orm";

// Server action to create a new shortened link
async function createShortLink(formData: FormData, userId: string | null) {
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

async function getLinks(userId: string | null) {
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

export default async function Dashboard() {
  const { userId } = await auth();
  const links = await getLinks(userId);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 px-4 md:px-6 py-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage and track your shortened links
              </p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Create New Link
            </Button>
          </div>

          <Card className="border-primary/20">
            <CardContent className="px-6">
              <form
                action={async (formData) => {
                  "use server";
                  await createShortLink(formData, userId);
                }}
                className="flex flex-col md:flex-row gap-4"
              >
                <Input
                  type="url"
                  name="url"
                  placeholder="Paste your long URL here"
                  className="flex-1 h-12"
                  required
                />
                <Button type="submit" className="h-12 px-6">
                  Shorten Link
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All Links</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="top">Top Performing</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2 mt-4">
                <Input placeholder="Search links..." className="max-w-sm" />
              </div>
              <TabsContent value="all" className="mt-4">
                <div className="grid gap-4">
                  {links?.map((link) => (
                    <LinkCard key={link.id} link={link} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="recent" className="mt-4">
                <div className="grid gap-4">
                  {links?.slice(0, 3).map((link) => (
                    <LinkCard key={link.id} link={link} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="top" className="mt-4">
                <div className="grid gap-4">
                  {links?.slice(2, 5).map((link) => (
                    <LinkCard key={link.id} link={link} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

function LinkCard({ link }: { link: SelectLink }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-medium truncate">
                <Link href={`/stats/${link.id}`} className="hover:underline">
                  qysqa.link/{link.slug}
                </Link>
              </h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Copy className="h-3.5 w-3.5" />
                <span className="sr-only">Copy link</span>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground truncate">
              {link.originalUrl}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <BarChart3 className="h-4 w-4" /> {link.clicks} clicks
            </span>
            <span>Created {link.createdAt.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/stats/${link.id}`}>
                <BarChart3 className="h-4 w-4 mr-1" /> Stats
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={link.slug} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" /> Visit
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 text-destructive"
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
