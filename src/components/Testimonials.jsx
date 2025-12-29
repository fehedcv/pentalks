import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MessageSquareQuote } from 'lucide-react';
import logo from '/logogreen.png'; 

const Testimonials = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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

  // Background Parallax for Cinematic depth
  const yGhost = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const testimonials = [
    {
      quote: "Pentalks transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations.",
      author: "Vikram Patel",
      role: "CEO, TechVenture Labs",
    },
    {
      quote: "Working with the team was a revelation. They understood our vision and brought it to life in ways we never imagined.",
      author: "Ananya Sharma",
      role: "Founder, Harmony Spaces",
    },
    {
      quote: "The platform gave us a stage to share our story. Their production quality and storytelling expertise is unmatched.",
      author: "Rajan Mehta",
      role: "Author & Speaker",
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#F9F7F2] overflow-hidden"
    >
      {/* --- 1. TOP TRANSITION (Organic Entry) --- */}
      <div className="absolute top-0 left-0 w-full h-[15vh] bg-[#0f4c39] pointer-events-none z-40" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 50% 100%, 0 20%)' }} 
      />

      {/* 2. BACKGROUND PARALLAX LAYER */}
      <motion.div 
        style={{ y: logoY, rotate: logoRotate }}
        className="absolute top-1/4 -right-20 opacity-[0.04] pointer-events-none"
      >
        <img src={logo} alt="Bg Icon" className="w-[600px] md:w-[950px] grayscale" />
      </motion.div>

      <motion.h2 
        style={{ y: yGhost }}
        className="absolute bottom-20 left-0 text-[25vw] font-black text-[#0f4c39]/[0.02] uppercase leading-none select-none pointer-events-none whitespace-nowrap tracking-tighter"
      >
        Resonance
      </motion.h2>

      <div className="relative z-10 max-w-[1600px] mx-auto pt-48 pb-32 px-6 md:px-16 lg:px-24">
        
        {/* HEADER: Clean & Modern */}
        <div className="mb-24 md:mb-40 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="h-[1px] w-12 bg-[#0f4c39]" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-[#0f4c39] uppercase italic">Voices of Impact</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl lg:text-[10vw] font-black text-[#1C150D] uppercase tracking-tighter leading-[0.8]">
              What they <br />
              {/* "say" വ്യക്തമായി കാണാൻ വേണ്ടി സ്ട്രോക്ക് സ്റ്റൈൽ അപ്‌ഡേറ്റ് ചെയ്തു */}
              <span className="text-transparent outline-text">say.</span>
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:max-w-xs text-lg text-[#1C150D]/50 font-medium leading-relaxed border-l-2 border-[#0f4c39]/10 pl-8 mb-4 italic"
          >
            "Built on trust and creative synergy across global industries."
          </motion.p>
        </div>

        {/* 3. STAGGERED VOICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {testimonials.map((item, idx) => (
            <VoiceCard key={idx} item={item} index={idx} logo={logo} />
          ))}
        </div>
      </div>

      {/* --- SECTION ENDING: CLEAN (No bottom shapes as requested) --- */}
      <div className="h-20 w-full" />

      <style jsx>{`
        /* "say" എന്ന വാക്ക് കാണാത്ത പ്രശ്നം പരിഹരിക്കാനുള്ള സ്ട്രോക്ക് CSS */
        .outline-text {
          -webkit-text-stroke: 2px #0f4c39;
          display: block;
        }
        @media (max-width: 768px) {
          .outline-text { -webkit-text-stroke: 1.2px #0f4c39; }
        }
      `}</style>
    </section>
  );
};

const VoiceCard = ({ item, index, logo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -15 }}
      // Asymmetric shapes for modern feel
      className={`relative p-10 md:p-14 bg-[#0f4c39] group overflow-hidden transition-all duration-700 shadow-xl
        ${index === 1 ? 'lg:mt-32 rounded-tr-[100px] rounded-bl-[100px]' : 'rounded-tl-[100px] rounded-br-[100px]'}
      `}
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full justify-between min-h-[380px]">
        <div>
           <div className="mb-12">
              <MessageSquareQuote size={40} className="text-[#8B9D83] opacity-30 group-hover:opacity-80 transition-opacity" />
           </div>
           
           <p className="text-xl md:text-2xl text-[#F9F7F2] font-medium leading-[1.5] tracking-tight mb-12 italic">
             "{item.quote}"
           </p>
        </div>

        <div className="pt-8 border-t border-white/5">
           <p className="text-lg font-black text-[#F9F7F2] uppercase tracking-tighter">{item.author}</p>
           <p className="text-[10px] font-bold text-[#8B9D83] uppercase tracking-[0.3em] mt-1 opacity-70 italic">{item.role}</p>
        </div>
      </div>

      {/* Subtle Logo Watermark */}
      <div className="absolute -bottom-8 -right-8 opacity-[0.04] group-hover:opacity-[0.08] transition-all duration-700 pointer-events-none group-hover:scale-110 group-hover:rotate-12">
        <img src={logo} alt="Watermark" className="w-[250px] h-[250px] grayscale brightness-200" />
      </div>
    </motion.div>
  );
};

export default Testimonials;