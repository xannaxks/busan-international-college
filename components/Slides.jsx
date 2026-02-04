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
      // className={'leading-10'}
    />
  </section>
);

// eslint-disable-next-line react/function-component-definition
export default function Slides({ DeptName, DeptBanner, DeptContent, sections}) {
  return (
    <div>

      <div className="snap-wrapper">
        <Section key={-1} title={DeptName} content={DeptContent} image={DeptBanner} direction="left" />
        {sections.map((section, i) => (
          <Section
            key={i}
            {...section}
            direction={
              i % 2 === 0
                ? 'right'
                : 'left'
            }

          />
        ))}

        <style>{`
          .snap-wrapper {
            height: 100vh;
            width: 100vw;
            overflow-y: scroll;
            scroll-snap-type: y mandatory;
            scrollbar-width: none;
          }
  
          .snap-wrapper::-webkit-scrollbar {
            display: none;
          }
  
          .snap-section {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            align-items: center;
            justify-content: center;
  
            padding: 2rem;
          }
        `}
        </style>
      </div>
      <div className="flex justify-center items-center gap-16 flex-col lg:flex-row z-50">
        {professors.map((item, i) => (
          <ExpandableCard
            key={i}
            {...item}
          />
        ))}
        {professors.map((item, i) => (
          <ExpandableCard
            key={i}
            {...item}
          />
        ))}
        {professors.map((item, i) => (
          <ExpandableCard
            key={i}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
