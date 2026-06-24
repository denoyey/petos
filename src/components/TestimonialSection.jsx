import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
const TestimonialCard = ({ testi }) => (
  <div className="w-[280px] md:w-[320px] shrink-0 bg-white p-6 rounded-xl shadow-sm border border-petos-border flex flex-col hover:-translate-y-2 transition-transform duration-300 mr-4 md:mr-6">
    <div className="flex items-center gap-3 mb-4">
      <div>
        <h4 className="text-petos-dark-brown font-black text-xs md:text-sm uppercase tracking-wide">{testi.name}</h4>
        <p className="text-petos-orange text-[10px] md:text-xs font-bold">{testi.role}</p>
      </div>
    </div>
    <div className="flex gap-1 mb-3 md:mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i < testi.rating ? 'fill-petos-orange text-petos-orange' : 'text-petos-border'}`}
        />
      ))}
    </div>
    <p className="text-petos-brown text-xs md:text-sm font-semibold leading-relaxed">
      "{testi.text}"
    </p>
  </div>
);
const TestimonialSection = () => {
  const row1 = [...testimonials, ...testimonials, ...testimonials];
  const row2 = [...[...testimonials].reverse(), ...[...testimonials].reverse(), ...[...testimonials].reverse()];
  return (
    <section className="relative z-30 py-20 md:py-32 bg-petos-cream overflow-hidden w-full">
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333333%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-33.333333%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            display: flex;
            width: max-content;
            animation: scroll-left 40s linear infinite;
          }
          .animate-marquee-right {
            display: flex;
            width: max-content;
            animation: scroll-right 40s linear infinite;
          }
          .animate-marquee-left:hover, .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="container mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-petos-brown leading-none tracking-tighter uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
            KATA <span className="relative inline-block px-4 py-1 text-petos-cream"><div className="absolute inset-0 bg-petos-orange transform -skew-x-12 -rotate-1"></div><span className="relative">MEREKA</span></span>
          </h2>
          <p className="text-petos-light-brown text-sm md:text-xl font-bold max-w-lg mx-auto mt-6">
            Ribuan bungkus ludes tiap minggu. Buktikan sendiri kerenyahannya!
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 md:gap-6">
        <div className="animate-marquee-left">
          {row1.map((testi, i) => (
            <TestimonialCard key={`r1-${i}`} testi={testi} />
          ))}
        </div>
        <div className="animate-marquee-right">
          {row2.map((testi, i) => (
            <TestimonialCard key={`r2-${i}`} testi={testi} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
