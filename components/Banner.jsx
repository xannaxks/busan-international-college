'use client';

import { motion } from 'framer-motion';

const items = [
  '/apple.svg',
  '/aws.svg',
  '/cisco.svg',
  '/hyundai.svg',
  '/lg.svg',
  '/samsung.svg',
  '/sk-hynix.svg',
  '/coupang.svg'
];

// eslint-disable-next-line react/function-component-definition
export default function InfiniteBanner({ to = 'left' }) {
  const isLeft = to === 'left';

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-red-900 to-transparent"
      />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-red-900 to-transparent"
      />

      <motion.div
        className="flex w-max mx-5 items-center"
        initial={{ x: isLeft ? '0%' : '-50%' }}
        animate={{ x: isLeft ? '-50%' : '0%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        }}
      >
        {[...items, ...items, ...items, ...items, ...items].map((src, i) => (
          <div key={i} className="flex items-center whitespace-nowrap mx-5">
            {/* Rounded white card around logo */}
            <div className="bg-white rounded-2xl p-4 px-16 shadow-lg flex items-center justify-center">
              <img
                src={src}
                alt={`logo-${i}`}
                className="h-20 w-20 object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
