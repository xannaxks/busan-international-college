'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NoticeList({ items = [] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] overflow-hidden">
      <div className="divide-y divide-white/10">
        {items.map((n, idx) => (
          <motion.div
            key={n.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: idx * 0.03, ease: 'easeOut' }}
          >
            <Link
              href={`/notices/${n.slug}`}
              className="group block px-5 sm:px-7 py-4 sm:py-5 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                {/* left */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    {n.pinned && (
                      <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[11px] text-white/80">
                        📌 Pinned
                      </span>
                    )}
                    <p className="text-xs text-white/55">
                      Date of publication: <span className="text-white/75">{n.dateCreated}</span>
                    </p>
                  </div>

                  <p className="mt-2 text-base sm:text-lg font-medium text-white/90 group-hover:text-white transition-colors break-words">
                    {n.title}
                  </p>

                  <p className="mt-1 text-xs sm:text-sm text-white/50">
                    Click to open
                  </p>
                </div>

                {/* right: chevron */}
                <div className="shrink-0 mt-1 h-9 w-9 rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] flex items-center justify-center">
                  <span className="text-white/70 group-hover:text-white transition-colors">↗</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
