'use client';

import { motion } from 'framer-motion';
import styles from '../../../../styles';
import { staggerContainer, textVariant } from '../../../../utils/motion';
import { TypingText } from '../../../../components';
import QuoteCard from '../../../../components/QuoteCard';

const Page = () => (
  <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-crimson-600 via-purple-700 to-pink-500">
    {/* HERO SECTION */}
    <section className={`${styles.yPaddings} px-4 sm:px-8 lg:px-12`}>
      {/* Title */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
      >
        <TypingText
          title="Meet the Dean"
          textStyles="text-3xl sm:text-5xl md:text-6xl text-white font-bold mb-8 sm:mb-12 text-center"
        />
      </motion.div>

      {/* Hero grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`
          ${styles.innerWidth2} mx-auto
          grid grid-cols-1 lg:grid-cols-2
          items-center gap-8 lg:gap-12
        `}
      >
        {/* TEXT BLOCK */}
        <motion.div
          variants={textVariant(0.5)}
          className="order-2 lg:order-1 flex w-full justify-center lg:justify-end"
        >
          <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(255,80,120,0.15)]">
            <div className="mb-2 text-xs tracking-[0.35em] text-white/60 sm:mb-4 sm:text-sm">
              DEAN OF BIC
            </div>

            {/* clamp keeps it responsive without crazy overflow */}
            <div className="text-white font-extrabold leading-none text-[clamp(2.4rem,7vw,6rem)]">
              Joon Ki
            </div>
            <div className="text-pink-300 font-extrabold leading-none text-[clamp(2.4rem,7vw,6rem)]">
              HAN
            </div>

            {/* Motto */}
            <motion.div variants={textVariant(1.5)}>
              <div className="mt-8 sm:mt-12 lg:mt-16 flex justify-center lg:justify-end">
                <div className="max-w-md text-center lg:text-right">
                  <div className="ml-auto mb-4 h-px w-16 bg-gradient-to-r from-pink-400 to-purple-500 sm:mb-6 sm:w-24" />
                  <p className="text-base italic text-white/80 sm:text-xl">
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
          className="order-1 lg:order-2 relative flex w-full justify-center lg:justify-start"
        >
          {/* Glow behind image */}
          <div className="pointer-events-none absolute inset-0 mx-auto max-w-md rounded-full bg-gradient-to-tr from-pink-500/30 via-purple-500/20 to-transparent blur-3xl sm:max-w-lg" />

          <motion.img
            src="/dean-silhuete.png"
            alt="Dean"
            className="
              relative z-10
              w-full max-w-[520px]
              rounded-2xl shadow-2xl
              aspect-[4/5] object-cover
            "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Quote section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto mt-12 sm:mt-16`}
      >
        <QuoteCard
          quote={
            <div className="space-y-4 sm:space-y-5">
              <div>
                It is my great honor and pleasure, as the Dean of the{' '}
                <strong>BIC (Busan International College)</strong>, to extend my warmest
                welcome to you all.
              </div>

              <div>
                Thank you for your interest in us and for choosing{' '}
                <strong>BIC as your academic home</strong>. As Korea’s vibrant
                second-largest city, <strong>Busan</strong> is a dynamic blend of modern
                infrastructure and breathtaking ocean scenery. It’s a truly unique and
                inspiring environment for learning and growth.
              </div>

              <div>
                Our college was established with a bold vision:{' '}
                <strong>“Educating the Next Global Innovators”</strong>, which is to nurture
                innovative global leaders for tomorrow. As the first institution in the
                Busan–Ulsan–Gyeongnam region to offer a{' '}
                <strong>
                  100% English-taught curriculum exclusively for international students
                </strong>
                , we are proud to be pioneering new paths in global business education.
                While we are still young, we are growing rapidly—full of energy, potential,
                and ambition.
              </div>

              <div>
                Currently, we offer seven departments:{' '}
                <strong>
                  Global Business, AI & Computer Engineering, Information System and
                  Security, Mechanical Engineering, Global Korean Studies, Tech Management
                  and Innovation, and Culture and Design Management
                </strong>
                . Our multinational faculty provides practical, knowledge-oriented education
                to diverse international students.
              </div>

              <div>
                Our college places a strong emphasis on <strong>Teaching Innovation</strong>.
                Our full-time professors employ innovative teaching methods, including
                Action Learning, Flipped Learning, and Project-Based Learning (PBL).
                Additionally, our adjunct professors, who are experts from global companies
                such as <strong>Amazon, Google, and Samsung</strong>, provide practical,
                industry-relevant education.
              </div>

              <div>
                We are also deeply committed to helping students succeed not only in the
                classroom but also in their future career in and outside of Korea. With
                passionate professors, a supportive academic system, and career-centered
                programs, we are building a bridge between{' '}
                <strong>your dreams and your reality</strong>.
              </div>

              <div>
                Once again, welcome. I look forward to seeing many of you at our campus and
                watching you write a new and meaningful chapter of your youth here with
                us—one filled with <strong>discovery, challenge, and transformation</strong>.
              </div>

              <div className="pt-2 sm:pt-3 font-semibold">
                Warm regards,
                <br />
                Dr. Joon Ki HAN
                <br />
                <span className="font-normal italic">Dean, Busan International School</span>
              </div>
            </div>
          }
          name="Joon Ki HAN"
          role="BIC Dean • Tongmyong University"
          avatarSrc="/dean-silhuete.png"
        />
      </motion.div>
    </section>
  </section>
);

export default Page;
