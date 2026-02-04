'use client';

import Image from 'next/image';

// const images = [
//   'https://images.unsplash.com/photo-1603320284370-d33c0e5ff086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDYxNDB8&ixlib=rb-4.1.0&q=80&w=800',
//   'https://images.unsplash.com/photo-1633871771924-380d6123659b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDU3ODl8&ixlib=rb-4.1.0&q=80&w=800',
//   'https://images.unsplash.com/photo-1571928002685-15aeba39a2d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDYxNjV8&ixlib=rb-4.1.0&q=80&w=800',
//   'https://images.unsplash.com/photo-1605643362116-ccf4302f9453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDYxNzV8&ixlib=rb-4.1.0&q=80&w=800',
//   'https://images.unsplash.com/photo-1634473117419-92371b2bf457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDU5MTF8&ixlib=rb-4.1.0&q=80&w=800',
//   'https://images.unsplash.com/photo-1697375805257-a5220aa18c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDU5NzB8&ixlib=rb-4.1.0&q=80&w=800',
//   'https://images.unsplash.com/photo-1698831695020-2e94ebfdfed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDU5Nzl8&ixlib=rb-4.1.0&q=80&w=800',
//   'https://images.unsplash.com/photo-1577222960172-18c61acf6791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyMDYyODJ8&ixlib=rb-4.1.0&q=80&w=800',
// ];

// eslint-disable-next-line react/function-component-definition
export default function Rotating3DCarousel({ images }) {
  const total = images.length;
  const step = 360 / total;

  return (
    <section className="min-h-screen w-full text-[#ececec] flex items-center justify-center overflow-hidden [perspective:1500px]">
      {/* container */}
      <div className="relative aspect-square w-[220px] sm:w-[280px] md:w-[340px] lg:w-[420px] [transform-style:preserve-3d] translate-z-[-800px]">
        {/* inner (rotating) */}
        <div className="h-full w-full [transform-style:preserve-3d] animate-carouselSpin">
          {images.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 m-auto h-full aspect-[9/16] [transform-style:preserve-3d] [backface-visibility:visible]"
              style={{
                transform: `rotateY(${(i + 1) * step}deg) translateX(150%)`,
              }}
            >
              <div className="relative h-full w-full [transform:rotateY(90deg)]">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="rounded-[36px] object-cover"
                  style={{ filter: 'grayscale(0.2)' }}
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 420px"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* keyframes */}
      <style jsx>{`
        @keyframes carouselSpin {
          0% {
            transform: rotateY(-50deg) rotateX(12deg) rotateY(0deg);
          }
          100% {
            transform: rotateY(-50deg) rotateX(12deg) rotateY(-360deg);
          }
        }
      `}</style>

      {/* Tailwind animation utility */}
      <style jsx global>{`
        .animate-carouselSpin {
          animation: carouselSpin 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
