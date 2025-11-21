import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ children, href = '#' }) {
  return (
    <a
      href={href}
      className="text-slate-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center text-white">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold text-white">IdeateFlow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#workflow">Workflow</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          <div className="hidden md:block">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow"
            >
              Get started
            </a>
          </div>

          <button
            className="md:hidden text-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-6">
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur px-6 py-4 space-y-4">
            <div className="grid gap-3">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#workflow">Workflow</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center w-full gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
