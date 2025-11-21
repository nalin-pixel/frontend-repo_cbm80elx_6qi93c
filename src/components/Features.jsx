import { motion } from 'framer-motion'
import { Brain, LayoutDashboard, Sparkles, Workflow, CalendarCheck2, LineChart } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Idea vault',
    desc: 'Capture, cluster and prioritize ideas with smart tagging and similarity grouping.'
  },
  {
    icon: LayoutDashboard,
    title: 'Project canvas',
    desc: 'A composable canvas for user stories, tasks, docs and context—all in one place.'
  },
  {
    icon: Sparkles,
    title: 'Validation scoring',
    desc: 'Score demand, feasibility and ROI to identify winners early.'
  },
  {
    icon: Workflow,
    title: 'AI-assisted flows',
    desc: 'Generate roadmaps, epics and test plans from a single product brief.'
  },
  {
    icon: CalendarCheck2,
    title: 'Execution rhythm',
    desc: 'Plan sprints, assign tasks and track momentum with velocity insights.'
  },
  {
    icon: LineChart,
    title: 'Outcome analytics',
    desc: 'See effort vs impact and ship what moves the needle.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(700px_350px_at_30%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(700px_350px_at_80%_20%,rgba(8,145,178,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.h2 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="text-3xl md:text-5xl font-semibold text-white">
            Everything from spark to ship
          </motion.h2>
          <motion.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.05}} className="mt-4 text-slate-300 max-w-2xl mx-auto">
            The modern system for ideation, validation and execution—designed for product teams.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{opacity:0, y:12}}
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.03 }}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur hover:bg-slate-900/60 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white grid place-items-center">
                {f.icon && <f.icon size={20} />}
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
