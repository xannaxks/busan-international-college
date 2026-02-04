import Rotating3DCarousel from '../../../../components/Rotating3DCarousel';

const images = [
  'https://www.tu.ac.kr/_res/tongmyong/ic/img/student-life_img-01.jpg',
  'https://www.tu.ac.kr/_res/tongmyong/ic/img/student-life_img-02.jpg',
  'https://www.tu.ac.kr/_res/tongmyong/ic/img/student-life_img-03.jpg',
  'https://www.tu.ac.kr/_res/tongmyong/ic/img/student-life_img-11.jpg',
  'https://www.tu.ac.kr/_res/tongmyong/ic/img/student-life_img-04.jpg',
  'https://www.tu.ac.kr/_res/tongmyong/ic/img/student-life_img-05.jpg',
  'https://www.tu.ac.kr/_res/tongmyong/ic/img/student-life_img-12.jpg',
  'https://www.tu.ac.kr/_res/tongmyong/ic/img/student-life_img-10.jpg',
];

const Page = () => (
  <div>
    <Rotating3DCarousel images={images} />
  </div>
);
export default Page;
