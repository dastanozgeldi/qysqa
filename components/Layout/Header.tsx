import Link from "next/link";
import Logo from "./Logo";

const Header = ({ links }: { links: { label: string; href: string }[] }) => {
  const items = links.map((link) => (
    <Link key={link.label} href={link.href}>
      {link.label}
    </Link>
  ));

  return (
    <header className="text-lg border-b-2 py-4">
      <ul className="px-8 flex items-center justify-between list-none">
        <Logo />
        <div className="flex gap-4">{items}</div>
      </ul>
    </header>
  );
};

export default Header;
