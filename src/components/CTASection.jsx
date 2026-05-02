import React, { useEffect, useRef } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const CTASection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Text Reveal Animation
    gsap.fromTo(textRef.current,
      { scale: 0.8, opacity: 0, y: 60 },
      {
        scale: 1, opacity: 1, y: 0, duration: 1.2, ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-48 bg-[#F5A623] relative z-40 rounded-t-[4rem] md:rounded-t-[8rem] mt-[-4rem] overflow-hidden flex items-center justify-center min-h-[60vh] md:min-h-[80vh]">

      {/* Massive Background Text Pattern */}
      <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-10 pointer-events-none overflow-hidden text-[#2B1408] font-black text-5xl md:text-9xl leading-none break-all select-none">
        PETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETO
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div ref={textRef} className="max-w-5xl mx-auto flex flex-col items-center">

          <h2 className="text-4xl md:text-[8rem] font-black text-[#2B1408] mb-4 md:mb-8 tracking-tighter uppercase leading-[0.85]">
            SUDAH <span className="text-[#FAF3E0] block mt-2 md:mt-4">NGILER?</span>
          </h2>
          <p className="text-[#4A2511] text-base md:text-3xl font-bold leading-relaxed max-w-3xl mx-auto mb-8 md:mb-16">
            JANGAN DITAHAN. BUNGKUS PETOS KAMU SEKARANG JUGA SEBELUM KEHABISAN!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
            <a
              href="https://instagram.com/yourpetos"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 md:px-12 md:py-6 bg-[#2B1408] text-[#FAF3E0] font-black text-base md:text-2xl uppercase tracking-wider rounded-full hover:bg-[#1A0B04] transition-all shadow-2xl hover:scale-105 border-3 md:border-4 border-[#2B1408]"
            >
              <InstagramIcon className="w-6 h-6 md:w-8 md:h-8 text-[#E86A10] group-hover:rotate-12 transition-transform" />
              DM INSTA
              <ArrowRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-transform" />
            </a>

            <a
              href="https://tiktok.com/@yourpetos"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 md:px-12 md:py-6 bg-[#FAF3E0] text-[#2B1408] font-black text-base md:text-2xl uppercase tracking-wider rounded-full hover:bg-white transition-all shadow-2xl hover:scale-105 border-3 md:border-4 border-[#2B1408]"
            >
              <ShoppingBag className="w-6 h-6 md:w-8 md:h-8 text-[#E86A10] group-hover:rotate-12 transition-transform" />
              TIKTOK
              <ArrowRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
