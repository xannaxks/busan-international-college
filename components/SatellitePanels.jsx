'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

// eslint-disable-next-line react/function-component-definition
export default function SatellitePanels({ sections, className = '' }) {
  const defaultSections = useMemo(
    () => [
      {
        title: 'Section 1',
        text: 'Whatever',
        bg: '/ai-and-computer-engineering-banner.png',
      },
      {
        title: 'Section 2',
        text: 'Whatever',
        bg: '/ai-and-computer-engineering-banner.png',
      },
      {
        title: 'Section 3',
        text: 'Whatever',
        bg: '/ai-and-computer-engineering-banner.png',
      },
      {
        title: 'Section 4',
        text: 'Whatever',
        bg: '/ai-and-computer-engineering-banner.png',
      },
      {
        title: 'Section 5',
        text: 'Whatever',
        bg: '/ai-and-computer-engineering-banner.png',
      },
    ],
    [],
  );

  const data = sections?.length ? sections : defaultSections;

  const [inactive, setInactive] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setInactive(false), 200);
    return () => clearTimeout(t);
  }, []);

  const isElActive = activeIndex !== null;

  return (
    <div className={`super ${className}`}>
      <div className={`cont ${inactive ? 'inactive' : ''} ${isElActive ? 'elActive' : ''}`}>
        <div className="inner">
          {data.slice(0, 5).map((s, i) => {
            const isActive = activeIndex === i;
            const isOther = isElActive && !isActive;

            return (
              <motion.div
                key={i}
                className={`el ${isActive ? 'active' : ''} ${isOther ? 'otherWhenActive' : ''}`}
                layout
                transition={{
                  layout: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
                }}
                onClick={() => {
                  if (isActive) return;
                  setActiveIndex(i);
                }}
                style={{
                  '--bg': `url(${s.bg})`,
                }}
              >
                <div className="overflow">
                  <motion.div
                    className="elInner"
                    initial={false}
                    animate={{ y: inactive ? '100%' : '0%' }}
                    transition={{
                      duration: 1,
                      delay: 0.1 * i,
                      ease: [0.2, 0.8, 0.2, 1],
                    }}
                  >
                    <div className="bg" />

                    <div className="preview">
                      <h2 className="heading">{s.title}</h2>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="content"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, delay: 0.75 }}
                        >
                          <div className="text">{s.text}</div>

                          <button
                            type="button"
                            className="closeBtn"
                            aria-label="Close"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveIndex(null);
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                <div className="index">
                  <div className="indexBack">{i + 1}</div>
                  <div className="indexFront">
                    <div className="indexOverlay" data-index={String(i + 1)}>
                      {i + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <a
        href="https://dribbble.com/shots/2802024-Satellite-Website-Prototype"
        target="_blank"
        rel="noreferrer"
        className="iconLink"
      >
        <img
          alt="Dribbble"
          src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png"
        />
      </a>

      <a
        href="https://twitter.com/NikolayTalanov"
        target="_blank"
        rel="noreferrer"
        className="iconLink iconLinkTwitter"
      >
        <img alt="Twitter" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
      </a>

      <style jsx>{`
          .super {
              min-height: 100vh;
              background: #1f1f1f;
              font-family: 'Open Sans', Helvetica, Arial, sans-serif;
              position: relative;
          }

          .cont {
              --vertPad: 80px;
              --sidePad: 70px;

              position: relative;
              overflow: hidden;
              height: 100vh;
              padding: var(--vertPad) var(--sidePad);
          }

          .inner {
              position: relative;
              height: 100%;
              display: flex;
              gap: 1%;
          }

          .inner:hover .bg::after {
              opacity: 1;
          }

          .el {
              position: relative;
              height: 100%;
              background: #252525;
              flex: 1 1 0;
              min-width: 0;
              cursor: pointer;
              will-change: transform, opacity, width;
          }

          .active {
              cursor: default;
              flex: 1 1 100%;
          }

          .elActive :global(.otherWhenActive) {
              transform: scale(0.5);
              opacity: 0;
              pointer-events: none;
              transition: transform 0.95s, opacity 0.95s;
          }

          .overflow {
              overflow: hidden;
              position: relative;
              height: 100%;
          }

          .elInner {
              overflow: hidden;
              position: relative;
              height: 100%;
          }

          .bg {
              position: absolute;
              inset: 0;
          }

          .bg::before {
              content: '';
              position: absolute;
              inset: -5% 0;
              background-image: var(--bg);
              background-size: cover;
              background-position: center center;
              transform: translate3d(0, 0, 0) scale(1);
              transition: transform 1s;
          }

          .inactive .bg::before {
              transform: translate3d(0, -100%, 0) scale(1.2);
          }

          .active .bg::before {
              transition: transform 0.8s;
              transform: scale(1.1);
          }

          .bg::after {
              content: '';
              z-index: 1;
              position: absolute;
              inset: 0;
              background: rgba(0, 0, 0, 0.3);
              opacity: 0;
              transition: opacity 0.5s;
          }

          .elActive .bg::after {
              opacity: 1;
              transition: opacity 0.5s 1.4s;
          }

          .el:hover .bg::after {
              opacity: 0;
          }

          .preview {
              z-index: 2;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              inset: 0;
              transition: all 0.3s 0.8s;
          }

          .inactive .preview {
              opacity: 0;
              transform: translateY(10px);
          }

          .elActive .preview {
              opacity: 0;
              transform: translateY(30px);
              transition: all 0.5s;
          }

          .heading {
              color: #fff;
              text-transform: uppercase;
              font-size: 18px;
          }

          .content {
              z-index: 2;
              position: absolute;
              inset: 0;
              padding: 30px;
              pointer-events: auto;
          }

          .text {
              text-transform: uppercase;
              font-size: 40px;
              color: #fff;
          }

          .closeBtn {
              position: absolute;
              right: 10px;
              top: 10px;
              width: 60px;
              height: 60px;
              cursor: pointer;
              background: transparent;
              border: 0;
          }

          .closeBtn::before,
          .closeBtn::after {
              content: '';
              position: absolute;
              left: 0;
              top: 50%;
              width: 100%;
              height: 8px;
              margin-top: -4px;
              background: #fff;
              opacity: 1;
          }

          .closeBtn::before {
              transform: rotate(45deg);
          }

          .closeBtn::after {
              transform: rotate(-45deg);
          }

          .index {
              overflow: hidden;
              position: absolute;
              left: 0;
              bottom: -80px;
              width: 100%;
              height: 100%;
              min-height: 250px;
              text-align: center;
              font-size: calc(100vw / 5);
              line-height: 0.85;
              font-weight: bold;
              transition: transform 0.5s, opacity 0.3s 0.7s;
              transform: translate3d(0, 1vw, 0);
          }

          .el:hover .index {
              transform: translate3d(0, 0, 0);
          }

          .elActive .index {
              opacity: 0;
              transition: transform 0.5s, opacity 0.3s;
          }

          .indexBack,
          .indexFront {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
          }

          .indexBack {
              color: #2f3840;
              opacity: 0;
              transition: opacity 0.25s 0.25s;
          }

          .el:hover .indexBack {
              opacity: 1;
              transition: opacity 0.25s;
          }

          .indexOverlay {
              overflow: hidden;
              position: relative;
              transform: translate3d(0, 100%, 0);
              transition: transform 0.5s 0.1s;
              color: transparent;
          }

          .indexOverlay::before {
              content: attr(data-index);
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              transform: translate3d(0, -100%, 0);
              transition: transform 0.5s 0.1s;
          }

          .el:hover .indexOverlay {
              transform: translate3d(0, 0, 0);
          }

          .el:hover .indexOverlay::before {
              transform: translate3d(0, 0, 0);
          }

          .iconLink {
              position: absolute;
              left: 5px;
              bottom: 5px;
              width: 32px;
          }

          .iconLink img {
              width: 100%;
              vertical-align: top;
              display: block;
          }

          .iconLinkTwitter {
              left: auto;
              right: 5px;
          }
      `}
      </style>
    </div>
  );
}
