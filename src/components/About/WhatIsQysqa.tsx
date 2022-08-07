import Image from "next/image";
import SectionDown from "../SectionDown";

const WhatIsQysqa = () => {
  return (
    <div className="h-screen md:flex md:items-center md:gap-8">
      <div>
        <h1>🤔 What Is Qysqa?</h1>
        <p>~ Qysqa is an open-source URL shortener project.</p>
        <p>Qysqa makes it easy for you to shorten your long-long links</p>
        <p>
          It was created using{" "}
          <span className="highlight">Next.js + TailwindCSS</span>
          {". "}
        </p>
        <p>Paste Link → Shorten → Use</p>
      </div>
      <Image
        className="rounded-xl"
        objectFit="cover"
        src="/images/what-is-qysqa.png"
        width={600}
        height={400}
        alt="Qysqa Interface"
      />
      <SectionDown label="features" href="#features" />
    </div>
  );
};

export default WhatIsQysqa;
