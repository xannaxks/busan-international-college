'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MorphingHeroSection({
  items = IMAGE_ITEMS,
  title = 'Choose your department',
  subtitle = '',
  duration = 0.9,
  hold = 2,
  className = '',
}) {
  const safeItems = useMemo(() => {
    const arr = Array.isArray(items) ? items.filter(Boolean) : [];
    return arr.length >= 2 ? arr : [];
  }, [items]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeItems.length < 2) return;

    // total time per slide = duration (transition) + hold (pause)
    const t = setTimeout(() => {
      setIndex((prev) => (prev + 1) % safeItems.length);
    }, (duration + hold) * 1000);

    return () => clearTimeout(t);
  }, [index, safeItems.length, duration, hold]);

  if (safeItems.length < 2) return null;

  const current = safeItems[index];

  return (
    <section className={['min-h-dvh w-full bg-neutral-950 px-4 py-12 sm:px-6 rounded-2xl', className].join(' ')}>
      <div className="mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl items-center justify-center">
        <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl sm:p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* BIG IMAGE AREA */}
            <div className="w-full md:w-[52%]">
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-4 sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.alt ?? current.label}
                    className="absolute inset-0 h-full w-full object-contain p-6"
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* TEXT AREA */}
            <div className="w-full md:w-[48%]">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h1>
              <p className="mt-2 text-base text-white/70 sm:text-lg">
                {subtitle}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 py-8 px-12">
                <p className="text-sm uppercase tracking-wider text-white/50">
                  Now showing
                </p>

                {/* Smooth label change */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current.label}
                    className="mt-1 text-2xl font-semibold text-white sm:text-3xl"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: Math.min(0.35, duration * 0.5), ease: 'easeInOut' }}
                  >
                    {current.label}
                  </motion.p>
                </AnimatePresence>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  href={'/education-at-bic'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={[
                    'group relative inline-flex items-center justify-center gap-2',
                    'rounded-2xl px-5 py-3',
                    'border border-white/15 bg-white/10 backdrop-blur-xl',
                    'text-sm font-semibold text-white',
                    'shadow-[0_10px_30px_rgba(0,0,0,0.35)]',
                    'transition-colors duration-200',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-0',
                    className,
                  ].join(' ')}
                >
                  {/* soft hover glow */}
                  <span
                    className={[
                      'pointer-events-none absolute -inset-1 rounded-[1.2rem] opacity-0 blur-xl',
                      'bg-gradient-to-r from-white/15 via-white/10 to-white/15',
                      'transition-opacity duration-300 group-hover:opacity-100',
                    ].join(' ')}
                  />

                  {/* inner highlight border */}
                  <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/25 transition" />

                  <span className="relative">Learn more</span>

                  {/* arrow */}
                  <motion.span
                    className="relative inline-flex"
                    initial={false}
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Pill = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
    {children}
  </span>
);

export const IMAGE_ITEMS = [
  { label: 'AI & Computer Engineering', src: '/ai-and-computer-engineering-white.svg' },
  { label: 'Global Business', src: '/global-business-white.svg' },
  { label: 'Global Korean Studies', src: '/global-korean-studies-white.svg' },
  { label: 'Mechanical & Automotive Engineering', src: '/engineering-white.svg' },
  { label: 'Digital Design & Marketing', src: '/digital-design-and-marketing-white.svg' },
  { label: 'System Information & Security', src: '/information-system-and-security-white.svg' },
  { label: 'Tech Management & Innovation', src: '/tech-management-and-innovation-white.svg' },
];
