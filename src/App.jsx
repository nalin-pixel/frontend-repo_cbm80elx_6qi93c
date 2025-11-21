import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1000px_600px_at_-10%_-10%,rgba(56,189,248,0.12),transparent),radial-gradient(800px_500px_at_110%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(700px_500px_at_50%_120%,rgba(15,23,42,1),rgba(2,6,23,1))]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} IdeateFlow. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
