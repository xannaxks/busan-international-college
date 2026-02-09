'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Group = ({ title, accent = 'amber', items = [] }) => {
  const accentMap = {
    amber: {
      title: 'text-amber-300',
      ring: 'ring-amber-400/20',
      glow: 'from-amber-400/22 via-amber-400/10 to-transparent',
      chip: 'bg-amber-400/12 text-amber-200 ring-amber-400/20',
      btn: 'bg-amber-400/10 hover:bg-amber-400/16 text-amber-100 ring-amber-400/25',
    },
    blue: {
      title: 'text-sky-300',
      ring: 'ring-sky-400/20',
      glow: 'from-sky-400/22 via-sky-400/10 to-transparent',
      chip: 'bg-sky-400/12 text-sky-200 ring-sky-400/20',
      btn: 'bg-sky-400/10 hover:bg-sky-400/16 text-sky-100 ring-sky-400/25',
    },
    violet: {
      title: 'text-violet-300',
      ring: 'ring-violet-400/20',
      glow: 'from-violet-400/22 via-violet-400/10 to-transparent',
      chip: 'bg-violet-400/12 text-violet-200 ring-violet-400/20',
      btn: 'bg-violet-400/10 hover:bg-violet-400/16 text-violet-100 ring-violet-400/25',
    },
  };

  const a = accentMap[accent] ?? accentMap.amber;

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <h2 className={`text-2xl sm:text-3xl font-semibold tracking-tight ${a.title}`}>
            {title}
          </h2>
          <p className="text-white/55 text-sm mt-1">
            Tap a card to see details or route to a page later.
          </p>
        </div>

        <span
          className={`hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full ring-1 ${a.chip}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          Updated
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <Card key={item.title} item={item} idx={idx} accent={a} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ item, idx, accent }) => {
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      custom={idx}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={item.onClick}
      className={[
        'group relative text-left rounded-2xl p-4 sm:p-5',
        'bg-white/[0.06] backdrop-blur-xl',
        'ring-1 ring-white/10',
        'shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)]',
        'transition',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35',
        'min-h-[112px] sm:min-h-[124px]',
      ].join(' ')}
    >
      {/* Glow */}
      <div
        className={[
          'pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300',
          'bg-gradient-to-br',
          accent.glow,
        ].join(' ')}
      />

      {/* Border highlight */}
      <div
        className={[
          'pointer-events-none absolute inset-0 rounded-2xl',
          'ring-1 opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300',
          accent.ring,
        ].join(' ')}
      />

      <div className="relative z-10 flex items-start gap-3">
        <div
          className={[
            'mt-0.5 shrink-0 rounded-xl p-2',
            'bg-white/[0.07] ring-1 ring-white/10',
            'group-hover:bg-white/[0.10] transition',
          ].join(' ')}
        >
          <Icon className="h-5 w-5 text-white/80" />
        </div>

        <div className="min-w-0">
          <h3 className="text-white/90 font-semibold leading-snug tracking-tight">
            {item.title}
          </h3>
          {item.sub && (
            <p className="text-white/55 text-sm mt-1 leading-relaxed">
              {item.sub}
            </p>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative z-10 mt-4 flex items-center justify-between">
        <span className="text-xs text-white/45">
          {item.meta ?? 'Click to view'}
        </span>

        <span
          className={[
            'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full',
            'ring-1 text-xs',
            accent.btn,
            'transition',
          ].join(' ')}
        >
          Learn more
          <svg
            className="h-3.5 w-3.5 opacity-80"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </motion.button>
  );
};

/* ---------------------------
   Minimal inline icons
---------------------------- */
const I = {
  sparkle: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l1.2 5.1L18 9l-4.8 1.9L12 16l-1.2-5.1L6 9l4.8-1.9L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  globe: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3 12h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 3c2.5 2.6 4 5.8 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.8-4-9s1.5-6.4 4-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  confetti: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 21l7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 3l7 7-8 8-7-7 8-8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 5l3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  map: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 3v15M15 6v15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  badge: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l2.2 4.6L19 8l-3.5 3.4.8 4.8L12 14.8 7.7 16.2l.8-4.8L5 8l4.8-1.4L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 22l4-2 4 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  bolt: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ball: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.8 9.2c2.6.5 5 .1 7.2-1.2 2.2-1.3 3.9-3.1 5-5.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M19.2 14.8c-2.6-.5-5-.1-7.2 1.2-2.2 1.3-3.9 3.1-5 5.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  book: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 5.5C4 4.1 5.1 3 6.5 3H20v17.5a.5.5 0 0 1-.5.5H7a3 3 0 0 0-3 3V5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M20 18H7a3 3 0 0 0-3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  cap: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 2 8l10 5 10-5-10-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 10.5V16c0 2.2 2.7 4 6 4s6-1.8 6-4v-5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M22 8v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  briefcase: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6a3 3 0 0 1 6 0v2H9V6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 8h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 13h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default function EventsLecturesSection() {
  const EVENTS = [
    { title: 'Welcoming Ceremony', icon: I.sparkle, meta: 'Event' },
    { title: 'International Week', icon: I.globe, meta: 'Event' },
    { title: 'University Festivals', icon: I.confetti, meta: 'Event' },
    { title: 'Field Trips', icon: I.map, meta: 'Event' },
    { title: 'BUP (Basic Upgrade Program)', icon: I.badge, meta: 'Program' },
    { title: 'Pre-UProgram', icon: I.bolt, meta: 'Program' },
    { title: 'Sports Day', icon: I.ball, meta: 'Event' },
  ].map((x) => ({
    ...x,
    sub: 'Details, schedule, and photos',
    onClick: () => console.log('Open:', x.title),
  }));

  const LECTURES = [
    { title: 'Korean Culture, History, Economy, and Politics', icon: I.book },
    { title: 'Guidance for Academic Success Abroad', icon: I.cap },
    { title: 'Navigating Career Paths & Excelling in Job Interviews', icon: I.briefcase },
    { title: 'Strategies for Applying to Graduate Programs Abroad', icon: I.cap },
  ].map((x) => ({
    ...x,
    sub: 'Speaker, date, and materials',
    meta: 'Special lecture',
    onClick: () => console.log('Open:', x.title),
  }));

  return (
    <section className="relative w-full">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[min(720px,92vw)] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-32 left-10 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="space-y-10 sm:space-y-14">
          <Group title="Event" accent="amber" items={EVENTS} />
          <Group title="Special Lectures" accent="blue" items={LECTURES} />
        </div>
      </div>
    </section>
  );
}
