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
  const logoWrapperRef = useRef(null);
  const realImageRef = useRef(null);
  const titleRef = useRef(null);
  const portalRef = useRef(null);

  const COLORS = {
    sand: "#F9F7F2",    // Light Theme Base
    moss: "#8B9D83",    // Muted Sage
    forest: "#0f4c39",  // Dark Theme Base
    espresso: "#1C150D", // Deep Accent
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const scrollDistance = window.innerWidth < 768 ? "+=3000" : "+=6000";
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: scrollDistance, 
          scrub: 1.2,    
          pin: true,
          anticipatePin: 1,
        }
      });

      // YOUR ORIGINAL ANIMATIONS
      tl.to(titleRef.current, { 
        opacity: 0, 
        y: -150, 
        filter: "blur(20px)", 
        ease: "power2.inOut" 
      }, 0);

      tl.to(logoWrapperRef.current, {
        top: "50%",
        right: "50%",
        xPercent: 50,
        yPercent: -50,
        rotation: 360,
        scale: 1.25,
        ease: "expo.inOut",
      }, 0.1);

      tl.fromTo(realImageRef.current,
        { opacity: 0, scale: 0.7, filter: "brightness(1) blur(20px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 4, ease: "power2.out" }, 
      0.8);

      tl.fromTo(".drawing-heading", 
        { strokeDashoffset: 1000, strokeDasharray: 1000 },
        { strokeDashoffset: 0, duration: 4.5, ease: "power2.inOut" }, 
      1.2);

      tl.fromTo(".drawing-desc", 
        { strokeDashoffset: 800, strokeDasharray: 800 },
        { strokeDashoffset: 0, duration: 4, ease: "power2.inOut" }, 
      2.0);

      // Fills with Dark Forest as the background is now Light Sand
      tl.to([".drawing-heading", ".drawing-desc"], {
        fill: COLORS.forest, 
        duration: 2.5,
        ease: "power1.in"
      }, 4.0);

      tl.to(logoWrapperRef.current, {
        scale: 160, 
        duration: 4,
        ease: "expo.in"
      }, 5.5);

      tl.to(portalRef.current, { opacity: 1, duration: 2 }, 7.5);

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    // LIGHT BACKGROUND for the Logo/Portal Section
    <div ref={containerRef} className="relative w-full h-screen bg-[#F9F7F2] overflow-hidden font-sans">
      
      {/* 1. DARK HERO SECTION (Your Parent Company Content) */}
      <motion.section 
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="absolute inset-0 z-20 bg-[#0f4c39] flex flex-col"
      >
        {/* Navbar Space */}
        <div className="h-24 md:h-32 w-full flex-shrink-0" />

        <div className="flex-grow w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center">
          <div ref={titleRef} className="grid grid-cols-12 gap-y-12 items-center">
            
            {/* Parent Identity */}
            <div className="col-span-12 lg:col-span-7 space-y-6">
              <span className="font-bold uppercase tracking-[0.4em] text-[#8B9D83] text-[10px] md:text-xs">
                The Pentalks Archetype
              </span>
              
              <h1 className="font-syne text-[12vw] md:text-[7vw] font-black uppercase leading-[0.85] tracking-tighter text-[#F9F7F2]">
                Dual <br /> 
                <span className="outline-text block">Entities.</span>
              </h1>

              <p className="max-w-xl text-[#F9F7F2]/60 text-lg md:text-xl font-medium leading-relaxed italic">
                Pentalks serves as the parent ecosystem, providing a resilient shell for technical and creative evolution.
              </p>
            </div>

            {/* Sub-Company Layout */}
            <div className="col-span-12 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4 lg:pl-12">
              <div className="bg-[#F9F7F2]/5 backdrop-blur-md p-8 rounded-tr-[60px] rounded-bl-[60px] border border-white/10">
                <span className="text-[#8B9D83] font-black text-[10px] uppercase tracking-[0.2em] block mb-4">01 Architecture</span>
                <h3 className="text-[#F9F7F2] font-bold text-xl leading-tight">Designing <br /> Spaces</h3>
              </div>
              <div className="bg-[#F9F7F2]/5 backdrop-blur-md p-8 rounded-tl-[60px] rounded-br-[60px] border border-white/10 md:mt-12">
                <span className="text-[#8B9D83] font-black text-[10px] uppercase tracking-[0.2em] block mb-4">02 Podcast</span>
                <h3 className="text-[#F9F7F2] font-bold text-xl leading-tight">Voices of <br /> Impact</h3>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 2. LOGO SECTION (Fixed Animation Layer with Light BG) */}
      <div 
        ref={logoWrapperRef} 
        className="fixed top-1/2 right-8 md:right-20 z-10 flex flex-col items-center justify-center -translate-y-1/2 pointer-events-none p-8 origin-center"
      >
        <img 
          ref={realImageRef}
          src="logogreen.png" 
          alt="Pentalks" 
          className="w-32 h-32 md:w-40 md:h-40 object-contain mb-8" 
        />

        <svg className="w-[350px] md:w-[500px] h-auto overflow-visible" viewBox="0 0 500 150">
          <text x="50%" y="40%" textAnchor="middle" className="drawing-heading text-5xl md:text-6xl font-black uppercase" fill="none" stroke={COLORS.forest} strokeWidth="1.2">PENTALKS</text>
          <text x="50%" y="70%" textAnchor="middle" className="drawing-desc text-lg md:text-xl font-bold tracking-[0.45em]" fill="none" stroke={COLORS.forest} strokeWidth="0.5">Journey of Turtles</text>
        </svg>
      </div>

      {/* Pinning Spacer */}
      <div className="h-[200vh] pointer-events-none" />

      {/* Final Portal Transition Overlay (Dark Green to match content) */}
      <div ref={portalRef} className="absolute inset-0 z-[60] bg-[#0f4c39] opacity-0 pointer-events-none" />

      <style jsx>{`
        .outline-text { 
          color: transparent; 
          -webkit-text-stroke: 1px #F9F7F2; 
        }
        @media (min-width: 768px) { 
          .outline-text { -webkit-text-stroke: 2px #F9F7F2; } 
        }
      `}</style>
    </div>
  );
};

export default PentalksSlowPortal;