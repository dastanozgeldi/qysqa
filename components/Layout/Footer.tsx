import { IoLogoGithub, IoMail } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Footer = ({ links }: { links: { label: string; href: string }[] }) => {
  const items = links.map((link) => (
    <Link key={link.label} href={link.href}>
      {link.label}
    </Link>
  ));

  return (
    <footer className="text-lg border-t-2 py-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mx-8">
        <Logo />
        <div className="flex gap-4 text-lg">{items}</div>
        <div className="flex gap-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Dositan/"
          >
            <IoLogoGithub size={32} strokeWidth={2} />
          </a>
          <a target="_blank" rel="noreferrer" href="mailto:ozgdastan@gmail.com">
            <IoMail size={32} strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
