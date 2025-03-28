import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image alt="logo" src="/logo.png" width={24} height={24} />
      <span className="text-xl font-bold">qysqa.link</span>
    </Link>
  );
}
