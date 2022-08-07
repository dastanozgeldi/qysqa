import Link from "next/link";

const Header = ({ links }: { links: { label: string; href: string }[] }) => {
  const items = links.map((link) => (
    <Link key={link.label} href={link.href}>
      {link.label}
    </Link>
  ));

  return (
    <nav className="text-[18px] border-b-[1px] py-5">
      <ul className="px-8 flex items-center justify-between list-none">
        <li>
          <Link href="/">qysqa - url shortener</Link>
        </li>
        <div className="flex gap-4">{items}</div>
      </ul>
    </nav>
  );
};

export default Header;
