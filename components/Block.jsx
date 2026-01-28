'use client';

import { motion } from 'framer-motion';
import TextAnimation from './TextAnimation';

// eslint-disable-next-line react/function-component-definition
export default function Block({
  header,
  text,
  className,
  direction = '', // 'left' | 'right'
}) {
  const isLeft = direction === 'left';
  const isRight = direction === 'right';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isLeft ? -40 : 40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false }}
      className={`
        flex-1 rounded-2xl border border-white/40 bg-neutral-950
        p-8 ${isLeft ? 'pb-14 md:pr-20 md:pb-8' : isRight ? 'pt-14 md:pl-20 md:pt-8' : 'p-8'}
        text-white
        backdrop-blur-xl
        shadow-xl hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
        section-gradient-purple-red
        transform transition-transform duration-300 hover:scale-105
        ${className}
      `}
    >
      <h3 className="mb-7 pt-7 text-5xl font-semibold">
        {header}
      </h3>

      {text.map((item, i) => (
        <TextAnimation
          key={i}
          as="p"
          text={item}
          classname="mb-4 text-lg leading-9 normal-case"
          direction="up"
          duration={0.4}
          stagger={0.06}
        />
      ))}
    </motion.div>
  );
}
