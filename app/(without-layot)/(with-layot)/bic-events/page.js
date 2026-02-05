import { Hero } from '../../../../sections';
import Intro from '../../../../content/bic-news/intro.mdx';
// eslint-disable-next-line import/no-duplicates
import { Insights } from '../../../../sections';

const imageUrl = '/bic-news.webp';

const Page = () => (
  <div className="w-full items-center justify-center">
    <Hero text1="BIC" text2="Recent" text3="Events" imageSrc={imageUrl} />
    {/*<div className="prose">*/}
    {/*  <Intro />*/}
    {/*</div>*/}
    <Insights header="| Events  " main="BIC recent events" />
  </div>

);
export default Page;
