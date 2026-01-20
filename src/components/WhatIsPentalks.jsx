import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Layers, Box, Mic, Building2 } from 'lucide-react';

const logoGreen = 'https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325287/logogreen_w4rnuq.png'; 

const WhatIsPentalks = () => {
  const containerRef = useRef(null);
  
  // --- FONT & GLOBAL STYLE INJECTION ---
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;600;700&display=swap');
      
      .font-syne { font-family: 'Syne', sans-serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
      
      .stroke-text { 
        -webkit-text-stroke: 1.5px #FAF7F2; 
        color: transparent;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 30, damping: 20 });

  const floatingLogos = [
    { id: 1, top: '15%', left: '10%', size: '150px', speed: 120, opacity: 0.08, rotate: 15 },
    { id: 2, top: '45%', left: '85%', size: '200px', speed: -180, opacity: 0.04, rotate: -25 },
    { id: 3, top: '75%', left: '5%', size: '140px', speed: 280, opacity: 0.1, rotate: 40 },
    { id: 5, top: '80%', left: '65%', size: '280px', speed: 380, opacity: 0.03, rotate: 35 },
  ];

  // Updated content to reflect the Parent Company and Subsidiaries
  const features = [
    {
      id: "01",
      tag: "STRUCTURE",
      title: "Architect Precision",
      desc: "Transforming physical environments through Mukham, where every line represents a commitment to structural integrity.",
      icon: <Building2 className="w-7 h-7" />
    },
    {
      id: "02",
      tag: "COLLECTIVE",
      title: "Creative Ecosystem",
      desc: "A high-end parent collective bridging the gap between tangible design and intangible human resonance.",
      icon: <Layers className="w-7 h-7" />
    },
    {
      id: "03",
      tag: "NARRATIVE",
      title: "Human Resonance",
      desc: "Capturing the echo of human stories through Veru Studio, crafting narratives that resonate across the digital landscape.",
      icon: <Mic className="w-7 h-7" />
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-[#1C150D] overflow-hidden py-40 md:py-64 font-inter">
      
      {/* --- PRESERVED IDENTITY: THE TURTLE PATH --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg 
          viewBox="0 0 400 1000" 
          preserveAspectRatio="none" 
          className="w-full h-full opacity-30"
          fill="none"
        >
          <path 
            d="M200,0 C100,150 50,200 80,350 S350,500 320,650 S50,850 100,1000" 
            stroke="#8B9D83" 
            strokeWidth="1" 
            strokeDasharray="4 8"
          />
          <motion.path 
            d="M200,0 C100,150 50,200 80,350 S350,500 320,650 S50,850 100,1000" 
            stroke="#8B9D83" 
            strokeWidth="3"
            strokeLinecap="round"
            style={{ pathLength }}
          />
          <motion.circle 
            r="5"
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-48 space-y-10 max-w-5xl">
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "110%", skewY: 5 }}
              whileInView={{ y: 0, skewY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne text-6xl md:text-8xl lg:text-[9vw] font-800 text-[#FAF7F2] uppercase leading-[0.85] tracking-tighter"
            >
              What is <br /> 
              <span className="stroke-text">Pentalks?</span>
            </motion.h2>
          </div>
        </div>

        {/* --- FEATURE ROWS --- */}
        <div className="space-y-64 md:space-y-80">
          {features.map((feature, idx) => (
            <FeatureRow key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
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
  const isInView = useInView(rowRef, { margin: "-15% 0px", once: true });

  const cinematicReveal = {
    hidden: { y: 60, opacity: 0, filter: "blur(8px)" },
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
      className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 md:gap-24 items-start`}
    >
      {/* Background Numbering */}
      <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
        animate={isInView ? { opacity: 0.05, x: 0 } : {}}
        transition={{ duration: 1.5 }}
        className="font-syne text-[15vw] font-800 text-[#8B9D83] leading-none select-none absolute -top-20 lg:static pointer-events-none"
      >
        {feature.id}
      </motion.div>

      <div className="relative flex-1 group w-full">
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -top-14 -left-10 text-[#8B9D83] opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-700"
        >
           {feature.icon}
        </motion.div>
        
        <div className="space-y-8 border-l border-[#8B9D83]/20 pl-10 md:pl-16">
          <div className="overflow-hidden">
            <motion.span 
              variants={cinematicReveal} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"} 
              className="font-inter text-[11px] font-bold tracking-[0.4em] text-[#8B9D83] uppercase block"
            >
              {feature.tag}
            </motion.span>
          </div>
          
          <div className="relative py-2 overflow-hidden">
            <motion.h3 
              variants={cinematicReveal} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"} 
              className="font-syne text-5xl md:text-7xl lg:text-8xl font-800 text-[#FAF7F2] uppercase tracking-tighter leading-none"
            >
              {feature.title}
            </motion.h3>
            <motion.div style={{ scaleX, originX: 0 }} className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8B9D83]/40" />
          </div>
          
          <div className="overflow-hidden">
            <motion.p 
              variants={cinematicReveal} 
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"} 
              className="font-inter text-xl md:text-3xl text-[#FAF7F2]/40 max-w-2xl font-light leading-snug group-hover:text-[#FAF7F2]/80 transition-colors duration-500"
            >
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
    <motion.img 
      src={logoGreen} 
      alt="Bg logo" 
      style={{ top: data.top, left: data.left, width: data.size, opacity: data.opacity, y, rotate }} 
      className="absolute pointer-events-none filter grayscale brightness-150 invert will-change-transform" 
    />
  );
};

export default WhatIsPentalks;