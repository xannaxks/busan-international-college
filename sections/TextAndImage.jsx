'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TypingText } from '../components';
import { planetAppear, planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const TextAndImage = ({ title, description, url }) => (
  <section className={`${styles.paddings} relative z-50`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title={`| ${title} `} textStyles="text-[30px] font-bold" />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px] text-secondary-white text-[20px] glassmorphism p-5 rounded-2xl">
          {description}
        </div>
      </motion.div>

      <motion.div
        variants={planetAppear()}
        className={`flex-1 ${styles.flexCenter} `}
      >
        <img
          src={`${url}`}
          alt="get-started"
          // className={"rounded-2xl"}
          className="rounded-2xl w-[90%] h-[90%]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default TextAndImage;
