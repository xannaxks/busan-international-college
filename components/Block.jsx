'use client';

import { motion } from 'framer-motion';
import TextAnimation from './TextAnimation';

/* -------------------- */
/* TEXT-ONLY BLOCK */
/* -------------------- */
export const Block = ({
  header,
  text,
  className = '',
  direction = '', // 'left' | 'right'
}) => {
  const isLeft = direction === 'left';
  const isRight = direction === 'right';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'linear' }}
      viewport={{ once: false }}
      className={`
        w-full flex-1 rounded-2xl border border-white/40 bg-neutral-950
        p-8 ${isLeft ? 'pb-14 md:pr-20 md:pb-8' : isRight ? 'pt-14 md:pl-20 md:pt-8' : ''}
        text-white backdrop-blur-xl shadow-xl
        hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
        section-gradient-purple-red
        transform transition-transform duration-300 hover:scale-105
        ${className}
      `}
    >
      <h3 className="mb-7 pt-7 text-5xl font-semibold">
        {header}
      </h3>

      {text.map((item, i) => (
        <TextAnimation
          key={i}
          as="p"
          text={item}
          classname="mb-4 text-lg leading-9 normal-case"
          direction="up"
          duration={0.4}
          stagger={0.06}
        />
      ))}
    </motion.div>
  );
};

/* -------------------- */
/* BLOCK WITH IMAGE */
/* -------------------- */

export const BlockWithImage = ({
  header,
  text,
  image,
  direction = 'left',
  main,
  className = '',
}) => {
  const isLeft = direction === 'left';
  const isRight = direction === 'right';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.4 }}
      className={`
        w-full max-w-6xl
        max-h-[75vh] lg:max-h-[90vh]
        lg:mt-16
        overflow-y-auto
        rounded-2xl
        border border-white/40
        bg-neutral-950
        p-8 md:p-10
        text-white
        backdrop-blur-xl
        shadow-xl
        section-gradient-purple-red
        hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
        ${className}
      `}
    >
      <div
        className={`
          flex flex-col lg:flex-row
          items-center
          gap-10
          ${isRight ? 'lg:flex-row-reverse' : ''}
        `}
      >
        {/* IMAGE */}
        <div
          className="
            shrink-0
            w-[220px] h-[220px]
            sm:w-[280px] sm:h-[280px]
            lg:w-[380px] lg:h-[380px]
            rounded-xl
            overflow-hidden
            flex items-center justify-center
          "
        >
          <img
            src={image}
            alt={header}
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div
          className={`
            w-full lg:w-[65%]
            text-center
            ${isRight ? 'lg:text-right' : 'lg:text-left'}
          `}
        >
          <h3 className={`
            mb-6
            text-4xl md:text-5xl font-semibold text-gray-300
            ${main ? 'leading-10' : 'leading-3'}
           `}
          >
            {header}
          </h3>

          {text.map((item, i) => (
            <TextAnimation
              key={i}
              as="p"
              text={item}
              classname="mb-4 text-[15px] leading-1 "
              direction="up"
              duration={0.4}
              stagger={0.06}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
