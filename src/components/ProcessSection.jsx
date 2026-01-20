import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const CinematicWorkflow = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // --- FONT & GLOBAL STYLE INJECTION ---
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;600;700&display=swap');
      .font-syne { font-family: 'Syne', sans-serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
      .stroke-text-sage { 
        -webkit-text-stroke: 2px #8B9D83; 
        color: transparent;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    { 
      id: "01", 
      title: "Archetype", 
      tag: "DISCOVERY",
      desc: "Mapping the architectural landscape and narrative goals for the collective vision.",
      color: "#1C150D",
      accent: "#8B9D83"
    },
    { 
      id: "02", 
      title: "Mukham", 
      tag: "STRUCTURE",
      desc: "Drafting the physical and structural foundations with architectural precision.",
      color: "#8B9D83",
      accent: "#1C150D"
    },
    { 
      id: "03", 
      title: "Veru Studio", 
      tag: "RESONANCE",
      desc: "Capturing the human story through narrative depth and podcast storytelling.",
      color: "#1C150D",
      accent: "#8B9D83"
    },
    { 
      id: "04", 
      title: "Symphony", 
      tag: "INTEGRATION",
      desc: "Harmonizing structure and story into a single, cohesive brand ecosystem.",
      color: "#8B9D83",
      accent: "#FAF7F2"
    },
  ];

  useLayoutEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      gsap.to(horizontalRef.current, {
        x: () => -(horizontalRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${horizontalRef.current.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div ref={sectionRef} className="bg-[#1C150D] overflow-hidden font-inter relative">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_50%_50%,#8B9D83_0%,transparent_70%)]" />
      
      {isMobile ? (
        <MobileLayout steps={steps} />
      ) : (
        <div 
          ref={horizontalRef} 
          className="flex h-screen items-center px-[10vw] relative"
          style={{ width: `${steps.length * 60}vw + 40vw` }}
        >
          <div className="flex-shrink-0 mr-32 relative z-20">
            <h2 className="font-syne text-[10vw] font-800 text-[#FAF7F2] leading-[0.8] tracking-tighter uppercase">
              WORK<br />
              <span className="stroke-text-sage">FLOW</span>
            </h2>
            
          </div>

          <div className="flex gap-[12vw] items-center">
            {steps.map((step, i) => (
              <WorkflowCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const WorkflowCard = ({ step, index }) => {
  const cardRef = useRef(null);
  const { scrollXProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollXProgress, [0, 1], [0.85, 1]);
  const rotateY = useTransform(scrollXProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollXProgress, [0, 0.4, 1], [0, 0.5, 1]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ scale, rotateY, opacity, perspective: 1200 }}
      className="w-[42vw] flex-shrink-0 relative group"
    >
      <div 
        className="relative aspect-[16/10] p-12 overflow-hidden flex flex-col justify-end transition-all duration-700 border border-white/5 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] 
        /* IDENTITY SHAPE: Top-Right and Bottom-Left rounding */
        rounded-tr-[6rem] rounded-bl-[6rem]
        hover:border-[#8B9D83]/30 hover:rounded-none"
        style={{ backgroundColor: step.color }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        <span 
          className="font-syne absolute -top-12 -right-8 text-[22vw] font-800 leading-none opacity-5 select-none group-hover:scale-105 transition-transform duration-1000"
          style={{ color: step.accent }}
        >
          {step.id}
        </span>

        <div className="relative z-10 space-y-5">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#8B9D83] uppercase">{step.tag} // {step.id}</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>
          
          <h3 className="font-syne text-[4.5vw] font-800 text-[#FAF7F2] leading-none tracking-tighter uppercase">
            {step.title}
          </h3>
          <p className="font-inter text-lg text-[#FAF7F2]/60 font-light max-w-md leading-relaxed group-hover:text-[#FAF7F2]/90 transition-colors duration-500">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const MobileLayout = ({ steps }) => (
  <div className="px-6 py-28 space-y-20 relative z-10">
    <h2 className="font-syne text-7xl font-800 text-[#FAF7F2] tracking-tighter uppercase leading-none">
      WORK<br /><span className="text-[#8B9D83]">FLOW</span>
    </h2>
    <div className="space-y-12">
      {steps.map((step, i) => (
        <div 
          key={i} 
          className="p-10 border border-white/5 shadow-2xl rounded-tr-[4rem] rounded-bl-[4rem]"
          style={{ backgroundColor: step.color }}
        >
          <span className="text-[#8B9D83] font-bold text-xs tracking-[0.4em] uppercase">{step.tag}</span>
          <h3 className="font-syne text-4xl font-800 text-[#FAF7F2] uppercase mt-3">{step.title}</h3>
          <p className="font-inter text-[#FAF7F2]/60 text-lg mt-6 font-light">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CinematicWorkflow;