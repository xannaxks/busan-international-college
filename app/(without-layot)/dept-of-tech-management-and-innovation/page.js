'use client';

import Slides from '../../../components/Slides';

const sections = [
  {
    title: 'Overview',
    content: [
      // eslint-disable-next-line max-len
      'The Tech Management and Innovation Department at Busan International College (BIC) offers an interdisciplinary program designed to foster the next generation of leaders in the tech-driven business world. The department’s mission is to equip students with both technical expertise and business management skills, enabling them to navigate and lead in industries continuously disrupted by technological advancements. The program is tailored to meet the growing demand for professionals who can bridge the gap between traditional business functions and emerging technologies, making graduates highly adaptable in today’s fast-paced, globalized marketplace. Students in the program will acquire a comprehensive understanding of how technology is transforming various aspects of business, including marketing, operations, product development, and supply chain management. As digital transformation reshapes industries worldwide, the curriculum prepares students to lead innovations in these fields, providing them with the skills necessary to adapt to, and drive, technological change. With a focus on real-world application and problem-solving, students are encouraged to develop creative solutions to contemporary challenges facing businesses in the tech sector.',
    ],
    image:
      'https://images.tech.co/wp-content/uploads/2024/01/22094704/EPN_0539-3-1-e1705934863400.jpg',
  },
  {
    title: 'Field description',
    content: [
      // eslint-disable-next-line max-len
      'The Tech Management and Innovation program delves deeply into the intersection of technology and business, preparing students for careers at the forefront of technological innovation. The field of study emphasizes both strategic management and technological proficiency, covering emerging areas like artificial intelligence (AI), blockchain, the Internet of Things (IoT), and financial technology (fintech). Students learn how to integrate these technologies into business strategies to drive efficiency, innovation, and competitive advantage in diverse industries. Core business subjects such as economics, accounting, and strategy are complemented by technology-focused courses, ensuring that students develop a balanced understanding of both disciplines. This holistic approach is designed to give students a critical edge, as they learn not only how to manage technology-driven organizations but also how to lead cross-functional teams that design, develop, and implement technological solutions. The program fosters an in-depth understanding of technology\'s impact on business models and organizational structures, ensuring that graduates can navigate and influence the evolving digital landscape.',
    ],
    image: '/tech-management-and-innovation-crimson.svg',
  },
  {
    title: 'Practical Curriculum',
    content: [
      // eslint-disable-next-line max-len
      'The curriculum of the Tech Management and Innovation Department is highly practical, emphasizing hands-on learning and industry engagement. Students engage in a variety of innovative teaching methodologies, including Flipped Learning, Project-Based Learning (PBL), and case studies that simulate real-world business scenarios. This approach allows students to apply theoretical knowledge to practical situations, fostering the development of critical thinking, problem-solving, and leadership skills. Partnerships with industry leaders such as Amazon, Google, and Samsung provide students with direct exposure to global business practices and cutting-edge technologies. These collaborations enable students to engage with real-world business challenges, preparing them to enter the workforce with a competitive edge. In addition, students participate in co-op projects that connect them with local companies in Busan, fostering strong ties with the regional tech ecosystem while broadening their understanding of global trends. The program’s integrated approach ensures that students graduate not only with academic knowledge but also with practical experience. Internships, workshops, and collaborative projects with industry professionals are key components of the curriculum, giving students a well-rounded education that bridges the gap between theory and practice. This experiential learning model prepares students to take on leadership roles in a variety of tech-driven sectors, whether in multinational corporations, start-ups, or social enterprises, ensuring that they are equipped to innovate and lead in an increasingly digital world.',
    ],
    image:
      'https://holistiquetraining.com/storage/effective-business-management.jpg',
  },
];

const DeptName = ['Department of Tech Management & Innovation'];
const DeptBanner = '/tech-management-and-innovation-banner.png';
const DeptContent = ['scroll down to learn more'];

// eslint-disable-next-line react/function-component-definition
export default function Page() {
  return (
    <Slides DeptName={DeptName} DeptBanner={DeptBanner} DeptContent={DeptContent} sections={sections} />
  );
}
