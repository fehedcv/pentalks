import React, { useLayoutEffect } from 'react';
import { ArrowRight, Mic, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CompaniesPage = () => {
  // --- FONT & GLOBAL STYLE INJECTION ---
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;600;700&display=swap');
      .font-syne { font-family: 'Syne', sans-serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
      .outline-text-sage {
        color: transparent;
        -webkit-text-stroke: 1px #8B9D83;
      }
      @media (min-width: 768px) {
        .outline-text-sage { -webkit-text-stroke: 2px #8B9D83; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="bg-[#1C150D] min-h-screen selection:bg-[#8B9D83] selection:text-[#1C150D] overflow-x-hidden font-inter">
      
      {/* --- TOP SECTION --- */}
      <section className="pt-32 md:pt-48 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex-1">
            <h1 className="font-syne text-[15vw] md:text-[9vw] font-800 uppercase leading-[0.85] tracking-tighter text-[#FAF7F2]">
              The <br /> <span className="outline-text-sage">Collective.</span>
            </h1>
          </div>
          <div className="max-w-xs pb-4">
            <p className="text-[#8B9D83]/60 text-xs md:text-sm font-bold leading-relaxed border-l border-[#8B9D83]/30 pl-6 uppercase tracking-[0.2em]">
              Architecting the synergy between structural precision and human narratives.
            </p>
          </div>
        </div>
      </section>

      {/* --- STUDIO GRID --- */}
      <section className="px-6 md:px-12 pb-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* MUKHAM CARD (Architecture) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link to="/mukham" className="group block relative aspect-[4/5] md:aspect-square overflow-hidden rounded-tr-[100px] md:rounded-tr-[180px] rounded-bl-[100px] md:rounded-bl-[180px] bg-[#2A241D] shadow-2xl transition-all duration-700">
              <img 
                src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325515/MukhamMain_sc22th.png" 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000  grayscale-0 "
                alt="Mukham Architectural Studio"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C150D] via-[#1C150D]/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-[#8B9D83] p-4 rounded-full shadow-lg text-[#1C150D]">
                    <Building2 size={24} />
                  </div>
                  <span className="text-[#FAF7F2]/10 font-syne text-6xl md:text-8xl font-800">01</span>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-[#FAF7F2] font-syne text-5xl md:text-7xl font-800 uppercase tracking-tighter leading-none">
                    MUKHAM
                  </h2>
                  <p className="text-[#8B9D83] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                    Architectural Studio
                  </p>
                  <div className="pt-8 overflow-hidden">
                    {/* UPDATED: translate-y-0 on mobile, md:translate-y-24 on desktop */}
                    <span className="inline-flex items-center gap-4 bg-[#8B9D83] text-[#1C150D] px-8 py-4 rounded-full font-800 uppercase tracking-widest text-[10px] translate-y-0 md:translate-y-24 group-hover:translate-y-0 transition-transform duration-700 shadow-xl">
                      Enter Studio <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* VERU CARD (Audio) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link to="/veru" className="group block relative aspect-[4/5] md:aspect-square overflow-hidden rounded-tr-[100px] md:rounded-tr-[180px] rounded-bl-[100px] md:rounded-bl-[180px] bg-[#2A241D] shadow-2xl transition-all duration-700">
              <img 
                src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325515/VeruImg_wsobph.png" 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 grayscale-0 opacity-100"
                alt="Veru Audio Network"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C150D] via-[#1C150D]/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-[#FAF7F2] p-4 rounded-full shadow-lg text-[#1C150D]">
                    <Mic size={24} />
                  </div>
                  <span className="text-[#FAF7F2]/10 font-syne text-6xl md:text-8xl font-800">02</span>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-[#FAF7F2] font-syne text-5xl md:text-7xl font-800 uppercase tracking-tighter leading-none">
                    VERU
                  </h2>
                  <p className="text-[#FAF7F2]/40 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                    Narrative Studio
                  </p>
                  <div className="pt-8 overflow-hidden">
                    {/* UPDATED: translate-y-0 on mobile, md:translate-y-24 on desktop */}
                    <span className="inline-flex items-center gap-4 bg-[#FAF7F2] text-[#1C150D] px-8 py-4 rounded-full font-800 uppercase tracking-widest text-[10px] translate-y-0 md:translate-y-24 group-hover:translate-y-0 transition-transform duration-700 shadow-xl">
                      Listen Resonance <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Subtle Scroll Line */}
      <div className="fixed right-12 bottom-0 h-32 w-[1px] bg-gradient-to-b from-transparent to-[#8B9D83]/40 hidden lg:block" />
    </div>
  );
};

export default CompaniesPage;