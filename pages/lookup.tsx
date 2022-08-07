import { useState } from "react";
import Page from "../components/Layout/Page";
import CopyLink from "../components/CopyLink";

const Lookup = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  async function fetchData(slug: string) {
    const res = await fetch(`/api/get-url/${slug}`);
    const data = await res.json();
    setOriginalUrl(data.url);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const splitUrl = shortLink.trim().split("/");
    const slug = splitUrl[splitUrl.length - 1];

    if (slug) {
      await fetchData(slug);
      setButtonClicked(true);
    }
  };

  return (
    <Page title="URL Lookup">
      <form className="mx-auto px-8" onSubmit={handleSubmit}>
        <h2 className="text-center">&lt; URL Lookup &gt;</h2>
        <input
          className="mb-2"
          placeholder={`https://qysqa.dosek.xyz/go/mylinkedin`}
          onChange={(e) => setShortLink(e.target.value)}
        />
        <button className="hover:bg-darker-secondary">Get Original Link</button>
        {buttonClicked && <CopyLink link={originalUrl} />}
      </form>
    </Page>
  );
};

export default Lookup;
