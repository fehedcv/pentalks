import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const COLORS = {
  sand: "#F9F7F2",
  sage: "#8B9D83",
  forest: "#0f4c39",
  espresso: "#1C150D",
};

const fontAquire = { fontFamily: "'Aquire', sans-serif" };

const PentalksCinematicHero = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.from(".bg-hero-image", { scale: 1.3, opacity: 0, duration: 2.5 })
        .from(".hero-line", { 
          y: 60, 
          opacity: 0, 
          duration: 1.2, 
          stagger: 0.2 
        }, "-=1.8")
        .from(".cta-button", {
          y: 20,
          opacity: 0,
          duration: 1,
        }, "-=0.8");

      if (window.innerWidth > 768) {
        gsap.to(".parallax-bg", {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          },
          y: 200,
          scale: 1.1
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return <div className="h-screen bg-[#1C150D]" />;

  return (
    <div ref={containerRef} className="relative w-full bg-[#1C150D] font-syne overflow-x-hidden">
      
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden mt-16">
        {/* --- BACKGROUND WITH IMPROVED DARK FILTER --- */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768846691/Gemini_Generated_Image_ygcjigygcjigygcj_1_v2chgs.png" 
            alt="Pentalks Atmosphere"
            className="bg-hero-image parallax-bg w-full h-full object-cover" 
          />
          {/* Layered Gradient Filter: Darker at edges and bottom for depth */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/40 to-[#1C150D]" />
          <div className="absolute inset-0 z-[1] bg-black/20 backdrop-blur-[1px]" />
        </div>

        {/* --- CENTERED HERO CONTENT --- */}
        <div className="relative z-10 text-center px-6 max-w-6xl">
          <div className="overflow-hidden mb-2 md:mb-6">
            <h1 
              className="hero-line text-[#F9F7F2] font-bold tracking-tighter uppercase leading-[0.85]"
              style={{ ...fontAquire, fontSize: "clamp(3rem, 11vw, 8.5rem)" }}
            >
              Dual<br />
              <span className="text-[#8B9D83]">Entities</span>
            </h1>
          </div>

          <div className="flex flex-col items-center">
            <div className="hero-line w-12 md:w-20 h-[2px] bg-[#8B9D83] mb-6 md:mb-10" />
            
            <p className="hero-line text-[#F9F7F2]/90 text-base md:text-2xl max-w-2xl font-medium tracking-tight leading-snug mb-10">
              An ecosystem where <span className="text-white font-bold border-b border-[#8B9D83]">architectural precision</span> meets <br className="hidden md:block" />
              the resonance of human stories.
            </p>

            {/* --- RESPONSIVE CTA BUTTON --- */}
            <div className="cta-button">
              <button 
                className="group relative px-8 py-3 md:px-10 md:py-4 bg-[#F9F7F2] text-[#1C150D] rounded-full font-bold text-sm md:text-base tracking-widest uppercase transition-all duration-300 hover:bg-[#8B9D83] hover:text-[#F9F7F2] hover:scale-105 active:scale-95 shadow-xl"
                style={fontAquire}
              >
                Explore Pentalks
              </button>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator (Optional) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-50 animate-bounce hidden md:block">
           <div className="w-[1px] h-12 bg-gradient-to-b from-[#8B9D83] to-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default PentalksCinematicHero;