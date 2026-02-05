'use client';

import * as React from 'react';
// import { insights } from '../constants';
import Intro from '../../../../../content/bic-news/intro.mdx'

const Page = ({ params }) => {
  // asynchronous access of `params.id`.
  const { slug } = React.use(params);

  return (
    <div className="w-full relative z-[150] mt-16">
      <div className="
        prose
        mx-auto
        prose-p:text-white
        prose-h1:text-white
        prose-strong:text-white
        prose-a:text-white
        prose-a:underline
         bg-white/10
  backdrop-blur-xl
  border border-white/20
  rounded-2xl
  shadow-lg
  mx-5 lg:mx-auto
  px-5 lg:px-24
  py-12 lg:py-16
    ">
        <Intro />
      </div>
    </div>
  )
};

export default Page;
