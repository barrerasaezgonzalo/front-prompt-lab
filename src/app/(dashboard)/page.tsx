"use client";

import { ChangeEvent, useState } from "react";
import { useModal } from "@/context/modal/ModalContext";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [draftText, setDraftText] = useState("");
  const { modal } = useModal();
  const router = useRouter();

  const handleChangeUserInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDraftText(e.target.value);
  };

  const handleSaveUserInput = async () => {
    setIsProcessing(true);

    if (!draftText?.trim() || draftText.trim().length < 10) {
      modal.showModal({
        title: "Aviso!",
        message: "Ingresa mas contenido para poder obtener una mejor respuesta",
        okText: "Ok!",
        variant: "warning",
      });
      setIsProcessing(false);
      return;
    }
    router.push("/prompt-editor/");
    setIsProcessing(false);
  };

  return (
    <main className="flex-1 flex justify-center p-6">
      <div className="max-w-4xl text-left mt-8">
        <h1 className="mb-4 text-6xl font-bold text-white">
          Bienvenido a <span className="text-blue-500">Prompt Lab</span>
        </h1>
        <h2 className="mb-6 text-xl">
          Itera prompts con control de versiones, métricas y trazabilidad.
          Diseñado para flujos de trabajo serios con modelos de lenguaje.
        </h2>
        <h3 className="mb-6 text-lg">
          Tenemos{" "}
          <span
            className="text-cyan-400 font-bold cursor-pointer"
            onClick={() => {}}
          >
            una guía{" "}
          </span>{" "}
          diseñada para ayudarte a escribir mejores prompts, de forma
          estructurada y efectiva.
          {/* Texto de accede a cuenta solo saldra si usuario esta desconectado , poner link a login*/}
          <span className="text-cyan-400 font-bold"> Accede con tu cuenta</span>{" "}
          y mantén un historial completo de tus prompts y su evolución. Refina
          problemas paso a paso, reutiliza{" "}
          <span
            className="text-cyan-400 font-bold cursor-pointer"
            onClick={() => {}}
          >
            templates
          </span>{" "}
          listos para usar y aprovecha múltiples herramientas pensadas para
          obtener resultados de alta calidad.
        </h3>
        <textarea
          value={draftText}
          onChange={handleChangeUserInput}
          className="w-full h-40 p-4 bg-zinc-800 border border-zinc-700 rounded-md text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Escribe tu prompt aquí..."
        ></textarea>
        <div className="text-center">
          {/* Setear disable y onloading */}
          <button
            disabled={isProcessing}
            onClick={handleSaveUserInput}
            className="mt-6 mx-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            {isProcessing ? (
              <span className="flex gap-4">
                <Loader size={20} />
                <span>Creando ....</span>
              </span>
            ) : (
              <span>Crear y versionar mi primer prompt</span>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
