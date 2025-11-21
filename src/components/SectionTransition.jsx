import { motion } from 'framer-motion'

export default function SectionTransition({ direction = 'down' }) {
  const isDown = direction === 'down'
  return (
    <div className="relative h-12 sm:h-16 -mt-12 sm:-mt-16">
      <motion.div
        initial={{ opacity: 0, y: isDown ? -10 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <div className="h-full w-full bg-[radial-gradient(60%_140%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
      </motion.div>
    </div>
  )
}
