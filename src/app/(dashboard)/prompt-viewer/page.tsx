"use client";
import { PromptViewerPros } from "@/types/prompt-viewer";
import { Calendar, Copy, GitCompareArrows } from "lucide-react";
import Link from "next/link";

export default function PromptViewer({ origin }: PromptViewerPros) {
  return (
    <div className="flex flex-col h-full gap-4 max-w-4xl mt-8">
      <div className="text-3xl font-bold text-white text-left max-w-4xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
          Como generar un <span className="text-cyan-400">manual de Marca</span>
        </h1>
      </div>

      <div className="flex gap-4 justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-slate-500 flex gap-2 items-center">
            <Calendar size={14} className="-mt-px" />
            <span>Última actualización: 01/01/2005</span>
          </p>
          <span className="px-2 py-1 w-fit rounded bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-black uppercase tracking-widest">
            Estado: Final
          </span>
          <div className="relative flex bt-2 gap-4">
            <p className="border text-xs text-slate-500 py-1 px-2 rounded">
              #Writing
            </p>
            <p className="border text-xs text-slate-500 py-1 px-2 rounded">
              #Coding
            </p>
            <p className="border text-xs text-slate-500 py-1 px-2 rounded">
              #Seo
            </p>
            <p className="border text-xs text-slate-500 py-1 px-2 rounded">
              #Educational
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-end gap-3 ">
          <div className="flex flex-col gap-1.5 w-full sm:w-32">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Versión Activa
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-slate-800 border border-slate-700 text-slate-200 font-mono text-sm rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500/50 cursor-pointer">
                <option>v 7.0</option>
                <option>v 6.0</option>
                <option>v 5.0</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor font-bold"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <Link
            href="/prompt-comparison"
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white hover:border-blue-500/50 transition-all group h-9.5 cursor-pointer"
          >
            <GitCompareArrows size={14} />
            Comparar
          </Link>
        </div>
      </div>

      <div className="grid gap-6 mt-4">
        <div className="p-6 bg-slate-800/20 border border-slate-800 rounded-xl">
          <h3 className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-widest">
            Prompt Original
          </h3>
          <p className="text-slate-400 italic">Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="p-1  rounded-xl">
          <div className="p-6 bg-slate-900 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                Prompt Mejorado
              </h3>
              <button
                onClick={() => {}}
                className="text-sm font-semibold text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white hover:border-blue-500/50
                                px-3 py-1 flex justify-between gap-2 cursor-pointer items-center"
              >
                <Copy size={16} />
                <span style={{ marginLeft: "8px" }}>Copiar</span>
              </button>
            </div>
            <p className="text-slate-200 leading-relaxed bg-slate-800/40 p-4 rounded-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis fugiat vitae illo in odit placeat repudiandae suscipit
              rerum modi odio aperiam... Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ut, facere? Expedita error, minus itaque
              explicabo, mollitia ipsa fugit perferendis illo, nisi est facilis.
              Dolor, modi cumque ducimus fugit vero quisquam! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Cumque temporibus sapiente
              repudiandae molestiae dicta? Non a facere, eius temporibus laborum
              ex reiciendis odit nostrum. Recusandae fugiat sunt minima
              asperiores minus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
