import { useState } from "react";

export default function CopyToClipboard({ text }) {
  const [isConfirmingCopy, setIsConfirmingCopy] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setIsConfirmingCopy(true);
    } catch (error) {
      console.error(error.message);
    }
  }
  // console.log(text);

  return (
    <button
      className="color-card__copy-button"
      type="button"
      aria-label="copy-hex-code-button"
      onClick={handleCopy}
    >
      {isConfirmingCopy ? "successfully copied!" : "copy"}
    </button>
  );
}
