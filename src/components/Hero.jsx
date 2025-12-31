import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const PentalksSlowPortal = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen bg-[#F9F7F2]" />;

  return <PortalContent />;
};

const PortalContent = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const portalRef = useRef(null);

  const COLORS = {
    sand: "#F9F7F2",
    sage: "#8B9D83",
    forest: "#0f4c39",
    espresso: "#1C150D",
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const scrollDistance = isMobile ? "+=3000" : "+=6000";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: scrollDistance,
          scrub: 1.5,
          pin: !isMobile,
              pinSpacing: false, // ✅ ADD THIS

          anticipatePin: 1,
        },
      });

      // TITLE fade (desktop only)
      if (!isMobile) {
        tl.to(titleRef.current, {
          opacity: 0,
          y: -80,
          filter: "blur(15px)",
          ease: "power2.inOut",
        }, 0);
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;



  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#F9F7F2] overflow-x-hidden font-syne"
    >
      {/* HERO SECTION */}
      <motion.section
       
        className={`
          z-20 flex items-center
          ${isMobile ? "relative min-h-screen" : "absolute inset-0"}
        `}
      >
        {/* Background Shape */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-[75vh] bg-[#0f4c39]"
            style={{
              clipPath: window.innerWidth >= 768
                ? 'polygon(0 0,100% 0,100% 75%,50% 100%,0 75%)'
                : 'polygon(0 0,100% 0,100% 85%,50% 100%,0 85%)'
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={titleRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center"
          >
            {/* TEXT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left lg:-translate-y-2">
              <h1
                className="text-[#F9F7F2] font-semibold tracking-tight leading-tight
                text-[clamp(5rem,7vw,5.5rem)]
                lg:text-[clamp(7rem,6vw,7.5rem)]"
              >
                Dual <br />
                <span className="font-bold">Entities</span>
              </h1>

              <p className="max-w-lg mx-auto lg:mx-0 text-[#1C150D] text-base md:text-lg leading-relaxed border-l-4 border-[#8B9D83] pl-5">
                Pentalks is the parent ecosystem that supports both technical and
                creative journeys with balance and clarity.
              </p>
            </div>

            {/* THEME CARDS */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-8">
              <div className="bg-[#F9F7F2] p-7 rounded-3xl shadow-xl">
                <h3 className="text-[#0f4c39] font-semibold text-2xl leading-snug">
                  Designing<br />Spaces
                </h3>
              </div>

              <div className="bg-[#1C150D] p-7 rounded-3xl shadow-xl">
                <h3 className="text-[#F9F7F2] font-semibold text-2xl leading-snug">
                  Voices of<br />Impact
                </h3>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FINAL PORTAL (unchanged) */}
      <div
        ref={portalRef}
        className="hidden fixed inset-0 bg-[#0f4c39] opacity-0 invisible z-[60] md:flex items-center justify-center text-center"
      >
        <h2 className="text-[#F9F7F2] text-5xl md:text-8xl font-black uppercase tracking-widest">
          Let's Begin
        </h2>
      </div>
    </div>
  );
};

export default PentalksSlowPortal;
