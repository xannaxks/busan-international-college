'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * QuoteCard (App Router friendly)
 * Usage:
 * <QuoteCard
 *   quote="Tongmyong University gave me the confidence to build real projects and meet people from all over the world."
 *   name="Jane Park"
 *   role="International Student • Busan"
 *   avatarSrc="/people/jane.jpg"
 *   highlight="Class of 2026"
 * />
 */
export default function QuoteCard({
                                    quote = 'Write the quote text here...',
                                    name = 'Full Name',
                                    role = 'Role / Title',
                                    avatarSrc = '/avatar-placeholder.png', // put your image in /public
                                    highlight = '',
                                    className = '',
                                  }) {
  return (
    <section className={`w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.35 }}
        className="
          relative mx-auto w-full max-w-5xl
          overflow-hidden rounded-3xl
          border border-white/10 bg-white/5
          shadow-[0_20px_80px_-40px_rgba(0,0,0,0.6)]
          backdrop-blur-xl
        "
      >
        {/* soft glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative grid gap-6 p-6 sm:p-10 md:grid-cols-[240px_1fr] md:gap-10">
          {/* Left: person */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
            viewport={{ once: true, amount: 0.4 }}
            className="
              flex items-center gap-4 md:flex-col md:items-start md:gap-5
            "
          >
            <div
              className="
                relative h-14 w-14 overflow-hidden rounded-2xl
                border border-white/15 bg-white/10
                sm:h-16 sm:w-16 md:h-24 md:w-24
              "
            >
              <Image
                src={avatarSrc}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 64px, 96px"
                priority={false}
              />
            </div>

            <div className="min-w-0">
              <div className="truncate text-base font-semibold text-white sm:text-lg">
                {name}
              </div>
              <div className="truncate text-sm text-white/70 sm:text-base">
                {role}
              </div>

              {highlight ? (
                <div className="mt-2 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75">
                  {highlight}
                </div>
              ) : null}
            </div>
          </motion.div>

          {/* Right: quote */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative"
          >
            {/* quote mark */}
            <div className="absolute -top-3 right-0 select-none text-6xl font-black leading-none text-white/10 sm:text-7xl">
              “
            </div>

            <div className="text-pretty text-lg leading-relaxed text-white/90 sm:text-xl sm:leading-relaxed">
              {quote}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-white/25 via-white/10 to-transparent" />
              <span className="text-xs tracking-wide text-white/60">
                {name}
              </span>
            </div>

            {/* hover shimmer */}
            <div
              className="
                pointer-events-none absolute inset-0 rounded-3xl opacity-0
                transition-opacity duration-300
                [background:radial-gradient(1200px_circle_at_20%_0%,rgba(255,255,255,0.12),transparent_40%)]
                group-hover:opacity-100
              "
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
