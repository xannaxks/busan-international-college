'use client';

import { motion } from 'framer-motion';
import styles from '../../../../styles';
import { staggerContainer, textVariant } from '../../../../utils/motion';
import { TypingText } from '../../../../components';
import TuitionTable from '../../../../components/TuitionTable';
import PS from '../../../../components/PS';
import ScholarshipsTable from '../../../../components/ScholarshipsTable';

const bullets1 = [
  {
    title: 'KRW 50,000 (will be included in the tuition Invoice.)',
    iconSrc: '/tu_logo.svg',
  },
  {
    title: 'Additional fees will be required to pay after entering Korea, such as KRW 1,900,000 for dormitory fee (which could be included in the tuition invoice), KRW 30,000 for immigration registration fee, and others.',
    iconSrc: '/tu_logo.svg',
  },
];

const bullets2 = [
  {
    title: 'Homepage: https://www.tu.ac.kr/global',
    iconSrc: '/tu_logo.svg',
  },
  {
    title: 'Address: Room no. 101, Building #21, Tongmyong University, 428 Sinseon-ro, Nam-gu, Busan, Republic of Korea',
    iconSrc: '/tu_logo.svg',
  },
  {
    title: 'Tell: +82-51-629-3011, 3013, 3016',
    iconSrc: '/tu_logo.svg',
  },
  {
    title: 'E-mail: tu2024@tu.ac.kr',
    iconSrc: '/tu_logo.svg',
  },
  {
    title: 'Fax: +82-51-629-3029',
    iconSrc: '/tu_logo.svg',
  },
];

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
            Tuition and Scholarships
          </motion.h1>
        </div>
      </motion.div>
    </section>

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
      <div className="px-3 sm:px-6 flex flex-col gap-36">
        {/* Qualifications */}
        <div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
          >
            <TypingText title="| Tuition" textStyles="text-center text-[30px]" />

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
                  <TuitionTable />
                </div>
              </div>

              {/* Small hint under the table on mobile */}
              <p className="mt-3 text-center text-xs text-white/60 md:hidden">
                Tip: swipe horizontally to view the full table →
              </p>
            </div>
          </motion.div>
        </div>

        <PS className="mt-16" bullets={bullets1} />

        {/* Application Schedule (usually not too wide, but keep safe) */}
        <div className="mt-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
          >
            <TypingText title="| Scholarships" textStyles="text-center text-[30px]" />

            <div className="w-full max-w-full min-w-0 mt-6 overflow-x-auto [-webkit-overflow-scrolling:touch]">
              <div className="
                  w-full max-w-full overflow-x-auto
                  rounded-xl border border-white/10 bg-black/20
                  shadow-inner
                  [-webkit-overflow-scrolling:touch]"
              >
                <ScholarshipsTable />
              </div>
            </div>
          </motion.div>
        </div>

        <PS className="mt-16" bullets={bullets2} subtitle='How to apply' />
      </div>
    </div>
  </section>
);

export default Page;
