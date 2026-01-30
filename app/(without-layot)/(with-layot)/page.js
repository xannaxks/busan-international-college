import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../../../sections';

const Page = () => (
  <div className="overflow-hidden">
    {/* <Navbar /> */}
    <Hero />
    <About />
    {/* <div className="gradient-03 z-0" /> */}
    <Explore />

    <GetStarted />
    {/* <div className="gradient-04 z-0" /> */}
    <WhatsNew />
    <World />
    <Insights />
    {/* <div className="gradient-04 z-0" /> */}
    <Feedback />
  </div>
);

export default Page;
