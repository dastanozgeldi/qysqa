import Image from "next/image";

const WhatIsQysqa = () => {
  return (
    <div className="p-4 md:flex md:gap-8">
      <div className="m-0 md:mt-12 md:ml-12">
        <h1>🤔 What Is Qysqa?</h1>
        <p>~ Qysqa is an open-source URL shortener project.</p>
        <p>Qysqa makes it easy for you to shorten your long-long links</p>
        <p>
          It was created using <span className="text-secondary">Next.js + TailwindCSS</span>
          {". "}
        </p>
        <p>Paste Link → Shorten → Use</p>
      </div>
      <Image
        src="/images/what-is-qysqa.png"
        width={720}
        height={480}
        alt="Qysqa Interface"
      />
    </div>
  );
};

export default WhatIsQysqa;
