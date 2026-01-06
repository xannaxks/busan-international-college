'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../../utils/motion';
import { About, Explore, Hero} from '../../sections';
import TextAndImage from "../../sections/TextAndImage";
import { ExploreCard, TitleText, TypingText } from '../../components';
import { who_we_are, competencies } from '../../constants';

const Page = () => {
  const [active, setActive] = useState('world-2');
  return (
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
              We are global innovators.
            </motion.h1>
          </div>

        </motion.div>
      </section> {/* HERO */}
      <div className="relative">
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
              title="| Who we are?"
              textStyles="text-center text-[35px]"
            />

            <motion.p
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white mt-5"
            >
              BIC is globally recognized as the epicenter of innovation in education. At BIC, we cultivate individuals who pioneer creative approaches to the world's most complex challenges.

              Through our commitment to action-based learning, we equip our graduates with the skills needed to thrive in today’s ever-evolving world, fostering creativity and thought leadership.

              Our impact reaches far beyond the classroom as we strive to establish a new standard in higher education.
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
        <section className={`${styles.paddings}`} id="explore">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            <TypingText title="| Competencies" textStyles="text-center" />
            <TitleText title={<>BIC’s 5 core competencies: DOING </>} textStyles="text-center" />

            <div className="mt-[50px] flex lg:flex-row flex-col min-h-[40vh] gap-5 w-full">
              {competencies.map((competencie, index) => (
                  <div key={index} className="flex items-center gap-2 flex-col text-white text-[20px] w-full justify-center">
                      <img
                          src={competencie.imgUrl}
                          width={100}
                          height={100}
                          alt={competencie.title}
                      />
                      <div className={"flex items-center justify-center"}>{competencie.title}</div>
                  </div>

              ))}
            </div>
          </motion.div>
        </section> {/* five cores */}
      </div>
        <div className="relative">
            {who_we_are.map((item, index) => (
                <div>
                    <div className="gradient-04 z-0" />
                <TextAndImage key ={index} {...item} />
                </div>
            ))}
        </div>

    </section>
  );
};

export default Page;
