import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (!isConfirmingCopy) return;
    const timeout = setTimeout(() => {
      setIsConfirmingCopy(false);
    }, 3000);
    return () => clearTimeout(timeout); //cleanup function
  }, [isConfirmingCopy]); // dependency array; useEffect is only running if isConfirmingCopy state changes

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
