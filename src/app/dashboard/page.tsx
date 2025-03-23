import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { getLinks } from "@/db/query";
import { createShortLink } from "./_actions";
import { LinkCard } from "./link-card";

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
            <Tabs defaultValue="recent" className="w-full">
              <TabsList>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="top">Popular</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2 mt-4">
                <Input placeholder="Search links..." className="max-w-sm" />
              </div>

              <TabsContent value="recent" className="mt-4">
                <div className="grid gap-4">
                  {links?.map((link) => (
                    <LinkCard key={link.id} link={link} />
                  ))}
                </div>
              </TabsContent>
              {/* TODO: filter by clicks */}
              <TabsContent value="top" className="mt-4">
                <div className="grid gap-4">
                  {links?.map((link) => (
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
