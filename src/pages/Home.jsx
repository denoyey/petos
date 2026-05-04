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
  const floatingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(logoRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    const setupTimer = setTimeout(() => {
      const heroProduct0 = document.querySelector('.hero-product-0');
      const heroProduct1 = document.querySelector('.hero-product-1');
      const floating = floatingRef.current;

      if (!heroProduct0 || !heroProduct1 || !floating) return;

      // Hero products disappear
      gsap.to(heroProduct0, {
        x: 0, y: 0, rotation: 0, scale: 0.4, opacity: 0,
        scrollTrigger: { trigger: '.usp-section', start: 'top 80%', end: 'top 20%', scrub: 0.5 }
      });
      gsap.to(heroProduct1, {
        x: 0, y: 0, rotation: 0, scale: 0.4, opacity: 0,
        scrollTrigger: { trigger: '.usp-section', start: 'top 80%', end: 'top 20%', scrub: 0.5 }
      });

      // === USE matchMedia for responsive product animations ===
      // Always center the floating product — this persists through all GSAP transforms
      gsap.set(floating, { xPercent: -50, yPercent: -50 });
      const mm = gsap.matchMedia();

      // ——— MOBILE (< 768px) ———
      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(floating,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1, scale: 1,
            scrollTrigger: { trigger: '.usp-section', start: 'top 20%', end: 'top top', scrub: 0.5 }
          }
        );

        const productTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.usp-section',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          }
        });

        // Mobile: centered above text, gentle wobble only
        productTl.to(floating, { x: '3vw', y: '-15vh', xPercent: -50, yPercent: -50, rotation: -3, duration: 0.10 }, 0.00);
        productTl.to(floating, { rotation: 3, duration: 0.22, ease: 'sine.inOut' }, 0.22);
        productTl.to(floating, { rotation: -2, duration: 0.22, ease: 'sine.inOut' }, 0.56);
        // Stay in place, just fade out
        productTl.to(floating, { opacity: 0, duration: 0.10, ease: 'power3.in' }, 0.90);
      });

      // ——— DESKTOP (>= 768px) ———
      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(floating,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1, scale: 1,
            scrollTrigger: { trigger: '.usp-section', start: 'top 20%', end: 'top top', scrub: 0.5 }
          }
        );

        const productTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.usp-section',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
          }
        });

        // Block 0: product RIGHT (text left)
        productTl.to(floating, { x: '25vw', y: '0vh', xPercent: -50, yPercent: -50, rotation: -3, duration: 0.10, ease: 'power3.out' }, 0.00);
        // Hold right
        productTl.to(floating, { x: '25vw', rotation: -3, duration: 0.12 }, 0.10);
        // Move to LEFT (text right appears)
        productTl.to(floating, { x: '-25vw', rotation: 3, duration: 0.12, ease: 'sine.inOut' }, 0.22);
        // Hold left
        productTl.to(floating, { x: '-25vw', rotation: 3, duration: 0.22 }, 0.34);
        // Move to RIGHT (text left appears)
        productTl.to(floating, { x: '25vw', rotation: -3, duration: 0.12, ease: 'sine.inOut' }, 0.56);
        // Hold right — product STAYS HERE
        productTl.to(floating, { x: '25vw', rotation: -3, duration: 0.22 }, 0.68);
        // Just fade out — NO movement, stays at x: 25vw
        productTl.to(floating, { opacity: 0, duration: 0.10, ease: 'power3.in' }, 0.90);
      });

    }, 2500);

    return () => clearTimeout(setupTimer);
  }, []);

  return (
    <div className="w-full bg-[#FAF3E0] text-[#4A2511] font-sans relative overflow-x-clip">

      {/* FIXED LOGO */}
      <div ref={logoRef} className="fixed top-6 left-6 md:top-10 md:left-10 z-100 pointer-events-none">
        <img src="/logo-tempe-atos.webp" alt="logo-petos" className="object-contain w-10 h-10 md:w-12 md:h-12 rounded-full shadow-sm border border-2 border-white" />
      </div>

      {/* FLOATING PRODUCT — responsive sizing via CSS */}
      <div
        ref={floatingRef}
        className="fixed top-1/2 left-1/2 z-25 pointer-events-none will-change-transform opacity-0"
      >
        <img
          src="/tempe-atos.webp"
          alt="Petos"
          style={{ width: '80vw', height: '80vw', maxWidth: '25rem', maxHeight: '25rem' }}
          className="object-contain drop-shadow-[0_0_60px_rgba(232,106,16,0.5)]"
        />
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