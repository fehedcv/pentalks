import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';

const logo = "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325287/logogreen_w4rnuq.png";

const Testimonials = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // --- FONT & GLOBAL STYLE INJECTION ---
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;600;700&display=swap');
      .font-syne { font-family: 'Syne', sans-serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
      .outline-text-sage {
        -webkit-text-stroke: 1.5px #8B9D83;
        color: transparent;
      }
      @media (min-width: 768px) {
        .outline-text-sage { -webkit-text-stroke: 2px #8B9D83; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yGhost = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  // Updated contents for Pentalks, Mukham, and Veru Studio
  const testimonials = [
    {
      quote: "Mukham's architectural precision provided the perfect structural shell for our evolution. Their design isn't just space; it's a statement.",
      author: "Vikram Patel",
      role: "Structural Lead // Global Hub",
    },
    {
      quote: "The narrative depth produced by Veru Studio gave our brand a heartbeat. They don't just record stories; they capture human resonance.",
      author: "Ananya Sharma",
      role: "Creative Director // Resonance Media",
    },
    {
      quote: "The Pentalks Collective bridges the gap between the physical and the digital with unmatched creative synergy. A true ecosystem of visionaries.",
      author: "Rajan Mehta",
      role: "Founder // The Story Architecture",
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#1C150D] overflow-hidden font-inter"
    >
      {/* --- TOP TRANSITION --- */}
      <div className="absolute top-0 left-0 w-full h-[12vh] bg-[#1C150D] pointer-events-none z-40" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 50% 100%, 0 20%)', opacity: 0.5 }} 
      />

      {/* BACKGROUND PARALLAX */}
      <motion.div 
        style={{ y: logoY, rotate: logoRotate }}
        className="absolute top-1/4 -right-20 opacity-[0.03] pointer-events-none"
      >
        <img src={logo} alt="Bg Icon" className="w-[600px] md:w-[900px] grayscale invert" />
      </motion.div>

     
      <div className="relative z-10 max-w-[1600px] mx-auto pt-48 pb-32 px-6 md:px-16 lg:px-24">
        
        {/* HEADER */}
        <div className="mb-24 md:mb-40 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-4xl">
           
            
            <h2 className="font-syne text-6xl md:text-8xl lg:text-[9vw] font-800 text-[#FAF7F2] uppercase tracking-tighter leading-[0.85]">
              What they <br />
              <span className="outline-text-sage">say.</span>
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:max-w-xs text-lg text-[#FAF7F2]/40 font-light leading-relaxed border-l border-[#8B9D83]/20 pl-8 mb-4 italic"
          >
            "Built on trust and creative synergy between structure and story."
          </motion.p>
        </div>

        {/* VOICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {testimonials.map((item, idx) => (
            <VoiceCard key={idx} item={item} index={idx} logo={logo} />
          ))}
        </div>
      </div>

      <div className="h-20 w-full" />
    </section>
  );
};

const VoiceCard = ({ item, index, logo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      // Card transition: Scute to Rectangle
      className={`relative p-10 md:p-14 bg-[#2A241D] group overflow-hidden transition-all duration-700 shadow-2xl border border-white/5
        ${index === 1 
          ? 'lg:mt-32 rounded-tr-[100px] rounded-bl-[100px]' 
          : 'rounded-tl-[100px] rounded-br-[100px]'}
        hover:rounded-none hover:border-[#8B9D83]/30
      `}
    >
      <div className="absolute inset-0 bg-[#8B9D83] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" />
      
      <div className="relative z-10 flex flex-col h-full justify-between min-h-[350px]">
        <div>
           <div className="mb-12">
              <MessageSquareQuote size={40} className="text-[#8B9D83] opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
           </div>
           
           <p className="font-inter text-xl md:text-2xl text-[#FAF7F2]/80 font-light leading-[1.6] tracking-tight mb-12">
             "{item.quote}"
           </p>
        </div>

        <div className="pt-8 border-t border-[#8B9D83]/10">
           <p className="font-syne text-xl font-800 text-[#FAF7F2] uppercase tracking-tighter">{item.author}</p>
           <p className="font-inter text-[10px] font-bold text-[#8B9D83] uppercase tracking-[0.3em] mt-2 opacity-70">{item.role}</p>
        </div>
      </div>

      {/* Watermark Logo */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-1000 pointer-events-none group-hover:scale-110 group-hover:-rotate-12">
        <img src={logo} alt="Watermark" className="w-[280px] h-[280px] grayscale invert brightness-150" />
      </div>
    </motion.div>
  );
};

export default Testimonials;