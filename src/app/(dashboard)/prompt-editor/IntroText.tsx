export function IntroText() {
  return (
    <div className="mb-4 text-3xl font-bold text-white text-left max-w-4xl">
      <span>
        Recibimos tu prompt inicial. Antes de ejecutarlo,{" "}
        <span className="text-cyan-400 font-bold">
          vamos a refinarlo con algunas preguntas clave{" "}
        </span>
        para mejorar su claridad, alcance y resultados.
        <span className="text-cyan-400 font-bold">
          {" "}
          Tus respuestas nos permitirán generar versiones más precisas y
          reutilizables.
        </span>{" "}
      </span>

      <span>
        <p>Vamos a refinar esta versión del prompt. </p>A partir de tus
        respuestas,{" "}
        <span className="text-cyan-400 font-bold">
          generaremos una nueva versión
        </span>{" "}
        manteniendo trazabilidad y control de cambios.{" "}
      </span>
    </div>
  );
}
