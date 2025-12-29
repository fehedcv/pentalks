import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Layers, Box, Mic } from 'lucide-react';
import logoGreen from '/logogreen.png'; 

const WhatIsPentalks = () => {
  const containerRef = useRef(null);
  
  // Track scroll for the entire section to draw the path
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth the path drawing
  const pathLength = useSpring(scrollYProgress, { stiffness: 30, damping: 20 });

  const floatingLogos = [
    { id: 1, top: '15%', left: '10%', size: '150px', speed: 120, opacity: 0.1, rotate: 15 },
    { id: 2, top: '45%', left: '85%', size: '200px', speed: -180, opacity: 0.05, rotate: -25 },
    { id: 3, top: '75%', left: '5%', size: '140px', speed: 280, opacity: 0.12, rotate: 40 },
    { id: 5, top: '80%', left: '65%', size: '280px', speed: 380, opacity: 0.04, rotate: 35 },
  ];

  const features = [
    {
      id: "01",
      tag: "STRATEGY",
      title: "Creative Collective",
      desc: "A gathering of diverse minds solving complex problems.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      id: "02",
      tag: "IDENTITY",
      title: "Design Studio",
      desc: "Crafting visual identities and digital experiences that last.",
      icon: <Box className="w-6 h-6" />
    },
    {
      id: "03",
      tag: "NARRATIVE",
      title: "Content Brand",
      desc: "Producing narratives that resonate through audio and text.",
      icon: <Mic className="w-6 h-6" />
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#0f4c39] overflow-hidden py-40 md:py-64">
      
      {/* --- BACKGROUND DRAWING: THE TURTLE PATH --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg 
          viewBox="0 0 400 1000" 
          preserveAspectRatio="none" 
          className="w-full h-full opacity-20"
          fill="none"
        >
          {/* Static Background Path (Shadow) */}
          <path 
            d="M200,0 C100,150 50,200 80,350 S350,500 320,650 S50,850 100,1000" 
            stroke="#8B9D83" 
            strokeWidth="1" 
            strokeDasharray="4 8"
          />
          {/* Animated Drawing Path */}
          <motion.path 
            d="M200,0 C100,150 50,200 80,350 S350,500 320,650 S50,850 100,1000" 
            stroke="#8B9D83" 
            strokeWidth="3"
            strokeLinecap="round"
            style={{ pathLength }}
          />
          {/* The "Turtle" Dot / Head of the path */}
          <motion.circle 
            r="4"
            fill="#8B9D83"
            style={{ 
              offsetPath: "path('M200,0 C100,150 50,200 80,350 S350,500 320,650 S50,850 100,1000')",
              offsetDistance: useTransform(pathLength, [0, 1], ["0%", "100%"])
            }}
          />
        </svg>
      </div>

      {floatingLogos.map((item) => (
        <FloatingLogo key={item.id} data={item} progress={scrollYProgress} />
      ))}

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-20">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-48 space-y-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <div className="h-[1px] w-20 bg-[#8B9D83]/40" />
            <span className="text-[12px] font-black tracking-[0.7em] text-[#8B9D83] uppercase">
              Brand Ecosystem
            </span>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "110%", skewY: 5 }}
              whileInView={{ y: 0, skewY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10vw] font-black text-[#FAF7F2] uppercase leading-[0.8] tracking-tighter"
            >
              What is <br /> 
              <span className="text-transparent stroke-text">Pentalks?</span>
            </motion.h2>
          </div>
        </div>

        {/* --- FEATURE ROWS --- */}
        <div className="space-y-72 md:space-y-96">
          {features.map((feature, idx) => (
            <FeatureRow key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .stroke-text { -webkit-text-stroke: 1.5px #FAF7F2; }
      `}</style>
    </section>
  );
};

const FeatureRow = ({ feature, index }) => {
  const rowRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "center center"]
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const isInView = useInView(rowRef, { margin: "-10% 0px", once: true });

  const cinematicReveal = {
    hidden: { y: 100, opacity: 0, filter: "blur(10px)" },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div 
      ref={rowRef}
      className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-start`}
    >
      <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={isInView ? { opacity: 0.03, x: 0 } : {}}
        transition={{ duration: 1.5 }}
        className="text-[18vw] font-black text-white leading-none select-none absolute -top-16 lg:static"
      >
        {feature.id}
      </motion.div>

      <div className="relative flex-1 group w-full">
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -top-12 -left-12 text-[#8B9D83] opacity-30 group-hover:opacity-60 group-hover:rotate-12 transition-all duration-1000"
        >
           {feature.icon}
        </motion.div>
        
        <div className="space-y-10 border-l border-[#8B9D83]/10 pl-12 md:pl-20">
          <div className="overflow-hidden">
            <motion.span variants={cinematicReveal} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-[12px] font-bold tracking-[0.6em] text-[#8B9D83] uppercase block">
              {feature.tag}
            </motion.span>
          </div>
          
          <div className="relative py-4 overflow-hidden">
            <motion.h3 variants={cinematicReveal} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-5xl md:text-8xl font-black text-[#FAF7F2] uppercase tracking-tight">
              {feature.title}
            </motion.h3>
            <motion.div style={{ scaleX, originX: 0 }} className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8B9D83]" />
          </div>
          
          <div className="overflow-hidden">
            <motion.p variants={cinematicReveal} initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-2xl md:text-4xl text-[#FAF7F2]/40 max-w-3xl font-medium leading-[1.3] group-hover:text-[#FAF7F2]/70 transition-colors duration-700">
              {feature.desc}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingLogo = ({ data, progress }) => {
  const y = useTransform(progress, [0, 1], [data.speed, -data.speed]);
  const rotate = useTransform(progress, [0, 1], [data.rotate, data.rotate * 2]);
  return (
    <motion.img src={logoGreen} alt="Bg logo" style={{ top: data.top, left: data.left, width: data.size, opacity: data.opacity, y, rotate }} className="absolute pointer-events-none filter grayscale brightness-200 will-change-transform" />
  );
};

export default WhatIsPentalks;