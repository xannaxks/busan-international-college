import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import index from '../components/StickySection';

const Page = () => (
  <div className={`overflow-hidden`}>
    {/* <Navbar />*/}
    <Hero />
      <About />
      {/*<div className="gradient-03 z-0" />*/}
      <Explore />

      <GetStarted />
      {/*<div className="gradient-04 z-0" />*/}
      <WhatsNew />
    <World />
      <Insights />
      {/*<div className="gradient-04 z-0" />*/}
      <Feedback />
      <index />
  </div>
);

export default Page;
