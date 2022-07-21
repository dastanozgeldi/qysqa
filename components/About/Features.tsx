import Image from "next/image";

const Features = () => {
  return (
    <div className="text-[#000] bg-primary p-4">
      <div className="m-0 text-center">
        <h1>🚀 Features</h1>
        <div className="md:flex md:gap-4 md:justify-center">
          <Image
            src="/images/custom-url-tokens.png"
            alt="Custom URL Token Schema"
            width={720}
            height={480}
          />
          <div className="m-0 md:mt-24 md:mr-12">
            <h2>✨ Custom URL tokens</h2>
            <p>
              ~ With this technology, you can write your custom words for your
              short link
            </p>
            <p>
              This is optional, so in case if you leave it blank, the app will
              generate a random token for you
            </p>
            <p>
              At the end, you can use the resulting short link for your own
              purposes.
            </p>
          </div>
        </div>
        <div className="md:flex md:gap-4 md:justify-center">
          <div className="border-t-4 border-bg md:border-0 md:mt-24 md:ml-12">
            <h2>🔎 URL Lookup</h2>
            <p>~ This feature prevents you from visiting dangerous websites.</p>
            <p>URL lookup calls database with your short link.</p>
            <p>
              Then it returns the original URL and displays it on your screen.
            </p>
            <p>[Giving a screenshot of the website is planned]</p>
          </div>
          <Image
            src="/images/url-lookup.png"
            alt="URL Lookup Schema"
            width={720}
            height={480}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
