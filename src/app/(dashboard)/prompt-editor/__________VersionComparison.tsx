// import { usePromptUIState } from "@/context/prompt-ui/PromptUIContext";
// import { ArrowLeftRight, ArrowLeft } from "lucide-react";
// import { diffLines } from "diff";
// import { VersionComparisonProps } from "@/types.ts";

// // VersionComparison.tsx

// export function VersionComparison({ leftId, rightId, view }: VersionComparisonProps) {
//     //
//     //   const right = usePromptVersion(rightId);
//     const left = MOCK.leftVersion;
//     const right = MOCK.rightVersion;

//     return (
//         <div className="h-full flex flex-col mt-16">
//             <h1 className="mb-4 text-6xl font-bold text-white"><span className="text-blue-500">Comparación</span> de versiones</h1>
//             <h2 className="mb-6 text-xl">Visualiza y analiza los cambios entre <span className="text-blue-500">distintas versiones</span> de un prompt.</h2>
//             <h3>Prompt: “Generador de tests técnicos”</h3>
//             <ComparisonHeader left={left} right={right} view={view} />

//             {view === "split" ? (
//                 <SplitComparison left={left} right={right} />
//             ) : (
//                 <InlineDiff left={left} right={right} />
//             )}
//         </div>
//     );
// }

// function SplitComparison({ left, right }) {
//     return (
//         <div className="flex flex-1 overflow-hidden">
//             <VersionColumn version={left} />
//             <VersionColumn version={right} />
//         </div>
//     );
// }

// function VersionColumn({ version }) {
//     return (
//         <div className="w-1/2 overflow-auto border-r border-zinc-800 p-4">
//             <h3 className="text-sm font-semibold mb-2">
//                 v{version.number} · {version.createdAt}
//             </h3>

//             <pre className="whitespace-pre-wrap text-sm">
//                 {version.content}
//             </pre>
//         </div>
//     );
// }

// // function InlineDiff({ left, right }) {
// //   const diff = computeDiff(left.content, right.content);

// //   return (
// //     <div className="p-4 overflow-auto text-sm font-mono">
// //       {diff.map((line, i) => (
// //         <DiffLine key={i} line={line} />
// //       ))}
// //     </div>
// //   );
// // }

// export type PromptVersion = {
//     /** ID único (db / uuid) */
//     id: string;

//     /** Número de versión visible para el usuario (v1, v2, v3…) */
//     number: number;

//     /** Contenido del prompt */
//     content: string;

//     /** Si esta versión es la activa / seleccionada */
//     isActive: boolean;

//     /** Fecha de creación (ISO string o Date) */
//     createdAt: string;

//     /** Autor de la versión (opcional por ahora) */
//     createdBy?: {
//         id: string;
//         name: string;
//     };

//     /** Métricas asociadas a la versión */
//     metrics?: {
//         tokens?: number;
//         score?: number;
//         latencyMs?: number;
//     };

//     /** Estado lógico de la versión */
//     status?: "draft" | "published" | "archived";

//     /** Metadatos libres para extensiones futuras */
//     metadata?: Record<string, unknown>;
// };

// function VersionBadge({ version }: { version: PromptVersion }) {
//     return (
//         <div className="px-2 py-1 rounded-md bg-zinc-800 text-xs">
//             v{version.number}
//             {version.isActive && (
//                 <span className="ml-1 text-green-400">●</span>
//             )}
//         </div>
//     );
// }

// function ViewToggle({ view }: { view: "split" | "inline" }) {
//     const { mode, setMode } = usePromptUIState();

//     if (mode.type !== "comparing") return null;

//     return (
//         <div className="flex bg-zinc-800 rounded-md">
//             <ToggleButton
//                 active={view === "split"}
//                 onClick={() =>
//                     setMode({ ...mode, view: "split" })
//                 }
//             >
//                 Split
//             </ToggleButton>

//             <ToggleButton
//                 active={view === "inline"}
//                 onClick={() =>
//                     setMode({ ...mode, view: "inline" })
//                 }
//             >
//                 Inline
//             </ToggleButton>
//         </div>
//     );
// }

// function ToggleButton({ active, children, onClick }) {
//     return (
//         <button
//             onClick={onClick}
//             className={`px-3 py-1 text-xs rounded-md transition
//         ${active ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-white"}
//       `}
//         >
//             {children}
//         </button>
//     );
// }

// type Props = {
//     left: PromptVersion;
//     right: PromptVersion;
//     view: "split" | "inline";
// };

// export function ComparisonHeader({ left, right, view }: Props) {
//     const { setMode } = usePromptUIState();

//     return (
//         <div className="border-b border-zinc-800 px-4 py-3 flex flex-col gap-2">
//             {/* fila superior */}
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">

//                     <VersionBadge version={left} />

//                     -

//                     <VersionBadge version={right} />
//                 </div>

//                 <ViewToggle view={view} />
//             </div>

//             {/* fila inferior */}
//             <div className="text-xs text-zinc-400 truncate">
//                 Comparando cambios entre versiones
//             </div>
//         </div>
//     );
// }

// export function getActiveVersion(
//     versions: PromptVersion[]
// ) {
//     return versions.find(v => v.isActive);
// }

// export function canCompare(a?: PromptVersion, b?: PromptVersion) {
//     return !!a && !!b && a.id !== b.id;
// }

// export type DiffLine =
//     | { type: "added"; value: string }
//     | { type: "removed"; value: string }
//     | { type: "unchanged"; value: string };

// export function computeDiff(
//     oldText: string,
//     newText: string
// ): DiffLine[] {
//     const changes = diffLines(oldText, newText);

//     return changes.flatMap(change => {
//         const lines = change.value.split("\n");

//         // quitamos el último \n vacío
//         if (lines[lines.length - 1] === "") {
//             lines.pop();
//         }

//         if (change.added) {
//             return lines.map(line => ({
//                 type: "added",
//                 value: line,
//             }));
//         }

//         if (change.removed) {
//             return lines.map(line => ({
//                 type: "removed",
//                 value: line,
//             }));
//         }

//         return lines.map(line => ({
//             type: "unchanged",
//             value: line,
//         }));
//     });
// }

// function InlineDiff({ left, right }: { left: PromptVersion; right: PromptVersion }) {
//     const diff = computeDiff(left.content, right.content);

//     return (
//         <div className="font-mono text-sm overflow-auto">
//             {diff.map((line, i) => (
//                 <div
//                     key={i}
//                     className={`px-3 py-0.5 whitespace-pre-wrap
//             ${line.type === "added" && "bg-green-900/30 text-green-300"}
//             ${line.type === "removed" && "bg-red-900/30 text-red-300"}
//             ${line.type === "unchanged" && "text-zinc-300"}
//           `}
//                 >
//                     {line.type === "added" && "+"}
//                     {line.type === "removed" && "-"}
//                     {line.value}
//                 </div>
//             ))}
//         </div>
//     );
// }
