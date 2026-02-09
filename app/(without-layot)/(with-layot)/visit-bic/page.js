// app/visit-bic/page.tsx
'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const spring = { type: 'spring', stiffness: 280, damping: 26, mass: 0.9 };

const Icon = ({ name }) => {
  const cls = 'h-5 w-5';
  switch (name) {
    case 'train':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 3h10a3 3 0 0 1 3 3v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a3 3 0 0 1 3-3Z"
            className="stroke-white/80"
            strokeWidth="1.6"
          />
          <path d="M7 7h10" className="stroke-white/80" strokeWidth="1.6" />
          <path d="M8 19l-2 2" className="stroke-white/80" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 19l2 2" className="stroke-white/80" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8.5 14.5h.01M15.5 14.5h.01" className="stroke-white/80" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'walk':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M13 5a2 2 0 1 0 0.001 4.001A2 2 0 0 0 13 5Z"
            className="stroke-white/80"
            strokeWidth="1.6"
          />
          <path
            d="M10 20l2-6 2 2 1 4M9 12l3-2 3 1"
            className="stroke-white/80"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'bus':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 4h12a2 2 0 0 1 2 2v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Z"
            className="stroke-white/80"
            strokeWidth="1.6"
          />
          <path d="M6 8h12" className="stroke-white/80" strokeWidth="1.6" />
          <path d="M7.5 16.5h.01M16.5 16.5h.01" className="stroke-white/80" strokeWidth="3" strokeLinecap="round" />
          <path d="M7 19l-1 2M17 19l1 2" className="stroke-white/80" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'warning':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3 22 20H2L12 3Z"
            className="stroke-white/85"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 9v5" className="stroke-white/85" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 17h.01" className="stroke-white/85" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'info':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" className="stroke-white/80" strokeWidth="1.6" />
          <path d="M12 10v7" className="stroke-white/80" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 7h.01" className="stroke-white/80" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
            className="stroke-white/80"
            strokeWidth="1.6"
          />
          <path d="M12 10.5h.01" className="stroke-white/80" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
  }
};

const GlassCard = ({ children, className = '' }) => (
  <div
    className={[
      'relative rounded-2xl border border-white/12 bg-white/7 backdrop-blur-xl',
      'shadow-[0_18px_60px_-24px_rgba(0,0,0,0.65)]',
      className,
    ].join(' ')}
  >
    {/* subtle sheen */}
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-60" />
    {children}
  </div>
);

const Divider = () => (
  <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
);

const Chip = ({ children, tone = 'neutral' }) => {
  const toneCls =
    tone === 'red'
      ? 'border-red-500/20 bg-red-500/10 text-red-100'
      : tone === 'blue'
        ? 'border-sky-400/20 bg-sky-400/10 text-sky-100'
        : 'border-white/12 bg-white/8 text-white/85';

  return (
    <span
      className={[
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs',
        toneCls,
      ].join(' ')}
    >
      <span
        className={[
          'h-1.5 w-1.5 rounded-full',
          tone === 'red' ? 'bg-red-300/80' : tone === 'blue' ? 'bg-sky-200/80' : 'bg-white/55',
        ].join(' ')}
      />
      {children}
    </span>
  );
};

function ClickHint({ label = '' }) {
  return (
    <></>
  );
}

function ActionLink({
                      href,
                      children,
                      tone = 'neutral',
                      external,
                      className = '',
                    }) {
  const toneCls =
    tone === 'red'
      ? 'border-red-500/20 bg-red-500/10 hover:bg-red-500/16 hover:border-red-400/30'
      : tone === 'blue'
        ? 'border-sky-400/20 bg-sky-400/10 hover:bg-sky-400/14 hover:border-sky-300/30'
        : 'border-white/12 bg-white/8 hover:bg-white/12 hover:border-white/18';

  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={spring}
      className={[
        'group relative rounded-2xl border px-4 py-3 text-sm text-white/90 transition',
        'focus:outline-none focus:ring-2 focus:ring-white/20',
        'hover:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.8)]',
        toneCls,
        className,
      ].join(' ')}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(255,255,255,0.18),transparent_70%)]" />
      <div className="flex items-center justify-between gap-3">
        <span className="min-w-0">{children}</span>
        <span className="text-white/60 transition group-hover:text-white/85">→</span>
      </div>
      <ClickHint />
    </motion.a>
  );
}

