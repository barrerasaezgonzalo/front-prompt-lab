"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ResourcesMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="w-full flex items-center justify-between px-3 py-2 rounded-md
             bg-zinc-800 hover:bg-zinc-700 overflow-y-auto cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm text-gray-200 font-medium">Recursos</span>

        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`
                h-50 
                overflow-y-auto 
                pr-2 
                scrollbar-thin 
                scrollbar-thumb-zinc-700  
                scrollbar-track-zinc-900 
                hover:scrollbar-thumb-zinc-600 
                transition-[max-height,opacity] 
                duration-600 
                ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-2 pl-2">
          <Link
            href="/templates"
            className="flex cursor-pointer items-center gap-2 text-sm text-gray-400 hover:text-white transition border-l pl-2 border-l-blue-500"
          >
            Templates (16)
          </Link>
          <Link
            href="/blog"
            className="flex cursor-pointer items-center gap-2 text-sm text-gray-400 hover:text-white transition border-l pl-2 border-l-blue-500"
          >
            Blog
          </Link>
          <Link
            href="/guia"
            className="flex cursor-pointer items-center gap-2 text-sm text-gray-400 hover:text-white transition border-l pl-2 border-l-blue-500"
          >
            ¿Como escribir mejores Prompts?
          </Link>
          <Link
            href="/manual"
            className="flex cursor-pointer items-center gap-2 text-sm text-gray-400 hover:text-white transition border-l pl-2 border-l-blue-500"
          >
            Manual de uso
          </Link>
        </div>
      </div>
    </>
  );
}
