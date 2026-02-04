'use client';

import Slides from '../../../components/Slides'

const sections = [
  {
    title: 'Overview',
    content: [
      'Welcome to the Department of Global Business at BIC. Our faculty and staff sincerely thank you for your interest in our programs. We invite you to learn more about us and discover what we have to offer. The Department of Global Business aims to provide education to develop experts in global business practices and personnel capable of playing integral roles in bridging communication gaps between domestic companies in Korea and abroad.',
    ],
    image:
      'https://www.bizzabo.com/wp-content/uploads/2021/09/fintech-conferences-finovate-europe-min.png',
  },
  {
    title: 'Field description',
    content: [
      'In the field of Global Business, the Department offers a comprehensive four-core business major focusing on human resources, finance, accounting, and Management Information System (MIS). Our aim is to cultivate professionals capable of excelling in global business management. Additionally, students in our department will enhance their abilities to independently identify and solve problems, offer relevant suggestions, and analyze information in today\'s society. These skills are all built upon a foundation of English as the lingua franca.',
    ],
    image: '/global-business-crimson.svg',
  },
  {
    title: 'Practical Curriculum',
    content: [
      'In our mission to cultivate competitive global managers poised to lead tomorrow\'s society, we empower and educate professionals who seamlessly blend the elements of globalization, localization, and informatization throughout their careers. Our curriculum not only facilitates the transformation of students passions into sustainable income streams but also broadens their career horizons, encompassing fields such as entrepreneurship, analytics marketing, executive coaching, and beyond.  Anchored in holistic well-being methodologies, our human resource management courses offer students a platform to assimilate practices and principles engineered to optimize performance, unlock potential, and infuse the inspiration and vigor requisite for future business leadership. Complementing the core curriculum, students have access to specialized study groups led by dedicated advisory professors, facilitating deep dives into supplementary studies and research projects beyond the standard course offerings.',
    ],
    image:
      'https://holistiquetraining.com/storage/effective-business-management.jpg',
  },
];

const DeptName = ['Department of Global Business'];
const DeptBanner = '/global-business-banner.png';
const DeptContent = ['scroll down to learn more'];

export default function Page() {
  return (
    <Slides DeptName={DeptName} DeptBanner={DeptBanner} DeptContent={DeptContent} sections={sections} />
  );
}
