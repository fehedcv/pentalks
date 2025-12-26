import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrollManager = () => {
  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    const lenis = new Lenis({
      duration: isDesktop ? 2.2 : 1.2,   // ⬅ slower on desktop
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: isDesktop ? 0.6 : 1, // ⬅ key control for mouse speed
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScrollManager;
