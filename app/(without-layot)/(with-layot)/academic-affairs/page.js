import Rotating3DCarousel from '../../../../components/Rotating3DCarousel';

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

const Page = () => (
  <div className="w-full items-center justify-center">
    <div className="w-full">
      <Rotating3DCarousel images={images} />
    </div>
  </div>

);
export default Page;
