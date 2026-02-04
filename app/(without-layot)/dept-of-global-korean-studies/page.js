'use client';

import Slides from '../../../components/Slides'

const sections = [
  {
    title: 'Overview',
    content: [
      'The Department of Global Korean Studies cultivates experts in Korean language education who can teach Korean as a second language (KSL) and Korean as a foreign language (KFL). With a global learning environment that fosters interaction among international students from diverse backgrounds, distinguished professors, and a differentiated curriculum, our goal is to nurture top-notch professionals in Korean language education. By completing the Korean Education major, students automatically acquire the Korean Language Teaching Certificate (Level 2) certified by the government, in accordance with the National Language Basic Act Enforcement Ordinance (Presidential Decree No. 18973, 2005). This certification enables them to work as professors, teachers, and developers of Korean language textbooks and content in Korean language education institutions both domestically and internationally.',
    ],
    image:
      'https://images.musement.com/cover/0142/75/adobestock-306923135-jpeg_header-14174873.jpeg?h=400&q=30&w=1024&auto=format&fit=crop',
  },
  {
    title: 'Field description',
    content: [
      'In the era of globalization in the 21st century, there is a demand for proactive talents with international competence who can actively engage on the world stage. The Department of Global Korean Studies aims to cultivate creative global talents who can contribute not only to Korea but also to various countries and regions around the world. Building upon the efforts and achievements of BIC, which aims to develop intellectual, professional, lifelong learners, international individuals, and service-oriented individuals, the Department of Global Korean Studies seeks to qualitatively enhance knowledge and practical abilities related to Korean language education, Korean language, and Korean culture while instilling ethical qualities. Our aim is to nurture talents suitable for the 21st century.',
    ],
    image: '/global-korean-studies-crimson.svg',
  },
  {
    title: 'Practical Curriculum',
    content: [
      'Practical curriculum includes: Training of Korean Language Teachers, including: Training of Native Korean Language TeachersTraining of Non-Native Korean Language Teachers,Korean Language Education for Foreigners. Cultivation of Experts in Korean Studies, Korean Culture, and Multiculturalism',
    ],
    image:
      'https://chalkacademy.com/wp-content/uploads/2020/06/IMG_4897-3-scaled.jpg',
  },
];

const DeptName = ['Department of Global Korean Studies'];
const DeptBanner = '/global-korean-studies-banner.png';
const DeptContent = ['scroll down to learn more'];

// eslint-disable-next-line react/function-component-definition
export default function Page() {
  return (
    <Slides DeptName={DeptName} DeptBanner={DeptBanner} DeptContent={DeptContent} sections={sections} />
  );
}
