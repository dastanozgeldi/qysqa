import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Copy,
  ExternalLink,
  LinkIcon,
  Plus,
  Trash2,
} from "lucide-react";
import { Logo } from "@/components/logo";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-4 md:px-6 flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <span className="text-sm">user@example.com</span>
            <Button variant="outline" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </header>
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
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="url"
                  placeholder="Paste your long URL here"
                  className="flex-1 h-12"
                />
                <Button className="h-12 px-6">Shorten Link</Button>
              </div>
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
                  {demoLinks.map((link) => (
                    <LinkCard key={link.id} link={link} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="recent" className="mt-4">
                <div className="grid gap-4">
                  {demoLinks.slice(0, 3).map((link) => (
                    <LinkCard key={link.id} link={link} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="top" className="mt-4">
                <div className="grid gap-4">
                  {demoLinks.slice(2, 5).map((link) => (
                    <LinkCard key={link.id} link={link} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LinkIcon className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">qysqa.link</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} qysqa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function LinkCard({ link }: { link: (typeof demoLinks)[0] }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-medium truncate">
                <Link href={`/stats/${link.id}`} className="hover:underline">
                  {link.shortUrl}
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
            <span>Created {link.created}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/stats/${link.id}`}>
                <BarChart3 className="h-4 w-4 mr-1" /> Stats
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={link.shortUrl} target="_blank" rel="noopener noreferrer">
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

const demoLinks = [
  {
    id: "1",
    shortUrl: "qysqa.link/promo24",
    originalUrl:
      "https://example.com/very/long/url/for/special/promotion/spring/2024/campaign",
    clicks: 1245,
    created: "2 days ago",
  },
  {
    id: "2",
    shortUrl: "qysqa.link/blog",
    originalUrl:
      "https://myblog.example.com/posts/how-to-use-link-shorteners-effectively",
    clicks: 873,
    created: "1 week ago",
  },
  {
    id: "3",
    shortUrl: "qysqa.link/shop",
    originalUrl:
      "https://mystore.example.com/products/category/electronics/smartphones",
    clicks: 2156,
    created: "2 weeks ago",
  },
  {
    id: "4",
    shortUrl: "qysqa.link/event",
    originalUrl:
      "https://events.example.com/2024/annual-tech-conference/registration",
    clicks: 542,
    created: "3 weeks ago",
  },
  {
    id: "5",
    shortUrl: "qysqa.link/app",
    originalUrl:
      "https://play.google.com/store/apps/details?id=com.example.myapp",
    clicks: 1689,
    created: "1 month ago",
  },
];
