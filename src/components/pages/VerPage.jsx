import React, { useLayoutEffect } from 'react';
import { Headphones, Radio, ArrowUpRight, Podcast, Timer, Activity } from 'lucide-react';
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
        .outline-text-sage { -webkit-text-stroke: 2.5px #8B9D83; } 
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const upcomingShows = [
    { 
      title: "The Design Mind", 
      host: "Arjun Mehta", 
      desc: "Conversations with world-renowned architects about the 'Face' of creativity and structural evolution.",
      category: "Structure",
      image: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326810/ver-hero-mobile_lgdtsd.png"
    },
    { 
      title: "Build Stories", 
      host: "Priya Sharma", 
      desc: "Behind-the-scenes narratives of iconic buildings and the human resonance of their structural souls.",
      category: "Resonance",
      image: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326818/VeruImg_zpqqpp.png"
    }
  ];

  return (
    <div className="bg-[#1C150D] min-h-screen selection:bg-[#8B9D83] selection:text-[#1C150D] overflow-x-hidden font-inter">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326810/verStock02_acnyya.png" className="block md:hidden w-full h-full object-cover opacity-30 " alt="Mobile BG" />
          <img src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326811/veru-hero-desktop_ztjoqd.png" className="hidden md:block w-full h-full object-cover opacity-100" alt="Desktop BG" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C150D] via-transparent to-[#1C150D]" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "circOut" }}>
            <div className="flex items-center justify-center gap-4 mb-10">
               <span className="h-[1px] w-12 bg-[#8B9D83]/40" />
               <span className="text-[#8B9D83] text-[11px] font-bold uppercase tracking-[0.5em]">The Narrative Pillar</span>
               <span className="h-[1px] w-12 bg-[#8B9D83]/40" />
            </div>

            <h1 className="font-syne text-[22vw] md:text-[16vw] font-800 uppercase leading-[0.75] tracking-tighter text-[#FAF7F2] opacity-90">
              VERU.
            </h1>

            <div className="max-w-2xl mx-auto mt-14 space-y-10">
              <p className="text-[#FAF7F2]/60 text-xl md:text-2xl leading-relaxed italic font-light">
                The auditory root system of the collective. <br />
                <span className="text-[#8B9D83] font-normal">Deep narratives are currently forming.</span>
              </p>
              
              <div className="flex items-center justify-center gap-5 text-[#8B9D83]/60 font-bold text-[10px] uppercase tracking-widest pt-6">
                <Activity size={16} className="animate-pulse text-[#8B9D83]" /> Live Signal: Pre-Production Phase
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PREVIEW SECTION --- */}
      <section className="px-6 md:px-12 py-32 md:py-48 max-w-[1440px] mx-auto bg-[#1C150D]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 text-center lg:text-left">
            <h2 className="font-syne text-6xl md:text-8xl font-800 text-[#FAF7F2] uppercase tracking-tighter leading-none mb-10">
              The <br /> <span className="outline-text-sage">Preview.</span>
            </h2>
            <p className="text-[#FAF7F2]/40 text-lg leading-relaxed border-l-2 lg:border-l-2 border-none lg:border-[#8B9D83]/30 pl-0 lg:pl-8 font-light italic">
              Explore the structural foundations of the conversations we are currently recording. Each show is a module of our future narrative ecosystem.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-32">
            {upcomingShows.map((show, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="group flex flex-col md:flex-row gap-12 items-center"
              >
                <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-2xl relative border border-white/5 bg-[#2A241D]">
                  <img src={show.image} className="w-full h-full object-cover transition-all duration-1000 grayscale-0 opacity-100" alt={show.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C150D] via-transparent to-transparent opacity-60" />
                </div>
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                  <span className="text-[#8B9D83] font-bold text-[11px] uppercase tracking-[0.5em] block mb-2">{show.category}</span>
                  <h3 className="font-syne text-4xl md:text-5xl font-800 text-[#FAF7F2] uppercase tracking-tighter leading-tight">{show.title}</h3>
                  <p className="text-[#FAF7F2]/40 text-lg font-light leading-relaxed mb-10">{show.desc}</p>
                  <div className="flex items-center gap-4 text-[#8B9D83] font-bold text-[10px] uppercase tracking-widest border border-[#8B9D83]/20 w-fit px-8 py-4 rounded-full bg-white/5 shadow-xl mx-auto md:mx-0">
                    <Timer size={16} /> Production Cycle
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="bg-[#2A241D] py-32 md:py-56 px-6 md:px-12 text-[#FAF7F2] relative overflow-hidden rounded-tr-[80px] md:rounded-tr-[180px] rounded-bl-[80px] md:rounded-bl-[180px]">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="p-8 bg-[#1C150D] rounded-full border border-white/5 mb-14 shadow-2xl">
                <Radio className="text-[#8B9D83] w-14 h-14" />
            </div>
            <h2 className="font-syne text-6xl md:text-[9vw] font-800 uppercase tracking-tighter mb-16 leading-none">
              Why <span className="text-[#8B9D83]">Veru?</span>
            </h2>
            <div className="space-y-12">
              <p className="font-syne text-2xl md:text-5xl font-800 italic leading-tight text-[#FAF7F2] max-w-5xl">
                “In a world of architectural noise, we create the resonance. Veru is the vocal soul of the collective.”
              </p>
              <p className="text-[#FAF7F2]/40 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
                Like the roots that hold a structure together, our conversations explore the foundations of creativity, city-building, and human narratives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION: ADJUSTED BUTTON CENTER & RESPONSIVE --- */}
      <section className="py-32 md:py-48 px-6 bg-[#1C150D]">
        <div className="max-w-[1300px] mx-auto bg-[#2A241D] p-10 md:p-32 rounded-tr-[100px] md:rounded-tr-[160px] rounded-bl-[100px] md:rounded-bl-[160px] relative overflow-hidden shadow-2xl border border-white/5">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
              <Podcast size={400} className="text-[#8B9D83]" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="bg-[#1C150D] p-6 rounded-full mb-12 border border-white/5 shadow-inner w-fit">
                <Headphones className="text-[#8B9D83] w-12 h-12" />
              </div>
              
              <h3 className="font-syne text-4xl md:text-8xl font-800 text-[#FAF7F2] uppercase tracking-tighter mb-10 max-w-3xl leading-[0.9] md:leading-[0.85]">
                Stay Rooted <br /> <span className="text-[#8B9D83]">To The Pulse.</span>
              </h3>
              
              <p className="text-[#FAF7F2]/40 max-w-xl mb-16 text-lg md:text-2xl leading-relaxed font-light italic">
                We are currently in active pre-production. Reach out to collaborate or learn more about our upcoming broadcast symphony.
              </p>
              
              {/* BUTTON WRAPPER FOR PERFECT CENTERING */}
              <div className="flex justify-center w-full">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="group w-full sm:w-fit bg-[#8B9D83] text-[#1C150D] px-8 py-5 md:px-14 md:py-8 rounded-tr-3xl rounded-bl-3xl font-syne font-800 uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-6 hover:bg-[#FAF7F2] transition-all duration-700 shadow-2xl">
                    <span>Contact Team</span>
                    <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Visual sound bars decoration */}
            <div className="absolute -bottom-1 left-0 right-0 flex justify-center gap-2 opacity-[0.03] h-32 items-end pointer-events-none">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="w-3 md:w-4 bg-[#8B9D83] rounded-t-lg" style={{ height: `${30 + Math.random() * 70}%` }} />
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default VeruPage;