import { useEffect, useRef } from 'react';
import gsap from 'gsap';
const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const mainProductRef = useRef(null);
  const floatRefs = useRef([]);
  const TOTAL_TEMPE = 2;
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo(mainProductRef.current,
      { scale: 0, rotation: -360, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: 'back.out(1.2)' }
    );
    tl.to(mainProductRef.current, {
      scale: 1.5, opacity: 0, duration: 0.2, ease: 'power2.in'
    });
    tl.addLabel("shatter");
    tl.fromTo(
      textRef.current.children,
      { y: 150, opacity: 0, rotationX: 45 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.15, transformOrigin: 'top center' },
      "shatter"
    );
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      tl.fromTo(floatRefs.current,
        { scale: 0, opacity: 0, x: 0, y: 0, force3D: true },
        {
          scale: 1,
          opacity: 1,
          x: (i) => ['-38vw', '38vw'][i],
          y: (i) => ['-8vh', '-8vh'][i],
          rotation: (i) => [-12, 12][i],
          duration: 0.8,
          ease: 'back.out(1.5)',
          force3D: true
        },
        "shatter"
      );
      floatRefs.current.forEach((el, index) => {
        gsap.to(el, {
          y: '+=20',
          rotation: '+=5',
          duration: 2.5 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          force3D: true,
          z: 0.1
        });
      });
    }
  }, []);
  const TEMPE_IMG = "/tempe-atos.webp";
  return (
    <section ref={heroRef} className="relative w-full h-[110vh] flex items-center justify-center bg-petos-cream overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video-petos.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-petos-cream/60"></div>
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-petos-orange rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-petos-yellow rounded-full blur-[80px] opacity-40 translate-y-1/4 -translate-x-1/4"></div>
      <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center w-full h-full">
        <img
          ref={mainProductRef}
          src={TEMPE_IMG}
          alt="Intro Petos"
          className="absolute w-[60vw] md:w-[30vw] max-w-lg aspect-square object-cover will-change-transform"
          loading="eager"
        />
        {[...Array(TOTAL_TEMPE)].map((_, i) => {
          return (
            <img
              key={i}
              ref={(el) => (floatRefs.current[i] = el)}
              src={TEMPE_IMG}
              alt={`Petos Float ${i}`}
              className={`hero-product hero-product-${i} absolute aspect-square object-cover rounded-4xl md:rounded-[3rem] will-change-transform w-[28vw] md:w-[22vw] max-w-[20rem] z-10 hidden md:block`}
              loading="eager"
            />
          );
        })}
      </div>
      <div className="relative z-50 container mx-auto px-6 flex flex-col items-center justify-center text-center h-screen pointer-events-none">
        <div ref={textRef} className="flex flex-col items-center w-full perspective-1000 pointer-events-auto px-4 -mt-16 md:-mt-24">
          <span className="text-xs md:text-sm text-petos-orange font-bold tracking-[0.4em] uppercase mb-4 drop-shadow-sm">
            Gurihnya Kebangetan
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-petos-dark-brown leading-none tracking-tighter mb-6 drop-shadow-lg">
            TEMPE ATOS
          </h1>
          <p className="text-sm md:text-base text-petos-brown max-w-sm mx-auto font-medium leading-relaxed opacity-90">
            Renyah, gurih, bikin nagih. Teman ngemil pas di setiap momen.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
