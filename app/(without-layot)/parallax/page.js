'use client';

import { motion } from 'motion/react';

function Image({ id }) {
  return (
    <section className="img-container">
      <div>
        <img src={`/photos/cityscape/${id}.jpg`} alt="Cityscape" />
      </div>
      <motion.h2>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Parallax() {
  return (
    <div className="example">
      {[1, 2, 3, 4, 5].map((id) => (
        <Image key={id} id={id} />
      ))}

      <StyleSheet />
    </div>
  );
}

const StyleSheet = () => (
  <style>{`
    .example {
      height: 100vh;
      overflow-y: scroll;
      scroll-snap-type: y mandatory;

      /* hide scrollbar */
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .example::-webkit-scrollbar {
      display: none;
    }

    .img-container {
      height: 100vh;
      scroll-snap-align: start;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .img-container > div {
      width: 300px;
      height: 400px;
      background: #f5f5f5;
      overflow: hidden;
      margin: 20px;
    }

    .img-container img {
      width: 100%;
      height: 100%;
    }

    .img-container h2 {
      position: absolute;
      top: 50%;
      left: calc(50% + 120px);
      transform: translateY(-50%);
      color: #8df0cc;
      font-family: "Azeret Mono", monospace;
      font-size: 50px;
      font-weight: 700;
      letter-spacing: -3px;
    }
  `}</style>
);
