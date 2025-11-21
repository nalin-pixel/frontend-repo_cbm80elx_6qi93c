import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -24])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.6])

  return (
    <section className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(59,130,246,0.25),transparent)]" />
        <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Interactive 3D workspace
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7 }}
            style={{ y: titleY }}
            className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-white"
          >
            Ideate, validate and manage your SaaS ideas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-5 text-slate-300 text-lg max-w-xl"
          >
            Turn raw sparks into shippable products. Capture ideas, score opportunities, plan roadmaps and keep momentum—on one minimalist, futuristic canvas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-8 flex items-center gap-3"
          >
            <MagneticButton
              as="a"
              href="#get-started"
              className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow"
            >
              Start ideating free
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#features"
              className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10 transition-colors"
            >
              Explore features
            </MagneticButton>
          </motion.div>
        </div>

        <div className="lg:col-span-6 min-h-[420px]" />
      </div>
    </section>
  )
}
