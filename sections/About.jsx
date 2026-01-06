'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
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
        title="| About Busan International College"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold">
          BIC&nbsp;
        </span>
          at Tongmyong University (TU) is a <span className="font-extrabold">globally focused</span> college within a larger Korean university, <span className="font-extrabold">aiming to develop world-class innovators</span> in tech, management, and content through action-based learning, English-taught programs, and <span className="font-extrabold">industry partnerships with giants like Amazon and Samsung.</span> BIC offers degrees in areas like AI, Engineering, Global Business, and Digital Content, fostering a multicultural environment with practical skills and career support for students seeking to thrive globally.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down-white.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
