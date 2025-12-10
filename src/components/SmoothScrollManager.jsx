import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

const SmoothScrollManager = () => {
  const location = useLocation();
  const lenisRef = useRef(null);

  // 1. Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // The "weight" of the scroll. Higher = smoother/heavier.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Default behavior is usually better on touch devices
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Animation Frame Loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // 2. Handle Route Changes (Scroll to Top)
  useEffect(() => {
    if (lenisRef.current) {
      // "immediate: true" forces it to jump instantly instead of scrolling smoothly to top
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      // Fallback if Lenis isn't ready yet
      window.scrollTo(0, 0);
    }
  }, [location.pathname]); // Trigger whenever path changes

  return null;
};

export default SmoothScrollManager;