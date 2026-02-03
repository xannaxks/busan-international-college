'use client';

import { ai_and_computer_engineering, professors } from '../../../../constants';
import ExpandableCard from '../../../../components/Card';
import { BlockWithImage } from '../../../../components/Block';

const images = [
  'https://builtin.com/sites/www.builtin.com/files/2022-04/what-is-deep-learning.png',
  '/ai-and-computer-engineering-crimson.svg',
  'https://substackcdn.com/image/fetch/f_auto,q_auto:good/https://substack-post-media.s3.amazonaws.com/public/images/4c66f381-6232-4745-933c-82b76ecfb6a2_2250x2952.jpeg',
];

const Section = ({ title, content, image, direction }) => (
  <section className="snap-section">
    <BlockWithImage
      header={title}
      text={content}
      image={image}
      direction={direction}
    />
  </section>
);

const Page = () => (

  <div className="flex justify-center gap-10 flex-wrap sm:w-[99%] md:w-[90%] lg:w-[80%]">
    <div className="flex flex-col justify-center items-center w-full">
      {/* <DepartmentBlock */}
      {/*  department_name="AI & Computer Engineering" */}
      {/*  overview={ai_and_computer_engineering.overview} */}
      {/*  description={ai_and_computer_engineering.description} */}
      {/*  curriculum={ai_and_computer_engineering.curriculum} */}
      {/* /> */}

      <Section title="Overview" content={ai_and_computer_engineering.overview} direction="left" image={images[0]} />
      <Section title="Curriculum" content={ai_and_computer_engineering.curriculum} direction="right" image={images[0]} />
      <Section title="Description" content={ai_and_computer_engineering.description} direction="left" image={images[0]} />

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

export default Page;
