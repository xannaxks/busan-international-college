'use client';

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';
import { useState } from 'react';

/* ---------------------------------------------
   Reusable section block
---------------------------------------------- */
const Section = ({ title, children }) => (
  <div>
    <h3 className="text-xs uppercase tracking-wider text-white/50 mb-2">
      {title}
    </h3>
    <div className="text-white/80 leading-relaxed">
      {children}
    </div>
  </div>
);

/* ---------------------------------------------
   Main component
---------------------------------------------- */
export default function ExpandableCard({
  photo,
  name,
  department,
  office,
  phone,
  email,
  position,
  responsibilities,
  education,
  experience,
  journalArticles = [],
}) {
  const [isOpen, setIsOpen] = useState(false);

  /* ---------- Smooth cursor tilt ---------- */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.8 });

  const rotateX = useTransform(y, [-120, 120], [6, -6]);
  const rotateY = useTransform(x, [-120, 120], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - rect.left - rect.width / 2);
    rawY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <>
      {/* ================= Folded Card ================= */}
      <motion.div
        layout
        onClick={() => setIsOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        className="
          scroll-smooth
          group cursor-pointer relative
          w-full max-w-[320px] sm:max-w-[360px]
          aspect-square
          rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          p-5
          flex flex-col
          text-white
          shadow-[0_0_25px_rgba(255,255,255,0.08)]
          hover:bg-white/10
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 -z-10 rounded-[inherit] bg-white/20 blur-2xl opacity-30" />

        {/* Photo */}
        <div className="flex justify-center">
          <img
            src={photo}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border border-white/20 shadow-md"
          />
        </div>

        {/* Name */}
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-white/60">{department}</p>
        </div>

        {/* Meta */}
        <div className="mt-4 space-y-1 text-sm text-white/50">
          <p>📍 {office}</p>
          <p>📞 {phone}</p>
          <p className="truncate">✉️ {email}</p>
        </div>

        <span className="mt-auto text-xs text-white/40 group-hover:text-white/70 transition text-right">
          View profile →
        </span>
      </motion.div>

      {/* ================= Expanded Modal ================= */}
      <AnimatePresence>
        {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            layout
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="
                relative w-full max-w-3xl
                max-h-[85vh] sm:max-h-[80vh]
                rounded-3xl
                bg-white/10 backdrop-blur-2xl
                border border-white/15
                shadow-2xl shadow-black/60
                flex flex-col
              "
          >
            {/* Glow */}
            <div className="absolute inset-0 -z-10 rounded-[inherit] bg-white/30 blur-3xl opacity-40" />

            {/* ===== Header (fixed) ===== */}
            <div className="p-6 sm:p-8 border-b border-white/10 flex gap-6">
              <img
                src={photo}
                alt={name}
                className="w-28 h-28 rounded-2xl object-cover border border-white/20"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-white/70">{department}</p>

                <div className="mt-3 text-sm text-white/60 space-y-1">
                  <p><strong>Office:</strong> {office}</p>
                  <p><strong>Phone:</strong> {phone}</p>
                  <p><strong>Email:</strong> {email}</p>
                </div>
              </div>
            </div>

            {/* ===== Scrollable Content ===== */}
            <div
              className="
                  flex-1 overflow-y-auto
                  px-6 sm:px-8 py-6
                  space-y-6
                  scrollbar-thin
                  scrollbar-thumb-white/20
                  scrollbar-track-transparent
                "
            >
              <Section title="Position">{position}</Section>
              <Section title="Responsibilities">{responsibilities}</Section>
              <Section title="Education">{education}</Section>
              <Section title="Experience">{experience}</Section>

              <Section title="Journal Articles">
                <ul className="list-disc list-inside space-y-1">
                  {journalArticles.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                </ul>
              </Section>
            </div>

            {/* ===== Footer (fixed) ===== */}
            <div className="p-6 sm:p-8 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="
                    px-5 py-2.5
                    rounded-xl
                    bg-white/10
                    border border-white/20
                    text-sm font-medium
                    hover:bg-white/20
                    active:scale-95
                    transition
                  "
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
