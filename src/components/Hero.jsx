import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

const PentalksSlowPortal = () => {
  const containerRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const realImageRef = useRef(null);
  const titleRef = useRef(null);
  const bgImageRef = useRef(null);
  const portalRef = useRef(null);

  // Turtle-inspired Light Palette
  const COLORS = {
    sand: "#F5F2ED",     // Warm sand white
    moss: "#8B9D83",     // Mossy green
    forest: "#0f4c39",   // Deep forest green
    espresso: "#2B1E12"  // Dark shell brown
  };

  const BG_IMAGE = "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=2000";

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // ടോട്ടൽ സ്ക്രോൾ ഡിസ്റ്റൻസ് കൂട്ടി, ഇത് അനിമേഷൻ സ്ലോ ആക്കും
          start: "top top",
          end: "+=6000", 
          scrub: 1.8,    // സ്മൂത്ത്‌നെസ്സ് കൂട്ടാൻ സ്ക്രബ് വാല്യൂ കൂട്ടി
          pin: true,
          anticipatePin: 1,
        }
      });

      // 1. HERO ELEMENTS FADE (Gentle Departure)
      tl.to(bgImageRef.current, { scale: 1.1, opacity: 0.03, ease: "power1.inOut" }, 0)
        .to(".bg-text-flow", { xPercent: -12, opacity: 0, ease: "none" }, 0)
        .to(titleRef.current, { opacity: 0, y: -60, filter: "blur(15px)", ease: "power2.inOut" }, 0);

      // 2. LOGO MOVES TO CENTER (Steady & Controlled)
      tl.to(logoWrapperRef.current, {
        top: "50%",
        right: "50%",
        xPercent: 50,
        yPercent: -50,
        rotation: 360,
        scale: 1.25,
        ease: "expo.inOut",
      }, 0.1);

      // 3. CINEMATIC ICON REVEAL (Very Slow Fade)
      tl.fromTo(realImageRef.current,
        { opacity: 0, scale: 0.7, filter: "brightness(2) blur(20px)" },
        { opacity: 1, scale: 1, filter: "brightness(1) blur(0px)", duration: 4, ease: "power2.out" }, 
      0.8);

      // 4. THE SLOW DRAWING (Stroke Animation)
      // Heading: PENTALKS - Drawing speed കുറച്ചു
      tl.fromTo(".drawing-heading", 
        { strokeDashoffset: 1000, strokeDasharray: 1000 },
        { strokeDashoffset: 0, duration: 4.5, ease: "power2.inOut" }, 
      1.2);

      // Description: Journey of Turtles - കൂടുതൽ പതുക്കെ വരുന്നു
      tl.fromTo(".drawing-desc", 
        { strokeDashoffset: 800, strokeDasharray: 800 },
        { strokeDashoffset: 0, duration: 4, ease: "power2.inOut" }, 
      2.0);

      // 5. ELEGANT COLOR FILL
      tl.to([".drawing-heading", ".drawing-desc"], {
        fill: COLORS.forest, //
        duration: 2.5,
        ease: "power1.in"
      }, 4.0);

      // 6. PORTAL ZOOM (Final Cinematic Leap)
      tl.to(logoWrapperRef.current, {
        scale: 160, 
        duration: 4,
        ease: "expo.in"
      }, 5.5);

      tl.to(portalRef.current, { opacity: 1, duration: 2 }, 7.5);

    }, containerRef);
    return () => ctx.revert();
  }, []);
// const containerRef = useRef(null);
  
  // Scroll Logic for the fade-away effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  // Grid Configuration
  const rows = 15;
  const cols = 25;
  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#F5F2ED] text-[#2B1E12] overflow-hidden font-sans">
      
      {/* --- LIGHT TURTLE THEME BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          ref={bgImageRef}
          className="w-full h-full bg-cover bg-center opacity-30 saturate-[0.6]"
          style={{ backgroundImage: `url(${BG_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-[#F5F2ED]/85 backdrop-blur-[1px]" />
      </div>

      {/* --- CINEMATIC LOGO LOCKUP --- */}
      <div 
        ref={logoWrapperRef} 
        className="fixed top-1/2 right-8 md:right-20 z-50 flex flex-col items-center justify-center -translate-y-1/2 pointer-events-none p-8 origin-center"
      >
        <img 
          ref={realImageRef}
          src="logogreen.png" 
          alt="Pentalks Icon" 
          className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl mb-8"
        />

        <svg className="w-[350px] md:w-[500px] h-auto overflow-visible" viewBox="0 0 500 150">
          <text
            x="50%" y="40%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="drawing-heading text-5xl md:text-6xl font-black uppercase tracking-tight"
            fill="none"
            stroke={COLORS.forest}
            strokeWidth="1.2"
          >
            PENTALKS
          </text>
          
          <text
            x="50%" y="70%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="drawing-desc text-lg md:text-xl font-bold tracking-[0.45em] opacity-80"
            fill="none"
            stroke={COLORS.forest}
            strokeWidth="0.5"
          >
            Journey of Turtles
          </text>
        </svg>
      </div>

<div ref={containerRef} className="relative h-[160vh] bg-[#F9F7F2]">
      <motion.section 
        style={{ opacity, scale }}
        className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6"
      >
        
        {/* --- INTERLOCKING WIREFRAME GRID --- */}
        <div className="absolute inset-0 z-0 flex flex-col justify-center items-center pointer-events-auto opacity-20 w-[120vw] h-[120vh]">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div 
              key={rowIndex} 
              className={`flex gap-0 ${rowIndex % 2 === 0 ? 'ml-[86px]' : ''}`}
              style={{ marginTop: '-25px' }} // Joins them vertically
            >
              {Array.from({ length: cols }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="group relative w-[86px] h-[100px] flex items-center justify-center cursor-none"
                >
                  {/* The Outline (Always visible) */}
                  <div 
                    className="absolute inset-0 bg-[#0f4c39] opacity-30 group-hover:opacity-0 transition-opacity duration-500"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%, 50% 0%, 50% 5%, 5% 27%, 5% 73%, 50% 95%, 95% 73%, 95% 27%, 50% 5%)"
                    }}
                  />
                  
                  {/* The Fill (Appears on hover) */}
                  <div 
                    className="absolute inset-0 bg-[#0f4c39] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-75 group-hover:scale-100"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* --- TEXT CONTENT --- */}
     <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pointer-events-none">
  
  <h1 className="
    text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9vw]
    font-black
    leading-[0.95] sm:leading-[0.9] lg:leading-[0.85]
    tracking-tight
    uppercase
    text-[#1C150D]
  ">
    Steady <br />
    Foundation<span className="text-[#0f4c39]">.</span>
  </h1>

  <p className="
    mt-5 sm:mt-6 md:mt-8
    text-sm sm:text-base md:text-lg
    text-[#1C150D]/70
    font-medium
    leading-relaxed
    max-w-xs sm:max-w-md md:max-w-xl
    mx-auto
    italic
  ">
    Pentalks acts as the central intelligence, providing a resilient shell for
    technical and organic evolution.
  </p>

</div>


      </motion.section>

      {/* Spacer so the page actually scrolls */}
      <div className="h-screen pointer-events-none" />
    </div>

      {/* FINAL PORTAL OVERLAY */}
      <div ref={portalRef} className="absolute inset-0 z-[60] bg-[#0f4c39] opacity-0 pointer-events-none" />

    </div>
  );
};

export default PentalksSlowPortal;