import React, { useState } from "react";

const CopyLink = ({ link }: { link: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
    return setIsCopied(true);
  }

  return (
    <div className="mt-[5vh]">
      <input className="mb-2" readOnly value={link} />
      <button onClick={() => copyTextToClipboard(link)}>
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyLink;
