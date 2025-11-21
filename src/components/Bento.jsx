import { motion } from 'framer-motion'
import { Sparkles, Brain, LayoutDashboard, Rocket, Bot, LineChart, Sticker, Boxes, Gauge } from 'lucide-react'

const cards = [
  {
    icon: Brain,
    title: 'Idea Vault',
    desc: 'Drop thoughts, links and voice notes. Auto-tags keep everything clustered.',
    className: 'col-span-2 row-span-2',
    accent: 'from-blue-500 to-cyan-400'
  },
  {
    icon: LayoutDashboard,
    title: 'Canvas',
    desc: 'A modular canvas for specs, tasks and docs.',
    className: 'col-span-2',
    accent: 'from-fuchsia-500 to-violet-400'
  },
  {
    icon: Bot,
    title: 'AI Assist',
    desc: 'Turn briefs into epics, tests and roadmaps.',
    className: 'col-span-1',
    accent: 'from-emerald-500 to-teal-400'
  },
  {
    icon: LineChart,
    title: 'Impact',
    desc: 'Prioritize by effort vs ROI with live insights.',
    className: 'col-span-1',
    accent: 'from-amber-500 to-orange-400'
  },
  {
    icon: Boxes,
    title: 'Templates',
    desc: 'Kickstart with product-proven templates.',
    className: 'col-span-2',
    accent: 'from-sky-500 to-cyan-400'
  },
  {
    icon: Gauge,
    title: 'Momentum',
    desc: 'Visualize velocity and delivery rhythm.',
    className: 'col-span-2',
    accent: 'from-rose-500 to-pink-400'
  },
  {
    icon: Rocket,
    title: 'Ship Faster',
    desc: 'Align teams around what really moves the needle.',
    className: 'col-span-4',
    accent: 'from-blue-500 to-indigo-500'
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export default function Bento() {
  return (
    <section id="bento" className="relative min-h-screen snap-start py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_500px_at_20%_20%,rgba(56,189,248,0.12),transparent),radial-gradient(800px_500px_at_80%_0%,rgba(99,102,241,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} className="text-3xl md:text-5xl font-semibold text-white">
            A bento of clarity
          </motion.h2>
          <motion.p initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{delay:0.05}} className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Modular blocks that feel fluid, fast and focused.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-4 auto-rows-[120px] md:auto-rows-[150px] gap-4"
        >
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              variants={item}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-5 ${c.className}`}
            >
              <div className={`absolute inset-px rounded-[14px] opacity-20 bg-gradient-to-br ${c.accent}`} />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-lg grid place-items-center text-white bg-gradient-to-br ${c.accent}`}>
                    {c.icon ? <c.icon size={18} /> : <Sparkles size={18} />}
                  </div>
                  <h3 className="text-white font-semibold">{c.title}</h3>
                </div>
                <p className="text-slate-300/90 text-sm max-w-sm">{c.desc}</p>
              </div>
              <div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
