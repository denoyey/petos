import { Suspense, lazy, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/HeroSection';
import USPSection from '../components/USPSection';
import PromoSection from '../components/PromoSection';
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
    const heroProduct0 = document.querySelector('.hero-product-0');
    const heroProduct1 = document.querySelector('.hero-product-1');
    const floating = floatingRef.current;
    if (!heroProduct0 || !heroProduct1 || !floating) return;
    gsap.set(floating, { xPercent: -50, yPercent: -50 });
    const mm = gsap.matchMedia();
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(floating,
        { opacity: 0, scale: 1, x: '0vw', y: '-20vh', rotation: 0 },
        {
          opacity: 1, scale: 1, x: '0vw', y: '-20vh', rotation: 0,
          scrollTrigger: { trigger: '.usp-section', start: 'top 15%', end: 'top top', scrub: true }
        }
      );
      const productTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.usp-section',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        }
      });
      productTl.to(floating, { y: '-24vh', rotation: 6, scale: 1.05, duration: 0.30, ease: 'sine.inOut' }, 0.00);
      productTl.to(floating, { y: '-18vh', rotation: -6, scale: 0.95, duration: 0.30, ease: 'sine.inOut' }, 0.30);
      productTl.to(floating, { y: '-22vh', rotation: 4, scale: 1, duration: 0.30, ease: 'sine.inOut' }, 0.60);
      productTl.to(floating, { y: '-100vh', opacity: 0, scale: 0.8, duration: 0.10, ease: 'power2.in' }, 0.90);
    });
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(floating,
        { opacity: 0, scale: 1, x: '25vw', y: '0vh', rotation: -3 },
        {
          opacity: 1, scale: 1, x: '25vw', y: '0vh', rotation: -3,
          scrollTrigger: { trigger: '.usp-section', start: 'top 15%', end: 'top top', scrub: 0.5 }
        }
      );
      const productTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.usp-section',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        }
      });
      productTl.to(floating, { x: '25vw', y: '0vh', xPercent: -50, yPercent: -50, rotation: -3, duration: 0.26 }, 0.00);
      productTl.to(floating, { x: '-25vw', rotation: 3, duration: 0.10, ease: 'sine.inOut' }, 0.26);
      productTl.to(floating, { x: '-25vw', rotation: 3, duration: 0.26 }, 0.36);
      productTl.to(floating, { x: '25vw', rotation: -3, duration: 0.10, ease: 'sine.inOut' }, 0.62);
      productTl.to(floating, { x: '25vw', rotation: -3, duration: 0.18 }, 0.72);
      productTl.to(floating, { y: '-100vh', opacity: 0, duration: 0.10, ease: 'power2.in' }, 0.90);
    });
  }, []);
  return (
    <div className="w-full bg-petos-cream text-petos-brown font-sans relative overflow-x-clip">
      <div ref={logoRef} className="fixed top-6 left-6 md:top-10 md:left-10 z-100 pointer-events-none">
        <img src="/logo-petos.svg" alt="logo-petos" className="object-contain w-10 h-10 md:w-12 md:h-12 rounded-full shadow-sm border border-2 border-white" />
      </div>
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
      <PromoSection />
      <Suspense fallback={<div className="h-48 flex items-center justify-center text-petos-orange font-bold text-sm">Menyiapkan kerenyahan...</div>}>
        <TestimonialSection />
        <CTASection />
      </Suspense>
    </div>
  );
};
export default Home;
