import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Linkedin, Mail, ArrowUp, ChevronRight, Facebook, Twitter } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  const container = useRef(null);
  
  // --- FONT & STYLE INJECTION ---
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;600;700&display=swap');
      .font-syne { font-family: 'Syne', sans-serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={container}
      className="relative bg-[#FAF7F2] pt-24 pb-12 overflow-hidden font-inter"
    >
      {/* --- 1. FLOATING GEOMETRY (Sage Outlines) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          className="absolute top-40 left-[10%] w-32 h-32 border-2 border-[#8B9D83] rounded-tr-[50px] rounded-bl-[50px] rotate-12"
        />
        <motion.div 
          className="absolute bottom-40 right-[10%] w-48 h-48 border-2 border-[#8B9D83] rounded-tr-[80px] rounded-bl-[80px] -rotate-12"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* --- 2. MAIN CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <motion.div style={{ y: yText }}>
            <h2 className="font-syne text-6xl md:text-[8.5vw] font-800 text-[#1C150D] leading-[0.8] uppercase tracking-tighter">
              Build <br /> 
              Your <br /> 
              <span className="text-[#8B9D83]">Legacy.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col items-start lg:items-end gap-10">
            <p className="text-[#1C150D]/60 text-lg md:text-xl max-w-sm lg:text-right font-light leading-relaxed">
              Architecting the fusion of structural precision and human narratives through <span className="text-[#1C150D] font-bold">Mukham</span> and <span className="text-[#1C150D] font-bold">Veru Studio.</span>
            </p>
            
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-6 bg-[#1C150D] text-[#FAF7F2] px-10 py-5 rounded-tr-3xl rounded-bl-3xl font-syne font-800 uppercase text-xs tracking-[0.2em] transition-all duration-700 hover:rounded-none shadow-2xl"
              >
                Start the Symphony <ChevronRight className="group-hover:translate-x-2 transition-transform duration-500" />
              </motion.button>
            </Link>
          </div>
        </div>

        {/* --- 3. INTERACTIVE BOTTOM BAR --- */}
        <div className="border-t border-[#1C150D]/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Socials */}
          <div className="flex gap-8">
            {[<Instagram />, <Linkedin />, <Twitter />, <Facebook />].map((icon, i) => (
              <motion.a 
                key={i}
                href="#"
                whileHover={{ y: -5, color: "#8B9D83" }}
                className="text-[#1C150D]/40 transition-all duration-300"
              >
                {React.cloneElement(icon, { size: 20 })}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
         <div className="text-center order-3 md:order-2">
  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1C150D]/30">
    © {new Date().getFullYear()} Pentalks. All rights reserved. <br />
    Developed by <span className="text-[#1C150D]/60">Vynx Webworks</span>
  </p>
</div>


          {/* Back to Top */}
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-14 h-14 rounded-tr-2xl rounded-bl-2xl bg-[#8B9D83] flex items-center justify-center text-[#FAF7F2] shadow-xl transition-all duration-700 hover:rounded-none order-2 md:order-3"
          >
            <ArrowUp size={22} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;