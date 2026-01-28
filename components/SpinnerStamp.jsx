'use client';

import { motion } from 'framer-motion';

export default function SpinnerStamp() {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.6, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: false }}
      className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
    >
      <motion.img
        src="/spinner-white.svg"
        alt="stamp"
        className="h-[150px] w-[150px] object-contain lg:h-[250px] lg:w-[200px]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
      />
    </motion.div>
  );
}
