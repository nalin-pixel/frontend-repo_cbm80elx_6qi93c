import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticButton({ as: As = 'a', className = '', children, strength = 24, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 })

  function onMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / rect.width) * strength)
    y.set((relY / rect.height) * strength)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} style={{ x: springX, y: springY }}>
      <As {...props} className={className}>
        {children}
      </As>
    </motion.div>
  )
}
