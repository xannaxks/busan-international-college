'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navigation } from '../constants';
import NavigationSection from './NavigationSection';
import { TitleText, TypingText } from '.';
import { staggerContainer } from '../utils/motion';

const NavigationMenu = () => (
  <section className={`${styles.paddings} relative z-10 flex items-center justify-center w-full`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Navigation" textStyles="text-center" />
      <TitleText title="Navigation Menu" textStyles="text-center" />

      {/* RESPONSIVE FIX HERE */}
      <div className="flex justify-center items-center">
        <div className="mt-[50px] flex flex-wrap gap-[30px]">
          {navigation.map((item, i) => (
            <NavigationSection
              key={`Navigation-${i + 1}`}
              {...item}
              index={i + 1}
            />
          ))}

        </div>
        <div className="hidden lg:flex items-center justify-center bg-transparent">
          <img src="/mascot-crimson-search.svg" alt="mascot" className="object-contain" />
        </div>
      </div>

    </motion.div>
  </section>
);

export default NavigationMenu;
