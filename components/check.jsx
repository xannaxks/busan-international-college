'use client';

import Image from 'next/image';

export default function StickyImageScroll() {
  const images = [
    '/ai-and-computer-engineering-white.svg',
    '/global-korean-studies-white.svg',
    '/global-business-white.svg',
  ];
  const text = [
    'ai and computer engineering white',
    'global korean studies white',
    'global business white',
  ];
  return (
    <section className="w-full bg-slate-950 text-white">
      <div className="grid grid-cols-2 gap-4 px-8">
        {/* Left column: sticky images */}
        <div className="grid gap-8">
          {images.map((src, idx) => (
            <figure key={idx} className="sticky top-0 h-screen grid place-content-center">
              <Image
                src={src}
                alt={`Sticky image ${idx + 1}`}
                width={384} // 96 * 4 (Tailwind w-96)
                height={384}
                className="object-cover rounded-md transition-all duration-300"
                priority={idx === 0} // load first image quickly
              />
            </figure>
          ))}
        </div>

        {/* Right column: scrolling text */}
        <div className="sticky top-0 h-screen flex items-center justify-end">
          <div className="text-right max-w-md">
            {text.split('\n').map((line, idx) => (
              <p key={idx} className="text-4xl font-medium leading-snug mb-4">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
