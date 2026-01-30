'use client'

import { motion, useScroll, useSpring } from 'motion/react'

export default function ScrollProgress({
                                         height = 4,
                                         bottom = 0,
                                       }) {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        scaleX,
        height,
        bottom,
      }}
      className="scroll-progress"
    />
  )
}
