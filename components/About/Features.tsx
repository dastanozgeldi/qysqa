import Image from "next/image";

const Features = () => {
  return (
    <div id="features">
      <div className="h-screen flex items-center text-black bg-primary">
        <div className="md:flex md:gap-4 md:justify-center md:items-center mx-8">
          <Image
            className="rounded-xl"
            objectFit="cover"
            src="/images/custom-url-tokens.png"
            alt="Custom URL Token Schema"
            width={720}
            height={480}
          />
          <div>
            <h2 className="text-center">✨ Custom URL tokens</h2>
            <p>
              ~ With this technology,{" "}
              <span className="highlight">you can write your custom words</span>{" "}
              for the short link
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
      </div>

      <div id="lookup" className="h-screen flex items-center mx-8 text-center">
        <div className="md:flex md:gap-4 md:justify-center md:items-center">
          <div>
            <h2>🔎 URL Lookup</h2>
            <p>~ This feature prevents you from visiting dangerous websites.</p>
            <p>URL lookup calls database with your short link.</p>
            <p>
              Then it returns the original URL and displays it on your screen.
            </p>
            <p>[Giving a screenshot of the website is planned]</p>
          </div>
          <Image
            className="rounded-xl"
            objectFit="cover"
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
