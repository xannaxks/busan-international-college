'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export default function ParallaxItem({
                                       children,
                                       overlay,
                                       parallaxDistance = 300,
                                       snap = true,
                                     }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, parallaxDistance)

  return (
    <section
      className={`parallax-item ${snap ? 'snap' : ''}`}
    >
      <div ref={ref} className="parallax-content">
        {children}
      </div>

      {overlay && (
        <motion.div
          className="parallax-overlay"
          style={{ y }}
        >
          {overlay}
        </motion.div>
      )}
    </section>
  )
}
