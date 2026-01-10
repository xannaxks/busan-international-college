'use client';

import { motion } from 'framer-motion';
import { TypingText } from '.';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

// eslint-disable-next-line camelcase
const Page = ({ department_name, overview, description, curriculum }) => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
            // viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title={`| ${department_name}`}
        className="flex flex-wrap"
        textStyles="text-center text-[45px]"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[40px] font-normal sm:text-[21px] text-[15px] text-center text-secondary-white max-w-[70%]"
      >
        <h1 className="mt-[90px] mb-[30px] font-bold">Overview</h1>
        {overview}
      </motion.div>

      <div className="gradient-02" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[40px] font-normal sm:text-[21px] text-[15px] text-center text-secondary-white max-w-[70%]"
      >
        <h1 className="mt-[90px] mb-[30px] font-bold">Description</h1>
        {description}
      </motion.div>
      <div className="gradient-02" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[40px] font-normal sm:text-[21px] text-[15px] text-center text-secondary-white max-w-[70%]"
      >
        <h1 className="mt-[90px] mb-[30px] font-bold">Curriculum</h1>
        {curriculum}
      </motion.div>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down-white.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default Page;
