'use client';

import { motion } from 'framer-motion';
import React from 'react';

const TextAnimation = ({
  as = 'p',
  text,
  classname = '',
  direction = 'up',
  duration = 0.4,
  stagger = 0.08,
}) => {
  const MotionComponent = motion[as];

  // axis for movement
  const axis = direction === 'left' || direction === 'right' ? 'X' : 'Y';
  const value = direction === 'down' || direction === 'right' ? 20 : -20;

  // container variants for staggering words
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
    exit: { transition: { staggerChildren: stagger / 2, staggerDirection: -1 } },
  };

  // each word variant
  const wordVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)', [`translate${axis}`]: value },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      [`translate${axis}`]: 0,
      transition: { duration, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      filter: 'blur(5px)',
      [`translate${axis}`]: -value,
      transition: { duration: duration / 1.5, ease: 'easeIn' },
    },
  };

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className={classname}
    >
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

export default TextAnimation;
