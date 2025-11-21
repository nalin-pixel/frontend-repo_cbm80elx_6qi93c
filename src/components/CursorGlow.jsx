import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 40, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 300, damping: 40, mass: 0.6 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[40] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.35),rgba(59,130,246,0.2)_40%,transparent_70%)] mix-blend-screen" />
    </motion.div>
  )
}
