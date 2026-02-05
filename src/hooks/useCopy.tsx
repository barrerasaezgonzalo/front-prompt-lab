import { useState } from "react";

export const useCopy = (timeout = 2000) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string | undefined) => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), timeout);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return { isCopied, copy };
};
