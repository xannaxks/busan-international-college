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

const Icon = ({ name }) => {
  // Minimal inline icons (no extra deps)
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

const GlassCard = ({
  children,
  className = '',
}) => (
  <div
    className={[
      'rounded-2xl border border-white/12 bg-white/7 backdrop-blur-xl',
      'shadow-[0_18px_60px_-24px_rgba(0,0,0,0.65)]',
      className,
    ].join(' ')}
  >
    {children}
  </div>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs text-white/85">
    <span className="h-1.5 w-1.5 rounded-full bg-white/55" />
    {children}
  </span>
);

const Divider = () => <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />;

// eslint-disable-next-line react/function-component-definition
export default function VisitBICPage() {
  // Put your high-res photo here: /public/images/tongmyong-university-busan.jpg
  // (or .png). Then set heroSrc accordingly.
  const heroSrc = '/night-busan.jpg';

  const routes = useMemo(
    () => [
      {
        id: 'busan',
        from: 'From Busan (Downtown / Busan Station)',
        summary: 'Fastest for most visitors. Subway + short walk + shuttle/bus.',
        chips: ['~35–60 min', 'Subway + Shuttle', 'Easy'],
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
        chips: ['~60–90 min', 'Transfer', 'Convenient'],
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
        chips: ['~90–120 min', 'Intercity', 'Common'],
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
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-15%] h-[420px] w-[420px] rounded-full bg-white/8 blur-3xl" />
        <div className="absolute right-[-10%] top-[5%] h-[520px] w-[520px] rounded-full bg-white/7 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[15%] h-[520px] w-[520px] rounded-full bg-white/6 blur-3xl" />
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-[#070A10]" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_20%,rgba(255,255,255,0.16),transparent_60%)]" />
        </div>

        <div className="mx-auto -mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
            <GlassCard className="p-5 sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs text-white/85">
                    <span className="h-2 w-2 rounded-full bg-white/60" />
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
                  <Chip>Responsive</Chip>
                  <Chip>Glass UI</Chip>
                  <Chip>Interactive routes</Chip>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Intro */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0}>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-white/12 bg-white/8 backdrop-blur-xl" />
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
                  <li key={x.title} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/70" />
                    <div>
                      <p className="font-medium text-white/90">{x.title}</p>
                      <p className="text-sm text-white/65">{x.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-sm font-medium text-white/90">Best time to check before you go</p>
              <p className="mt-2 text-sm text-white/65">
                Shuttle hours and public holiday schedules can change. Keep a screenshot of your route and the shuttle intervals.
              </p>

              <Divider />

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between text-white/75">
                  <span>Shuttle</span>
                  <span className="text-white/90">Weekdays</span>
                </div>
                <div className="flex items-center justify-between text-white/75">
                  <span>Metro</span>
                  <span className="text-white/90">Daily</span>
                </div>
                <div className="flex items-center justify-between text-white/75">
                  <span>Intercity</span>
                  <span className="text-white/90">Daily</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        <Divider />

        {/* Visit BIC - Map + Routes */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={fadeUp} custom={1}>
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
                    <div className="rounded-xl border border-white/12 bg-white/8 p-2">
                      <Icon name="pin" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/90">Tongmyong University</p>
                      <p className="text-xs text-white/60">Busan, South Korea</p>
                    </div>
                  </div>

                  <a
                    className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/12"
                    href="https://www.google.com/maps/search/?api=1&query=Tongmyong+University"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Maps →
                  </a>
                </div>

                <div className="h-[260px] w-full sm:h-[320px]">
                  {/* Responsive map embed */}
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
              <div className="flex flex-wrap gap-2">
                {routes.map((r) => {
                  const isActive = r.id === activeRoute;
                  return (
                    // eslint-disable-next-line react/button-has-type
                    <button
                      key={r.id}
                      onClick={() => setActiveRoute(r.id)}
                      className={[
                        'group flex-1 rounded-2xl border px-4 py-3 text-left transition',
                        isActive
                          ? 'border-white/18 bg-white/12'
                          : 'border-white/12 bg-white/6 hover:bg-white/10',
                      ].join(' ')}
                    >
                      <p className="text-sm font-medium text-white/90">{r.from}</p>
                      <p className="mt-1 text-xs text-white/60">{r.summary}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {r.chips.map((c) => (
                          <span
                            key={c}
                            className={[
                              'rounded-full px-2 py-0.5 text-[11px]',
                              isActive ? 'bg-white/14 text-white/85' : 'bg-white/8 text-white/70',
                            ].join(' ')}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </button>
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
                  <p className="text-sm font-medium text-white/90">Route steps</p>
                  <div className="mt-3 space-y-2">
                    {active.steps.map((s, idx) => (
                      <motion.div
                        key={`${active.id}-${idx}`}
                        whileHover={{ scale: 1.01 }}
                        className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/6 p-3"
                      >
                        <div className="rounded-xl border border-white/12 bg-white/8 p-2">
                          <Icon name={s.icon} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-white/85">{s.label}</p>
                          {s.note ? <p className="mt-1 text-xs text-white/55">{s.note}</p> : null}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/12 bg-white/6 p-4">
                    <p className="text-xs text-white/60">
                      Want this to match your exact official wording (bus numbers, exit numbers, etc.)?
                      Replace the route data arrays at the top — UI stays the same.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </GlassCard>
          </div>
        </motion.div>

        <Divider />

        {/* Shuttle Bus */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={2}>
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
                  <Chip>Live-friendly</Chip>
                  <Chip>Clear intervals</Chip>
                </div>
              </div>

              <Divider />

              <div className="grid gap-3 sm:grid-cols-3">
                {shuttle.intervals.map((x) => (
                  <div key={x.time} className="rounded-2xl border border-white/12 bg-white/6 p-4">
                    <p className="text-xs text-white/60">{x.time}</p>
                    <p className="mt-1 text-sm font-semibold text-white/90">{x.interval}</p>
                  </div>
                ))}
              </div>

              <Divider />

              <details className="group rounded-2xl border border-white/12 bg-white/6 p-4">
                <summary className="cursor-pointer list-none text-sm font-medium text-white/90">
                  Exceptions / notes
                  <span className="ml-2 text-xs font-normal text-white/55 group-open:hidden">(tap to open)</span>
                </summary>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {shuttle.exceptions.map((e) => (
                    <li key={e} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-sm font-medium text-white/90">Quick actions</p>
              <p className="mt-2 text-sm text-white/65">
                Add the official shuttle PDF/image later — this panel stays clean and modern.
              </p>

              <Divider />

              <div className="grid gap-3">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/85 transition hover:bg-white/12"
                  href="https://www.google.com/maps/search/?api=1&query=Tongmyong+University+shuttle+bus"
                  target="_blank"
                  rel="noreferrer"
                >
                  Search shuttle stops in Maps →
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/85 transition hover:bg-white/12"
                  href="tel:+82516293061"
                >
                  Call campus office →
                </motion.a>
              </div>
            </GlassCard>
          </div>
        </motion.div>

        <Divider />

        {/* Contact */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={3}>
          <div className="mb-4">
            <h2 className="text-xl font-semibold sm:text-2xl">Contact Us</h2>
            <p className="text-sm text-white/60">One-tap contact blocks</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard className="p-6">
              <p className="text-sm font-medium text-white/90">Contact person</p>
              <p className="mt-2 text-sm text-white/70">Park, Jung Eun</p>
              <Divider />
              <p className="text-sm font-medium text-white/90">Phone</p>
              <a className="mt-2 inline-flex text-sm text-white/75 underline decoration-white/25 underline-offset-4 hover:text-white" href="tel:+82516293061">
                +82-51-629-3061
              </a>
              <p className="mt-2 text-xs text-white/55">Tap to call on mobile devices.</p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="text-sm font-medium text-white/90">Need help fast?</p>
              <p className="mt-2 text-sm text-white/65">
                Put your FAQ / Notice link here, or an “Ask us” form later (Google Form / internal form).
              </p>
              <Divider />
              <div className="flex flex-col gap-3 sm:flex-row">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-center text-sm text-white/85 transition hover:bg-white/12"
                  href="/notice"
                >
                  View Notices →
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-center text-sm text-white/85 transition hover:bg-white/12"
                  href="/faq"
                >
                  FAQ →
                </motion.a>
              </div>
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
