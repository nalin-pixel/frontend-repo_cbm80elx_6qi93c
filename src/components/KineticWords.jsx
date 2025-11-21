import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const variants = {
  enter: { y: '100%', opacity: 0 },
  center: { y: '0%', opacity: 1 },
  exit: { y: '-100%', opacity: 0 },
}

export default function KineticWords({
  words = ['ideas', 'products', 'sprints'],
  interval = 1800,
  className = 'inline-block',
}) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [interval, words.length])

  return (
    <span className={`relative inline-flex h-[1.1em] overflow-hidden align-baseline ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
