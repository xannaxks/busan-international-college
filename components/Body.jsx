'use client';

import { motion, useScroll, useTransform } from 'framer-motion';


export default function Parallax() {
  const { scrollY } = useScroll();

  // Background moves slower
  const bgY = useTransform(scrollY, [0, 1000], [0, -200]);

  // Foreground moves normally
  const fgY = useTransform(scrollY, [0, 1000], [0, -400]);

  return (
    <section className="relative h-[200vh] overflow-hidden">

      {/* Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-[url('/bg.jpg')] bg-cover bg-center"
      />

      {/* Content */}
      <motion.div
        style={{ y: fgY }}
        className="relative h-screen flex items-center justify-center"
      >
        <h1 className="text-6xl text-white font-bold">
          Smooth Parallax
        </h1>
      </motion.div>

    </section>
  );
}
