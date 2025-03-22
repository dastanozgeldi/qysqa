import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image alt="logo" src="/logo.png" width={20} height={20} />
          <span className="text-sm font-medium">qysqa.link</span>
        </Link>
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
  );
}
