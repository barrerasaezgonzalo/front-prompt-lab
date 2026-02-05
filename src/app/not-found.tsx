import Link from "next/link";
import { Ghost, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center w-full bg-zinc-950 font-sans text-zinc-100 p-6">
      <div className="max-w-md text-center space-y-8">
        <Ghost size={64} className="mx-auto text-zinc-500 animate-pulse-slow" />
        <h1 className="text-6xl font-extrabold text-blue-500 tracking-tight">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-zinc-200">
          Página no encontrada
        </h2>
        <p className="text-zinc-400 leading-relaxed text-sm">
          Parece que la ruta que intentaste acceder no existe o fue eliminada.
          No te preocupes, hay muchos prompts geniales esperando ser
          descubiertos.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-all active:scale-95 shadow-lg"
          >
            <Home size={20} />
            Volver al Inicio
          </Link>
        </div>

        <p className="text-xs text-zinc-600 mt-10">Error Code: 404.0.1.</p>
      </div>
    </div>
  );
}
