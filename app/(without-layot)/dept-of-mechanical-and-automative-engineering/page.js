'use client';

import Slides from '../../../components/Slides';

const sections = [
  {
    title: 'Overview',
    content: [
      'The Department of Mechanical and Automotive Engineering encompasses two key disciplines: mechanical engineering, a foundational core discipline, and automotive engineering, an applied discipline. The department covers a wide range of fields, from the basic principles that support various industries to advanced applications like aircraft and ship design technology, micro-precision machinery, electric vehicles, and smart cars.',
    ],
    image:
      'https://smmtweb.lon1.cdn.digitaloceanspaces.com/wp-content/uploads/2024/02/SMMT-Summit.jpg',
  },
  {
    title: 'Field description',
    content: [
      'Mechanical and automotive engineers specialize in motion—whether in small particles, machinery, or complex structures. Drawing inspiration from natural phenomena, they design, optimize, control, and analyze state-of-the-art mechatronics and vehicles. Integration and innovation are central to their work as engineers.',
    ],
    image: '/engineering-crimson.svg',
  },
  {
    title: 'Practical Curriculum',
    content: [
      'The undergraduate curriculum in Mechanical and Automotive Engineering offers students hands-on, real-world laboratory experience alongside a solid foundation in theoretical knowledge. Interactive, design-centered assignments provide diverse learning experiences, equipping BIC’s Mechanical and Automotive Engineering students to tackle industry and research challenges.',
    ],
    image:
      'https://sdcautomation.com/wp-content/uploads/2024/02/Custom-Robotic-Tooling-Thumbnail-scaled.jpg',
  },
  {
    title: 'Development of Basic Knowledge',
    content: [
      'We provide a comprehensive education in the fundamentals of mechanical and automotive engineering through mathematics, science, and liberal arts, while cultivating experts with effective communication skills.',
    ],
    image: 'https://www.ibm.com/adobe/dynamicmedia/deliver/dm-aid--dec79dda-063e-4af0-aced-175ba6d0a290/adobestock-291742856.jpg?preferwebp=true',
  },
  {
    title: 'Cultivation of professional capability',
    content: [
      'Mechanical engineering is evolving into new interdisciplinary fields by integrating computer science, electronics, control systems, and environmental engineering, all rooted in core disciplines such as energy and production. It is advancing into cutting-edge areas like aircraft design technology, micro-precision machinery using micro-electromechanical systems, AI-based control, and biomechanical technology. Automotive engineering is developing through the convergence of various technologies, including communication systems, materials science, and environmental engineering, all grounded in mechanical and electronic engineering. The field is continuously expanding into emerging areas like electric vehicles, fuel cell vehicles, smart cars, and green transportation systems.',
    ],
    image: 'https://www.northumbria.ac.uk/-/media/undergraduate/hero-banner/automotiveengineering.jpg?modified=20210818103906',
  },
  {
    title: 'Broader Considerations for Mechanical and Automotive Engineers',
    content: [
      'Professional development requires a broad understanding of complex societal issues, including legal, ethical, economic, political, and international considerations, which increasingly impact the engineering profession. The curriculum includes courses on professional ethics, product liability, and design for engineering economics. Electives cover topics in technology, culture, communication, economics, and the humanities. In their fourth year, students are required to write a graduation thesis to demonstrate their ability to conduct research on a technical problem in a specific field and communicate their findings effectively. Additionally, leadership and teamwork are essential for engineers. These skills are developed through group activities, laboratory experiments, design projects, report preparation, and oral presentations. Students are also highly encouraged to participate in professional societies and student-led projects.',
    ],
    image: 'https://cdn.prod.website-files.com/67dbd0866a21b832f303d44a/685ad4d50a1c5f0b274926c3_Car%20EV.png',
  },
];

const DeptName = ['Department of Mechanical and Automotive Engineering'];
const DeptBanner = '/mechanical-and-automotive-engineering-banner.png';
const DeptContent = ['scroll down to learn more'];

// eslint-disable-next-line react/function-component-definition
export default function Page() {
  return (
    <Slides DeptName={DeptName} DeptBanner={DeptBanner} DeptContent={DeptContent} sections={sections} />
  );
}
