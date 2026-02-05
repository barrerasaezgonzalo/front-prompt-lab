import { PromptBlock } from "./PromptBlock";

export function PromptBlocks() {
  return (
    <div className="flex flex-col gap-4">
      <PromptBlock
        title="Rol"
        summary="Define desde qué perspectiva debe responder el modelo, (ej: Eres un profesor universitario)"
        optional={true}
      />

      <PromptBlock
        title="Contexto"
        summary="Información clave que el modelo necesita para entender el problema y el entorno"
        optional={false}
      />

      <PromptBlock
        title="Objetivo"
        summary="Qué resultado concreto esperas obtener con este prompt. (ej: Generar una explicación)"
        optional={false}
      />

      <PromptBlock
        title="Restricciones"
        summary="Reglas que el modelo debe respetar al responder. (ej: Máximo 200 palabras”)"
        optional={true}
      />

      <PromptBlock
        title="Formato de salida"
        summary="Cómo debe estructurarse la respuesta final. (ej: Devuelve la respuesta en una tabla con columnas X, Y)"
        optional={true}
      />

      <PromptBlock
        title="Ejemplos"
        summary="Ejemplos de entradas o salidas esperadas para guiar al modelo. (Ejemplo de buena respuesta / mala respuesta)"
        optional={true}
      />
    </div>
  );
}
