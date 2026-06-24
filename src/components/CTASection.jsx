import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
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
const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
const SocialButton = ({ href, icon: Icon, text, iconColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-petos-dark-brown text-petos-cream font-bold text-base md:text-lg uppercase tracking-wider rounded-full hover:bg-petos-darkest-brown transition-all shadow-md hover:scale-105 border-3 md:border-4 border-petos-dark-brown flex-1"
  >
    <Icon className={`w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform ${iconColor}`} />
    {text}
    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-transform" />
  </a>
);
const CTASection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
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
    <section id="order" ref={sectionRef} className="py-20 md:py-32 bg-petos-yellow relative z-40 rounded-t-[4rem] md:rounded-t-[8rem] -mt-16 overflow-hidden flex items-center justify-center min-h-[40vh]">
      <div className="absolute inset-0 flex flex-wrap items-center justify-center opacity-10 pointer-events-none overflow-hidden text-petos-dark-brown font-black text-5xl md:text-9xl leading-none break-all select-none">
        PETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOSPETOS
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div ref={textRef} className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-black text-petos-dark-brown mb-4 md:mb-6 tracking-tighter uppercase leading-[0.85]">
            SUDAH <span className="text-petos-cream block mt-1 md:mt-2">NGILER?</span>
          </h2>
          <p className="text-petos-brown text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-relaxed max-w-3xl mx-auto mb-6 md:mb-12">
            JANGAN DITAHAN. BUNGKUS PETOS KAMU SEKARANG JUGA SEBELUM KEHABISAN!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-2xl mx-auto px-4">
            <SocialButton
              href="https://instagram.com/petos.olahanlocal"
              icon={InstagramIcon}
              text="PESAN VIA IG"
              iconColor="text-petos-orange"
            />
            <SocialButton
              href="https://wa.me/6285218174113"
              icon={WhatsAppIcon}
              text="PESAN VIA WA"
              iconColor="text-[#25D366]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
