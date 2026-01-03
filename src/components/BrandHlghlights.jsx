import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight, Mic, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MukhamImage from '/MukhamMain.png'; 
import logo from '/logogreen.png'; 

const BrandHighlights = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const VeruImage = "/VeruImg.png"
  // Background Parallax Elements
  const yGhostText = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-32 px-6 md:px-16 lg:px-24 bg-[#0f4c39] overflow-hidden"
    >
      {/* --- LAYER 1: KINETIC BACKGROUND --- */}
      <motion.div 
        style={{ scale: logoScale }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none"
      >
        <img src={logo} alt="Bg" className="w-full max-w-[1200px] invert grayscale" />
      </motion.div>

      <div className="relative z-10 max-w-[1700px] mx-auto">
        
        {/* --- SECTION HEADER: Editorial Style --- */}
        <div className="mb-24 md:mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[10vw] font-black text-[#F9F7F2] uppercase leading-[0.8] tracking-tighter"
          >
            Distinct <br />
            <span className="text-transparent stroke-2 stroke-[#F9F7F2]/30">Entities.</span>
          </motion.h2>
        </div>

        {/* --- LAYER 2: THE MODERN PORTALS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start overflow-visible">
          
          {/* MUKHAM: Left Staggered Portal */}
          <div className="lg:col-span-7 relative z-20">
            {/* Using aspect-[4/5] ensures the card shape stays consistent. 
                Adjust to aspect-square if your images are 1:1 
            */}
            <div className="w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] xl:aspect-square">
              <ModernNodePortal 
                to="/mukham"
                title="MUKHAM"
                tagline="Architectural Studio"
                description="Crafting resilient shells for technical and organic evolution."
                image={MukhamImage}
                isLarge={true}
              />
            </div>
          </div>

          {/* VER: Right Staggered Portal (Offset Down) */}
          <div className="lg:col-span-5 lg:mt-80 relative z-10">
            <div className="w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5]">
              <ModernNodePortal 
                to="/ver"
                title="VERU"
                tagline="Podcast & Narratives"
                description="Producing rhythmic narratives that resonate through technical precision."
                image={VeruImage}
                isPodcast={true}
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .stroke-2 { -webkit-text-stroke: 2px #F9F7F2; }
        @media (max-width: 1024px) {
          .stroke-2 { -webkit-text-stroke: 1.5px #F9F7F2; }
        }
      `}</style>
    </section>
  );
};

const ModernNodePortal = ({ to, id, title, tagline, description, image, isPodcast, isLarge }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link to={to} className="block relative">
        {/* The Scute Shape Container */}
        <div className={`relative overflow-hidden transition-all duration-700 bg-[#1C150D] border border-white/5 group-hover:border-[#8B9D83]/30
          ${isLarge ? 'h-[500px] md:h-[750px] rounded-tl-[150px] rounded-br-[150px]' : 'h-[450px] md:h-[600px] rounded-tr-[120px] rounded-bl-[120px]'}
        `}>
          
          {/* Background Visuals - FIXED IMAGE FIT */}
          {image ? (
            <div className="absolute inset-0 z-0">
              <img 
                src={image} 
                alt={title} 
                /* Changed object-cover to include object-center 
                   Increased base opacity to 70% for better visibility
                */
                className="w-full h-full object-cover object-center opacity-70 grayscale-0   transition-all duration-1000 ease-out" 
              />
              {/* Refined Gradient: Now uses a 'scrim' effect. 
                  It's darker at the bottom (for text) and transparent at the top (for the image).
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C150D] via-[#1C150D]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
            </div>
          ) : (
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#0a0a0a]/40">
              <div className="flex gap-1.5 items-end h-32 opacity-30 group-hover:opacity-60 transition-opacity">
                {[...Array(20)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    animate={{ height: [ `${20 + Math.random() * 40}%`, `${60 + Math.random() * 40}%`, `${30 + Math.random() * 30}%` ] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.05 }}
                    className="w-1.5 bg-[#8B9D83] rounded-full" 
                  />
                ))}
              </div>
            </div>
          )}

          {/* Identity Overlay */}
          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] tracking-[0.5em] text-[#8B9D83] uppercase">{id}</span>
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-[#F9F7F2] transition-all duration-500 overflow-hidden">
                <div className="relative h-6 w-6">
                   <ArrowUpRight className="absolute inset-0 text-white group-hover:text-[#0f4c39] group-hover:-translate-y-8 group-hover:translate-x-8 transition-all duration-500" />
                   <ArrowUpRight className="absolute inset-0 text-[#0f4c39] -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                </div>
              </div>
            </div>

            <div className="max-w-md">
              <h3 className="text-5xl md:text-8xl font-black text-[#F9F7F2] tracking-tighter uppercase mb-4 leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {title}
              </h3>
              <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-[#8B9D83] uppercase mb-6 italic opacity-80">
                {tagline}
              </p>
              <p className="text-sm md:text-lg text-white/60 group-hover:text-white transition-colors duration-500 leading-relaxed font-medium">
                {description}
              </p>
            </div>
          </div>

          {/* Background Scute Watermark */}
          <div className="absolute -bottom-20 -right-20 opacity-[0.05] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-700 pointer-events-none">
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