'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`
    flex flex-wrap 
    items-center justify-center
    font-normal text-[30px] text-secondary-white
    w-full
    z-50
    ${textStyles}`}
  >
    {Array.from(title).map((letter, i) => (
      <motion.span variants={textVariant2} key={i}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>

);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white z-50 ${textStyles}`}
  >{title}
  </motion.h2>
);
