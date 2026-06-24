import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-2 md:p-3 rounded-full bg-petos-orange text-petos-cream shadow-lg border-2 border-petos-cream hover:bg-petos-dark-orange hover:scale-110 hover:shadow-xl transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
    </button>
  );
};
export default BackToTop;
