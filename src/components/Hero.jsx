import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mic, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PentalksModernHero = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    setMounted(true);
    
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400;600&display=swap');
      .font-syne { font-family: 'Syne', sans-serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
      .reveal-mask {
        overflow: hidden;
        display: block;
      }
    `;
    document.head.appendChild(style);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".reveal-item", {
        yPercent: 100,
        stagger: 0.1,
        duration: 1.4,
        delay: 0.5
      })
      .from(cardRef.current, {
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2
      }, "-=1");

    }, containerRef);

    return () => {
      ctx.revert();
      document.head.removeChild(style);
    };
  }, []);

  if (!mounted) return <div className="h-screen bg-[#1C150D]" />;

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#1C150D] overflow-hidden font-inter"
    >
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C150D] via-[#1C150D]/40 to-transparent z-[2]" />
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        <img 
          ref={imageRef}
          src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768846691/Gemini_Generated_Image_ygcjigygcjigygcj_1_v2chgs.png" 
          alt="Pentalks Atmosphere"
          className="w-full h-full object-cover" 
        />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      {/* Changed justify-end to justify-center and adjusted padding to keep everything in view */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col justify-center pt-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* --- LEFT CONTENT: TYPOGRAPHY --- */}
          <div className="lg:col-span-7 mb-10 lg:mb-0">
            <span className="reveal-mask mb-2">
              <p className="reveal-item text-[#8B9D83] font-bold tracking-[0.3em] uppercase text-xs">
                The Parent Collective
              </p>
            </span>
            
            <h1 className="font-syne font-800 leading-[0.9] uppercase tracking-tighter text-[#F9F7F2]">
              <span className="reveal-mask">
                {/* Adjusted clamp values to ensure text doesn't overflow the viewport height */}
                <span className="reveal-item block text-[12vw] lg:text-[8.5rem]">
                  Pentalks
                </span>
              </span>
              <span className="reveal-mask">
                <span className="reveal-item block text-[6vw] lg:text-[3.5rem] text-white/40">
                  <span className="text-white">Structure</span> & Story
                </span>
              </span>
            </h1>
          </div>

          {/* --- RIGHT CONTENT: GLASS CARD --- */}
          <div className="lg:col-span-5 flex justify-end">
            <div 
              ref={cardRef}
              className="w-full max-w-[440px] bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-7 md:p-9 rounded-[2rem] text-[#F9F7F2] shadow-2xl"
            >
              <h3 className="font-syne text-xl md:text-2xl font-bold mb-4 leading-tight">
                Architectural Precision. <br/>Podcast Resonance.
              </h3>
              
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 font-light">
                Bridging the gap between physical spaces and human narratives through our specialized subsidiaries <span className="text-[#8B9D83] font-semibold">Mukham</span> and <span className="text-[#8B9D83] font-semibold">Veru</span>.
              </p>

              {/* Subsidiary Pillars */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 group bg-white/5 pr-4 rounded-xl border border-white/5">
                  <div className="h-10 w-10 rounded-xl bg-[#8B9D83]/20 flex items-center justify-center text-[#8B9D83]">
                    <Building2 size={18} />
                  </div>
                  <span className="font-bold text-[10px] uppercase tracking-widest opacity-80">Mukham</span>
                </div>
                
                <div className="flex items-center gap-2 group bg-white/5 pr-4 rounded-xl border border-white/5">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <Mic size={18} />
                  </div>
                  <span className="font-bold text-[10px] uppercase tracking-widest opacity-80">Veru Studio</span>
                </div>
              </div>

              <button className="group w-full flex items-center justify-between bg-[#F9F7F2] text-[#1C150D] px-6 py-4 rounded-xl font-800 text-xs tracking-widest uppercase transition-all duration-500 hover:bg-[#8B9D83] hover:text-white">
                <span>Enter the Ecosystem</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-white to-transparent" />
      </div>
    </div>
  );
};

export default PentalksModernHero;