import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 text-xl font-bold cursor-pointer">
        <Image src="/images/logo.png" width={40} height={38} alt="Qysqa Logo" />
        Qysqa
      </div>
    </Link>
  );
};

export default Logo;
