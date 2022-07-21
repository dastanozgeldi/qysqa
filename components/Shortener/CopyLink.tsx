import React, { useState } from "react";

type CopyLinkParams = {
  link: string;
};

const CopyLink = ({ link }: CopyLinkParams) => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
    return setIsCopied(true);
  }

  return (
    <div style={{ marginTop: "5vh" }}>
      <input readOnly value={link} />
      <button onClick={() => copyTextToClipboard(link)}>
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyLink;
