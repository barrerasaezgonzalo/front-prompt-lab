"use client";
import { VersionComparisonProps } from "@/types";
import { useState } from "react";

export default function VersionComparison({
  leftId,
  rightId,
  view,
  origin,
}: VersionComparisonProps) {
  const [viewMode, setViewMode] = useState("split");

  return (
    <div className="max-w-6xl mx-auto p-8 rounded-2xl shadow-2xl text-slate-200 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        {/* ComparisonHeader */}
        <div>
          <h2 className="text-3xl font-black text-white mb-2 tracking-tight">
            <span className="text-cyan-300">Comparación</span> de versiones
          </h2>
          <p className="text-sm text-slate-500">
            Analiza cambios estructurales entre versiones del prompt.
          </p>
          <h1 className="text-xl mt-4 font-extrabold tracking-tight text-white leading-tight">
            Como generar un manual de Marca
          </h1>
        </div>

        {/* ToggleButton */}
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-700 shadow-inner">
          <button
            onClick={() => setViewMode("split")}
            className={`px-5 py-1.5 text-xs font-bold rounded-lg transition-all ${
              viewMode === "split"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            SPLIT
          </button>
          <button
            onClick={() => setViewMode("inline")}
            className={`px-5 py-1.5 text-xs font-bold rounded-lg transition-all ${
              viewMode === "inline"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            INLINE
          </button>
        </div>
      </div>

      {viewMode === "split" ? (
        //    SplitView
        <div className="grid grid-cols-1 w-4xl md:grid-cols-2 border border-slate-700 rounded-2xl overflow-hidden bg-slate-900/30 backdrop-blur-sm">
          {/* VersionColumn Left */}
          <div className="border-r border-slate-700 flex flex-col">
            <div className="bg-slate-900/90 px-5 py-3 border-b border-slate-700 flex justify-between items-center h-14">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-slate-400">
                  v3
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">
                    Referencia
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    2026-01-18 14:32
                  </span>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-md font-bold uppercase tracking-tighter">
                Referencia
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-slate-400 space-y-4">
              <p>
                You are an{" "}
                <span className="bg-red-500/20 text-red-200 px-1 rounded border border-red-500/20">
                  expert
                </span>{" "}
                software architect.
              </p>
              <p>Write clean code.</p>
            </div>
          </div>

          {/* VersionColumn Right */}
          <div className="flex flex-col bg-blue-500/5">
            <div className="bg-slate-900/90 px-5 py-3 border-b border-slate-700 flex justify-between items-center h-14">
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <select className="appearance-none bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold rounded-lg pl-3 pr-8 py-1.5 hover:bg-blue-600/20 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    <option value="v4">v4</option>
                    <option value="v5">v5</option>
                    <option value="v2">v2</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-blue-400">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest leading-none">
                    Versión comparada
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    2026-01-18 15:45
                  </span>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md font-bold uppercase tracking-tighter">
                Comparada
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-slate-200 space-y-4">
              <p>
                You are a{" "}
                <span className="bg-green-500/30 text-green-200 px-1 rounded border border-green-500/30 font-bold shadow-sm shadow-green-900/50">
                  Senior Staff
                </span>{" "}
                software architect.
              </p>
              <p>
                Write clean code{" "}
                <span className="bg-green-500/30 text-green-200 px-1 rounded border border-green-500/30 font-bold shadow-sm shadow-green-900/50">
                  following SOLID principles.
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // InlineView
        <div className="border w-4xl border-slate-700 rounded-2xl overflow-hidden bg-slate-900/30 backdrop-blur-sm">
          <div className="bg-slate-900/90 px-5 py-3 border-b border-slate-700">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-slate-400">
                  v3
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">
                    Referencia
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    2026-01-18 14:32
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative group">
                  <select className="appearance-none bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold rounded-lg pl-3 pr-8 py-1.5 hover:bg-blue-600/20 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    <option value="v4">v4</option>
                    <option value="v5">v5</option>
                    <option value="v2">v2</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-blue-400">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest leading-none">
                    Versión comparada
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    2026-01-18 15:45
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-3 border-t border-slate-700/50">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 text-xs font-mono font-bold text-red-400">
                  v3
                </span>
                <svg
                  className="w-4 h-4 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 text-xs font-mono font-bold text-green-400">
                  v4
                </span>
              </div>
              <div className="h-4 w-px bg-slate-700"></div>
              <div className="flex gap-4 text-xs">
                <span className="text-red-400 font-medium">
                  <span className="font-bold">−2</span> eliminados
                </span>
                <span className="text-green-400 font-medium">
                  <span className="font-bold">+3</span> agregados
                </span>
              </div>
            </div>
          </div>

          {/* DiffContent */}
          <div className="font-mono text-sm">
            <div className="flex hover:bg-slate-800/50 transition-colors">
              <div className="shrink-0 w-12 px-2 py-1 text-center text-slate-600 bg-slate-900/50 border-r border-slate-700 select-none">
                <span className="text-xs">1</span>
              </div>
              <div className="shrink-0 w-12 px-2 py-1 text-center text-slate-600 bg-slate-900/50 border-r border-slate-700 select-none">
                <span className="text-xs">1</span>
              </div>
              <div className="flex-1 px-4 py-1 text-slate-400">
                You are
                <span className="bg-red-500/20 text-red-300 px-0.5 -mx-0.5">
                  an expert
                </span>
                <span className="bg-green-500/20 text-green-300 px-0.5 -mx-0.5">
                  a Senior Staff
                </span>{" "}
                software architect.
              </div>
            </div>

            <div className="flex bg-red-500/5 hover:bg-red-500/10 transition-colors border-l-2 border-red-500">
              <div className="shrink-0 w-12 px-2 py-1 text-center text-red-400 bg-red-500/5 border-r border-slate-700 select-none">
                <span className="text-xs">2</span>
              </div>
              <div className="shrink-0 w-12 px-2 py-1 text-center text-slate-700 bg-slate-900/50 border-r border-slate-700 select-none">
                <span className="text-xs opacity-0">-</span>
              </div>
              <div className="flex-1 px-4 py-1 text-red-300">
                <span className="select-none text-red-500 mr-2">−</span>
                Write clean code.
              </div>
            </div>

            <div className="flex bg-green-500/5 hover:bg-green-500/10 transition-colors border-l-2 border-green-500">
              <div className="shrink-0 w-12 px-2 py-1 text-center text-slate-700 bg-slate-900/50 border-r border-slate-700 select-none">
                <span className="text-xs opacity-0">-</span>
              </div>
              <div className="shrink-0 w-12 px-2 py-1 text-center text-green-400 bg-green-500/5 border-r border-slate-700 select-none">
                <span className="text-xs">2</span>
              </div>
              <div className="flex-1 px-4 py-1 text-green-300">
                <span className="select-none text-green-500 mr-2">+</span>
                Write clean code following SOLID principles.
              </div>
            </div>

            <div className="flex hover:bg-slate-800/50 transition-colors">
              <div className="shrink-0 w-12 px-2 py-1 text-center text-slate-600 bg-slate-900/50 border-r border-slate-700 select-none">
                <span className="text-xs">3</span>
              </div>
              <div className="shrink-0 w-12 px-2 py-1 text-center text-slate-600 bg-slate-900/50 border-r border-slate-700 select-none">
                <span className="text-xs">3</span>
              </div>
              <div className="flex-1 px-4 py-1 text-slate-400">
                Always
                <span className="bg-red-500/20 text-red-300 px-0.5 -mx-0.5">
                  {" "}
                  follow best practices
                </span>
                <span className="bg-green-500/20 text-green-300 px-0.5 -mx-0.5">
                  {" "}
                  use industry standards
                </span>
                .
              </div>
            </div>

            <div className="flex hover:bg-slate-800/50 transition-colors">
              <div className="shrink-0 w-12 px-2 py-1 text-center text-slate-600 bg-slate-900/50 border-r border-slate-700 select-none">
                <span className="text-xs">4</span>
              </div>
              <div className="shrink-0 w-12 px-2 py-1 text-center text-slate-600 bg-slate-900/50 border-r border-slate-700 select-none">
                <span className="text-xs">4</span>
              </div>
              <div className="flex-1 px-4 py-1 text-slate-500">
                Keep it simple and maintainable.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
