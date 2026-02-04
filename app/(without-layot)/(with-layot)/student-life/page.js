import Rotating3DCarousel from '../../../../components/Rotating3DCarousel';
import { About, Hero } from '../../../../sections';
import Satellite from '../../../../components/SatellitePanels';

const images = [
  '/student-life-img-01.jpg',
  '/student-life-img-02.jpg',
  '/student-life-img-03.jpg',
  '/student-life-img-04.jpg',
  '/student-life-img-05.jpg',
  '/student-life-img-06.jpg',
  '/student-life-img-07.jpg',
  '/student-life-img-08.jpg',
];

const imageUrl = '/career-support.webp';
const Page = () => (
  <div className="w-full items-center justify-center">
    <Hero text1="BIC's" text2="Career" text3="Support" imageSrc={imageUrl} />
    <About header="| About BIC's Career Support office" text="BIC periodically organizes special lectures and courses to prepare our students for job interviews, resume writing, business email composition, and business presentations, enabling them to successfully secure jobs in Korea or overseas upon graduation." />
    {/*<Satellite />*/}
    <div className="w-full">
      <Rotating3DCarousel images={images} />
    </div>
  </div>

);
export default Page;
