export function Loading() {
  return (
    <div className="flex min-h-screen justify-center w-full bg-zinc-950 font-sans items-center">
      <div className="max-w-4xl pl6 text-center">
        <div className="flex items-center gap-1 text-blue-500 font-medium">
          <span>Cargando</span>
          <span className="flex gap-1">
            <span className="animate-pulse">.</span>
            <span className="animate-pulse [animation-delay:0.2s]">.</span>
            <span className="animate-pulse [animation-delay:0.4s]">.</span>
          </span>
        </div>
      </div>
    </div>
  );
}
