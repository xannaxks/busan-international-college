'use client';

import { motion, AnimatePresence } from 'framer-motion';

const NavBarDropdown = ({ section, isOpen, onToggle }) => (
  <div data-dropdown className="relative">
    <button
      onClick={onToggle}
      className="flex items-center gap-1 font-semibold text-gray-700 hover:text-red-700"
    >
      {section.title}
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-sm"
      >
        ▼
      </motion.span>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.96 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute top-full mt-7 min-w-[200px] rounded-xl border border-gray-200 bg-white shadow-xl"
        >
          <div className="flex flex-col p-3">
            {section.links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-700"
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

export default NavBarDropdown;
