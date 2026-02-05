"use client";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center w-full bg-zinc-950 font-sans text-zinc-100 p-6">
      <div className="max-w-4xl p-6 text-left">
        <h1 className="mb-4 text-6xl font-bold text-white">
          Bienvenido a <span className="text-cyan-500">Prompt Lab</span>
        </h1>
        <h2 className="mb-6 text-xl">
          Itera prompts con{" "}
          <span className="text-cyan-500">
            control de versiones, métricas y trazabilidad.
          </span>
          Diseñado para flujos de trabajo serios con modelos de lenguaje.
        </h2>
        <h3 className="mb-6 text-lg">
          Como invitado puedes generar y probar prompts. Al iniciar sesión,
          desbloqueas tu biblioteca personal para guardar versiones, categorizar
          por etiquetas y comparar resultados. No dejes que tus mejores
          iteraciones se pierdan al cerrar la pestaña.
        </h3>
        <div className="flex justify-center mt-4">
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-8 rounded-md text-sm font-medium p-4 cursor-pointer h-10">
            Entrar con Google
          </button>
        </div>
      </div>
    </div>
  );
}
