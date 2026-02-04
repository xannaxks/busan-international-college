'use client';

import Slides from '../../../components/Slides';

const sections = [
  {
    title: 'Overview',
    content: [
      // eslint-disable-next-line max-len
      'The Department of Digital Design & Marketing (DDM) at Busan International College, Tongmyong University, offers an innovative interdisciplinary program where design, digital technology, and marketing strategy intersect.  The program develops creative thinkers and strategic problem-solvers who understand how visual design, user experience, brand storytelling, and digital marketing operate within today’s global marketplace. Students learn to design user-centered experiences, develop clear and engaging digital brand messages, and apply data-driven insights to solve real branding and marketing challenges. With studio-based learning, industry-linked experiences, and global collaboration opportunities, the DDM program prepares students to lead in the fast-evolving world of digital culture and creative innovation.',
    ],
    image:
      'https://as2.ftcdn.net/jpg/00/93/65/63/1000_F_93656305_riELCfFvoXEpMb4YwtVTX11ZtB745Ijn.jpg',
  },
  {
    title: 'Field description',
    content: [
      // eslint-disable-next-line max-len
      'The field of Digital Design & Marketing equips students with the ability to integrate creative design with strategic digital marketing. Students examine how digital platforms, cultural trends, and consumer behaviors influence design decisions, brand identity, and communication across global markets. Through studies in UX/UI, visual communication, digital branding, and consumer insight, students learn to develop design-driven marketing strategies and create meaningful digital experiences. This interdisciplinary foundation enables graduates to bridge creativity and strategic thinking, contributing innovation across diverse digital industries.',
    ],
    image: '/digital-design-and-marketing-crimson.svg',
  },
  {
    title: 'Practical Curriculum',
    content: [
      // eslint-disable-next-line max-len
      'The field of Digital Design & Marketing equips students with the ability to integrate creative design with strategic digital marketing. Students examine how digital platforms, cultural trends, and consumer behaviors influence design decisions, brand identity, and communication across global markets. Through studies in UX/UI, visual communication, digital branding, and consumer insight, students learn to develop design-driven marketing strategies and create meaningful digital experiences. This interdisciplinary foundation enables graduates to bridge creativity and strategic thinking, contributing innovation across diverse digital industries.',
    ],
    image:
      'https://media.licdn.com/dms/image/v2/D5612AQFj7m9opfUEJg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1670588437305?e=2147483647&v=beta&t=T5NcrmzxtaloYPxgEURhHtuyO-k0Vn1tAJu1utz7Ab8',
  },
];

const DeptName = ['Department of Digital Design & Marketing'];
const DeptBanner = '/digital-design-and-marketing-banner.png';
const DeptContent = ['scroll down to learn more'];

// eslint-disable-next-line react/function-component-definition
export default function Page() {
  return (
    <Slides DeptName={DeptName} DeptBanner={DeptBanner} DeptContent={DeptContent} sections={sections} />
  );
}
