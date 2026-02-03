'use client';

import { motion } from 'framer-motion';
import { BlockWithImage } from '../../../components/Block';
import { professors } from '../../../constants';
import ExpandableCard from '../../../components/Card';
import { staggerContainer, textVariant } from '../../../utils/motion';
import styles from '../../../styles';

const sections = [
  {
    title: 'Overview',
    content: [
      'The AI & Engineering Department focuses on the design, development, and implementation of computer systems and their components, with a special emphasis on big data analysis and artificial intelligence (AI). The department offers comprehensive programs that equip students with the knowledge and skills needed to tackle complex engineering challenges in both computer hardware and software, particularly within the realms of big data and AI applications. Emphasizing a practical approach to learning, the department provides students with hands-on experience across various areas of AI & computer engineering',
    ],
    image:
      'https://builtin.com/sites/www.builtin.com/files/2022-04/what-is-deep-learning.png',
  },
  {
    title: 'Field description',
    content: [
      'AI & Computer Engineering is a multidisciplinary field that combines principles from computer science and electrical engineering. In the AI & Computer Engineering Department, students gain a strong foundation in both hardware and software aspects of computing, with a particular focus on big data analysis and AI. They learn about digital systems, computer architecture, programming languages, algorithms, and data structures, specifically tailored to handling and processing large-scale datasets.Moreover, students delve into advanced topics such as machine learning, data mining, natural language processing, and computer vision. The department places significant emphasis on the integration of big data analytics and AI techniques into various applications and industries. Students acquire the necessary skills to design and develop intelligent systems capable of extracting insights, making predictions, and automating decision-making processes using large volumes of data.',
    ],
    image: '/ai-and-computer-engineering-crimson.svg',
  },
  {
    title: 'Practical Curriculum',
    content: [
      'The practical curriculum of the AI & Computer Engineering Department is designed to equip students with hands-on experience and practical skills essential in the field of big data analysis and AI. The coursework includes laboratory sessions, design projects, and internships, enabling students to apply their theoretical knowledge to real-world scenarios within the context of big data and AI applications. Students have access to state-of-the-art tools and technologies integral for big data processing, machine learning, and AI development. They learn to work with distributed computing frameworks and utilize programming languages and libraries commonly employed in data analysis and AI, such as Python, TensorFlow, and PyTorch. The department fosters teamwork and collaboration, with students often working in groups to tackle complex data analysis projects and develop AI models.',
    ],
    image:
      'https://substackcdn.com/image/fetch/f_auto,q_auto:good/https://substack-post-media.s3.amazonaws.com/public/images/4c66f381-6232-4745-933c-82b76ecfb6a2_2250x2952.jpeg',
  },
];

const DeptName = ['Department of AI & Computer Engineering'];
const DeptBanner = '/ai-and-computer-engineering-banner.png';
const DeptContent = ['scroll down to learn more'];

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

export default function Page() {
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
