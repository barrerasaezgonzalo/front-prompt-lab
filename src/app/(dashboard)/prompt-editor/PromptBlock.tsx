import { PromptBlockProp } from "@/types";
import { ImprovementPanel } from "./ImprovementPanel";

export function PromptBlock({ title, summary, optional }: PromptBlockProp) {
  return (
    <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
      <div className="mb-2 flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-200">{title}</h3>
        {optional ? (
          <span className="text-xs text-gray-400">Opcional</span>
        ) : (
          <span className="text-xs text-red-400">
            Este campo es obligatorio
          </span>
        )}
      </div>
      <p className="text-xs my-2 text-gray-400">{summary}</p>

      <textarea
        className="w-full min-h-20 bg-zinc-900 border border-zinc-700 rounded p-2 text-sm text-gray-200 resize-none"
        placeholder={`Describe el ${title.toLowerCase()}...`}
      />

      {/* Solo cuando Ai diga que falta algo en este campo */}
      <ImprovementPanel />
    </div>
  );
}
