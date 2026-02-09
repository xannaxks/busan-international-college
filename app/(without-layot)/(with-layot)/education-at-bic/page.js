// app/education/page.jsx
'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const springy = { type: 'spring', stiffness: 260, damping: 22 };

// ✅ Put your 3–4 images here (public/...)
const PHOTOS = {
  hero: '/tongmyong-highres.jpg', // big hero
  methods1: '/learning-1.jpg',
  methods2: '/learning-2.jpg',
  cic: '/cic-1.jpg',
};

const CORE_COURSES = [
  'Critical & Creative Thinking',
  'Global Leadership & Collaboration',
  'Cross-cultural Communication',
  'Global Citizenship & Sustainability',
  'Understanding Korean 1-4',
  'Korean Expression 1-4',
  'TU Mentoring 1-4',
  'Taekwondo',
];

const LEARNING_METHODS = [
  {
    title: 'Active Learning',
    desc: 'Hands-on sessions that prioritize participation, reflection, and real-world application.',
  },
  {
    title: 'Flipped Learning',
    desc: 'Learn concepts before class, then use class time for practice, discussion, and feedback.',
  },
  {
    title: 'Project-based Learning',
    desc: 'Build outcomes that simulate real industry work and teamwork expectations.',
  },
  {
    title: 'O2O (Online to Offline)',
    desc: 'Combine online resources with campus facilitation for deeper practice and support.',
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
    {children}
  </span>
);

const Stat = ({ label, value, hint }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/7">
    <div className="text-sm text-white/70">{label}</div>
    <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
    {hint ? <div className="mt-1 text-xs text-white/55">{hint}</div> : null}
  </div>
);

const Section = ({ title, eyebrow, children, right }) => (
  <section className="py-10 md:py-14">
    <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          {eyebrow ? (
            <div className="text-xs font-semibold tracking-wider text-white/60">
              {eyebrow.toUpperCase()}
            </div>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{title}</h2>
        </div>
        {right ? <div className="md:w-[420px]">{right}</div> : null}
      </div>
      <div className="mt-6">{children}</div>
    </div>
  </section>
);

// ---------- Photo components ----------
const PhotoCard = ({ src, alt, className = '', overlay = true, caption }) => (
  <div
    className={cn(
      'group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur',
      className,
    )}
  >
    {src ? (
      <img
        src={src}
        alt={alt || 'Photo'}
        className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
    ) : (
      <div className="grid h-full w-full place-items-center p-6 text-sm text-white/55">
        Photo placeholder
      </div>
    )}

    {overlay ? (
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070A10]/75 via-[#070A10]/25 to-transparent" />
    ) : null}

    <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

    {caption ? (
      <div className="absolute bottom-3 left-3 right-3">
        <div className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="truncate">{caption}</span>
        </div>
      </div>
    ) : null}
  </div>
);

const PhotoStrip = ({ items = [] }) => (
  <div className="grid gap-3 sm:grid-cols-2">
    {items.map((p, i) => (
      <motion.div
        key={p.src || i}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ delay: 0.06 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -3 }}
      >
        <PhotoCard src={p.src} alt={p.alt} caption={p.caption} className="h-32 md:h-40" />
      </motion.div>
    ))}
  </div>
);
// -------------------------------------

const Accordion = ({ items }) => {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((it, idx) => {
        const active = open === idx;
        return (
          <div
            key={it.title}
            className={cn(
              'rounded-2xl border backdrop-blur transition',
              active ? 'border-white/15 bg-white/8' : 'border-white/10 bg-white/5 hover:bg-white/7',
            )}
          >
            <button
              onClick={() => setOpen(active ? -1 : idx)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    'grid h-9 w-9 place-items-center rounded-xl border text-sm font-semibold',
                    active
                      ? 'border-white/15 bg-white/10 text-white'
                      : 'border-white/10 bg-white/5 text-white/80',
                  )}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="font-medium text-white">{it.title}</div>
                  <div className="text-xs text-white/60">Tap to {active ? 'collapse' : 'expand'}</div>
                </div>
              </div>

              <motion.span
                animate={{ rotate: active ? 45 : 0 }}
                transition={springy}
                className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80"
                aria-hidden
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {active ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-0 text-sm leading-relaxed text-white/75">{it.desc}</div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const CourseChips = ({ courses }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter((c) => c.toLowerCase().includes(q));
  }, [courses, query]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-medium text-white">Core Innovation Courses</div>
          <div className="text-xs text-white/60">Search + explore the list interactively</div>
        </div>

        <div className="relative w-full sm:w-[260px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses…"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-white/20 focus:bg-white/7"
          />
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/45">
            {filtered.length}/{courses.length}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <AnimatePresence initial={false}>
          {filtered.map((c) => (
            <motion.button
              key={c}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="group rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition hover:border-white/20 hover:bg-white/8"
              onClick={() => setQuery(c)}
              title="Click to filter by this"
              type="button"
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white/50 transition group-hover:bg-white/70" />
              {c}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          No matches. Try a different keyword.
        </div>
      ) : null}
    </div>
  );
};

export default function EducationAtBICPage() {
  return (
    <div className="relative z-[150] min-h-screen text-white flex flex-col gap-32">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-260px] right-[-140px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* HERO */}
      <header className="mx-auto w-full max-w-6xl px-4 pt-10 md:px-6 md:pt-14">
        <motion.div
          initial="hidden"
          animate="show"
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur"
        >
          <div className="absolute inset-0">
            {/* ✅ Your big hero photo */}
            <img
              src={PHOTOS.hero}
              alt="Tongmyong University in Busan"
              className="h-full w-full object-cover opacity-75"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10]/90 via-[#070A10]/45 to-transparent" />
          </div>

          <div className="relative p-6 md:p-10">
            <motion.div custom={0} variants={fadeUp}>
              <div className="flex flex-wrap items-center gap-2">
                <Pill>Education</Pill>
                <Pill>Core Innovation</Pill>
                <Pill>Industry-linked</Pill>
              </div>
            </motion.div>

            <motion.h1 custom={1} variants={fadeUp} className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Education at <span className="text-white/90">BIC</span>
              <span className="block text-base font-normal text-white/70 md:text-lg">
                Modern, active learning — built for real-world outcomes.
              </span>
            </motion.h1>

            <motion.div custom={2} variants={fadeUp} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#core-innovation"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Explore Core Courses
              </a>
              <a
                href="#methods"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/8"
              >
                Learning Methods
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 grid gap-4 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-5xl leading-none text-white/30">“</div>
              <div className="mt-2 text-xl font-semibold leading-snug md:text-2xl">
                Teaching excellence
                <span className="block text-white/80">lies at the heart of education at BIC</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Classes are designed to be interactive and outcome-driven—supported by hands-on facilitation
                on campus and learning formats that mirror real industry work.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                  O2O facilitation
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                  Project-based
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                  Global mindset
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid gap-3">
              <Stat label="Core Innovation Courses" value="17" hint="Curated academic journey" />
              <Stat label="Learning Styles" value="4+" hint="Active / Flipped / Project-based / O2O" />
              <Stat label="Focus" value="Outcomes" hint="Practical skills + collaboration" />
            </div>
          </div>
        </motion.div>
      </header>

      {/* METHODS */}
      <Section
        title="How learning works"
        eyebrow="Methods"
        right={
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 backdrop-blur">
            Tap a method to expand. Designed for mobile-first readability and a clean modern layout.
          </div>
        }
      >
        <div id="methods" className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Accordion items={LEARNING_METHODS} />
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-medium text-white">Why this approach?</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Encourages participation and real understanding, not passive memorization.
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Builds collaboration, communication, and problem-solving routines.
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Helps students adapt quickly to new tools and changing environments.
                </li>
              </ul>

              <motion.div whileHover={{ y: -2 }} transition={springy} className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-semibold text-white/70">Tip</div>
                <div className="mt-1 text-sm text-white/75">
                  You can turn this box into a “Learn more” modal later if you want.
                </div>
              </motion.div>
            </div>

            {/* ✅ 2 photos that fit perfectly here (fills the empty space) */}
            <div className="mt-3">
              <PhotoStrip
                items={[
                  { src: PHOTOS.methods1, alt: 'Active learning', caption: 'Active learning in action' },
                  { src: PHOTOS.methods2, alt: 'Collaboration', caption: 'Teamwork & collaboration' },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CORE INNOVATION */}
      <Section
        title="Core Innovation Courses"
        eyebrow="Curriculum"
        right={
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 backdrop-blur">
            Students embark on an academic journey through carefully selected courses designed to build essential skills.
          </div>
        }
      >
        <div id="core-innovation" className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <CourseChips courses={CORE_COURSES} />
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-medium text-white">What you’ll build</div>
              <div className="mt-3 grid gap-3">
                {[
                  { title: 'Mindset', desc: 'Critical thinking + creativity with structured feedback loops.' },
                  { title: 'Communication', desc: 'Cross-cultural collaboration and practical presentations.' },
                  { title: 'Growth', desc: 'Consistent improvement through mentoring and guided practice.' },
                ].map((x, i) => (
                  <motion.div
                    key={x.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: 0.06 * i, duration: 0.45 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/7"
                  >
                    <div className="text-sm font-medium text-white">{x.title}</div>
                    <div className="mt-1 text-sm text-white/70">{x.desc}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 text-xs text-white/55">
                Replace this content with your exact official text later — the layout is ready.
              </div>

              {/* ✅ Single “side” photo fits great at the end of this card */}
              <div className="mt-4">
                <PhotoCard
                  src={PHOTOS.cic}
                  alt="Campus support and learning spaces"
                  caption="Modern support spaces (CIC)"
                  className="h-36 md:h-44"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CIC */}
      <Section title="Core Innovation Centre (CIC)" eyebrow="Support">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                A learning hub that keeps students moving forward
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                The CIC supports faculty and students with modern teaching practices, course integration, and
                hands-on facilitation. It helps keep learning practical, collaborative, and aligned with real
                outcomes.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springy}
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Contact / Visit
                </motion.a>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springy}
                  href="/notices"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/8"
                >
                  See Notices
                </motion.a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold text-white/70">Focus areas</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Mentoring', 'Facilitation', 'Curriculum Integration', 'Student Support'].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  Want a “modern timeline” section like Apple-style scroll animations? I can add that too.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-12 pt-4 text-center text-xs text-white/45 md:px-6">
        © {new Date().getFullYear()} BIC • Education at BIC
      </footer>
    </div>
  );
}
