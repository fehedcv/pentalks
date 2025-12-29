import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const ClientLogos = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background Parallax: Neural Shell Paths
  const yPaths = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacityPaths = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);

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
      className="relative py-40 md:py-64 bg-[#0f4c39] overflow-hidden"
    >
      {/* --- 1. TRANSITION START --- */}
      <div className="absolute top-0 left-0 w-full h-[15vh] bg-[#F9F7F2] pointer-events-none z-40" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 50% 100%, 0 20%)' }} 
      />

      {/* --- 2. NEW BG IDEA: NEURAL SHELL PATHS --- */}
      {/* ലോഗോ കറങ്ങുന്നതിന് പകരം ആമയുടെ ഷെല്ലിലെ ജ്യാമിതീയ രേഖകൾ പൾസ് ചെയ്യുന്നു */}
      <motion.div 
        style={{ y: yPaths, opacity: opacityPaths }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#8B9D83]/30 stroke-[0.5]">
          <path d="M500 50L900 250V750L500 950L100 750V250L500 50Z" />
          <path d="M500 50V250M900 250L700 350M900 750L700 650M500 950V750M100 750L300 650M100 250L300 350" />
          <circle cx="500" cy="500" r="300" strokeDasharray="10 10" />
          <path d="M300 350H700V650H300V350Z" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* --- 3. DYNAMIC HEADER --- */}
        <div className="mb-24 md:mb-40">
           <div className="max-w-3xl">
              {/* <div className="flex items-center gap-4 mb-8">
                 <div className="h-[1px] w-12 bg-[#8B9D83]" />
                 <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-[#8B9D83] uppercase">Global Synergy</span>
              </div> */}
              <h2 className="text-6xl md:text-9xl font-black text-[#F9F7F2] uppercase tracking-tighter leading-[0.85]">
                Brands we've <br /> 
                <span className="text-transparent stroke-2 stroke-[#F9F7F2]">Empowered.</span>
              </h2>
           </div>
        </div>

        {/* --- 4. THE KINETIC BENTO SCUTES (UX: Non-linear Discovery) --- */}
        <div className="relative flex flex-wrap justify-center gap-4 md:gap-8">
          {clients.map((client, i) => (
            <ScuteNode key={i} client={client} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .stroke-2 { -webkit-text-stroke: 2.5px #F9F7F2; }
        @media (max-width: 768px) {
          .stroke-2 { -webkit-text-stroke: 1.2px #F9F7F2; }
        }
      `}</style>
    </section>
  );
};

const ScuteNode = ({ client, index, scrollYProgress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Individual parallax for each scute
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div className={`relative ${sizes[client.size]} bg-white/[0.03] border border-white/5 backdrop-blur-md transition-all duration-700 hover:bg-white/[0.08] hover:border-[#8B9D83]/40 overflow-hidden
        ${index % 2 === 0 ? 'rounded-tl-[60px] rounded-br-[60px]' : 'rounded-tr-[60px] rounded-bl-[60px]'}
      `}>
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D83]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <h3 className="relative z-10 text-xl md:text-3xl font-black text-[#F9F7F2]/30 group-hover:text-[#F9F7F2] transition-colors duration-500 uppercase tracking-tighter text-center">
          {client.name}
        </h3>

        {/* Minimal geometric corner detail */}
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#8B9D83]/20 group-hover:bg-[#8B9D83] transition-colors" />
      </div>
    </motion.div>
  );
};

export default ClientLogos;