function Alert({
                 title,
                 items,
                 tone = 'red',
               }
) {
  const cls =
    tone === 'red'
      ? 'border-red-500/25 bg-gradient-to-b from-red-500/14 to-white/6'
      : 'border-sky-400/25 bg-gradient-to-b from-sky-400/14 to-white/6';

  return (
    <div className={['rounded-2xl border p-5', cls].join(' ')}>
      <div className="flex items-start gap-3">
        <div
          className={[
            'mt-0.5 rounded-xl border p-2',
            tone === 'red'
              ? 'border-red-500/25 bg-red-500/12'
              : 'border-sky-400/25 bg-sky-400/12',
          ].join(' ')}
        >
          <Icon name={tone === 'red' ? 'warning' : 'info'} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white/95">{title}</p>
          <ul className="mt-2 space-y-2 text-sm text-white/78">
            {items.map((e) => (
              <li key={e} className="flex gap-3">
                <span
                  className={[
                    'mt-2 h-1.5 w-1.5 rounded-full',
                    tone === 'red' ? 'bg-red-300/80' : 'bg-sky-200/80',
                  ].join(' ')}
                />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/function-component-definition
export default function VisitBICPage() {
  const heroSrc = '/night-busan.jpg';

  const routes = useMemo(
    () => [
      {
        id: 'busan',
        from: 'From Busan (Downtown / Busan Station)',
        summary: 'Fastest for most visitors. Subway + short walk + shuttle/bus.',
        chips: [
          { label: '~35–60 min', tone: 'blue' },
          { label: 'Subway + Shuttle', tone: 'neutral' },
          { label: 'Easy', tone: 'neutral'},
        ],
        steps: [
          { icon: 'train', label: 'Metro → Line 1 / Line 2 (toward campus area)' },
          { icon: 'walk', label: 'Exit → short walk to a shuttle stop', note: 'Usually 5–10 minutes' },
          { icon: 'bus', label: 'Tongmyong Univ. shuttle bus', note: 'Check operation hours below' },
          { icon: 'pin', label: 'Arrive at Tongmyong University' },
        ],
      },
      {
        id: 'yangsan',
        from: 'From Yangsan / Ulsan',
        summary: 'Good if you come from the north-east side. Metro transfer route.',
        chips: [
          { label: '~60–90 min', tone: 'blue' },
          { label: 'Transfer', tone: 'neutral' },
          { label: 'Convenient', tone: 'neutral'  },
        ],
        steps: [
          { icon: 'train', label: 'Metro / Intercity → Busan side transfer point' },
          { icon: 'train', label: 'Metro Line 2 (toward campus area)' },
          { icon: 'walk', label: 'Exit 5 → walk to shuttle stop', note: '≈150m' },
          { icon: 'bus', label: 'Shuttle bus → campus' },
          { icon: 'pin', label: 'Arrive at Tongmyong University' },
        ],
      },
      {
        id: 'masan',
        from: 'From Masan / Changwon / Jinju',
        summary: 'Intercity bus + metro. Best if you start outside Busan.',
        chips: [
          { label: '~90–120 min', tone: 'blue' },
          { label: 'Intercity', tone: 'neutral' },
          { label: 'Common', tone: 'neutral'  },
        ],
        steps: [
          { icon: 'bus', label: 'Intercity bus → Busan (terminal)' },
          { icon: 'train', label: 'Metro transfer → Line 2 (campus direction)' },
          { icon: 'walk', label: 'Exit → shuttle stop' },
          { icon: 'bus', label: 'Shuttle bus → campus' },
          { icon: 'pin', label: 'Arrive at Tongmyong University' },
        ],
      },
    ],
    [],
  );

  const [activeRoute, setActiveRoute] = useState(routes[0]?.id ?? 'busan');

  const shuttle = useMemo(
    () => ({
      weekdayHours: '08:00 – 19:20 (Weekdays)',
      note: 'Times may change depending on road conditions.',
      intervals: [
        { time: '08:00 – 11:00', interval: '10–15 minutes' },
        { time: '11:00 – 16:00', interval: '30 minutes' },
        { time: '16:00 – 19:20', interval: '10 minutes' },
      ],
      exceptions: [
        'Saturday: No shuttle service',
        'Vacation: schedule may change',
        'Public holidays: may be suspended',
      ],
    }),
    [],
  );

  const active = routes.find((r) => r.id === activeRoute) ?? routes[0];

  return (
    <main className="min-h-screen bg-[#070A10] text-white">
      {/* Background glow (with subtle crimson accents) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-15%] h-[420px] w-[420px] rounded-full bg-white/8 blur-3xl" />
        <div className="absolute right-[-12%] top-[5%] h-[520px] w-[520px] rounded-full bg-white/7 blur-3xl" />
        <div className="absolute bottom-[-12%] left-[15%] h-[520px] w-[520px] rounded-full bg-white/6 blur-3xl" />
        <div className="absolute left-[20%] top-[10%] h-[520px] w-[520px] rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute right-[15%] bottom-[5%] h-[520px] w-[520px] rounded-full bg-red-500/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.10),transparent_60%)]" />
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[340px] w-full sm:h-[420px] lg:h-[520px]">
          <Image
            src={heroSrc}
            alt="Tongmyong University in Busan"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-[#070A10]" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_20%,rgba(255,255,255,0.16),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(239,68,68,0.16),transparent_55%)]" />
        </div>

        <div className="mx-auto -mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
            <GlassCard className="p-5 sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs text-red-100">
                    <span className="h-2 w-2 rounded-full bg-red-300/80" />
                    Visit BIC • Tongmyong University
                  </div>
                  <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                    Visit Busan International College
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm text-white/75 sm:text-base">
                    A modern, easy-to-scan guide with interactive routes, shuttle info, and quick contacts — designed for mobile first.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Chip tone="blue">Routes</Chip>
                  <Chip tone="red">Warnings</Chip>
                </div>
              </div>

              <Divider />

              {/* clearly clickable CTAs */}
              <div className="grid gap-3 sm:grid-cols-3">
                <ActionLink
                  href="https://www.google.com/maps/search/?api=1&query=Tongmyong+University"
                  external
                  tone="blue"
                >
                  Open campus in Maps
                </ActionLink>
                <ActionLink href="#routes" tone="neutral">
                  Jump to routes
                </ActionLink>
                <ActionLink href="#contact" tone="red">
                  Emergency / contact
                </ActionLink>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-red-500/20 bg-red-500/10 backdrop-blur-xl" />
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">Introduction of Busan</h2>
              <p className="text-sm text-white/60">Quick context for visitors</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <GlassCard className="p-6 lg:col-span-2">
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                Busan is a major coastal city in South Korea, known for its port, skyline, beaches, and international events.
                It’s a popular destination for students and visitors thanks to its transport connectivity, ocean views, and vibrant culture.
              </p>

              <Divider />

              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: 'Global events', desc: 'Festivals, conferences, and culture all year.' },
                  { title: 'Coastal city', desc: 'Beaches, marina spots, and ocean-side scenery.' },
                  { title: 'Easy transport', desc: 'Metro + bus network connects most areas.' },
                  { title: 'Student-friendly', desc: 'Food, cafes, and city life near campuses.' },
                ].map((x) => (
                  <li key={x.title} className="group flex gap-3 rounded-2xl border border-transparent p-2 transition hover:border-white/10 hover:bg-white/5">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-red-300/70" />
                    <div>
                      <p className="font-medium text-white/90">{x.title}</p>
                      <p className="text-sm text-white/65">{x.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-sm font-medium text-white/90">Before you go</p>
              <p className="mt-2 text-sm text-white/65">
                Shuttle hours & public holiday operations can change. Save your route and keep a backup taxi plan.
              </p>

              <Divider />

              <Alert
                tone="red"
                title="Warnings / precautions"
                items={[
                  'Shuttle may be suspended on public holidays or during vacation periods.',
                  'Last shuttle can fill up — arrive a bit early.',
                  'Weather can affect walking portions (rain/wind near the coast).',
                ]}
              />
            </GlassCard>
          </div>
        </motion.div>

        <Divider />

        {/* Visit BIC - Map + Routes */}
        <motion.div
          id="routes"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={fadeUp}
          custom={1}
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">Visit BIC</h2>
              <p className="text-sm text-white/60">Map + interactive route cards</p>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs text-white/60">Tip:</span>
              <span className="text-xs text-white/80">Tap a route to see steps</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {/* Map */}
            <GlassCard className="overflow-hidden lg:col-span-3">
              <div className="relative">
                <div className="flex items-center justify-between px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-2">
                      <Icon name="pin" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/90">Tongmyong University</p>
                      <p className="text-xs text-white/60">Busan, South Korea</p>
                    </div>
                  </div>

                  <ActionLink
                    href="https://www.google.com/maps/search/?api=1&query=Tongmyong+University"
                    external
                    tone="blue"
                    className="px-3 py-2 text-xs"
                  >
                    Open in Maps
                  </ActionLink>
                </div>

                <div className="h-[260px] w-full sm:h-[1000px]">
                  <iframe
                    title="Tongmyong University map"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Tongmyong%20University&output=embed"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </GlassCard>

            {/* Routes */}
            <GlassCard className="p-5 lg:col-span-2">
              <div className="grid gap-3">
                {routes.map((r) => {
                  const isActive = r.id === activeRoute;
                  return (
                    <motion.button
                      key={r.id}
                      onClick={() => setActiveRoute(r.id)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      transition={spring}
                      type="button"
                      className={[
                        'group relative rounded-2xl border px-4 py-3 text-left transition',
                        'focus:outline-none focus:ring-2 focus:ring-white/20',
                        'hover:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.8)]',
                        isActive
                          ? 'border-red-500/25 bg-gradient-to-b from-red-500/12 to-white/6'
                          : 'border-white/12 bg-white/6 hover:bg-white/10 hover:border-white/18',
                      ].join(' ')}
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(255,255,255,0.18),transparent_70%)]" />
                      <ClickHint label="Select" />
                      <p className="text-sm font-medium text-white/90">{r.from}</p>
                      <p className="mt-1 text-xs text-white/60">{r.summary}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {r.chips.map((c) => (
                          <Chip key={c.label} tone={c.tone}>
                            {c.label}
                          </Chip>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-white/55">
                        {isActive ? (
                          <span className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-300/80" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
                            Tap to view steps
                          </span>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <Divider />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white/92">Route steps</p>
                    <span className="text-xs text-white/55">Hover cards →</span>
                  </div>

                  <div className="mt-3 space-y-2">
                    {active.steps.map((s, idx) => (
                      <motion.div
                        key={`${active.id}-${idx}`}
                        whileHover={{ scale: 1.012, x: 2 }}
                        transition={spring}
                        className="group relative flex items-start gap-3 rounded-2xl border border-white/12 bg-white/6 p-3 hover:border-red-500/20 hover:bg-white/9"
                      >
                        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(80%_60%_at_30%_0%,rgba(239,68,68,0.14),transparent_70%)]" />
                        <div className="rounded-xl border border-white/12 bg-white/8 p-2 group-hover:border-red-500/20 group-hover:bg-red-500/10">
                          <Icon name={s.icon} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-white/88">{s.label}</p>
                          {s.note ? <p className="mt-1 text-xs text-white/55">{s.note}</p> : null}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <ActionLink
                      href="https://www.google.com/maps/search/?api=1&query=Tongmyong+University"
                      external
                      tone="blue"
                    >
                      Open this destination
                    </ActionLink>
                    <ActionLink href="#shuttle" tone="red">
                      Check shuttle warnings
                    </ActionLink>
                  </div>
                </motion.div>
              </AnimatePresence>
            </GlassCard>
          </div>
        </motion.div>

        <Divider />

        {/* Shuttle Bus */}
        <motion.div
          id="shuttle"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={2}
        >
          <div className="mb-4">
            <h2 className="text-xl font-semibold sm:text-2xl">Tongmyong Shuttle Bus</h2>
            <p className="text-sm text-white/60">Operation hours & intervals</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <GlassCard className="p-6 lg:col-span-2">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-white/90">Operation hours</p>
                  <p className="mt-1 text-sm text-white/70">{shuttle.weekdayHours}</p>
                  <p className="mt-2 text-xs text-white/55">{shuttle.note}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Chip tone="red">Check holidays</Chip>
                  <Chip tone="blue">Intervals below</Chip>
                </div>
              </div>

              <Divider />

              <div className="grid gap-3 sm:grid-cols-3">
                {shuttle.intervals.map((x) => (
                  <div
                    key={x.time}
                    className="group rounded-2xl border border-white/12 bg-white/6 p-4 transition hover:border-red-500/20 hover:bg-white/9"
                  >
                    <p className="text-xs text-white/60">{x.time}</p>
                    <p className="mt-1 text-sm font-semibold text-white/92">{x.interval}</p>
                    <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <p className="mt-2 text-[11px] text-white/55 opacity-0 transition-opacity group-hover:opacity-100">
                      Tap/hover to highlight
                    </p>
                  </div>
                ))}
              </div>

              <Divider />

              <Alert
                tone="red"
                title="Important"
                items={[
                  'Saturday: No shuttle service.',
                  'Vacation / public holidays: schedule may change or be suspended.',
                  'Road traffic can delay departures — plan buffer time.',
                ]}
              />
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-sm font-medium text-white/90">Quick actions</p>
              <p className="mt-2 text-sm text-white/65">
                Add the official shuttle PDF/image later — this panel stays clean and modern.
              </p>

              <Divider />

              <div className="grid gap-3">
                <ActionLink
                  href="https://www.google.com/maps/search/?api=1&query=Tongmyong+University+shuttle+bus"
                  external
                  tone="blue"
                >
                  Find shuttle stops
                </ActionLink>

                <ActionLink href="tel:+82516293061" tone="red">
                  Call campus office
                </ActionLink>

                <ActionLink href="/notices" tone="neutral">
                  Check notices
                </ActionLink>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        <Divider />

        {/* Contact */}
        <motion.div
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={3}
        >
          <div className="mb-4">
            <h2 className="text-xl font-semibold sm:text-2xl">Contact Us</h2>
            <p className="text-sm text-white/60">Clear “tap targets” (you’ll know what’s clickable)</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard className="p-6">
              <p className="text-sm font-medium text-white/90">Contact person</p>
              <p className="mt-2 text-sm text-white/70">Park, Jung Eun</p>

              <Divider />

              <p className="text-sm font-medium text-white/90">Phone</p>
              <div className="mt-3 grid gap-3">
                <ActionLink href="tel:+82516293061" tone="red">
                  +82-51-629-3061 (tap to call)
                </ActionLink>
                <div className="rounded-2xl border border-white/12 bg-white/6 p-4">
                  <p className="text-xs text-white/55">
                    On desktop, this may not call directly. On mobile, it opens the phone dialer.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-sm font-medium text-white/90">Need help fast?</p>
              <p className="mt-2 text-sm text-white/65">FAQ, notices, and quick links</p>

              <Divider />

              <div className="grid gap-3 sm:grid-cols-2">
                <ActionLink href="/notices" tone="blue">
                  View Notices
                </ActionLink>
                <ActionLink href="/faqs" tone="neutral">
                  FAQ
                </ActionLink>
              </div>

              <Divider />

              <Alert
                tone="blue"
                title="Tip"
                items={[
                  'If you’re visiting first time: screenshot the route + shuttle section.',
                  'If shuttle is off: use Maps to find bus/taxi fallback.',
                ]}
              />
            </GlassCard>
          </div>

          <p className="mt-8 text-center text-xs text-white/45">
            © {new Date().getFullYear()} Busan International College • Tongmyong University
          </p>
        </motion.div>
      </section>
    </main>
  );
}
