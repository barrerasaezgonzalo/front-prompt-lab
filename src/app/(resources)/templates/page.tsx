import { TemplatesProp } from "@/types";
import {
  Code,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Palette,
  TrendingUp,
  Heart,
  Zap,
} from "lucide-react";

export default function TemplatesPage({ origin }: TemplatesProp) {
  const sample = [
    {
      id: 1,
      title: "Asistente de Código",
      description:
        "Genera código limpio y documentado siguiendo mejores prácticas de desarrollo.",
      icon: Code,
    },
    {
      id: 2,
      title: "Copywriter Creativo",
      description:
        "Crea contenido persuasivo para marketing, ads y redes sociales con alto engagement.",
      icon: MessageSquare,
    },
    {
      id: 3,
      title: "Tutor Educativo",
      description:
        "Explica conceptos complejos de forma simple y adapta el contenido al nivel del estudiante.",
      icon: GraduationCap,
    },
    {
      id: 4,
      title: "Analista de Negocios",
      description:
        "Analiza datos, genera insights y crea reportes estratégicos para toma de decisiones.",
      icon: Briefcase,
    },
    {
      id: 5,
      title: "Diseñador UX/UI",
      description:
        "Sugiere mejoras de diseño, flujos de usuario y principios de accesibilidad.",
      icon: Palette,
    },
    {
      id: 6,
      title: "SEO Optimizer",
      description:
        "Optimiza contenido para motores de búsqueda con keywords estratégicas y meta descriptions.",
      icon: TrendingUp,
    },
    {
      id: 7,
      title: "Coach Personal",
      description:
        "Ofrece motivación, establece metas y da seguimiento a tu desarrollo personal.",
      icon: Heart,
    },
    {
      id: 8,
      title: "Brainstorming Partner",
      description:
        "Genera ideas creativas, explora posibilidades y ayuda a desarrollar conceptos innovadores.",
      icon: Zap,
    },
  ];

  return (
    <div className="flex flex-col h-full gap-4 max-w-4xl mt-8 mb-4">
      <div className="mb-4">
        <div className="flex items-center gap-3 ">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight">
              Templates de <span className="text-cyan-300">Prompts</span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Comienza rápido con plantillas optimizadas para casos de uso
              específicos
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {sample.map((template) => {
          const Icon = template.icon;
          return (
            <div
              key={template.id}
              className="relative bg-slate-800 border border-slate-700 z-10 rounded-xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-xl hover:shadow-blue-500/10 "
            >
              <div className="p-6 pb-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center mb-4 transition-transform">
                  <Icon className="text-blue-400" size={28} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {template.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {template.description}
                </p>
              </div>

              <div className="p-6 pt-0">
                <button className="w-full py-2.5 px-4 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30   ">
                  Usar Template
                </button>
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
