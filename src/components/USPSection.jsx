import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const USPSection = () => {
  const sectionRef = useRef(null);
  const fixedRef = useRef(null);
  const blocksRef = useRef([]);
  useEffect(() => {
    const section = sectionRef.current;
    const fixed = fixedRef.current;
    if (!section || !fixed) return;
    const isMobile = window.innerWidth < 768;
    section.style.height = isMobile ? `${window.innerHeight * 3}px` : `${window.innerHeight * 5}px`;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => { fixed.style.position = 'fixed'; fixed.style.top = '0'; },
        onLeave: () => { fixed.style.position = 'absolute'; fixed.style.top = 'auto'; fixed.style.bottom = '0'; },
        onEnterBack: () => { fixed.style.position = 'fixed'; fixed.style.top = '0'; },
        onLeaveBack: () => { fixed.style.position = 'absolute'; fixed.style.top = '0'; fixed.style.bottom = 'auto'; },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        }
      });
      const blocks = blocksRef.current.filter(Boolean);
      const t0 = blocks[0]?.querySelector('.usp-text');
      const s0 = blocks[0]?.querySelector('.skew-box');
      if (t0) {
        tl.fromTo(t0, { y: 40, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.08, ease: 'power3.out' }, 0.00);
        if (s0) tl.fromTo(s0, { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 0.06, ease: 'power3.out' }, 0.04);
        tl.to(t0, { y: -30, opacity: 0, scale: 0.97, duration: 0.08, ease: 'power3.in' }, 0.18);
      }
      const t1 = blocks[1]?.querySelector('.usp-text');
      const s1 = blocks[1]?.querySelector('.skew-box');
      const strike = blocks[1]?.querySelector('.b-strike');
      if (t1) {
        tl.fromTo(t1, { y: 40, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.08, ease: 'power3.out' }, 0.36);
        if (s1) tl.fromTo(s1, { scaleX: 0, transformOrigin: 'right' }, { scaleX: 1, duration: 0.06, ease: 'power3.out' }, 0.40);
        if (strike) tl.fromTo(strike, { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 0.06, ease: 'power3.out' }, 0.42);
        tl.to(t1, { y: -30, opacity: 0, scale: 0.97, duration: 0.08, ease: 'power3.in' }, 0.54);
      }
      const t2 = blocks[2]?.querySelector('.usp-text');
      const s2 = blocks[2]?.querySelector('.skew-box');
      if (t2) {
        tl.fromTo(t2, { y: 40, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.08, ease: 'power3.out' }, 0.72);
        if (s2) tl.fromTo(s2, { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 0.06, ease: 'power3.out' }, 0.76);
        tl.to(t2, { y: -20, opacity: 0, scale: 0.97, duration: 0.08, ease: 'power3.in' }, 0.90);
      }
      tl.to({}, { duration: 0.02 }, 0.98);
    }, section);
    const onResize = () => {
      const isMobile = window.innerWidth < 768;
      section.style.height = isMobile ? `${window.innerHeight * 3}px` : `${window.innerHeight * 5}px`;
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);
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
  return (
    <section ref={sectionRef} className="usp-section relative z-20 bg-petos-brown rounded-t-[4rem] md:rounded-t-[8rem] -mt-16 md:-mt-32">
      <div
        ref={fixedRef}
        className="left-0 w-full h-screen flex items-center overflow-hidden z-30"
        style={{ position: 'absolute', top: 0 }}
      >
        <div ref={(el) => (blocksRef.current[0] = el)} className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-16 flex items-center">
            <div className="usp-text w-full md:w-[45%] text-center md:text-left opacity-0 mt-[30vh] md:mt-0">
              <h2 className="text-[12vw] md:text-[6vw] font-bold leading-[0.85] tracking-tighter uppercase [-webkit-text-stroke:2px_var(--color-petos-cream)]" style={{ fontFamily: 'Impact, sans-serif', color: 'transparent' }}>
                RENYAHNYA
              </h2>
              <div className="relative inline-block mt-2 mb-3 md:mb-6">
                <div className="skew-box absolute inset-0 bg-petos-orange transform -skew-x-12 -rotate-1"></div>
                <span className="relative text-[8vw] md:text-[4.5vw] font-bold text-petos-cream leading-none tracking-tighter uppercase px-3 md:px-6 py-1 md:py-2 block" style={{ fontFamily: 'Impact, sans-serif' }}>
                  DUA KALI GORENG
                </span>
              </div>
              <p className="text-petos-light-yellow text-xs md:text-xl font-medium max-w-md mx-auto md:mx-0 mt-3 md:mt-6 leading-relaxed">
                Teknik penggorengan ganda memastikan kematangan merata hingga ke dalam. Nyaring bunyinya, renyah sampai gigitan terakhir.
              </p>
            </div>
          </div>
        </div>
        <div ref={(el) => (blocksRef.current[1] = el)} className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-16 flex items-center justify-center md:justify-end">
            <div className="usp-text w-full md:w-[45%] text-center md:text-right opacity-0 mt-[30vh] md:mt-0">
              <h2 className="text-[12vw] md:text-[6vw] font-bold text-petos-cream leading-[0.85] tracking-tighter uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                GAK BAKAL
              </h2>
              <h2 className="text-[12vw] md:text-[6vw] font-bold text-petos-cream/30 leading-[0.85] tracking-tighter uppercase relative inline-block" style={{ fontFamily: 'Impact, sans-serif' }}>
                MELEMPEM
                <div className="b-strike absolute left-0 top-1/2 -translate-y-1/2 w-full h-[4px] md:h-[6px] bg-petos-orange -rotate-2"></div>
              </h2>
              <div className="relative inline-block mt-2 mb-3 md:mb-6">
                <div className="skew-box absolute inset-0 bg-petos-orange transform skew-x-6 rotate-1"></div>
                <span className="relative text-[5.5vw] md:text-[3.5vw] font-bold text-petos-cream leading-none tracking-tighter uppercase px-3 md:px-6 py-1 md:py-2 block" style={{ fontFamily: 'Impact, sans-serif' }}>
                  TAHAN BERBULAN-BULAN
                </span>
              </div>
              <p className="text-petos-light-yellow text-xs md:text-xl font-medium max-w-md mx-auto md:ml-auto mt-3 md:mt-6 leading-relaxed">
                Kemasan kedap udara premium menjaga kerenyahan Petos. Beli banyak, stok aman, rasa tetap juara.
              </p>
            </div>
          </div>
        </div>
        <div ref={(el) => (blocksRef.current[2] = el)} className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-16 flex items-center">
            <div className="usp-text w-full md:w-[45%] text-center md:text-left opacity-0 mt-[30vh] md:mt-0">
              <h2 className="text-[12vw] md:text-[6vw] font-bold leading-[0.85] tracking-tighter uppercase [-webkit-text-stroke:2px_var(--color-petos-cream)]" style={{ fontFamily: 'Impact, sans-serif', color: 'transparent' }}>
                SETIAP GIGITAN
              </h2>
              <div className="relative inline-block mt-2 mb-2 md:mb-3">
                <div className="skew-box absolute inset-0 bg-petos-orange transform -skew-x-6 -rotate-1"></div>
                <span className="relative text-[8vw] md:text-[4.5vw] font-bold text-petos-cream leading-none tracking-tighter uppercase px-3 md:px-6 py-1 md:py-2 block" style={{ fontFamily: 'Impact, sans-serif' }}>
                  PENUH REMPAH
                </span>
              </div>
              <p className="text-petos-light-yellow text-xs md:text-xl font-medium max-w-md mx-auto md:mx-0 mt-3 md:mt-6 leading-relaxed">
                Diolah dengan racikan rempah rahasia Nusantara yang meresap sempurna ke setiap helai tempe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default USPSection;
