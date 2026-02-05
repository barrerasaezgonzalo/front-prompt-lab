import { User, Calendar, Clock, ChevronRight } from "lucide-react";

export function BlogDetail() {
  const selectedPost = {
    id: 1,
    title: "Cómo crear prompts efectivos: Guía completa 2026",
    excerpt:
      "Descubre las técnicas más avanzadas para escribir prompts que generen resultados excepcionales en tus proyectos de IA.",
    content: `
# Cómo crear prompts efectivos: Guía completa 2026

La creación de prompts efectivos es un arte que combina claridad, especificidad y comprensión del modelo de IA con el que trabajas.

## Principios fundamentales

**1. Sé específico y claro**
No digas "ayúdame con marketing", di "crea un plan de marketing de 30 días para un SaaS B2B enfocado en startups tecnológicas".

**2. Proporciona contexto**
Cuanto más contexto le des al modelo, mejores serán los resultados. Incluye:
- Tu industria o nicho
- Tu audiencia objetivo
- El tono que necesitas (profesional, casual, técnico)
- Limitaciones o requisitos específicos

**3. Usa ejemplos**
Muestra al modelo exactamente qué tipo de output esperas. Un buen ejemplo vale más que mil palabras.

## Técnicas avanzadas

### Chain of Thought
Pide al modelo que piense paso a paso. Esto mejora dramáticamente la calidad en tareas complejas.

### Few-shot prompting
Proporciona 2-3 ejemplos de input/output antes de tu solicitud real.

### Role-playing
Asigna un rol específico: "Eres un experto en UX con 15 años de experiencia..."

## Errores comunes

- ❌ Ser demasiado vago
- ❌ Asumir que el modelo "sabe" tu contexto
- ❌ No iterar y refinar
- ✅ Experimentar con diferentes enfoques
- ✅ Documentar qué funciona
- ✅ Versionar tus mejores prompts

## Conclusión

La maestría en prompting viene con la práctica. Empieza simple, itera constantemente, y documenta tus aprendizajes.
      `,
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 overflow-y-auto hiden">
      {selectedPost ? (
        <div className="max-w-4xl mx-auto p-12">
          <div className="mb-8">
            <h1 className="text-5xl font-black text-white mb-6 leading-tight">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>02/012/215</span>
                {/* {new Date(selectedPost.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} */}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {/* <span>{selectedPost.readTime} lectura</span> */}
                <span>5 minutos lectura</span>
              </div>
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-slate-300 leading-relaxed space-y-6">
              {selectedPost.content.split("\n").map((paragraph, index) => {
                // Handle headers
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1
                      key={index}
                      className="text-4xl font-black text-white mt-8 mb-4"
                    >
                      {paragraph.slice(2)}
                    </h1>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-white mt-6 mb-3"
                    >
                      {paragraph.slice(3)}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-bold text-blue-400 mt-4 mb-2"
                    >
                      {paragraph.slice(4)}
                    </h3>
                  );
                }

                // Handle bold
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p key={index} className="font-bold text-white text-lg">
                      {paragraph.slice(2, -2)}
                    </p>
                  );
                }

                // Handle lists
                if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="ml-6 text-slate-300">
                      {paragraph.slice(2)}
                    </li>
                  );
                }

                // Handle code blocks
                if (paragraph.startsWith("```")) {
                  return null; // Skip code fence markers
                }

                // Regular paragraphs
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }

                return <br key={index} />;
              })}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                ¿Te gustó este artículo?
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Prueba nuestros templates de prompts optimizados y empieza a
                crear contenido profesional hoy mismo.
              </p>
              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30">
                Ver Templates
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4">
              <ChevronRight className="text-slate-600" size={32} />
            </div>
            <p className="text-slate-500">Selecciona un artículo para leer</p>
          </div>
        </div>
      )}
    </div>
  );
}
