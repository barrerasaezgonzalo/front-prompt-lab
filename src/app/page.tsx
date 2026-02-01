import {
  ArrowDownFromLine,
  BookmarkCheck,
  CalendarArrowDown,
  ChartNetwork,
  ChevronDown,
  Cog,
  Dot,
  Ellipsis,
  Eye,
  FlaskConical,
  Funnel,
  GitCompare,
  ListTodo,
  LogOut,
  Newspaper,
  ScrollText,
  Settings2,
  Sparkles,
  SquarePen,
  Trash,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center w-full bg-zinc-950 font-sans text-gray-400">
      <aside className="fixed left-0 top-0 h-full w-80 bg-zinc-900 border-r border-zinc-800 p-6">
        <div className="flex gap-4 justify-between">
          <FlaskConical size={32} />
          <h2 className="mb-6 text-2xl font-bold text-white">Prompt Lab</h2>
          {/* al pasar el mouse se muestra el nombre y email del usuario */}
          <div className="bg-gray-700 rounded-full px-3 py-1 text-md text-gray-200 h-7 pt-0.6">
            G
          </div>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium mb-4">
          + Nuevo Prompt
        </button>

        <nav className="flex flex-col space-y-4">
          <div className="flex gap-4">
            <ListTodo size={20} />
            <section className="text-gray-400 text-sm hover:text-white transition">
              Mis Prompts
            </section>
            <div className="ml-auto cursor-pointer" title="Filtrar Registros">
              <Settings2 size={20} />
            </div>
          </div>

          {/* Area oculta hasta que se presione filter */}
          <div className="flex flex-col gap-2 hidden">
            <input
              type="text"
              className="w-full text-sm bg-zinc-800 border border-zinc-700 rounded px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Buscar prompts..."
            />
            <div className="flex gap-2">
              {/* Ordenar por fecha asc o desc */}
              <button className="bg-zinc-700 hover:bg-zinc-800 flex gap-2 items-center px-2 rounded py-1 text-gray-100 hover:text-white transition">
                <CalendarArrowDown size={16} />
                <p className="text-sm cursor-pointer" title="Ordenar por fecha">
                  Fecha
                </p>
              </button>

              {/* Se me ocurrio la idea de darle el usuario la opcion de agregar tags a sus prompts para luego filtrar por esos tags, abre un modal con las opciones */}
              <button className="bg-zinc-700 hover:bg-zinc-800 flex gap-2 items-center px-2 rounded py-1 text-gray-100 hover:text-white transition">
                <Funnel size={16} />
                <p className="text-sm cursor-pointer" title="Filtrar por tags">
                  Tags
                </p>
              </button>

              <button className="bg-zinc-700 hover:bg-zinc-800 flex gap-2 items-center px-2 rounded py-1 text-gray-100 hover:text-white transition">
                <BookmarkCheck size={16} />
                <p
                  className="text-sm cursor-pointer"
                  title="Filtrar Marcados como iteración Final"
                >
                  Final
                </p>
              </button>
            </div>
          </div>

          <div className="h-112.5 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-700  scrollbar-track-zinc-900 hover:scrollbar-thumb-zinc-600 transition-all">
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div
                  key={item}
                  className={`ml-0 text-gray-300 transition flex flex-col gap-4 bg-zinc-800 hover:bg-zinc-900 px-4 py-2 rounded-lg border ${item === 1 ? "border border-blue-500" : "border border-zinc-700"}`}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="text-sm">
                        Nombre descriptivo Padre {item} ...
                      </p>
                      <span title="Editar Título">
                        <SquarePen
                          size={16}
                          className="cursor-pointer hover:text-white "
                        />
                      </span>
                    </div>
                    <div className="flex gap-2 justify-between items-center">
                      <button
                        title="Refinar Prompt"
                        className="bg-orange-500 hover:bg-orange-600 flex gap-2 items-center px-2 rounded py-1 text-gray-100 hover:text-white transition"
                      >
                        <Sparkles size={16} />
                        <p className="text-xs cursor-pointer">Refinar</p>
                      </button>
                      <p className="text-xs">v5</p>
                      <div className="flex gap-2 justify-end">
                        <span title="Ver Prompt">
                          <Eye
                            size={16}
                            className="cursor-pointer hover:text-white "
                          />
                        </span>

                        <span title="Mas opciones">
                          <Ellipsis
                            size={16}
                            className="cursor-pointer hover:text-white "
                          />
                        </span>

                        {/* Estas quedan en menu
                    <span title="Comparar Versiones"><GitCompare size={16} className="cursor-pointer hover:text-white " /></span>
                    <span title="Eliminar Prompt"><Trash size={16} className="cursor-pointer hover:text-white " /></span> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-400 flex mt-4 justify-end">
              <p>Cargar más</p>
            </div>
          </div>

          <button
            className="w-full flex items-center justify-between px-3 py-2 rounded-md
             bg-zinc-800 hover:bg-zinc-700 transition"
          >
            <span className="text-sm text-gray-200 font-medium">Recursos</span>

            <ChevronDown
              size={18}
              className="transition-transform duration-200"
            />
          </button>

          {/* Carga un modal con todas las templates disponibles */}
          <div className="mt-2 flex flex-col gap-2 pl-4">
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <Dot size={14} />
              Templates
            </a>

            {/* Carga otra pagina con entradas de blog, pensadas en posicionar SEO */}
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <Dot size={14} />
              Blog
            </a>

            {/* Carga otra pagina con resumenes globales y por prompt de las metricas (% de iteraciones hasta final, tiempo medio, tokens usados, etc) */}
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <Dot size={14} />
              Métricas
            </a>
          </div>
        </nav>
        <div className="absolute bottom-6 left-6 flex gap-4">
          <LogOut size={20} />
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition"
            title="Desconectar"
          >
            Desconectar
          </a>
        </div>
      </aside>

      <div className="max-w-4xl p-6 text-center mt-16">
        <h1 className="mb-4 text-6xl font-bold text-white">
          Bienvenido a <span className="text-blue-500">Prompt Lab</span>
        </h1>
        <h2 className="mb-6 text-xl">
          Itera prompts con control de versiones, métricas y trazabilidad.
          Diseñado para flujos de trabajo serios con modelos de lenguaje.
        </h2>
        <h3 className="mb-6 text-lg">
          Tenemos <span className="text-cyan-400 font-bold">una guía </span>{" "}
          diseñada para ayudarte a escribir mejores prompts, de forma
          estructurada y efectiva.
          <span className="text-cyan-400 font-bold">
            {" "}
            Accede con tu cuenta
          </span>{" "}
          y mantén un historial completo de tus prompts y su evolución. Refina
          problemas paso a paso, reutiliza{" "}
          <span className="text-cyan-400 font-bold">templates</span> listos para
          usar y aprovecha múltiples herramientas pensadas para obtener
          resultados de alta calidad.
        </h3>
        <textarea
          className="w-full h-40 p-4 bg-zinc-800 border border-zinc-700 rounded-md text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Escribe tu prompt aquí..."
        ></textarea>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Comenzar a mejorar tu Prompt
        </button>
      </div>
    </div>
  );
}
