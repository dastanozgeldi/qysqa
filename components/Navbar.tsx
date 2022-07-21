import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-[18px] border-b-[1px] py-5">
      <ul className="px-8 flex items-center justify-between list-none">
        <li>
          <Link href="/">qysqa - url shortener</Link>
        </li>
        <div className="flex gap-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/lookup">Lookup</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
