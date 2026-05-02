import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonials } from '../data/testimonials';

gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const fixedRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const fixed = fixedRef.current;
    const strip = stripRef.current;
    if (!section || !fixed || !strip) return;

    // Calculate how far the strip needs to scroll
    const getDistance = () => strip.scrollWidth - window.innerWidth + 200;

    // Make the section tall enough for the horizontal scroll
    const updateHeight = () => {
      const distance = getDistance();
      section.style.height = `${distance + window.innerHeight}px`;
    };
    updateHeight();

    const ctx = gsap.context(() => {
      // Manually control fixed positioning via ScrollTrigger callbacks
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => { fixed.style.position = 'fixed'; fixed.style.top = '0'; },
        onLeave: () => { fixed.style.position = 'absolute'; fixed.style.top = 'auto'; fixed.style.bottom = '0'; },
        onEnterBack: () => { fixed.style.position = 'fixed'; fixed.style.top = '0'; },
        onLeaveBack: () => { fixed.style.position = 'absolute'; fixed.style.top = '0'; fixed.style.bottom = 'auto'; },
      });

      // Animate the strip horizontally based on scroll progress
      gsap.to(strip, {
        x: () => -getDistance(),
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
          invalidateOnRefresh: true,
        }
      });
    });

    // Handle resize
    const onResize = () => {
      updateHeight();
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);

    // Delayed refresh for Lenis
    const timer = setTimeout(() => ScrollTrigger.refresh(true), 800);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
      ctx.revert();
      fixed.style.position = '';
      fixed.style.top = '';
      fixed.style.bottom = '';
    };
  }, []);

  // Card visual styles
  const cardStyles = [
    { rotation: -8, yOffset: 15 },
    { rotation: -3, yOffset: 5 },
    { rotation: 2, yOffset: 0 },
    { rotation: -5, yOffset: 10 },
    { rotation: 6, yOffset: 18 },
    { rotation: -2, yOffset: 8 },
    { rotation: 4, yOffset: 12 },
  ];

  return (
    <section ref={sectionRef} className="relative z-30 bg-[#FAF3E0]">
      {/* This div gets manually fixed/absolute positioned via JS */}
      <div ref={fixedRef} className="left-0 w-full h-screen flex flex-col justify-center overflow-hidden" style={{ position: 'absolute', top: 0 }}>

        <div className="max-w-[90rem] mx-auto px-6 w-full">
          {/* Title */}
          <div className="text-right mb-10 md:mb-16">
            <h2 className="text-[12vw] md:text-[8vw] font-black text-[#4A2511] leading-[0.85] tracking-tighter uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
              KATA
            </h2>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#E86A10] transform -skew-x-12 -rotate-1"></div>
              <h2 className="relative text-[10vw] md:text-[7vw] font-black text-[#FAF3E0] leading-none tracking-tighter uppercase px-4 md:px-6 py-1 md:py-2" style={{ fontFamily: 'Impact, sans-serif' }}>
                MEREKA
              </h2>
            </div>
            <p className="text-[#6E4228] text-sm md:text-xl font-bold max-w-lg ml-auto mt-3 md:mt-4">
              Ribuan bungkus ludes tiap minggu. Buktikan sendiri kerenyahannya!
            </p>
          </div>
        </div>

        {/* Card strip */}
        <div 
          ref={stripRef}
          className="flex gap-4 md:gap-7 items-center w-max pl-4 md:pl-12 pr-12"
        >
          {testimonials.map((testi, index) => {
            const style = cardStyles[index % cardStyles.length];
            return (
              <div
                key={testi.id}
                className="w-[240px] md:w-[300px] flex-shrink-0 bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-lg shadow-[#4A2511]/10 border-2 border-[#E8DCC8] flex flex-col will-change-transform"
                style={{ 
                  transform: `rotate(${style.rotation}deg) translateY(${style.yOffset}px)`,
                }}
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-xl object-cover border-2 border-[#E86A10]"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-[#2B1408] font-black text-xs md:text-sm uppercase tracking-wide">{testi.name}</h4>
                    <p className="text-[#E86A10] text-[10px] md:text-xs font-bold">{testi.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-2 md:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i < testi.rating ? 'fill-[#E86A10] text-[#E86A10]' : 'text-[#E8DCC8]'}`} 
                    />
                  ))}
                </div>

                <p className="text-[#4A2511] text-xs md:text-base font-semibold leading-relaxed">
                  "{testi.text}"
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
