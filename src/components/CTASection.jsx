import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative bg-[#0f4c39] overflow-hidden md:px-20 py-36 md:py-20 ">
      {/* --- 1. CLEAN TRANSITION --- */}
      <div 
        className="absolute top-0 left-0 w-full h-[10vh] bg-[#F9F7F2] z-10" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} 
      />

      {/* --- 2. MAIN CONTENT CONTAINER --- */}
      <div className="relative z-20 max-w-[1800px] mx-auto px-6 py-24 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* LEFT CONTENT: LARGE IMPACT TYPOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-left"
          >
          
            
            {/* TYPOGRAPHY INCREASED: Matches large-scale headers from screenshots */}
            <h2 className=" text-6xl md:text-9xl font-black text-[#FAF7F2] leading-[0.85] tracking-tighter uppercase mb-12">
              READY TO <br /> 
              <span className="text-transparent stroke-white">CREATE</span> <br />
              IMPACT?
            </h2>

            <p className=" text-xl md:text-2xl text-white/60 max-w-lg leading-relaxed italic border-l-2 border-[#1C150D]/30 pl-8">
              "Whether it's a brand, a building, or a story—we're here to help you make your mark."
            </p>
          </motion.div>

          {/* RIGHT CONTENT: THE IMAGE LOGO BUTTON */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#1C150D] rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500" />

              <div className="relative w-40 h-40 md:w-64 md:h-64 bg-[#FAF7F2] rounded-full flex items-center justify-center shadow-2xl z-10 transition-all duration-500 group-hover:bg-[#1C150D]"> 
                <img 
                  src="/logo.png" 
                  alt="Pentalks Logo" 
                  className="w-24 h-24 md:w-40 md:h-40 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                />
                
                <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6 w-10 h-10 md:w-16 md:h-16 bg-[#0f4c39] rounded-full flex items-center justify-center border-2 border-[#FAF7F2] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={28} className="text-[#FAF7F2]" />
                </div>
              </div>

              <div className="mt-10 overflow-hidden text-center">
                <motion.span className="block font-black text-[#FAF7F2] text-2xl md:text-4xl uppercase tracking-tighter transition-colors group-hover:text-[#ffff]">
                  Let's Talk
                </motion.span>
                <div className="h-[2px] w-0 bg-[#ffff] group-hover:w-full transition-all duration-500 mx-auto" />
              </div>
            </motion.button>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        .stroke-white {
          -webkit-text-stroke: 1.5px #FAF7F2;
        }
        @media (max-width: 768px) {
          .stroke-white { -webkit-text-stroke: 1px #FAF7F2; }
        }
      `}</style>
    </section>
  );
};

export default CTASection;