import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react';

const ProcessSection = () => {
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

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const steps = [
    { icon: <Search className="w-6 h-6" />, id: "01", title: "Discovery", desc: "We dive deep into understanding your vision, goals, and the essence of what makes you unique." },
    { icon: <Lightbulb className="w-6 h-6" />, id: "02", title: "Strategy", desc: "Armed with insights, we craft a strategic roadmap that aligns creativity with purpose." },
    { icon: <PenTool className="w-6 h-6" />, id: "03", title: "Creation", desc: "Our team brings ideas to life through meticulous design and thoughtful execution." },
    { icon: <Rocket className="w-6 h-6" />, id: "04", title: "Launch", desc: "We deliver polished work and support you as your brand takes flight." },
  ];

  return (
    <div ref={containerRef} className="relative bg-[#F9F7F2]">
      
      {/* 1. GREEN HERO SECTION - Pointed 'V' Transition */}
      <div className="relative w-full h-[70vh] md:h-[80vh] bg-[#0f4c39] flex flex-col items-center justify-center overflow-hidden">
        
        <div className="relative z-10 text-center  md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-white/30"></div>
            <span className="text-white/50 text-[14px] md:text-xs font-bold tracking-[0.4em] uppercase">
              Pentalks
            </span>
          </motion.div>

          <h2 className="text-white text-[19vw] md:text-[12vw] font-black leading-[0.8] uppercase tracking-tighter">
            THE <br /> PROCESS
          </h2>
        </div>

        {/* INVERTED V-SHAPE: Pointing DOWN into the beige section */}
        <div 
          className="absolute bottom-[-1px] left-0 w-full h-24 md:h-48 bg-[#F9F7F2]" 
          style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0, 100% 100%, 0 100%)' }}
        ></div>
      </div>

      {/* 2. PROCESS CONTENT AREA */}
      <section className="relative px-6 py-20 md:py-48 max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          
          {/* LEFT HEADER: Pinned "Voices of Impact" Typography Style */}
          <div className="md:w-1/2 md:sticky md:top-32 h-fit">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[2px] bg-[#0f4c39]"></div>
                <span className="text-[#0f4c39] text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
                  Workflow System
                </span>
              </div>

              <h2 className="text-[14vw] md:text-[8.5vw] font-black text-[#1C150D] uppercase tracking-tighter leading-[0.85] mb-8">
                SYSTEM <br /> 
                <span className="text-transparent outline-text">CORE</span>
              </h2>
              
              <p className="text-[#1C150D]/50 text-base md:text-lg font-medium max-w-xs leading-relaxed tracking-tight">
                Modernizing digital narratives through technical precision and creative strategy.
              </p>
          </div>

          {/* RIGHT CARDS: Minimal, Smooth, No Metadata */}
          <div className="md:w-1/2 space-y-8 md:space-y-24">
            {steps.map((step, idx) => {
              // Subtle parallax for cards on desktop
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const yOffset = useTransform(smoothProgress, [0.1, 0.9], [0, (idx + 1) * -60]);
              
              return (
                <motion.div 
                  key={idx}
                  style={{ y: isMobile ? 0 : yOffset }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[40px_40px_80px_rgba(15,76,57,0.03)] border border-[#0f4c39]/5 group transition-all duration-500 hover:border-[#0f4c39]/20">
                    
                    <div className="flex flex-col gap-6 md:gap-8">
                      {/* Top Row: Icon and Large Background Number */}
                      <div className="flex justify-between items-center">
                        <div className="w-14 h-14 bg-[#F9F7F2] text-[#0f4c39] rounded-2xl flex items-center justify-center group-hover:bg-[#0f4c39] group-hover:text-white transition-all duration-500">
                          {step.icon}
                        </div>
                        <span className="text-6xl md:text-8xl font-black text-[#0f4c39]/5 leading-none select-none">
                          {step.id}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-4">
                        <h3 className="text-3xl md:text-5xl font-black text-[#1C150D] uppercase tracking-tighter leading-none group-hover:text-[#0f4c39] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-base md:text-xl text-[#1C150D]/60 font-medium leading-relaxed md:max-w-md tracking-tight">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1.5px #0f4c39;
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .outline-text { -webkit-text-stroke: 1.2px #0f4c39; }
        }
      `}</style>
    </div>
  );
};

export default ProcessSection;