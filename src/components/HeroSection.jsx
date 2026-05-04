import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const mainProductRef = useRef(null);

  // ==========================================
  // 🔧 JUMLAH TEMPE: Ubah angka di Array(8) untuk menambah/kurangi jumlah tempe
  // ==========================================
  const floatRefs = useRef([]);
  const TOTAL_TEMPE = 2; // <-- Ganti angka ini untuk menambah tempe

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // 1. Main Product Spin & Grow
    tl.fromTo(mainProductRef.current,
      { scale: 0, rotation: -360, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: 'back.out(1.2)' }
    );

    // 2. "Pecah" (Shatter) Effect
    tl.to(mainProductRef.current, {
      scale: 1.5, opacity: 0, duration: 0.2, ease: 'power2.in'
    });

    // --- The "Shatter" Moment ---
    // 3. Text Reveal AND 6 New Products pop out SIMULTANEOUSLY
    tl.addLabel("shatter");

    tl.fromTo(
      textRef.current.children,
      { y: 150, opacity: 0, rotationX: 45 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.15, transformOrigin: 'top center' },
      "shatter"
    );

    // Floating products — DESKTOP ONLY
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      tl.fromTo(floatRefs.current,
        { scale: 0, opacity: 0, x: 0, y: 0, force3D: true },
        {
          scale: 1,
          opacity: 1,
          x: (i) => ['-38vw', '38vw'][i],
          y: (i) => ['0vh', '0vh'][i],
          rotation: (i) => [-12, 12][i],
          duration: 0.8,
          ease: 'back.out(1.5)',
          force3D: true
        },
        "shatter"
      );

      // Continuous Floating (Desktop only)
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
    <section ref={heroRef} className="relative w-full h-[110vh] flex items-center justify-center bg-[#FAF3E0] overflow-hidden">
      {/* Background gradient blobs (static - no will-change needed) */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#E86A10] rounded-full blur-[100px] opacity-15 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#F5A623] rounded-full blur-[80px] opacity-20 translate-y-1/4 -translate-x-1/4"></div>

      {/* ABSOLUTE FLOATING IMAGES (Stays in HeroSection) */}
      <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center w-full h-full">
        {/* Main intro product (disappears after shatter) */}
        <img
          ref={mainProductRef}
          src={TEMPE_IMG}
          alt="Intro Petos"
          className="absolute w-[60vw] md:w-[30vw] max-w-lg aspect-square object-cover will-change-transform"
          loading="eager"
        />

        {/* ==========================================
            🔧 UKURAN & BLUR TEMPE:
            - Index 0 & 1 = Besar, tajam (di samping teks)
            - Index 2-7   = Kecil, blur (dekorasi atas/bawah)
            - Ubah sizeClass untuk ukuran
            - Ubah blurClass untuk efek blur
           ========================================== */}
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

      {/* Massive Typography - Positioned in FRONT of the floating image (z-50) */}
      <div className="relative z-50 container mx-auto px-6 flex flex-col items-center justify-center text-center h-screen pointer-events-none">
        <div ref={textRef} className="flex flex-col items-center w-full perspective-1000 pointer-events-auto">

          {/* Top Line */}
          <h1 className="text-[8vw] md:text-[5vw] font-black text-[#4A2511] leading-[0.85] tracking-tighter uppercase whitespace-nowrap mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
            GURIHNYA KEBANGETAN
          </h1>

          {/* Bottom Line in Skewed Box */}
          <div className="relative inline-block mb-12 mt-2">
            <div className="absolute inset-0 bg-[#A66C37] transform -skew-x-12 -rotate-2"></div>
            <h2 className="relative text-[6vw] md:text-[4vw] font-black text-[#FAF3E0] leading-none tracking-tighter uppercase px-6 py-2" style={{ fontFamily: 'Impact, sans-serif' }}>
              TEMPE ATOS
            </h2>
          </div>

          <p className="text-sm md:text-lg text-[#6E4228] mb-8 font-bold leading-relaxed max-w-2xl mx-auto bg-[#FAF3E0]/90 px-6 py-2 rounded-2xl">
            Jalani hari lebih semangat dengan PETOS: Usir rasa bosan dan nikmati setiap gigitan renyahnya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-3 bg-[#E86A10] cursor-pointer text-[#FAF3E0] font-bold text-sm md:text-lg rounded-full transition-all hover:bg-[#D45A00] hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-wide">
                Bungkus Sekarang <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
