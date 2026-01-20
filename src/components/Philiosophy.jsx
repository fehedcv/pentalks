import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Philosophy = () => {
  const containerRef = useRef(null);
  
  // --- FONT & GLOBAL STYLE INJECTION ---
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;600;700&display=swap');
      .font-syne { font-family: 'Syne', sans-serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
      .stroke-outline-sage {
        -webkit-text-stroke: 1px #8B9D83;
        color: transparent;
      }
      @media (min-width: 768px) {
        .stroke-outline-sage { -webkit-text-stroke: 2px #8B9D83; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background Parallax
  const xMove = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 1], [0.01, 0.04, 0.01]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#1C150D] py-40 md:py-64 overflow-hidden font-inter"
    >
      {/* --- 1. KINETIC BACKGROUND --- */}
     

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* --- 2. THE PHILOSOPHY CARD (Master Scute) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          // IDENTITY SHAPE: Scute rounding with smooth transition to rectangle on hover
          className="relative bg-[#2A241D] p-12 md:p-32 rounded-tr-[100px] md:rounded-tr-[160px] rounded-bl-[100px] md:rounded-bl-[160px] shadow-2xl border border-white/5 transition-all duration-700 hover:rounded-none hover:border-[#8B9D83]/30 group"
        >
          {/* Section Indicator */}
          <div className="flex items-center gap-6 mb-16">
            <div className="h-[1px] w-12 bg-[#8B9D83]/40" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-[#8B9D83] uppercase">
              The Pentalks Philosophy
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <h2 className="font-syne text-4xl md:text-7xl font-800 text-[#FAF7F2] leading-[0.95] tracking-tighter italic">
                “We believe that great brands are <br className="hidden md:block" /> 
                not just seen, <span className="stroke-outline-sage">they are felt.</span> <br />
                The fusion of structure, <br className="hidden md:block" />
                resonance, and visual soul.”
              </h2>
            </div>

            {/* Floating Detail Element */}
            <div className="lg:col-span-4 flex justify-end">
              <div className="relative pt-12 border-t border-[#8B9D83]/20 max-w-[320px]">
                <p className="text-base md:text-xl text-[#FAF7F2]/40 font-light leading-relaxed group-hover:text-[#FAF7F2]/70 transition-colors duration-500">
                  Mukham’s structural precision and Veru’s narrative depth are the dual pillars of our kinetic evolution.
                </p>
                {/* Signature Sage Dot */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#8B9D83]" />
              </div>
            </div>
          </div>

          {/* Abstract Scute Decor */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-16 -right-16 w-64 h-64 border-[0.5px] border-[#8B9D83]/10 rounded-full flex items-center justify-center pointer-events-none opacity-40"
          >
            <div className="w-full h-[0.5px] bg-[#8B9D83]/20 rotate-45" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;