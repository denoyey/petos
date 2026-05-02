import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const USPSection = () => {
  const sectionRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    linesRef.current.forEach((block) => {
      if (!block) return;

      // Animate each child element (h2, div, p) individually
      const children = block.children;

      gsap.fromTo(children,
        { 
          y: 100, 
          opacity: 0, 
          scale: 0.85,
          rotationX: 30,
        },
        {
          y: 0, 
          opacity: 1, 
          scale: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          force3D: true,
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
          }
        }
      );

      // Special animation for the skewed highlight boxes
      const skewedBoxes = block.querySelectorAll('.skew-box');
      gsap.fromTo(skewedBoxes,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 75%',
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-[#4A2511] relative z-20 rounded-t-[4rem] md:rounded-t-[8rem] mt-[-4rem] overflow-hidden">

      <div className="container mx-auto px-6 md:px-16 relative z-10 flex flex-col items-center gap-32 md:gap-48">

        {/* === BLOCK 1: Renyah === */}
        <div ref={(el) => (linesRef.current[0] = el)} className="w-full text-center perspective-1000">
          <h2 className="text-[12vw] md:text-[8vw] font-black text-[#FAF3E0] leading-[0.85] tracking-tighter uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
            RENYAHNYA
          </h2>
          <div className="relative inline-block mt-2 mb-8">
            <div className="skew-box absolute inset-0 bg-[#E86A10] transform -skew-x-12 -rotate-1"></div>
            <span className="relative text-[10vw] md:text-[7vw] font-black text-[#FAF3E0] leading-none tracking-tighter uppercase px-6 py-2 block" style={{ fontFamily: 'Impact, sans-serif' }}>
              DUA KALI GORENG
            </span>
          </div>
          <p className="text-[#FFE1A8] text-lg md:text-2xl font-medium max-w-2xl mx-auto mt-6">
            Teknik penggorengan ganda memastikan kematangan merata hingga ke dalam. Nyaring bunyinya, renyah sampai gigitan terakhir.
          </p>
        </div>

        {/* === BLOCK 2: Tahan Lama === */}
        <div ref={(el) => (linesRef.current[1] = el)} className="w-full text-center perspective-1000">
          <h2 className="text-[12vw] md:text-[8vw] font-black text-[#FAF3E0] leading-[0.85] tracking-tighter uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
            GAK BAKAL
          </h2>
          <h2 className="text-[12vw] md:text-[8vw] font-black text-[#FAF3E0] leading-[0.85] tracking-tighter uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
            MELEMPEM
          </h2>
          <div className="relative inline-block mt-2 mb-8">
            <div className="skew-box absolute inset-0 bg-[#E86A10] transform skew-x-6 rotate-1"></div>
            <span className="relative text-[8vw] md:text-[5vw] font-black text-[#FAF3E0] leading-none tracking-tighter uppercase px-6 py-2 block" style={{ fontFamily: 'Impact, sans-serif' }}>
              TAHAN BERBULAN-BULAN
            </span>
          </div>
          <p className="text-[#FFE1A8] text-lg md:text-2xl font-medium max-w-2xl mx-auto mt-6">
            Kemasan kedap udara premium menjaga kerenyahan Petos. Beli banyak, stok aman, rasa tetap juara.
          </p>
        </div>

        {/* === BLOCK 3: Bumbu === */}
        <div ref={(el) => (linesRef.current[2] = el)} className="w-full text-center perspective-1000">
          <h2 className="text-[12vw] md:text-[8vw] font-black text-[#FAF3E0] leading-[0.85] tracking-tighter uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
            SETIAP GIGITAN
          </h2>
          <div className="relative inline-block mt-2 mb-4">
            <div className="skew-box absolute inset-0 bg-[#E86A10] transform -skew-x-6 -rotate-1"></div>
            <span className="relative text-[10vw] md:text-[7vw] font-black text-[#FAF3E0] leading-none tracking-tighter uppercase px-6 py-2 block" style={{ fontFamily: 'Impact, sans-serif' }}>
              PENUH REMPAH
            </span>
          </div>
          <h2 className="text-[9vw] md:text-[5vw] font-black text-[#E86A10] leading-[0.85] tracking-tighter uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
            RAHASIA NUSANTARA
          </h2>
          <p className="text-[#FFE1A8] text-lg md:text-2xl font-medium max-w-2xl mx-auto mt-8">
            Diolah dengan racikan rempah rahasia Nusantara yang meresap sempurna ke setiap helai tempe.
          </p>
        </div>

      </div>
    </section>
  );
};

export default USPSection;
