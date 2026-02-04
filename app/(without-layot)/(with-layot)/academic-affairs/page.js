import Rotating3DCarousel from '../../../../components/Rotating3DCarousel';
import { About, Hero } from '../../../../sections';

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

const imageUrl = '/academic-affairs.webp';
const Page = () => (
  <div className="w-full items-center justify-center">
    <Hero text1="BIC's" text2="Academic" text3="Affairs" imageSrc={imageUrl} />
    <About header="| About BIC's Academic Affairs office" text="The Academic Affairs Office is located in Building #19. Our staff is available to ensure students have a successful academic experience by providing services, which include assisting students with course registration, withdrawal, transfer of credits, and requests for a leave of absence. Additionally, the academic affairs team is responsible for organizing the welcome convocation ceremony." />
    <div className="w-full">
      <Rotating3DCarousel images={images} />
    </div>
  </div>

);
export default Page;
