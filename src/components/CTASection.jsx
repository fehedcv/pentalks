import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CTASection = () => {
  // --- FONT & GLOBAL STYLE INJECTION ---
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;600;700&display=swap');
      .font-syne { font-family: 'Syne', sans-serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
      .stroke-sage-cta {
        -webkit-text-stroke: 1.5px #8B9D83;
        color: transparent;
      }
      @media (max-width: 768px) {
        .stroke-sage-cta { -webkit-text-stroke: 1px #8B9D83; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="relative bg-[#1C150D] overflow-hidden md:px-20 py-36 md:py-20 font-inter">
      
      {/* --- 1. MAIN CONTENT CONTAINER --- */}
      <div className="relative z-20 max-w-[1800px] mx-auto px-6 py-24 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* LEFT CONTENT: IMPACT TYPOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-left"
          >
            {/* Header: Large-scale Syne Typography */}
            <h2 className="font-syne text-6xl md:text-8xl lg:text-[9vw] font-800 text-[#FAF7F2] leading-[0.85] tracking-tighter uppercase mb-12">
             Build Resonance
            </h2>

            <p className="font-inter text-xl md:text-2xl text-[#FAF7F2]/40 max-w-lg leading-relaxed font-light border-l border-[#8B9D83]/30 pl-8">
              "Whether it's a structural foundation or a human narrative—we architect the collective impact of your brand."
            </p>
          </motion.div>

          {/* RIGHT CONTENT: THE KINETIC CIRCLE CTA */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center justify-center cursor-pointer"
            >
              {/* Glow Aura */}
              <div className="absolute inset-0 bg-[#8B9D83] rounded-full blur-3xl opacity-5 group-hover:opacity-20 transition-opacity duration-700" />

              <div className="relative w-48 h-48 md:w-72 md:h-72 bg-[#FAF7F2] rounded-full flex items-center justify-center shadow-2xl z-10 transition-all duration-700 group-hover:bg-[#8B9D83]"> 
                <img 
                  src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325663/logo_uwzokd.png" 
                  alt="Pentalks Logo" 
                  className="w-24 h-24 md:w-44 md:h-44 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                />
                
                {/* Asymmetric Scute Shape for the Arrow Button */}
                <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6 w-12 h-12 md:w-18 md:h-18 bg-[#1C150D] rounded-tr-3xl rounded-bl-3xl flex items-center justify-center border border-[#FAF7F2]/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FAF7F2]">
                  <ArrowUpRight size={28} className="text-[#FAF7F2] group-hover:text-[#1C150D]" />
                </div>
              </div>

              <div className="mt-12 overflow-hidden text-center">
                <motion.span className="font-syne block font-800 text-[#FAF7F2] text-2xl md:text-5xl uppercase tracking-tighter transition-colors group-hover:text-[#8B9D83]">
                  Start the Symphony
                </motion.span>
                <div className="h-[1px] w-0 bg-[#8B9D83] group-hover:w-full transition-all duration-700 mx-auto mt-2" />
              </div>
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Background Decorative Shell (Minimal) */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 border border-[#8B9D83]/5 rounded-full opacity-20 pointer-events-none" />
    </section>
  );
};

export default CTASection;