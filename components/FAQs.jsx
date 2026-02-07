'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DEFAULT_FAQ = [
  { q: 'Multiple Majors & Micro-degree Application/Withdrawal (Spring 2026)', mdx: () => import('../content/faqs/how-to-apply.mdx') },
  { q: 'How to register for courses', mdx: () => import('../content/faqs/course-registration.mdx') },
];

export default function FAQSectionMDX({
  title = 'FAQ',
  subtitle = 'Frequently Asked Questions',
  items = DEFAULT_FAQ,
  className = '',
}) {
  const faq = useMemo(() => (Array.isArray(items) ? items.filter(Boolean) : []), [items]);
  const [open, setOpen] = useState(-1);
  const [Loaded, setLoaded] = useState({}); // idx -> React component

  async function handleToggle(idx) {
    setOpen((prev) => (prev === idx ? -1 : idx));

    // lazy-load mdx component once
    if (!Loaded[idx]) {
      const mod = await faq[idx].mdx();
      const Component = mod.default;
      setLoaded((prev) => ({ ...prev, [idx]: Component }));
    }
  }

  return (
    <section className={`w-full ${className} relative z-[150]`}>
      <div className="mx-auto w-full max-w-6xl px-2 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-white"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }}
            className="mt-2 text-sm sm:text-base text-white/70"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="divide-y divide-white/10">
            {faq.map((item, idx) => {
              const isOpen = open === idx;
              const Answer = Loaded[idx];

              return (
                <div key={`${item.q}-${idx}`} className="group">
                  <button
                    type="button"
                    onClick={() => handleToggle(idx)}
                    className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    aria-expanded={isOpen}
                  >
                    <p className="text-base sm:text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                      {item.q}
                    </p>

                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="relative min-h-9 min-w-9 rounded-2xl border border-white/10 bg-white/5 backdrop-blur
                                 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    >
                      <span className="absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 bg-white/80" />
                      <span className="absolute left-1/2 top-1/2 w-[2px] h-4 -translate-x-1/2 -translate-y-1/2 bg-white/80" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-7 pb-5 sm:pb-6">
                          <div className="rounded-2xl border border-white/10 bg-black/10 backdrop-blur
                                          shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] px-4 sm:px-5 py-4"
                          >
                            {/* MDX content uses Tailwind Typography */}
                            <div className="prose prose-invert max-w-none prose-p:text-white/75 prose-li:text-white/75 prose-headings:text-white">
                              {Answer ? (
                                <Answer />
                              ) : (
                                <p className="text-white/70 text-sm">Loading…</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
