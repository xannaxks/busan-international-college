'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const DropdownSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left text-lg font-semibold"
      >
        {title}

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 flex flex-col gap-3 text-base text-gray-600">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    if (menuOpen) return; // prevent hiding while menu is open

    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 180) {
      setHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  // lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <motion.div
        animate={hidden ? 'hidden' : 'visible'}
        initial="visible"
        whileHover={hidden ? 'peeking' : 'visible'}
        onFocusCapture={hidden ? () => setHidden(false) : undefined}
        variants={{
          visible: { y: '0%' },
          hidden: { y: '-90%' },
          peeking: { y: '10%', cursor: 'pointer' },
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 z-[100] flex min-w-full justify-center pt-3 gradient-0"
      >
        <div className="absolute w-[50%] inset-0 gradient-01-light" />

        <nav className="flex w-[70%] md:w-[50%] mx-6 px-10 justify-between rounded-3xl bg-white p-5 text-black *:rounded-xl *:border *:border-gray-200 *:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200">
          <a href="/search">
            <img src="/search-crimson.svg" alt="search" />
          </a>

          <a href="/">
            <span className="font-bold text-red-700">BIC</span>
          </a>

          {/* MENU BUTTON */}
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <img src="/menu-crimson.svg" alt="menu" />
          </button>
        </nav>
      </motion.div>

      {/* OVERLAY + MENU */}
      <AnimatePresence>
        {menuOpen && (
        <>
          {/* DARK BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-black"
            onClick={() => setMenuOpen(false)}
          />

          {/* BURGER MENU */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 z-[101] h-full w-[80%] sm:w-[400px] bg-white shadow-2xl p-8 overflow-y-auto"

          >
            <button
              onClick={() => setMenuOpen(false)}
              className="mb-6 text-sm text-gray-500 hover:text-black"
            >
              Close ✕
            </button>

            <div className="flex flex-col gap-6">
              {/* SIMPLE LINK */}
              <a href="/profile" className="text-lg font-semibold">
                Profile
              </a>

              {/* DROPDOWNS */}
              <DropdownSection title="Navigation">
                <a href="/">Home</a>
                <a href="/search">Search</a>
                <a href="/favorites">Favorites</a>
              </DropdownSection>

              <DropdownSection title="Account">
                <a href="/settings">Settings</a>
                <a href="/billing">Billing</a>
                <a href="/security">Security</a>
              </DropdownSection>

              <DropdownSection title="More">
                <a href="/about">About</a>
                <a href="/help">Help</a>
              </DropdownSection>

              {/* DANGER ZONE */}
              <button className="mt-6 text-left text-lg font-semibold text-red-600">
                Logout
              </button>
            </div>
          </motion.aside>
        </>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;
