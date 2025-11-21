export default function ScrollSnapHint(){
  return (
    <div className="pointer-events-none fixed bottom-4 inset-x-0 z-40 flex justify-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-300">
        Scroll to snap through sections
        <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
      </div>
    </div>
  )
}