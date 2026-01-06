'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useRef } from 'react';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 180) {
      setHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={hidden ? 'hidden' : 'visible'}
      initial="visible"
      whileHover={hidden ? 'peeking' : 'visible'}
      onFocusCapture={hidden ? () => setHidden(false) : undefined}
      variants={
                {
                  visible: { y: '0%' },
                  hidden: { y: '-90%' },
                  peeking: { y: '10%', cursor: 'pointer' },
                }
            }
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-[100] flex min-w-full justify-center pt-3 gradient-0"
    >
        <div className="absolute w-[50%] inset-0 gradient-01-light" />
      <nav className="flex w-[50%] mx-6 px-10 justify-between rounded-3xl bg-white p-5 text-black *:rounded-xl *:border *:border-gray-200 *:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200">
          <a href={`/search`}>
              <img src={`/search-crimson.svg`} alt={`search`}/>
          </a>
          <a href="/">
            <span className={`font-bold text-red-700`}>BIC</span>
        </a>
          <a href={`/navigation`}>
              <img src={`/menu-crimson.svg`} alt={`menu`}/>
          </a>
      </nav>
    </motion.div>
  );
};

export default Navbar;
