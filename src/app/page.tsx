import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ExternalLink,
  LinkIcon,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { Logo } from "@/components/logo";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-4 md:px-6 flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              How It Works
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>
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
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    type="url"
                    placeholder="Paste your long URL here"
                    className="flex-1 h-12"
                  />
                  <Button className="h-12 px-6">
                    Shorten <ArrowRight className="ml-2 h-4 w-4" />
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
                Everything you need to manage, track, and optimize your links in
                one place.
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

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Ready to start?
            </h2>
            <p className="max-w-[700px] mx-auto mb-8 opacity-90">
              Join thousands of users who trust their links to qysqa.
            </p>
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Get started free forever
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <div className="flex items-center gap-2">
            <Image alt="logo" src="/images/logo.png" width={20} height={20} />
            <span className="text-sm font-medium">qysqa.link</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} qysqa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
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
    icon: <Zap className="h-5 w-5 text-primary" />,
    title: "Fast Redirection",
    description:
      "Our optimized infrastructure ensures lightning-fast redirects.",
  },
  {
    icon: <ExternalLink className="h-5 w-5 text-primary" />,
    title: "Bulk Shortening",
    description: "Shorten multiple URLs at once with our bulk shortening tool.",
  },
  {
    icon: <Shield className="h-5 w-5 text-primary" />,
    title: "Link Management",
    description:
      "Organize, edit, and manage all your links from one dashboard.",
  },
  {
    icon: <ArrowRight className="h-5 w-5 text-primary" />,
    title: "API Access",
    description:
      "Integrate our link shortening service into your own applications.",
  },
];
