import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Linkedin, Mail, ArrowUp, ChevronRight, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  // Parallax for the main text and background scutes
  const yText = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scuteY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={container}
      className="relative bg-[#FAF7F2] pt-0 pb-12 overflow-hidden"
    >
      {/* --- 1. THE GEOMETRIC "V" TRANSITION (Deep Green V) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[1px]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px]"
          fill="#0f4c39" // The deep green color from your image
        >
          <path d="M0,0 L600,120 L1200,0 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* --- 2. FLOATING SCUTE DECORATIONS (Green Outlines) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          
          className="absolute top-40 left-[10%] w-32 h-32 border-2 border-[#0f4c39] rotate-12"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
        />
        <motion.div 
         
          className="absolute bottom-40 right-[10%] w-48 h-48 border-2 border-[#0f4c39] -rotate-12"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
        />
        <motion.div 
          className="absolute top-60 right-[25%] w-20 h-20 border border-[#0f4c39] opacity-40"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-48">
        
        {/* --- 3. MAIN CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <motion.div style={{ y: yText }}>
            <h2 className="font-syne text-5xl md:text-[8vw] font-black text-[#0f4c39] leading-[0.85] uppercase tracking-tighter">
              Build <br /> 
              Your <br /> 
              Legacy.
            </h2>
          </motion.div>

          <div className="flex flex-col items-start lg:items-end gap-8">
            <p className="text-[#0f4c39]/80 text-lg md:text-xl max-w-md lg:text-right font-medium">
              We transform outdated digital spaces into premium architectural masterpieces that define your identity.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 bg-[#0f4c39] text-[#FAF7F2] px-10 py-5 rounded-sm font-black uppercase text-sm tracking-widest transition-all shadow-xl"
            >
              Start a project <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* --- 4. INTERACTIVE BOTTOM BAR --- */}
        <div className="border-t border-[#0f4c39]/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Socials */}
          <div className="flex gap-6">
            {[<Facebook />, <Twitter />, <Instagram />, <Linkedin />].map((icon, i) => (
              <motion.a 
                key={i}
                href="#"
                whileHover={{ y: -5 }}
                className="text-[#0f4c39] hover:opacity-70 transition-all"
              >
                {React.cloneElement(icon, { size: 22 })}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center order-3 md:order-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f4c39]/60">
              © Copyright Pentalks. All rights reserved.
            </p>
          </div>

          {/* Back to Top */}
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-12 h-12 rounded-sm bg-[#0f4c39] flex items-center justify-center text-[#FAF7F2] shadow-lg transition-all order-2 md:order-3"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;