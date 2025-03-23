import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLink } from "@/db/queries";
import {
  ArrowLeft,
  Copy,
  ExternalLink,
  BarChart3,
  // Globe,
  // Smartphone,
  // Tablet,
} from "lucide-react";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [link] = await getLink(Number(id));

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-8 px-6">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
              </Link>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Link Statistics
              </h1>
              <p className="text-muted-foreground">
                Detailed analytics for your shortened link
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Copy className="h-4 w-4" /> Copy Link
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={link.slug} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" /> Visit
                </a>
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                qysqa.link/{link.slug}
              </CardTitle>
              <CardDescription className="truncate">
                Destination URL: {link.originalUrl}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Clicks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{link.clicks}</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last week
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Unique Visitors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {Math.floor(link.clicks * 0.7)}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +5% from last week
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Avg. Click Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1.2s</div>
                    <p className="text-xs text-muted-foreground">
                      -0.3s from last week
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="referrers">Referrers</TabsTrigger>
              <TabsTrigger value="devices">Devices</TabsTrigger>
              <TabsTrigger value="locations">Locations</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Click Activity</CardTitle>
                  <CardDescription>
                    Click distribution over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                    <BarChart3 className="h-16 w-16 text-muted" />
                    <span className="ml-2 text-muted-foreground">
                      Chart visualization would appear here
                    </span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* <TabsContent value="referrers" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Top Referrers</CardTitle>
                  <CardDescription>
                    Where your traffic is coming from
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {referrers.map((referrer, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span>{referrer.source}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            {referrer.clicks} clicks
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({referrer.percentage}%)
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent> */}
            {/* <TabsContent value="devices" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Device Breakdown</CardTitle>
                  <CardDescription>
                    What devices your visitors are using
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-muted-foreground" />
                        <span>Mobile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">642 clicks</span>
                        <span className="text-xs text-muted-foreground">
                          (52%)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tablet className="h-4 w-4 text-muted-foreground" />
                        <span>Desktop</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">498 clicks</span>
                        <span className="text-xs text-muted-foreground">
                          (40%)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tablet className="h-4 w-4 text-muted-foreground" />
                        <span>Tablet</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">105 clicks</span>
                        <span className="text-xs text-muted-foreground">
                          (8%)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent> */}
            {/* <TabsContent value="locations" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>
                    Where your visitors are located
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                    <Globe className="h-16 w-16 text-muted" />
                    <span className="ml-2 text-muted-foreground">
                      Map visualization would appear here
                    </span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent> */}
          </Tabs>
        </div>
      </main>
    </div>
  );
}
