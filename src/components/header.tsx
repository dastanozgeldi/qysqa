"use client";

import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 md:px-6 flex h-16 items-center justify-between">
        <Logo />

        {pathname === "/" && (
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
        )}

        <div className="flex items-center gap-4">
          <div className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton>
                <Button variant="outline" size="sm">
                  Sign in
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button size="sm">Sign up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              {pathname !== "/dashboard" && (
                <Button size="sm" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              )}
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
