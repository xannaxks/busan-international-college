'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MobileDropdownSection = ({ section }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b pb-4 z-[1000]">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex w-full justify-between text-lg font-semibold"
      >
        {section.title}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 flex flex-col gap-3 text-gray-600">
              {section.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded hover:bg-gray-100 hover:text-red-700"
                >
                  {link.label}
                </a>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileDropdownSection;
