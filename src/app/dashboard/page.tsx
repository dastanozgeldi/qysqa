import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLinks } from "@/db/queries";
import { LinkCard } from "./link-card";
import { CreateLinkDialog } from "./create-link-dialog";

export default async function Dashboard() {
  const links = await getLinks();

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
            <CreateLinkDialog />
          </div>

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
