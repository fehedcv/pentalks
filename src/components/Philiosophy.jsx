import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Philosophy = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background Parallax: Drifts slowly behind the content
  const xMove = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 1], [0.02, 0.05, 0.02]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#F9F7F2] py-40 md:py-64 overflow-hidden"
    >
      {/* --- 1. TURTLE SHELL TRANSITION (TOP) --- */}
      {/* Connects the dark green section above to this cream section */}
      <div className="absolute top-0 left-0 w-full h-[15vh] bg-[#0f4c39] z-10" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 50% 100%, 0 20%)' }} 
      />

 

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* --- 3. THE PHILOSOPHY CARD (Master Scute) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative bg-white p-12 md:p-32 rounded-tr-[140px] rounded-bl-[140px] shadow-[0_60px_120px_rgba(15,76,57,0.04)] border border-[#0f4c39]/5"
        >
          {/* Section Indicator from image_5fe7e0.png */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] w-12 bg-[#0f4c39]/40" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-[#1C150D] uppercase">
              The Pentalks Philosophy
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <h2 className="font-syne text-4xl md:text-7xl font-black text-[#0f4c39] leading-[0.95] tracking-tighter italic">
                “We believe that great brands are <br className="hidden md:block" /> 
                not just seen, <span className="text-transparent stroke-outline">they are felt.</span> <br />
                They are the sum of architecture, <br className="hidden md:block" />
                voice, and visual soul.”
              </h2>
            </div>

            {/* Floating Detail Element matching image_5ff722.png */}
            <div className="lg:col-span-4 flex justify-end">
              <div className="relative pt-12 border-t border-[#1C150D]/30 max-w-[280px]">
                <p className="font-syne text-sm md:text-base text-[#0f4c39]/60 italic leading-relaxed">
                  "Architecture, voice, and visual soul are the pillars of a brand's kinetic evolution."
                </p>
                {/* Signature Copper Dot */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#1C150D]" />
              </div>
            </div>
          </div>

          {/* Abstract Scute Decor */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-16 -left-16 w-48 h-48 border-[0.5px] border-[#C47A3D]/10 rounded-full flex items-center justify-center pointer-events-none opacity-40"
          >
            <div className="w-full h-[0.5px] bg-[#C47A3D]/20 rotate-45" />
          </motion.div>
        </motion.div>

      </div>

      <style jsx>{`
        .stroke-outline {
          -webkit-text-stroke: 1.5px #0f4c39;
        }
        @media (max-width: 768px) {
          .stroke-outline { -webkit-text-stroke: 0.8px #0f4c39; }
        }
      `}</style>
    </section>
  );
};

export default Philosophy;