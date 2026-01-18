import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const CinematicWorkflow = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    { 
      id: "01", 
      title: "Discovery", 
      desc: "Architecting the foundation of your vision through deep research.",
      color: "#0f4c39", // Forest
      accent: "#8B9D83"  // Sage
    },
    { 
      id: "02", 
      title: "Strategy", 
      desc: "Blueprinting a roadmap that bridges technical logic with creative soul.",
      color: "#1C150D", // Espresso
      accent: "#0f4c39"  // Forest
    },
    { 
      id: "03", 
      title: "Creation", 
      desc: "Executing the build with precision, where every pixel is a brick.",
      color: "#8B9D83", // Sage
      accent: "#1C150D"  // Espresso
    },
    { 
      id: "04", 
      title: "Launch", 
      desc: "Deploying the ecosystem and ensuring a sustainable future growth.",
      color: "#0f4c39", // Forest
      accent: "#F9F7F2"  // Sand
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
          scrub: 1.2, // Smoother cinematic scrub
          start: "top top",
          end: () => `+=${horizontalRef.current.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div ref={sectionRef} className="bg-[#F9F7F2] overflow-hidden font-syne">
      {/* BACKGROUND CINEMATIC LIGHTING */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,#8B9D83_0%,transparent_50%)]" />
      
      {isMobile ? (
        <MobileLayout steps={steps} />
      ) : (
        <div 
          ref={horizontalRef} 
          className="flex h-screen items-center px-[10vw] relative"
          style={{ width: `${steps.length * 60}vw + 40vw` }}
        >
          {/* STICKY SIDE HEADING */}
          <div className="flex-shrink-0 mr-32 relative z-20">
            <h2 className="text-[12vw] font-black text-[#1C150D] leading-[0.75] tracking-tighter uppercase">
              WORK<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #0f4c39' }}>FLOW</span>
            </h2>
            <div className="mt-4 flex items-center gap-4">
               <div className="w-12 h-[2px] bg-[#0f4c39]" />
               <span className="text-xs font-bold tracking-[0.5em] text-[#0f4c39]">SCROLL TO EXPLORE</span>
            </div>
          </div>

          {/* WORKFLOW STEPS */}
          <div className="flex gap-[15vw] items-center">
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
  
  // Create cinematic parallax & scale using Framer Motion
  const { scrollXProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollXProgress, [0, 1], [0.8, 1]);
  const rotateY = useTransform(scrollXProgress, [0, 1], [25, 0]);
  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [0, 0.3, 1]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ scale, rotateY, opacity, perspective: 1000 }}
      className="w-[45vw] flex-shrink-0 relative group"
    >
      {/* THE CINEMATIC CARD */}
      <div 
        className="relative aspect-[16/10] rounded-[2rem] p-12 overflow-hidden flex flex-col justify-end transition-all duration-700
        shadow-[0_50px_100px_-20px_rgba(28,21,13,0.3)] hover:shadow-[0_80px_150px_-30px_rgba(15,76,57,0.4)]"
        style={{ backgroundColor: step.color }}
      >
        {/* INNER GLOW/NOISE OVERLAY */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* DECORATIVE NUMBER */}
        <span 
          className="absolute -top-10 -right-10 text-[25vw] font-black leading-none opacity-10 select-none group-hover:scale-110 transition-transform duration-1000"
          style={{ color: step.accent }}
        >
          {step.id}
        </span>

        {/* CONTENT */}
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold tracking-[0.4em] text-white/50 uppercase">Phase // {step.id}</span>
            <div className="flex-1 h-[1px] bg-white/20" />
          </div>
          
          <h3 className="text-[5vw] font-black text-white leading-none tracking-tighter uppercase">
            {step.title}
          </h3>
          <p className="text-xl text-white/70 font-medium max-w-lg leading-relaxed">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const MobileLayout = ({ steps }) => (
  <div className="px-6 py-24 space-y-16">
    <h2 className="text-7xl font-black text-[#1C150D] tracking-tighter uppercase leading-none">
      WORK<br /><span className="text-[#0f4c39]">FLOW</span>
    </h2>
    <div className="space-y-8">
      {steps.map((step, i) => (
        <div 
          key={i} 
          className="p-8 rounded-3xl shadow-xl"
          style={{ backgroundColor: step.color }}
        >
          <span className="text-white/40 font-bold text-sm tracking-widest">{step.id}</span>
          <h3 className="text-3xl font-bold text-white uppercase mt-2">{step.title}</h3>
          <p className="text-white/70 text-lg mt-4">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CinematicWorkflow;