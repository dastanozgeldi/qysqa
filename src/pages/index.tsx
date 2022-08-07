import type { NextPage } from "next";
import { useState } from "react";
import Page from "../components/Layout/Page";
import CopyLink from "../components/CopyLink";

const Home: NextPage = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [formSaved, setFormSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (url.trim() && slug.trim()) {
      const data = { url, slug };
      await fetch("/api/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setFormSaved(true);
    }
  };

  return (
    <Page title="Home">
      <form className="mx-auto px-8" onSubmit={handleSubmit}>
        <h2 className="text-center">&lt; URL Shortener &gt;</h2>
        <input
          placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          onChange={(e) => setUrl(e.currentTarget.value)}
        />
        <div className="flex items-center gap-2 my-2">
          <h3 className="text-xl font-bold">https://qysqa.xyz/</h3>
          <input
            placeholder="Custom token [optional]"
            onChange={(e) => setSlug(e.currentTarget.value)}
          />
        </div>
        <button>Shorten</button>
        {formSaved && (
          <CopyLink link={`${window.location.origin}/go/${slug}`} />
        )}
      </form>
    </Page>
  );
};

export default Home;
