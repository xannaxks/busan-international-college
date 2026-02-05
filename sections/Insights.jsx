'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';

const Insights = ({ header = '', main = '' }) => (
  <section className={`${styles.paddings} `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title={header || '| Insight'} textStyles="text-center" />
      <TitleText title={main || 'Insights about BIC'} textStyles="text-center" />

      <div className="mt-[50px] flex flex-col gap-20 sm:gap-20 lg:gap-10 z-50">

        {insights.map((insight, i) => (
          <a href={insight.url} key={i}>
            <InsightCard
              key={`Insight-${i + 1}`}
              {...insight}
              index={i + 1}
            />
          </a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
