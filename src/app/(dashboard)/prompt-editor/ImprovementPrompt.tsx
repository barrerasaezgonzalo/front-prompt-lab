"use client";

import { useCopy } from "@/hooks/useCopy";
import { Copy, Check, Sparkles } from "lucide-react";
import { useRef } from "react";

export function ImprovementPrompt() {
  const { isCopied, copy } = useCopy();
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="bg-zinc-800 border-l-4 border-cyan-500 rounded-lg p-4"
      id="improved-prompt"
    >
      <h4 className="text-sm font-semibold text-gray-200 mb-2 flex items-center justify-between gap-2">
        <p className="flex items-center gap-2">
          <Sparkles size={16} /> Propuesta de Prompt Mejorado
        </p>

        <button
          onClick={() => copy(textRef.current?.innerText)}
          className="px-3 py-1 text-xs bg-zinc-700 hover:bg-zinc-500 rounded flex justify-between gap-2 cursor-pointer"
        >
          {isCopied ? <Check size={18} color="#2ecc71" /> : <Copy size={18} />}
          <span style={{ marginLeft: "8px" }}>
            {isCopied ? "Copiado" : "Copiar"}
          </span>
        </button>
      </h4>
      <div
        ref={textRef}
        className="w-full min-h-24 p-2 bg-zinc-900 border border-zinc-700 rounded text-sm text-gray-200 resize-none"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex corporis
        inventore voluptates deleniti molestias hic similique facere, libero
        quasi sit eum nam natus ea sint laborum cupiditate. Excepturi, suscipit
        atque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
        corporis inventore voluptates deleniti molestias hic similique facere,
        libero quasi sit eum nam natus ea sint laborum cupiditate. Excepturi,
        suscipit atque! Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Ex corporis inventore voluptates deleniti molestias hic similique
        facere, libero quasi sit eum nam natus ea sint laborum cupiditate.
        Excepturi, suscipit atque! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Ex corporis inventore voluptates deleniti molestias
        hic similique facere, libero quasi sit eum nam natus ea sint laborum
        cupiditate. Excepturi, suscipit atque! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Ex corporis inventore voluptates deleniti
        molestias hic similique facere, libero quasi sit eum nam natus ea sint
        laborum cupiditate. Excepturi, suscipit atque!
      </div>
    </div>
  );
}
