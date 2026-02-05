import {
  Calendar,
  Clock,
  Sparkles,
  TrendingUp,
  Lightbulb,
  Rocket,
} from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
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
      author: "María González",
      date: "2026-02-01",
      readTime: "8 min",
      featured: true,
      icon: Sparkles,
    },
    {
      id: 2,
      title: "10 patrones de prompts que todo desarrollador debe conocer",
      excerpt:
        "Patrones probados y optimizados para mejorar tu productividad al escribir código con IA.",
      content: `
# 10 patrones de prompts que todo desarrollador debe conocer

Como desarrollador, aprovechar la IA correctamente puede multiplicar tu productividad. Aquí están los patrones esenciales.

## 1. El patrón "Explicar y Refactorizar"

\`\`\`
Analiza este código, explica qué hace y sugiere mejoras:
[tu código aquí]
\`\`\`

## 2. El patrón "Debugging Asistido"

\`\`\`
Tengo este error: [error]
En este código: [código]
¿Cuál es la causa y cómo lo soluciono?
\`\`\`

## 3. El patrón "Test-Driven"

\`\`\`
Escribe tests unitarios para esta función:
[función]
Usa Jest y cubre edge cases.
\`\`\`

## 4. El patrón "Documentación Auto-generada"

\`\`\`
Genera documentación JSDoc para:
[código]
Incluye ejemplos de uso.
\`\`\`

## 5. El patrón "Code Review"

\`\`\`
Revisa este código como senior developer:
- Seguridad
- Performance
- Best practices
- Mantenibilidad
\`\`\`

Y 5 más en el artículo completo...

## Conclusión

Estos patrones te ahorrarán horas cada semana. Úsalos, personalízalos, mejóralos.
      `,
      author: "Carlos Ruiz",
      date: "2026-01-28",
      readTime: "12 min",
      featured: false,
      icon: TrendingUp,
    },
    {
      id: 3,
      title: "La psicología detrás de los buenos prompts",
      excerpt:
        'Entiende cómo "piensan" los modelos de lenguaje para comunicarte mejor con ellos.',
      content: `
# La psicología detrás de los buenos prompts

Los LLMs no piensan como humanos, pero entender su arquitectura te ayuda a comunicarte mejor.

## Cómo "entiende" un LLM

Los modelos de lenguaje procesan tu input como una secuencia de tokens y predicen probabilidades. No "entienden" en el sentido humano, pero pueden generar respuestas coherentes basadas en patrones.

## Principios clave

### Claridad > Brevedad
Un prompt largo pero claro supera a uno corto pero ambiguo.

### Estructura importa
Los LLMs responden mejor a información bien organizada:
1. Contexto primero
2. Instrucción clara
3. Formato esperado

### El poder del priming
Las primeras palabras de tu prompt establecen el tono y el dominio. Usa esto a tu favor.

## Antropomorfización útil

Aunque los LLMs no tienen emociones, tratarlos como "expertos en X" mejora los resultados porque activa patrones de lenguaje específicos en sus datos de entrenamiento.

## Iteración inteligente

No esperes perfección en el primer intento. La refinación iterativa es parte del proceso.
      `,
      author: "Ana Martínez",
      date: "2026-01-25",
      readTime: "6 min",
      featured: true,
      icon: Lightbulb,
    },
    {
      id: 4,
      title: "Del prompt básico al prompt profesional en 5 pasos",
      excerpt:
        "Transforma tus prompts genéricos en herramientas profesionales con esta metodología.",
      content: `
# Del prompt básico al prompt profesional en 5 pasos

Vamos a transformar un prompt básico en uno profesional paso a paso.

## Prompt inicial
"Ayúdame a escribir un email"

## Paso 1: Agrega contexto
"Ayúdame a escribir un email profesional a un cliente potencial"

## Paso 2: Especifica el objetivo
"Ayúdame a escribir un email profesional a un cliente potencial para agendar una demo de nuestro producto SaaS"

## Paso 3: Define restricciones
"Ayúdame a escribir un email profesional (máximo 150 palabras) a un cliente potencial para agendar una demo de nuestro producto SaaS. El tono debe ser amigable pero profesional."

## Paso 4: Proporciona información clave
"Ayúdame a escribir un email profesional (máximo 150 palabras) a un cliente potencial para agendar una demo de nuestro producto SaaS. El tono debe ser amigable pero profesional.

Contexto:
- Empresa: TechFlow (automatización de workflows)
- Cliente: Director de IT en empresa mediana
- Se reunieron en conferencia la semana pasada
- Prometiste enviar info sobre integración con Salesforce"

## Paso 5: Especifica formato
"[Todo lo anterior] + 

Formato deseado:
- Asunto pegajoso
- Párrafo de reconexión
- Value proposition en 2 líneas
- CTA claro para agendar
- Firma profesional"

## Resultado

Has pasado de 4 palabras a un prompt de 100+ palabras que genera contenido profesional y listo para usar.
      `,
      author: "Luis Torres",
      date: "2026-01-22",
      readTime: "5 min",
      featured: false,
      icon: Rocket,
    },
    {
      id: 5,
      title: "Prompts multi-idioma: consideraciones importantes",
      excerpt:
        "Lo que debes saber al trabajar con prompts en diferentes idiomas.",
      content: `
# Prompts multi-idioma: consideraciones importantes

Trabajar con prompts en múltiples idiomas tiene sus particularidades.

## El idioma importa

Los LLMs modernos son multilingües, pero su performance varía:
- Inglés: Mejor calidad (más datos de entrenamiento)
- Español: Muy buena calidad
- Otros idiomas: Variable

## Estrategia híbrida

Para mejores resultados:
1. Instrucciones en inglés
2. Contenido/output en español

Ejemplo:
\`\`\`
You are a professional copywriter. Write a landing page in Spanish for [producto]
\`\`\`

## Code-switching inteligente

Mezclar idiomas puede ser beneficioso:
- Términos técnicos en inglés
- Explicaciones en tu idioma nativo

## Consideraciones culturales

No traduzcas literalmente. Adapta:
- Expresiones idiomáticas
- Referencias culturales
- Formatos (fechas, monedas)

## Testing crucial

Siempre valida outputs multi-idioma con hablantes nativos.
      `,
      author: "Patricia Vega",
      date: "2026-01-20",
      readTime: "7 min",
      featured: false,
      icon: Sparkles,
    },
  ];

  return (
    <div className="flex flex-col h-full gap-4 max-w-4xl mb-4">
      <div className="mb-4">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight">
              Articulos de <span className="text--cyan-300">Prompt Lab </span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Artículos prácticos y actualizados para aprender a diseñar mejores
              prompts y aprovechar la IA de forma más efectiva.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {posts.map((template) => {
          const Icon = template.icon;
          return (
            <div
              key={template.id}
              className="relative bg-slate-800 border border-slate-700 z-10 rounded-xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-xl hover:shadow-blue-500/10 "
            >
              <div className="p-6 pb-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-blue-400" size={28} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {template.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {template.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-3 pl-5 pb-4   text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>
                    {new Date(template.date).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{template.readTime} </span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
