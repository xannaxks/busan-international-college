'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeIn } from '../utils/motion';

const NavigationSection = ({ index, section, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex flex-col gap-4 w-full"
    >
      <div className="w-full flex justify-between">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[600px]">

          {/* SECTION TITLE */}
          <h4
            className="
              font-normal lg:text-[42px] text-[26px] text-white
              cursor-pointer select-none
            "
            onClick={() => setOpen((prev) => !prev)}
          >
            {section}
          </h4>

          {/* LINKS (click only) */}
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-out
              ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="mt-4 space-y-2">
              {links.map((link, i) => (
                <a href={`/${link.url}`}>
                  <div
                    key={i}
                    className="font-normal lg:text-[20px] text-[14px] text-secondary-white"
                  >
                    {link.link}
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default NavigationSection;
