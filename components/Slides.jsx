'use client';

import { BlockWithImage } from './Block';
import { professors } from '../constants';
import ExpandableCard from './Card';

const Section = ({ title, content, image, direction, main = 0 }) => (
  <section className="snap-section">
    <BlockWithImage
      main={main}
      header={title}
      text={content}
      image={image}
      direction={direction}
    />
  </section>
);

export default function Slides({ DeptName, DeptBanner, DeptContent, sections = [] }) {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="snap-wrapper">
        <Section
          title={DeptName}
          content={DeptContent}
          image={DeptBanner}
          direction="left"
          main={1}
        />

        {sections.map((section, i) => (
          <Section
            key={section?.id ?? `section-${i}`}
            {...section}
            direction={i % 2 === 0 ? 'right' : 'left'}
          />
        ))}

        <style>{`
          /* IMPORTANT: wrapper is NOT a scroller */
          .snap-wrapper { width: 100%; }

          .snap-section {
            min-height: 100dvh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: clamp(1rem, 2.5vw, 2rem);
            scroll-snap-align: start;
            scroll-snap-stop: always;
          }

          @supports not (height: 100dvh) {
            .snap-section { min-height: 100vh; }
          }

          /* Mobile: normal flow (still ok if snap is disabled globally) */
          @media (max-width: 1024px) {
            .snap-section {
              min-height: auto;
              padding: 1rem;
              scroll-snap-align: none;
              scroll-snap-stop: normal;
            }
          }
        `}</style>
      </div>

      <section className="relative z-50 w-full px-4 py-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
          <div className="h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-[120px]" />
        </div>

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="
      text-[clamp(2rem,5vw,3rem)]
      font-semibold
      tracking-tight
      text-white
    "
          >
            Our Department Faculty
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl mx-auto">
            Meet the professors guiding your academic and professional journey
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="
      mx-auto
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-10
      max-w-7xl
    "
        >
          {professors.map((item, i) => (
            <ExpandableCard
              key={item?.id ?? item?.email ?? `${item?.name ?? 'prof'}-${i}`}
              {...item}
            />
          ))}
          {professors.map((item, i) => (
            <ExpandableCard
              key={item?.id ?? item?.email ?? `${item?.name ?? 'prof'}-${i}`}
              {...item}
            />
          ))}
          {professors.map((item, i) => (
            <ExpandableCard
              key={item?.id ?? item?.email ?? `${item?.name ?? 'prof'}-${i}`}
              {...item}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
