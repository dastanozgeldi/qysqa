import React, { useState } from "react";

type CopyLinkParams = {
  shortLink: string;
};

const CopyLink = ({ shortLink }: CopyLinkParams) => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
    return setIsCopied(true);
  }

  return (
    <div style={{ marginTop: "5vh" }}>
      <input readOnly value={shortLink} />
      <button onClick={() => copyTextToClipboard(shortLink)}>
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyLink;
