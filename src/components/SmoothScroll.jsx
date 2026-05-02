import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false, // We control the RAF loop ourselves via GSAP ticker
      smoothWheel: true,
      lerp: 0.1, // Slightly snappier for less input lag
    });

    // Sync Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP's ticker (single RAF loop) to drive Lenis
    // This prevents the "double RAF" conflict that causes frame drops
    const tickerCallback = (time) => {
      lenis.raf(time * 1000); // GSAP passes seconds, Lenis expects ms
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0); // Disable lag smoothing for consistent frames

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;