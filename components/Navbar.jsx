'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import NavBarDropdown from './NavBarSections';
import MobileDropdownSection from './MobileDropdownSection';

/* ================= DATA ================= */
const NAV_SECTIONS_LEFT = [
  {
    title: 'About BIC',
    links: [
      { href: '/who-we-are', label: 'Who we are' },
      { href: '/meet-the-dean', label: 'Meet the Dean' },
      { href: '/partners', label: 'Partners' },
      { href: '/visit-bic', label: 'Visit BIC' },
    ],
  },
  {
    title: 'Academics',
    links: [
      { href: '/education-at-bic', label: 'Education at BIC' },
      { href: '/billing', label: 'Faculty' },
      { href: '/security', label: 'Undergraduate Programs' },
    ],
  },
];

const NAV_SECTIONS_RIGHT = [
  {
    title: 'Admissions',
    links: [
      { href: '/admissions-requirements', label: 'Admissions Requirements' },
      { href: '/tuition-and-scholarships', label: 'Tuition & Scholarships' },
      { href: '/application-guidelines', label: 'Application Guidelines' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '/academic-affairs', label: 'Academic Affairs' },
      { href: '/student-life', label: 'Student Life' },
      { href: '/career-support', label: 'Career Support' },
    ],
  },
  {
    title: 'News & Events',
    links: [
      { href: '/notice', label: 'Notice' },
      { href: '/faqs', label: 'FAQs' },
      { href: '/bic-news', label: 'BIC News' },
      { href: '/bic-events', label: 'BIC Events' },
    ],
  },
];
const ALL_SECTIONS = [...NAV_SECTIONS_LEFT, ...NAV_SECTIONS_RIGHT];

/* ================= NAVBAR ================= */
const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    if (menuOpen) return;

    // If we are at the top, peek the navbar
    if (y === 0) {
      setHidden(false);
      lastY.current = 0; // reset lastY to avoid jump
      return;
    }

    const diff = y - lastY.current;
    if (Math.abs(diff) > 180) {
      setHidden(diff > 0); // hide if scrolling down, show if scrolling up
      lastY.current = y;
    }
  });

  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; }, [menuOpen]);

  useEffect(() => {
    const handler = (e) => { if (!e.target.closest('[data-dropdown]')) setActiveDropdown(null); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const renderDesktopGroup = (sections) => (
    <div className="hidden lg:flex flex-1 items-center justify-around gap-8">
      {sections.map((section) => (
        <NavBarDropdown
          key={section.title}
          section={section}
          isOpen={activeDropdown === section.title}
          onToggle={() => setActiveDropdown(activeDropdown === section.title ? null : section.title)}
        />
      ))}
    </div>
  );

  return (
    <>
      <motion.div
        animate={{ y: menuOpen ? '-100%' : hidden ? '-90%' : '0%' }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 z-50 flex w-full justify-center pt-3"
      >
        <nav className="flex w-[90%] xl:w-[80%] items-center rounded-3xl bg-white p-5 justify-between px-10">

          {/* 1 — Search */}
          {/* 4 — Logo */}
          <a href="/" className="font-bold text-red-700 shrink-0 hidden lg:block text-xl">
            BIC
          </a>

          {/* 2–3 — Left sections */}
          {NAV_SECTIONS_LEFT.map((section) => (
            <div key={section.title} className="hidden lg:block">
              <NavBarDropdown
                key={section.title}
                section={section}
                isOpen={activeDropdown === section.title}
                onToggle={() =>
                  setActiveDropdown(activeDropdown === section.title ? null : section.title)
                }
              />
            </div>
          ))}



          {/* 5–7 — Right sections */}
          {NAV_SECTIONS_RIGHT.map((section) => (
            <div key={section.title} className="hidden lg:block">
              <NavBarDropdown
                key={section.title}
                section={section}
                isOpen={activeDropdown === section.title}
                onToggle={() =>
                  setActiveDropdown(activeDropdown === section.title ? null : section.title)
                }
              />
            </div>
          ))}

          <a href="/search">
            <img src="/search-crimson.svg" alt="search" />
          </a>
          <a href="/" className="font-bold text-red-700 shrink-0 block lg:hidden">
            BIC
          </a>
          {/* Mobile button */}
          <button onClick={() => setMenuOpen(true)} className="lg:hidden">
            <img src="/menu-crimson.svg" alt="menu" />
          </button>
        </nav>
      </motion.div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sliding menu */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 z-50 h-full w-[80%] bg-white p-8 overflow-y-auto"
            >
              {/* Close button */}
              {/* eslint-disable-next-line react/button-has-type */}
              <button
                onClick={() => setMenuOpen(false)}
                className="mb-6 text-gray-600 font-semibold"
              >
                Close ✕
              </button>

              {/* Menu sections */}
              <div className="flex flex-col gap-6">
                {ALL_SECTIONS.map((section) => (
                  <MobileDropdownSection key={section.title} section={section} />
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;
