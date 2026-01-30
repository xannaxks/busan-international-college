'use client';

import { motion } from 'framer-motion';
import styles from '../../../../styles';
import { staggerContainer, textVariant } from '../../../../utils/motion';
import { TypingText } from '../../../../components';

const Page = () => (
  <section className="relative w-full min-h-screen bg-gradient-to-br from-crimson-600 via-purple-700 to-pink-500 overflow-hidden">
    {/* HERO SECTION */}
    <section className={`${styles.yPaddings} sm:pl-8 pl-4`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText
          title="Meet the Dean"
          textStyles="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-8 sm:mb-12 text-center sm:text-left"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12`}
      >
        {/* TEXT BLOCK */}
        <motion.div
          variants={textVariant(0.5)}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right"
        >
          {/* Glass card */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-[0_0_80px_rgba(255,80,120,0.15)] max-w-full sm:max-w-lg">
            <div className="text-xs sm:text-sm tracking-[0.35em] text-white/60 mb-2 sm:mb-4">
              DEAN OF BIC
            </div>

            <div className="text-5xl sm:text-[72px] md:text-[96px] font-extrabold text-white leading-none">
              Joon Ki
            </div>
            <div className="text-5xl sm:text-[72px] md:text-[96px] font-extrabold text-pink-300 leading-none">
              HAN
            </div>

            {/* Motto */}
            <motion.div variants={textVariant(1.5)}>
              <div className="mt-8 sm:mt-16 flex justify-center lg:justify-end">
                <div className="max-w-xs sm:max-w-md text-center lg:text-right">
                  <div className="h-px w-16 sm:w-24 ml-auto mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 to-purple-500" />
                  <p className="text-base sm:text-xl text-white/80 italic">
                    Educating Tomorrow’s Global Innovators
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* IMAGE BLOCK */}
        <motion.div
          variants={textVariant(1)}
          className="w-full lg:w-1/2 flex items-center justify-start relative mt-8 lg:mt-0"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 via-purple-500/20 to-transparent blur-3xl rounded-full" />

          <motion.img
            src="/dean-silhuete.png"
            alt="Dean"
            className="relative z-10 h-[40vw] sm:h-[35vw] md:h-[32vw] max-h-[480px] sm:max-h-[500px] md:max-h-[520px] rounded-2xl shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  </section>
);

export default Page;
