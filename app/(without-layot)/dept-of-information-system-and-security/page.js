'use client';

import Slides from '../../../components/Slides';

const sections = [
  {
    title: 'Overview',
    content: [
      'The Information System & Security Department focuses on the construction, operation, and security management of information systems within the field of information technology. Students acquire the knowledge and skills necessary to build essential information systems, manage existing information services, and enhance them. Additionally, they learn about information security management systems and develop the ability to operate and implement information security solutions.',
    ],
    image:
      'https://www.uscybersecurity.net/wp-content/uploads/2018/06/Conference-pic.jpg',
  },
  {
    title: 'Field description',
    content: [
      'The Information System & Security Department emphasizes the acquisition of knowledge and skills necessary for building, operating, and managing information systems, along with implementing security solutions. Students engage with various topics including the Linux operating system, databases, web service platforms, cloud platforms, open-source software (OSS), Internet of Things (IoT), and networks. Additionally, they develop expertise in information security through studies in cryptography, malware analysis, network security, and system security.',
    ],
    image: '/information-system-and-security-crimson.svg',
  },
  {
    title: 'Practical Curriculum',
    content: [
      'The Information System & Security Department cultivates practical skills through diverse hands-on experiences. Students engage in tasks such as building and operating web services, configuring cloud platforms, developing Internet of Things (IoT) services, and constructing open-source software (OSS) systems to address the needs of IT environments. Additionally, they gain experience in designing network and system security systems from an information security perspective.',
    ],
    image:
      'https://media.licdn.com/dms/image/sync/v2/D4D27AQGJtENYazmMLQ/articleshare-shrink_800/B4DZagCjrHGwAQ-/0/1746441747698?e=2147483647&v=beta&t=eC6Bjqan4YPPKoc0Us3Gh51O-WTBLYEGgYAeQp94fw4',
  },
];

const DeptName = ['Department of Information System & Security'];
const DeptBanner = '/information-system-and-security-banner.png';
const DeptContent = ['scroll down to learn more'];

export default function Page() {
  return (
    <Slides DeptName={DeptName} DeptBanner={DeptBanner} DeptContent={DeptContent} sections={sections} />
  );
}
