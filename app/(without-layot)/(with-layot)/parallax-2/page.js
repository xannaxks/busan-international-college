import ParallaxScroll from '../../../components/ParallaxScroll';
import ParallaxItem from '../../../components/ParallaxItem';
import ScrollProgress from '../../../components/ScrollProgress';

// eslint-disable-next-line react/function-component-definition
export default function Page() {
  return (
    <>
      <ParallaxScroll>
        {[1, 2, 3].map((i) => (
          <ParallaxItem
            key={i}
            overlay={<h2>{`Section ${i}`}</h2>}
          >
            <div className="w-[300px] h-[400px] rounded-xl" />
          </ParallaxItem>
        ))}
      </ParallaxScroll>

      <ScrollProgress bottom={32} />
    </>
  )
}
