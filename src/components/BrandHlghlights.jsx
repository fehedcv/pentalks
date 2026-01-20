import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight, Building2, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import MukhamImage from '/MukhamMain.png'; 
import logo from '/logogreen.png'; 

const BrandHighlights = () => {
  const containerRef = useRef(null);
  
  // --- FONT & STYLE INTEGRATION ---
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;600;700&display=swap');
      .font-syne { font-family: 'Syne', sans-serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
      .stroke-sand { 
        -webkit-text-stroke: 1.5px rgba(250, 247, 242, 0.2); 
        color: transparent;
      }
      @media (min-width: 768px) {
        .stroke-sand { -webkit-text-stroke: 2px rgba(250, 247, 242, 0.2); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const VeruImage = "/VeruImg.png";
  const logoScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-32 px-6 md:px-16 lg:px-24 bg-[#1C150D] overflow-hidden font-inter"
    >
      {/* --- LAYER 1: KINETIC BACKGROUND --- */}
      <motion.div 
        style={{ scale: logoScale }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none"
      >
        <img src={logo} alt="Bg" className="w-full max-w-[1200px] invert grayscale" />
      </motion.div>

      <div className="relative z-10 max-w-[1700px] mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-24 md:mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-syne text-6xl md:text-8xl lg:text-[10vw] font-800 text-[#FAF7F2] uppercase leading-[0.85] tracking-tighter"
          >
            Distinct <br />
            <span className="stroke-sand">Entities.</span>
          </motion.h2>
        </div>

        {/* --- LAYER 2: THE MODERN PORTALS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* MUKHAM: Architectural Portal */}
          <div className="lg:col-span-7 relative z-20">
            <div className="w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] xl:aspect-square">
              <ModernNodePortal 
                to="/mukham"
                id="01"
                title="MUKHAM"
                tagline="Architectural Studio"
                description="Crafting the physical foundations of the collective, where structural precision meets organic evolution."
                image={MukhamImage}
                icon={<Building2 size={24} />}
                isLarge={true}
              />
            </div>
          </div>

          {/* VERU: Narrative Portal */}
          <div className="lg:col-span-5 lg:mt-80 relative z-10">
            <div className="w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5]">
              <ModernNodePortal 
                to="/veru"
                id="02"
                title="VERU"
                tagline="Narrative Studio"
                description="The resonance of the collective. Producing rhythmic narratives through specialized podcast storytelling."
                image={VeruImage}
                icon={<Mic size={24} />}
                isPodcast={true}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ModernNodePortal = ({ to, id, title, tagline, description, image, icon, isLarge }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full w-full"
    >
      <Link to={to} className="block relative h-full w-full">
        {/* The Scute Shape Container */}
        <div className={`relative h-full w-full overflow-hidden transition-all duration-700 bg-[#2A241D] border border-white/5 group-hover:border-[#8B9D83]/30 shadow-2xl
          ${isLarge ? 'rounded-tl-[100px] md:rounded-tl-[150px] rounded-br-[100px] md:rounded-br-[150px]' : 'rounded-tr-[80px] md:rounded-tr-[120px] rounded-bl-[80px] md:rounded-bl-[120px]'}
          group-hover:rounded-none
        `}>
          
          {/* Background Visuals */}
          <div className="absolute inset-0 z-0">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover object-center   transition-all duration-1000 ease-out  grayscale-0 opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C150D] via-[#1C150D]/40 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-700" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <span className="font-syne text-[10px] tracking-[0.5em] text-[#8B9D83] uppercase font-bold">{id}</span>
                <div className="text-[#8B9D83] opacity-80">{icon}</div>
              </div>
              
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-[#FAF7F2] transition-all duration-500 overflow-hidden shadow-xl">
                <div className="relative h-6 w-6">
                    <ArrowUpRight className="absolute inset-0 text-white group-hover:text-[#1C150D] group-hover:-translate-y-8 group-hover:translate-x-8 transition-all duration-500" />
                    <ArrowUpRight className="absolute inset-0 text-[#1C150D] -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                </div>
              </div>
            </div>

            <div className="max-w-md">
              <h3 className="font-syne text-5xl md:text-7xl lg:text-8xl font-800 text-[#FAF7F2] tracking-tighter uppercase mb-4 leading-none">
                {title}
              </h3>
              <p className="font-inter text-[10px] md:text-xs font-bold tracking-[0.4em] text-[#8B9D83] uppercase mb-6 opacity-80">
                {tagline}
              </p>
              <p className="font-inter text-sm md:text-lg text-[#FAF7F2]/60 group-hover:text-[#FAF7F2] transition-colors duration-500 leading-relaxed font-light">
                {description}
              </p>
            </div>
          </div>

          {/* Background Identity Scute */}
          <div className="absolute -bottom-20 -right-20 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 100 100" fill="white">
              <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BrandHighlights;