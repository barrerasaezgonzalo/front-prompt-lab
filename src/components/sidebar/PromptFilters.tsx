"use client";

import { Funnel } from "lucide-react";
import { useState } from "react";

export function PromptFilters() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex-full">
      <div className="flex gap-4 items-center">
        <section className="text-gray-400 text-sm font-bold">
          Mis Prompts
        </section>

        <div
          className="ml-auto cursor-pointer"
          title={`${showFilters ? "Ocultar" : "Mostrar"} Filtros`}
          onClick={() => setShowFilters(!showFilters)}
          aria-label={`${showFilters ? "Ocultar filtros" : "Mostrar filtros"}`}
          aria-expanded={showFilters}
        >
          <Funnel
            size={18}
            className={` z-0! ${showFilters ? "text-blue-400" : "text-gray-400"} transition-transform duration-200`}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden mt-2 transition-[max-height,opacity] duration-600 ${
          showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex gap-2 justify-between items-center">
            <input
              type="text"
              className="w-full h-9 text-sm bg-zinc-900 border border-zinc-700 rounded px-4 py-1.5 text-gray-300 focus:outline-none   "
              placeholder="Buscar por texto o tags..."
            />
          </div>

          <div className="flex gap-2 text-white">
            <button className=" inline-block text-xs w-full cursor-pointer border-gray-500 border rounded p-1">
              All
            </button>
            <button className=" inline-block text-xs w-full cursor-pointer  bg-gray-500 rounded p-1">
              Draf
            </button>
            <button className=" inline-block text-xs w-full cursor-pointer bg-yellow-600 rounded p-1  underline decoration-2 underline-offset-4">
              Analyzed
            </button>
            <button className=" inline-block text-xs w-full cursor-pointer bg-green-400 rounded p-1">
              Final
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
