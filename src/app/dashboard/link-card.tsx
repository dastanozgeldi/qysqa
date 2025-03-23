"use client";

import { formatDistance } from "date-fns";
import Link from "next/link";
import { BarChart3, Copy, ExternalLink, Trash2, Check } from "lucide-react";
import { SelectLink } from "@/db/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

export function LinkCard({ link }: { link: SelectLink }) {
  const [showTick, setShowTick] = useState(false);

  const copyToClipboard = async () => {
    try {
      const shortUrl = `qysqa.link/${link.slug}`;
      await navigator.clipboard.writeText(shortUrl);
      setShowTick(true);
      toast.success("Copied to clipboard!");

      // Reset to copy icon after 1 second
      setTimeout(() => {
        setShowTick(false);
      }, 3000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

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
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 rounded-full"
                onClick={copyToClipboard}
              >
                {showTick ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span className="sr-only">Copy link</span>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground truncate">
              {link.originalUrl}
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <BarChart3 className="h-4 w-4" /> {link.clicks} clicks
            </span>
            <span>
              {formatDistance(link.createdAt, new Date(), { addSuffix: true })}
            </span>
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
