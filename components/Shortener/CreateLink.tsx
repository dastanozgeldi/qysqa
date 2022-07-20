import styled from "@emotion/styled";
import axios, { AxiosRequestConfig } from "axios";
import { FormEvent, useState } from "react";
import CopyLink from "./CopyLink";

const Section = styled.main`
  .form {
    max-width: 700px;
    text-align: center;
    margin: 20vh auto;
    padding: 1rem;
  }

  .form input {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid #fc913a;
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
  }

  .form button {
    width: 100%;
    background: #fc913a;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: #fff;
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin-top: -4px;
    font-weight: 700;
  }

  input:focus {
    border-color: #f98424;
  }

  .form button:hover {
    background: #f98424;
  }

  .url {
    width: 100%;
  }

  .token {
    width: 100%;
    display: flex;
    padding: 0.3rem 0;
  }

  .token > h3 {
    font-size: 20px;
    margin: 12px 8px 0 0;
  }

  .token > input {
    width: 100%;
  }
`;

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
    <Section>
      <form className="form" onSubmit={handleSubmit}>
        <h1>&lt; URL Shortener &gt;</h1>
        <input
          className="url"
          placeholder="https://dositan-links.vercel.app"
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className="token">
          <h3>https://qysqa.xyz/</h3>
          <input
            placeholder="Custom token [optional]"
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>
        <button>Shorten</button>
        {formSaved ? (
          <CopyLink shortLink={`${window.location.origin}/go/${slug}`} />
        ) : null}
      </form>
    </Section>
  );
};

export default CreateLink;
