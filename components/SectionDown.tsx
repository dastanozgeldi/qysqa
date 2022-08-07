import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";

const SectionDown = ({ label, href }: { label: string; href: string }) => {
  return (
    <div className="font-bold">
      <Link href={href}>
        <div
          className={`fixed bg-gray-900 z-10 bottom-0 right-0 flex items-center gap-2 cursor-pointer m-4 px-4 py-2 rounded-full hover:bg-gray-700 hover:duration-300`}
        >
          {label}
          <IoChevronDown width={24} height={24} />
        </div>
      </Link>
    </div>
  );
};

export default SectionDown;
