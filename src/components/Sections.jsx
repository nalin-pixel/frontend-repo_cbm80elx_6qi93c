import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SectionTransition from './SectionTransition'

export default function Sections() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['10%', '-20%'])

  const section = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] } })
  }

  return (
    <div ref={ref} className="relative snap-y snap-mandatory">
      {/* Workflow Section */}
      <section id="workflow" className="min-h-screen snap-start flex items-center py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center w-full">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={section} className="lg:col-span-6">
            <h2 className="text-3xl md:text-5xl font-semibold text-white">Flow from spark to ship</h2>
            <p className="mt-4 text-slate-300 max-w-xl">Capture ideas, validate impact, craft the plan and keep momentum with a rhythm that sticks.</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Capture & cluster with AI</li>
              <li>• Score demand, feasibility and ROI</li>
              <li>• Generate epics, tests and roadmap</li>
              <li>• Sprint, measure, learn</li>
            </ul>
          </motion.div>
          <motion.div style={{ y: y1 }} className="lg:col-span-6">
            <div className="h-72 md:h-96 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800" />
          </motion.div>
        </div>
      </section>

      <SectionTransition />

      {/* Pricing Section */}
      <section id="pricing" className="min-h-screen snap-start flex items-center py-24">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="text-center">
            <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} className="text-3xl md:text-5xl font-semibold text-white">Simple, transparent pricing</motion.h2>
            <motion.p initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{delay:0.05}} className="mt-3 text-slate-300 max-w-2xl mx-auto">Start free. Scale when your team does.</motion.p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {['Free','Pro','Scale'].map((tier, i) => (
              <motion.div key={tier} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{delay:i*0.05}} className={`rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur ${i===1 ? 'ring-1 ring-cyan-400/40' : ''}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-white font-semibold">{tier}</h3>
                  <span className="text-xs text-slate-400">{i===1?'Most popular':''}</span>
                </div>
                <div className="mt-4 text-white text-3xl font-semibold">{i===0?'$0':i===1?'$16':'$49'}<span className="text-sm text-slate-400">/mo</span></div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>Unlimited ideas</li>
                  <li>AI assists</li>
                  <li>Canvas & templates</li>
                  <li>Analytics</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex justify-center w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-white font-semibold">Get started</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition />

      {/* FAQ Section */}
      <section id="faq" className="min-h-screen snap-start flex items-center py-24">
        <div className="mx-auto max-w-5xl px-6 w-full">
          <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} className="text-3xl md:text-5xl font-semibold text-white text-center">Questions, answered</motion.h2>
          <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur">
            {faq.map((q, i) => (
              <motion.details key={q.q} initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{delay:i*0.03}} className="group p-6">
                <summary className="cursor-pointer list-none text-white font-medium flex items-center justify-between">
                  {q.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-2 text-slate-300">{q.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition />

      {/* Contact/CTA clone for snap flow end */}
      <section className="min-h-screen snap-start flex items-center py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-10 backdrop-blur shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Build momentum today</h3>
            <p className="mt-3 text-slate-300">Join product teams turning ideas into outcomes with less friction and more flow.</p>
            <a href="#get-started" className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-white font-semibold">Create free account</a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const faq = [
  { q: 'What is IdeateFlow?', a: 'A modern workspace for ideation, validation and execution—built for product teams.' },
  { q: 'Do you have a free plan?', a: 'Yes. Start free and upgrade when your team grows.' },
  { q: 'Can I import from other tools?', a: 'CSV import and API are available on Pro and Scale.' },
  { q: 'How does AI help?', a: 'It clusters ideas, proposes roadmaps and highlights impact vs effort.' },
]
