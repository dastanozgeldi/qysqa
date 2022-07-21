import { useState, FormEvent } from "react";
import CopyLink from "./CopyLink";

const LookupLink = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  async function fetchData(slug: string) {
    const res = await fetch(`/api/get-url/${slug}`);
    const data = await res.json();
    setOriginalUrl(data.url);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const splitUrl = shortLink.trim().split("/");
    const slug = splitUrl[splitUrl.length - 1];

    if (slug) {
      await fetchData(slug);
      setButtonClicked(true);
    }
  };

  return (
    <form
      className="max-w-[700px] text-center my-[20vh] mx-auto p-4"
      onSubmit={handleSubmit}
    >
      <h1>&lt; URL Lookup &gt;</h1>
      <input
        placeholder={`https://qysqa.xyz/go/mylinkedin`}
        onChange={(e) => setShortLink(e.target.value)}
      />
      <button className="hover:bg-darker-secondary">Get Original Link</button>
      {buttonClicked ? <CopyLink link={originalUrl} /> : null}
    </form>
  );
};

export default LookupLink;
