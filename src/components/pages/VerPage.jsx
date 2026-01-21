import React, { useLayoutEffect } from 'react';
import { Headphones, Radio, ArrowUpRight, Podcast, Timer, Activity, Waves, Mic2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VeruPage = () => {
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

  const narrativeModules = [
    { 
      id: "01",
      title: "Foundational Frequencies", 
      tag: "ARCHITECTURAL STUDY",
      desc: "An exploration into how structural design influences the human voice and the stories we tell within spaces.",
      category: "Conceptual",
      image: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326810/ver-hero-mobile_lgdtsd.png"
    },
    { 
      id: "02",
      title: "Resonance Archetypes", 
      tag: "FORMATION PHASE",
      desc: "Mapping the shared frequencies that bind the collective vision through deep auditory narratives.",
      category: "Formation",
      image: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326818/VeruImg_zpqqpp.png"
    }
  ];

  return (
    <div className="bg-[#1C150D] min-h-screen selection:bg-[#8B9D83] selection:text-[#1C150D] overflow-x-hidden font-inter">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 ">
          {/* REMOVED FILTERS AND OPACITY */}
          <img src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326810/verStock02_acnyya.png" className="block md:hidden w-full h-full object-cover  opacity-80" alt="Formation BG" />
          <img src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326811/veru-hero-desktop_ztjoqd.png" className="hidden md:block w-full h-full object-cover opacity-80" alt="Formation BG" />
          {/* Maintained overlay strictly for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C150D]/80 via-transparent to-[#1C150D]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "circOut" }}>
            <div className="flex items-center justify-center gap-4 mb-10">
               <span className="h-[1px] w-12 bg-[#8B9D83]/40" />
               <span className="text-[#8B9D83] text-[11px] font-bold uppercase tracking-[0.5em]">Auditory Roots Forming</span>
               <span className="h-[1px] w-12 bg-[#8B9D83]/40" />
            </div>

            {/* FIXED TEXT SIZE: Reduced slightly to prevent cutting off on narrow screens */}
            <h1 className="font-syne text-[18vw] md:text-[14vw] font-800 uppercase leading-[0.8] tracking-tighter text-[#FAF7F2]">
              VERU.
            </h1>

            <div className="max-w-2xl mx-auto mt-10 space-y-8">
              <p className="text-[#FAF7F2] text-xl md:text-2xl leading-snug italic font-light px-4">
                The auditory root system of the collective. <br />
                <span className="text-[#8B9D83] font-normal">Coming Soon. Structuring silence into resonance.</span>
              </p>
              
              <div className="flex items-center justify-center gap-5 text-[#8B9D83] font-bold text-[10px] uppercase tracking-widest pt-6">
                <Activity size={16} className="animate-pulse" /> Signal Status: Coming soon
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PREVIEW SECTION --- */}
      <section className="px-6 md:px-12 py-24 md:py-48 max-w-[1440px] mx-auto bg-[#1C150D]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 text-center lg:text-left">
            <h2 className="font-syne text-6xl md:text-7xl lg:text-8xl font-800 text-[#FAF7F2] uppercase tracking-tighter leading-[0.9] mb-10">
              The <br /> <span className="outline-text-sage">Plan.</span>
            </h2>
            <p className="text-[#FAF7F2]/60 text-lg md:text-xl leading-relaxed border-l-2 lg:border-l-2 border-none lg:border-[#8B9D83]/30 pl-0 lg:pl-8 font-light italic">
              Before the first broadcast, we architect the thought. The future of narrative is currently undergoing foundational study.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-24 md:space-y-40">
            {narrativeModules.map((module, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-12 items-center"
              >
                {/* FIXED IMAGE: REMOVED FILTERS AND HOVER SCALE */}
                <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-2xl relative border border-white/5 bg-[#2A241D]">
                  <img src={module.image} className="w-full h-full object-cover" alt={module.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C150D]/60 via-transparent to-transparent" />
                </div>
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                  <span className="text-[#8B9D83] font-bold text-[11px] uppercase tracking-[0.5em] block mb-2">{module.tag}</span>
                  <h3 className="font-syne text-4xl md:text-5xl font-800 text-[#FAF7F2] uppercase tracking-tighter leading-[1.1]">{module.title}</h3>
                  <p className="text-[#FAF7F2]/60 text-lg font-light leading-relaxed mb-8">{module.desc}</p>
                  <div className="flex items-center gap-4 text-[#8B9D83] font-bold text-[10px] uppercase tracking-widest border border-[#8B9D83]/20 w-fit px-8 py-4 rounded-full bg-white/5 mx-auto md:mx-0">
                    <Waves size={16} /> Frequency Forming
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISION SECTION --- */}
      <section className="bg-[#2A241D] py-32 md:py-56 px-6 md:px-12 text-[#FAF7F2] relative overflow-hidden rounded-tr-[80px] md:rounded-tr-[180px] rounded-bl-[80px] md:rounded-bl-[180px]">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="p-8 bg-[#1C150D] rounded-full border border-white/5 mb-14 shadow-2xl">
                <Mic2 className="text-[#8B9D83] w-14 h-14" />
            </div>
            {/* FIXED TEXT SIZE: Scaled for better visibility */}
            <h2 className="font-syne text-6xl md:text-8xl lg:text-[8vw] font-800 uppercase tracking-tighter mb-16 leading-none">
              The <span className="text-[#8B9D83]">Pulse.</span>
            </h2>
            <div className="space-y-12">
              <p className="font-syne text-2xl md:text-4xl lg:text-5xl font-800 italic leading-[1.2] text-[#FAF7F2] max-w-5xl">
                “Veru is the auditory heartbeat of the collective—the moment architectural space finds its human voice.”
              </p>
              <p className="text-[#FAF7F2]/60 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
                We are building a platform where structural logic meets rhythmic depth. The future of narrative is currently in development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
    
    </div>
  );
};

export default VeruPage;