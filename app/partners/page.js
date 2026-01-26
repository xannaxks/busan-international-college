'use client';

import { motion } from 'framer-motion';
import Globe from '../../components/Globe';
import styles from '../../styles';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import InfiniteBanner from '../../components/Banner';
import { TitleText, TypingText } from '../../components';

const Page = () => (
  <section>
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1
            variants={textVariant(1.1)}
            className={styles.heroHeading}
          >
            BIC's World-class Partners
          </motion.h1>
        </div>

      </motion.div>
    </section> {/* HERO */}
    <div className="relative mt-20">
      <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingText
            title="| Partners"
            textStyles="text-center text-[35px]"
          />

          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white mt-5"
          >
            We deliver top-quality practical teaching through collaborations with our industry and academic partners.
          </motion.p>

          <motion.img
            variants={fadeIn('up', 'tween', 0.3, 1)}
            src="/arrow-down-white.svg"
            alt="arrow-down"
            className="w-[18px] h-[28px] object-contain mt-[28px]"
          />
        </motion.div>
      </section> {/* ABOUT */}
      <div className="gradient-03 z-0" />

    </div>
    <div className={'mt-20'}>
      <Globe />
    </div>
    <div className={'mt-40'}>
      <InfiniteBanner to={'left'} />
      <InfiniteBanner to={'right'} />
    </div>
  </section>
);

export default Page;
