import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-10 backdrop-blur shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Start ideating in minutes</h3>
          <p className="mt-3 text-slate-300">Kick off your first project, invite your team and bring clarity to what to build next.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-500/20">Create free account</a>
            <a href="#" className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10 transition-colors">Book a demo</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
