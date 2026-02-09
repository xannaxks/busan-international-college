'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandableCard from '../../../../components/Card';

/* ---------------------------------------------
   Demo data (replace with your real faculty)
---------------------------------------------- */
const FACULTY = [
  // AI & Computer Engineering
  {
    id: 'ai-1',
    dept: 'AI & Computer Engineering',
    name: 'Dr. Minseo Park',
    photo: '/faculty/minseo-park.jpg',
    department: 'AI & Computer Engineering',
    office: 'BIC Building 4F, Room 401',
    phone: '+82-51-000-0001',
    email: 'minseo.park@tu.ac.kr',
    position: 'Associate Professor',
    responsibilities: 'Machine learning, computer vision, capstone supervision, industry projects.',
    education: 'Ph.D. in Computer Science, KAIST',
    experience: 'Research Scientist (3 yrs), visiting scholar (1 yr).',
    journalArticles: ['Paper A (2024)', 'Paper B (2023)'],
  },
  {
    id: 'ai-2',
    dept: 'AI & Computer Engineering',
    name: 'Prof. Jiwon Lee',
    photo: '/faculty/jiwon-lee.jpg',
    department: 'AI & Computer Engineering',
    office: 'BIC Building 4F, Room 402',
    phone: '+82-51-000-0002',
    email: 'jiwon.lee@tu.ac.kr',
    position: 'Professor',
    responsibilities: 'Distributed systems, backend engineering, curriculum development.',
    education: 'Ph.D. in Computer Engineering, POSTECH',
    experience: 'Industry architect (5 yrs), academic (8 yrs).',
    journalArticles: ['Paper C (2022)', 'Paper D (2021)'],
  },

  // Mechanical & Automotive Engineering
  {
    id: 'me-1',
    dept: 'Mechanical & Automotive Engineering',
    name: 'Dr. Hyunwoo Kim',
    photo: '/faculty/hyunwoo-kim.jpg',
    department: 'Mechanical & Automotive Engineering',
    office: 'Engineering Hall 2F, Room 210',
    phone: '+82-51-000-0101',
    email: 'hyunwoo.kim@tu.ac.kr',
    position: 'Assistant Professor',
    responsibilities: 'Vehicle dynamics, CAD/CAE lab, senior design advisor.',
    education: 'Ph.D. in Mechanical Engineering, Seoul National University',
    experience: 'R&D Engineer (4 yrs), lab lead (2 yrs).',
    journalArticles: ['Paper E (2024)', 'Paper F (2022)'],
  },

  // Global Business
  {
    id: 'gb-1',
    dept: 'Global Business',
    name: 'Prof. Hana Choi',
    photo: '/faculty/hana-choi.jpg',
    department: 'Global Business',
    office: 'Business Center 5F, Room 503',
    phone: '+82-51-000-0201',
    email: 'hana.choi@tu.ac.kr',
    position: 'Professor',
    responsibilities: 'International marketing, strategy, career mentoring.',
    education: 'Ph.D. in Business Administration, Yonsei University',
    experience: 'Consulting (6 yrs), academic (7 yrs).',
    journalArticles: ['Paper G (2023)', 'Paper H (2021)'],
  },

  // Global Korean Studies
  {
    id: 'gks-1',
    dept: 'Global Korean Studies',
    name: 'Dr. Seoyeon Jung',
    photo: '/faculty/seoyeon-jung.jpg',
    department: 'Global Korean Studies',
    office: 'Humanities Hall 3F, Room 312',
    phone: '+82-51-000-0301',
    email: 'seoyeon.jung@tu.ac.kr',
    position: 'Lecturer',
    responsibilities: 'Korean language, culture seminars, TOPIK preparation.',
    education: 'M.A. in Korean Linguistics, Korea University',
    experience: 'Language institute instructor (5 yrs).',
    journalArticles: ['Paper I (2022)'],
  },

  // Digital Design & Marketing
  {
    id: 'ddm-1',
    dept: 'Digital Design & Marketing',
    name: 'Prof. Yuna Seo',
    photo: '/faculty/yuna-seo.jpg',
    department: 'Digital Design & Marketing',
    office: 'Design Studio 1F, Room 105',
    phone: '+82-51-000-0401',
    email: 'yuna.seo@tu.ac.kr',
    position: 'Associate Professor',
    responsibilities: 'UX/UI design, digital branding, portfolio reviews.',
    education: 'M.F.A. in Visual Communication Design, Hongik University',
    experience: 'Creative director (4 yrs), academic (6 yrs).',
    journalArticles: ['Paper J (2023)'],
  },

  // Information System & Security
  {
    id: 'iss-1',
    dept: 'Information System & Security',
    name: 'Dr. Taehyun Song',
    photo: '/faculty/taehyun-song.jpg',
    department: 'Information System & Security',
    office: 'Security Lab 2F, Room 220',
    phone: '+82-51-000-0501',
    email: 'taehyun.song@tu.ac.kr',
    position: 'Assistant Professor',
    responsibilities: 'Network security, SOC labs, secure systems design.',
    education: 'Ph.D. in Information Security, 고려대학교',
    experience: 'Security engineer (5 yrs), researcher (3 yrs).',
    journalArticles: ['Paper K (2024)', 'Paper L (2022)'],
  },

  // Tech Management & Innovation
  {
    id: 'tmi-1',
    dept: 'Tech Management & Innovation',
    name: 'Prof. Daniel Han',
    photo: '/faculty/daniel-han.jpg',
    department: 'Tech Management & Innovation',
    office: 'Innovation Hub 6F, Room 601',
    phone: '+82-51-000-0601',
    email: 'daniel.han@tu.ac.kr',
    position: 'Professor',
    responsibilities: 'Product strategy, entrepreneurship, industry partnerships.',
    education: 'Ph.D. in Management Science, University of Michigan',
    experience: 'Startup founder (2 exits), academic (9 yrs).',
    journalArticles: ['Paper M (2023)', 'Paper N (2020)'],
  },
];

