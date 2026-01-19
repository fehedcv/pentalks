import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const ClientLogos = () => {
  const containerRef = useRef(null);
  
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;600;700&display=swap');
      .font-syne { font-family: 'Syne', sans-serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
      .stroke-sage { 
        -webkit-text-stroke: 1.5px #8B9D83; 
        color: transparent;
      }
      @media (min-width: 768px) {
        .stroke-sage { -webkit-text-stroke: 2.5px #8B9D83; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background Parallax: Shell Geometry Paths
  const yPaths = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacityPaths = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.4, 0.1]);

  const clients = [
    { name: "TechVenture", size: "lg", offset: -40 },
    { name: "Harmony Spaces", size: "md", offset: 20 },
    { name: "BuildCraft", size: "sm", offset: -60 },
    { name: "Urban Studios", size: "lg", offset: 50 },
    { name: "CreateLab", size: "md", offset: -30 },
    { name: "DesignFlow", size: "sm", offset: 10 },
    { name: "Apex Global", size: "lg", offset: -50 },
    { name: "Ethereal", size: "md", offset: 40 },
    { name: "Nomad", size: "sm", offset: -20 }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-40 md:py-64 bg-[#1C150D] overflow-hidden font-inter"
    >
      {/* NEURAL SHELL PATHS */}
      <motion.div 
        style={{ y: yPaths, opacity: opacityPaths }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#8B9D83]/20 stroke-[0.8]">
          <path d="M500 50L900 250V750L500 950L100 750V250L500 50Z" />
          <path d="M500 50V250M900 250L700 350M900 750L700 650M500 950V750M100 750L300 650M100 250L300 350" />
          <circle cx="500" cy="500" r="300" strokeDasharray="12 12" />
          <path d="M300 350H700V650H300V350Z" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* HEADER */}
        <div className="mb-24 md:mb-40">
           <div className="max-w-4xl">
              <h2 className="font-syne text-6xl md:text-9xl font-800 text-[#FAF7F2] uppercase tracking-tighter leading-[0.85]">
                Brands we've <br /> 
                <span className="stroke-sage">Driven.</span>
              </h2>
           </div>
        </div>

        {/* KINETIC NODES */}
        <div className="relative flex flex-wrap justify-center gap-4 md:gap-10">
          {clients.map((client, i) => (
            <ScuteNode key={i} client={client} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ScuteNode = ({ client, index, scrollYProgress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const yMove = useTransform(scrollYProgress, [0, 1], [client.offset, -client.offset]);

  const sizes = {
    sm: "px-8 py-6 md:px-12 md:py-8",
    md: "px-10 py-10 md:px-16 md:py-12",
    lg: "px-12 py-14 md:px-24 md:py-20"
  };

  return (
    <motion.div
      ref={ref}
      style={{ y: yMove }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <div className={`relative ${sizes[client.size]} bg-[#FAF7F2]/[0.03] border border-white/5 backdrop-blur-xl transition-all duration-700 ease-in-out hover:bg-[#8B9D83]/10 hover:border-[#8B9D83]/40 overflow-hidden
        rounded-tr-[60px] rounded-bl-[60px]
        hover:rounded-none
      `}>
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D83]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <h3 className="font-syne relative z-10 text-xl md:text-4xl font-800 text-[#FAF7F2]/20 group-hover:text-[#FAF7F2] transition-colors duration-500 uppercase tracking-tighter text-center">
          {client.name}
        </h3>

        {/* Minimal geometric corner detail */}
        <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#8B9D83]/20 group-hover:bg-[#8B9D83] transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export default ClientLogos;