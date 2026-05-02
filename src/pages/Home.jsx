import React, { Suspense, lazy, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/HeroSection';
import USPSection from '../components/USPSection';

gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = lazy(() => import('../components/TestimonialSection'));
const CTASection = lazy(() => import('../components/CTASection'));

const Home = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Logo entrance
    gsap.fromTo(logoRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="w-full bg-[#FAF3E0] text-[#4A2511] font-sans relative overflow-x-clip">

      {/* FIXED LOGO */}
      <div ref={logoRef} className="fixed top-6 left-6 md:top-10 md:left-10 z-100 pointer-events-none">
        <img src="/logo-tempe-atos.webp" alt="logo-petos" className="object-contain w-10 h-10 md:w-12 md:h-12 rounded-full shadow-sm border border-2 border-white" />
      </div>

      <HeroSection />
      <USPSection />

      <Suspense fallback={<div className="h-48 flex items-center justify-center text-[#E86A10] font-bold text-sm">Menyiapkan kerenyahan...</div>}>
        <TestimonialSection />
        <CTASection />
      </Suspense>
    </div>
  );
};

export default Home;