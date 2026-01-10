'use client';

import { useEffect, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { logoTwitter, logoInstagram, logoFacebook } from 'ionicons/icons';
import './Parallax.css'; // Move your CSS here

const layerImages = [
  'https://raw.githubusercontent.com/misalagp/imgs/53ece8c56d462838e143383adc1a3078c1960e4d/1.svg',
  'https://raw.githubusercontent.com/misalagp/imgs/53ece8c56d462838e143383adc1a3078c1960e4d/2.svg',
  'https://raw.githubusercontent.com/misalagp/imgs/53ece8c56d462838e143383adc1a3078c1960e4d/3.svg',
  'https://raw.githubusercontent.com/misalagp/imgs/53ece8c56d462838e143383adc1a3078c1960e4d/4.svg',
  'https://raw.githubusercontent.com/misalagp/imgs/53ece8c56d462838e143383adc1a3078c1960e4d/4.svg',
  'https://gist.githubusercontent.com/mondenoir/5395b6e7d9445c3a0fc82e6ece97268c/raw/bca5c0c6397e38d79b5af9e88f78f0aa7b515b94/img-1.svg',
];

export default function ParallaxPage() {
  const layersRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      layersRef.current.forEach((layer, i) => {
        if (layer) {
          const index = layersRef.current.length - i;
          layer.style.transform = `translateY(${(i * 0.1) * y}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <ul className="parallax">
        {layerImages.map((src, idx) => (
          <li
            key={idx}
            className="layer"
            ref={(el) => (layersRef.current[idx] = el)}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </ul>

      <article className="content">
        <section className="info">
          <h1>What is Lorem Ipsum?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...
          </p>
        </section>

        <footer>
          <IonIcon icon={logoTwitter} />
          <IonIcon icon={logoInstagram} />
          <IonIcon icon={logoFacebook} />
        </footer>
      </article>
    </main>
  );
}
