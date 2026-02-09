import Rotating3DCarousel from '../../../../components/Rotating3DCarousel';
import { About, Hero } from '../../../../sections';
import EventsLecturesSection from '../../../../components/Events';

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

const imageUrl = '/student-life-main.jpg';
const Page = () => (
  <div className="w-full items-center justify-center">
    <Hero text1="Student" text2="Life" text3="at BIC" imageSrc={imageUrl} />
    <About header="| About student life in BIC" text="BIC highly values and actively encourages student participation in organizing and engaging in various events and extracurricular activities. We provide a diverse range of opportunities to enhance the college experience, including International week, the Basic Upgrade Program (BUP), the Pre-University (Pre-U) program, special lectures, competitions, workshops, company visits, cultural days, Tongmyong sports day, university festivals, and welcoming orientations. By choosing BIC at Tongmyong University, our students embark on a journey where innovation, global perspectives, and practical skills converge. Join us and become part of a vibrant community that embraces excellence and empowers students to make a lasting impact on the world." />
    {/*<Satellite />*/}
    <EventsLecturesSection />
    <div className="w-full mt-12">
      <Rotating3DCarousel images={images} />
    </div>
  </div>

);
export default Page;
