import { Sparkles } from "lucide-react";

export function ImprovementPanel() {
  return (
    <div className="bg-zinc-700 border border-zinc-800 rounded-lg p-4 border-l-cyan-500">
      <h4 className="text-sm font-medium text-cyan-500 mb-2 flex gap-2">
        <Sparkles size={16} className="text-cyan-500" />
        Sugerencias detectadas por el sistema
      </h4>

      <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
        <li>Define mejor la audiencia objetivo</li>
        <li>Agrega restricciones de formato</li>
        <li>Incluye ejemplos concretos</li>
      </ul>
    </div>
  );
}
