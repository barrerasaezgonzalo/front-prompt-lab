"use client";
import { useToast } from "@/context/toast/ToastContext";
import { Flag, Save } from "lucide-react";
import Link from "next/link";

export function EditorActions() {
  const { showToast } = useToast();

  return (
    <>
      <div className="flex gap-2 justify-end items-center">
        <input
          className="w-1/2 h-9 text-sm bg-zinc-900 border border-zinc-700 rounded px-4 py-1.5 text-gray-300 focus:outline-none "
          type="text"
          placeholder="Ingresa tus tags separados por coma"
        />
        <Save size={25} className="cursor-pointer" />
      </div>

      <div className="flex justify-end gap-3 mb-4">
        <button className="mt-4 px-6 py-2 text-sm border border-blue-500 text-blue-400 rounded hover:bg-blue-500/10">
          Generar versión
        </button>

        {/*  Despues de iterar */}
        <button
          onClick={() =>
            showToast({
              category: "draft",
              title: "Prompt guardado",
              summary: "Puedes retomarlo cuando quieras desde el listado.",
            })
          }
          className="mt-4 px-6 py-2 text-sm bg-zinc-700 hover:bg-zinc-600 text-gray-200 rounded"
        >
          Guardar
        </button>

        {/* Despues de iterar */}
        <button
          onClick={() =>
            showToast({
              category: "final",
              title: "Versión final guardada",
              summary:
                "Este prompt quedó marcado como versión final y está listo para usarse. Puedes crear nuevas iteraciones desde el listado si lo necesitas..",
            })
          }
          className="mt-4 px-6 py-2 text-sm bg-cyan-600 hover:bg-cyan-700 text-white rounded flex gap-2 items-center"
        >
          <Flag size={18} />
          Final
        </button>

        <Link
          href="/"
          className="mt-4 px-4 py-2 text-sm text-gray-400 hover:text-gray-200"
        >
          Cancelar
        </Link>
      </div>
    </>
  );
}