/* ---------------------------------------------
   Department ordering + labels
---------------------------------------------- */
const DEPARTMENTS = [
  'AI & Computer Engineering',
  'Mechanical & Automotive Engineering',
  'Global Business',
  'Global Korean Studies',
  'Digital Design & Marketing',
  'Information System & Security',
  'Tech Management & Innovation',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 180, damping: 20 } },
};

export default function FacultyPage() {
  const [activeDept, setActiveDept] = useState(DEPARTMENTS[0]);
  const [q, setQ] = useState('');

  const byDept = useMemo(() => {
    const query = q.trim().toLowerCase();
    return FACULTY.filter((p) => p.dept === activeDept).filter((p) => {
      if (!query) return true;
      return (
        p.name.toLowerCase().includes(query) ||
        (p.position || '').toLowerCase().includes(query) ||
        (p.responsibilities || '').toLowerCase().includes(query)
      );
    });
  }, [activeDept, q]);

  const counts = useMemo(() => {
    const map = new Map();
    for (const d of DEPARTMENTS) map.set(d, 0);
    for (const p of FACULTY) map.set(p.dept, (map.get(p.dept) || 0) + 1);
    return map;
  }, []);

  return (
    <div className="relative min-h-screen bg-black/20 w-full overflow-hidden text-white">
      {/* Background blobs */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-44 -left-44 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 160, damping: 20 }}
          className="
            rounded-3xl border border-white/10
            bg-white/5 backdrop-blur-2xl
            p-6 sm:p-8
            shadow-[0_0_40px_rgba(255,255,255,0.06)]
          "
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50">Faculty Directory</p>
              <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
                University Faculty
              </h1>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/70 leading-relaxed">
                Browse by department and open any profile card for details.
              </p>
            </div>

            {/* Search */}
            <div className="w-full md:w-[420px]">
              <div className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by name, position, keywords…"
                  className="
                    w-full rounded-2xl
                    bg-white/5 border border-white/10
                    px-4 py-3 pr-12
                    text-sm text-white/90 placeholder:text-white/40
                    outline-none
                    focus:bg-white/10 focus:border-white/20
                    transition
                  "
                />
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
                  ⌕
                </div>
              </div>
              <div className="mt-2 text-xs text-white/45">
                Showing <span className="text-white/70">{byDept.length}</span> in{' '}
                <span className="text-white/70">{activeDept}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="mt-6">
          <div
            className="
              rounded-3xl border border-white/10
              bg-white/5 backdrop-blur-2xl
              p-3 sm:p-4
              shadow-[0_0_30px_rgba(255,255,255,0.05)]
            "
          >
            <div className="flex flex-wrap gap-2">
              {DEPARTMENTS.map((d) => {
                const isActive = d === activeDept;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setActiveDept(d)}
                    className={`
                      relative rounded-2xl px-3.5 py-2 text-sm
                      border transition
                      ${isActive ? 'border-white/25 text-white' : 'border-white/10 text-white/70 hover:text-white'}
                      ${isActive ? '' : 'hover:bg-white/5'}
                    `}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="dept-pill"
                        className="absolute inset-0 rounded-2xl bg-white/10"
                        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                      />
                    )}
                    <span className="relative z-10">{d}</span>
                    <span className="relative z-10 ml-2 text-xs text-white/50">
                      {counts.get(d) ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeDept}-${q}`}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="mt-6"
          >
            {byDept.length === 0 ? (
              <div
                className="
                  rounded-3xl border border-white/10
                  bg-white/5 backdrop-blur-2xl
                  p-10 text-center
                  text-white/70
                "
              >
                No faculty found for this department & search query.
              </div>
            ) : (
              <div
                className="
                  grid gap-4 sm:gap-5
                  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                  place-items-center sm:place-items-stretch
                "
              >
                {byDept.map((p) => (
                  <motion.div key={p.id} variants={item} className="w-full flex justify-center sm:block">
                    <ExpandableCard {...p} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer hint */}
        <div className="mt-10 text-center text-xs text-white/40">
          Tip: replace demo data with your real faculty list (photos + details).
        </div>
      </div>
    </div>
  );
}
