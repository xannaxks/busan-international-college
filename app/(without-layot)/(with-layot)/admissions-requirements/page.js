'use client';

import { motion } from 'framer-motion';
import styles from '../../../../styles';
import { fadeIn, staggerContainer, textVariant } from '../../../../utils/motion';
import { TypingText } from '../../../../components';
import QualificationsTable from '../../../../components/QualificationsTable';
import AdmissionsCriteria from '../../../../components/AdmissionsCriteria';
import ApplicationSchedule from '../../../../components/ApplicationSchedule';
import ApplicationDocuments from '../../../../components/ApplicationDocuments';

const Page = () => (
  <section className="w-full overflow-x-hidden">
    {/* Mobile warning (shows on small screens, hides on md+) */}
    <div className="px-6 sm:pl-16">
      <div className="mx-auto max-w-5xl">
        <div className="md:hidden mt-6 rounded-2xl border border-amber-400/30 bg-amber-500/10 px-4 py-4 text-amber-100 shadow-lg backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400/20 border border-amber-300/30">
              ⚠️
            </span>
            <div className="text-sm leading-relaxed">
              <p className="font-semibold">Better on desktop / wide screen</p>
              <p className="mt-1 text-amber-100/80">
                Some tables are wide. You can scroll horizontally inside them on mobile,
                but for the best experience open this page on a larger screen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* HERO */}
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Admission requirements
          </motion.h1>
        </div>
      </motion.div>
    </section>

    {/* ABOUT */}
    <div className="relative">
      <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingText title="| What are the requirements?" textStyles="text-center text-[30px]" />

          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-5 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
          >
            At BIC, we enthusiastically welcome individuals from diverse social,
            economic, ethnic, academic, and geographic backgrounds, appreciating the
            rich perspectives and experiences they bring to our classrooms. Each
            application receives individual consideration, evaluated on its own merits.
            <br />
            <br />
            Our admissions process is selective, and we encourage students to submit
            their applications as early as possible. This ensures ample time for thorough
            review, visa processing, and preparation for relocation.
          </motion.p>

          <motion.img
            variants={fadeIn('up', 'tween', 0.3, 1)}
            src="/arrow-down-white.svg"
            alt="arrow-down"
            className="w-[18px] h-[28px] object-contain mt-[28px]"
          />
        </motion.div>
      </section>
    </div>

    {/* CONTENT */}
    <div
      className="
        my-[15px] flex flex-col gap-24
        bg-white/10 backdrop-blur-xl
        border border-white/20 rounded-2xl shadow-lg
        py-16
        overflow-x-hidden
      "
    >
      {/* Helper wrapper:
          - prevents child content from forcing page wider than viewport
          - enables horizontal scrolling INSIDE each block if needed */}
      <div className="px-3 sm:px-6">
        {/* Qualifications */}
        <div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
          >
            <TypingText title="| Qualifications" textStyles="text-center text-[30px]" />

            {/* IMPORTANT:
                min-w-0 prevents flex children from overflowing.
                overflow-x-auto + max-w-full makes it scrollable on mobile only when needed. */}
            <div className="w-full max-w-full min-w-0 mt-6">
              <div
                className="
                  w-full max-w-full overflow-x-auto
                  rounded-xl border border-white/10 bg-black/20
                  shadow-inner
                  [-webkit-overflow-scrolling:touch]
                "
              >
                {/* Force a reasonable minimum width for wide tables; if it exceeds phone width => scroll */}
                <div className="min-w-[720px] md:min-w-0 p-1">
                  <QualificationsTable />
                </div>
              </div>

              {/* Small hint under the table on mobile */}
              <p className="mt-3 text-center text-xs text-white/60 md:hidden">
                Tip: swipe horizontally to view the full table →
              </p>
            </div>
          </motion.div>
        </div>

        {/* Admissions Criteria */}
        <div className="mt-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
          >
            <TypingText title="| Admissions Criteria" textStyles="text-center text-[30px]" />

            <div className="w-full max-w-full min-w-0 mt-6">
              <div
                className="
                  w-full max-w-full overflow-x-auto
                  rounded-xl border border-white/10 bg-black/20
                  shadow-inner
                  [-webkit-overflow-scrolling:touch]
                "
              >
                <div className="min-w-[720px] md:min-w-0 p-1">
                  <AdmissionsCriteria />
                </div>
              </div>

              <p className="mt-3 text-center text-xs text-white/60 md:hidden">
                Tip: swipe horizontally to view the full table →
              </p>
            </div>
          </motion.div>
        </div>

        {/* Application Schedule (usually not too wide, but keep safe) */}
        <div className="mt-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
          >
            <TypingText title="| Application Schedule" textStyles="text-center text-[30px]" />

            <div className="w-full max-w-full min-w-0 mt-6 overflow-x-auto [-webkit-overflow-scrolling:touch]">
              <div className="
                  w-full max-w-full overflow-x-auto
                  rounded-xl border border-white/10 bg-black/20
                  shadow-inner
                  [-webkit-overflow-scrolling:touch]">
                <ApplicationSchedule />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Application Documents */}
        <div className="mt-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
          >
            <TypingText title="| Application Documents" textStyles="text-center text-[30px]" />

            <div className="w-full max-w-full min-w-0 mt-6 overflow-x-auto [-webkit-overflow-scrolling:touch]">
              <div className="
                  w-full max-w-full overflow-x-auto
                  rounded-xl border border-white/10 bg-black/20
                  shadow-inner
                  [-webkit-overflow-scrolling:touch]">
                <ApplicationDocuments />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Page;
