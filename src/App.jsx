import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Bento from './components/Bento'
import Sections from './components/Sections'
import Marquee from './components/Marquee'
import ScrollSnapHint from './components/ScrollSnapHint'
import ProgressBar from './components/ProgressBar'
import CursorGlow from './components/CursorGlow'
import Grain from './components/Grain'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 snap-y snap-mandatory overflow-y-auto">
      {/* Subtle ambient gradients + vignette */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_-10%_-10%,rgba(56,189,248,0.10),transparent),radial-gradient(800px_500px_at_110%_-10%,rgba(99,102,241,0.10),transparent),radial-gradient(700px_500px_at_50%_120%,rgba(15,23,42,1),rgba(2,6,23,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.2)_20%,transparent_60%,rgba(2,6,23,0.5))]" />
      </div>

      <Grain opacity={0.05} />

      <ProgressBar />
      <CursorGlow />
      <Navbar />
      <main>
        {/* Hero full screen snap */}
        <section className="min-h-screen snap-start flex items-center">
          <Hero />
        </section>

        {/* Partner marquee */}
        <Marquee />

        {/* Bento grid immersive section */}
        <Bento />

        {/* Feature grid */}
        <section className="min-h-screen snap-start flex items-center">
          <Features />
        </section>

        {/* Scroll-snapped multi sections: workflow, pricing, faq, final CTA */}
        <Sections />

        {/* CTA footer section */}
        <section className="min-h-screen snap-start flex items-center">
          <CTA />
        </section>
      </main>

      <ScrollSnapHint />

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
