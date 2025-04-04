import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, LinkIcon, BarChart3, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                <span className="font-medium">#1 link shortener in 🇰🇿</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Short links, big impact
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Create short, memorable links in seconds with qysqa.link - the
                fastest way to share your content online.
              </p>
            </div>
            <Card className="mx-auto max-w-3xl shadow-lg border-primary/20">
              <CardContent className="px-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    type="url"
                    placeholder="Paste your long URL here"
                    className="flex-1 h-12"
                  />
                  <Button className="h-12" asChild>
                    <Link href="/dashboard">
                      Shorten <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  By using our service, you agree to our Terms of Service and
                  Privacy Policy
                </p>
              </CardContent>
            </Card>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Create short links in seconds with our optimized platform.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Detailed Analytics</h3>
                <p className="text-muted-foreground">
                  Track clicks, locations, and devices with our powerful
                  dashboard.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Secure & Reliable</h3>
                <p className="text-muted-foreground">
                  Your links are safe with us, with 99.9% uptime guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-background">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Powerful features for everyone
              </h2>
              <p className="max-w-[700px] text-muted-foreground">
                Everything you need to manage and track your links in one place.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-primary/10">
                  <CardContent className="px-6">
                    <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-muted/30">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                How qysqa works
              </h2>
              <p className="max-w-[700px] text-muted-foreground">
                Three simple steps to create and share your shortened links.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-medium mb-2">Paste your URL</h3>
                <p className="text-muted-foreground">
                  Enter your long URL into the shortener field.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-medium mb-2">
                  Get your short link
                </h3>
                <p className="text-muted-foreground">
                  Our system generates a short, memorable qysqa.link URL.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-medium mb-2">Share anywhere</h3>
                <p className="text-muted-foreground">
                  Share your short link on social media, emails, or messages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-800 text-primary-foreground">
          <div className="px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Ready to start?
            </h2>
            <p className="max-w-[700px] mx-auto mb-8 opacity-90">
              join thousands of users who trust their links to qysqa.
            </p>
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Get started free forever
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

const features = [
  {
    icon: <LinkIcon className="h-5 w-5 text-primary" />,
    title: "Custom Short Links",
    description:
      "Create branded, memorable links with your own custom keywords.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-primary" />,
    title: "Advanced Analytics",
    description:
      "Track clicks, geographic data, referrers, and more in real-time.",
  },
  {
    icon: <Shield className="h-5 w-5 text-primary" />,
    title: "Link Management",
    description:
      "Organize, edit, and manage all your links from one dashboard.",
  },
];
