import axios, { AxiosRequestConfig } from "axios";
import { FormEvent, useState } from "react";
import CopyLink from "./CopyLink";

const CreateLink = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [formSaved, setFormSaved] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (url.trim() && slug.trim()) {
      const config: AxiosRequestConfig = {
        method: "POST",
        url: "/api/add",
        headers: {
          "Content-Type": "application/json",
        },
        data: { url, slug },
      };
      await axios(config);
      setFormSaved(true);
    }
  };

  return (
    <form
      className="max-w-[700px] text-center my-[20vh] mx-auto p-4"
      onSubmit={handleSubmit}
    >
      <h1>&lt; URL Shortener &gt;</h1>
      <input
        placeholder="https://dositan-links.vercel.app"
        onChange={(e) => setUrl(e.target.value)}
      />
      <div className="w-full flex py-1">
        <h3 className="text-xl mt-3 mr-2 font-bold">https://qysqa.xyz/</h3>
        <input
          className="focus:border-darker-secondary"
          placeholder="Custom token [optional]"
          onChange={(e) => setSlug(e.target.value)}
        />
      </div>
      <button className="hover:bg-darker-secondary">Shorten</button>
      {formSaved ? (
        <CopyLink link={`${window.location.origin}/go/${slug}`} />
      ) : null}
    </form>
  );
};

export default CreateLink;
