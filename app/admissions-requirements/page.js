'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../../utils/motion';
import { About, Explore, Hero} from '../../sections';
import TextAndImage from "../../sections/TextAndImage";
import { ExploreCard, TitleText, TypingText } from '../../components';
import { who_we_are, competencies } from '../../constants';
import QualificationsTable from "../../components/QualificationsTable";
import AdmissionsCriteria from "../../components/AdmissionsCriteria";
import ApplicationSchedule from "../../components/ApplicationSchedule";
import ApplicationDocuments from "../../components/ApplicationDocuments";

const Page = () => {
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
                            Admission requirements
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
                            title="| What are the requirements?"
                            textStyles="text-center text-[30px]"
                        />

                        <motion.p
                            variants={fadeIn("up", "tween", 0.2, 1)}
                            className="mt-5 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
                        >
                            At BIC, we enthusiastically welcome individuals from diverse social, economic, ethnic, academic, and geographic backgrounds, appreciating the rich perspectives and experiences they bring to our classrooms. Each application receives individual consideration, evaluated on its own merits.

                            Our admissions process is selective, and we encourage students to submit their applications as early as possible. This ensures ample time for thorough review, visa processing, and preparation for relocation.
                        </motion.p>

                        <motion.img
                            variants={fadeIn("up", "tween", 0.3, 1)}
                            src="/arrow-down-white.svg"
                            alt="arrow-down"
                            className="w-[18px] h-[28px] object-contain mt-[28px]"
                        />
                    </motion.div>
                </section> {/* ABOUT */}
            </div>
            <div className="flex flex-col gap-[15rem] my-[15rem]">
            <div>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                <TypingText
                    title="| Qualifications"
                    textStyles="text-center text-[30px]"
                />
                <QualificationsTable/>
                </motion.div>
            </div>
            <div>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                    <TypingText
                        title="| Admissions Criteria"
                        textStyles="text-center text-[30px]"
                    />
                <AdmissionsCriteria/>
                </motion.div>
            </div>
            <div>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                    <TypingText
                        title="| Application Schedule"
                        textStyles="text-center text-[30px]"
                    />
                <ApplicationSchedule/>
                </motion.div>
            </div>
            <div>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
                >
                    <TypingText
                        title="| Application Documents"
                        textStyles="text-center text-[30px]"
                    />
                <ApplicationDocuments/>
                </motion.div>
            </div>
            </div>
        </section>
    );
};

export default Page;
