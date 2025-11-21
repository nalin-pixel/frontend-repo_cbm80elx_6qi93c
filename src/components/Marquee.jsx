import { motion } from 'framer-motion'

const logos = ['Futura', 'Nova', 'Aperture', 'Helix', 'Quanta', 'Nimbus', 'Vector']

export default function Marquee() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur px-4 py-6 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap text-slate-400"
          >
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="text-sm tracking-widest uppercase">{l}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
