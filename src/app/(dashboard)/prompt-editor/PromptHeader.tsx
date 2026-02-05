import { Save } from "lucide-react";
import Link from "next/link";

export function PromptHeader() {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 items-center w-full">
          <input
            type="text"
            className="bg-zinc-900 h-8 text-sm border border-zinc-700 rounded px-4 py-1.5 text-gray-300 focus:outline-none w-100 "
            placeholder="Nombre del Prompt"
          />
          <Save size={25} />
          <p className="text-xs text-cyan-400 ml-auto">
            {/* Prompt v1 · Draft · Sin Guardar           
            Prompt v2 · Analyzed · Necesita Refinamiento           */}
            Prompt v5 · Final ⭐
          </p>
        </div>

        <div className="text-sm text-gray-400">
          <p className="text-xs my-2">
            Este es el prompt original que ingresaste. Puedes editarlo antes de
            generar versiones refinadas.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            asperiores pariatur vitae itaque distinctio placeat optio nostrum
            magni fugiat quae mollitia repellendus reiciendis, odio animi
            voluptatum! Unde minus asperiores veniam.
            <span className="ml-2 cursor-pointer text-cyan-400 hover:text-cyan-300 text-xs">
              <Link href="/">Editar</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
