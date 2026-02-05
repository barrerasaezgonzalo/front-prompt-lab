import { Flag, SquareDashedMousePointer, TestTubeDiagonal } from "lucide-react";
import { PromptListItem } from "./PromptListItem";

export function PromptList() {
  const propmpts = [
    {
      title: "Nombre descriptivo Padre con texto largo...",
      versions: 0,
      active: true,
      status: "draft" as const,
      bg: "border-gray-500",
      toolptip: "Aún no ejecutado",
    },
    {
      title: "Nombre descriptivo Padre 2...",
      versions: 3,
      status: "analyzed" as const,
      bg: "border-yellow-600",
      toolptip: "Analizado con sugerencias",
    },
    {
      title: "Nombre descriptivo Padre 4...",
      versions: 1,
      status: "final" as const,
      bg: "border-green-500",
      toolptip: "Versión final estable",
    },
    {
      title: "Nombre descriptivo Padre 1...",
      versions: 0,
      active: true,
      status: "draft" as const,
      bg: "border-gray-500",
      toolptip: "Aún no ejecutado",
    },
    {
      title: "Nombre descriptivo Padre 2...",
      versions: 3,
      status: "analyzed" as const,
      bg: "border-yellow-600",
      toolptip: "Analizado con sugerencias",
    },
    {
      title: "Nombre descriptivo Padre 4...",
      versions: 1,
      status: "final" as const,
      bg: "border-green-500",
      toolptip: "Versión final estable",
    },
  ];

  return (
    <div className="h-100 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-700  scrollbar-track-zinc-900 hover:scrollbar-thumb-zinc-600 transition-all">
      <div className="flex flex-col gap-3">
        {propmpts.map((item, index) => (
          <PromptListItem
            key={index}
            active={index === 1}
            versions={item.versions}
            title={item.title}
            status={item.status}
            bg={item.bg}
            toolptip={item.toolptip}
          />
        ))}
      </div>
      <div className="text-xs text-gray-400 flex mt-4 justify-end">
        <p>Cargar más</p>
      </div>
    </div>
  );
}
