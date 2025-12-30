import React from 'react';
import { Headphones, Clock, Mic, Radio, ArrowUpRight, Volume2, Podcast, Timer, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for routing

const VerPage = () => {
  const COLORS = {
    sand: "#F9F7F2",
    moss: "#8B9D83",
    forest: "#0f4c39",
    espresso: "#1C150D",
  };

  const upcomingShows = [
    { 
      title: "The Design Mind", 
      host: "Arjun Mehta", 
      desc: "Conversations with world-renowned architects about the 'Face' of creativity.",
      category: "Design",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop"
    },
    { 
      title: "Build Stories", 
      host: "Priya Sharma", 
      desc: "Behind-the-scenes narratives of iconic buildings and their structural souls.",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#1C150D] min-h-screen selection:bg-[#8B9D83] selection:text-[#1C150D] overflow-x-hidden">
      
      {/* --- HERO SECTION: THE IMMERSIVE ROOT --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Studio Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C150D] via-transparent to-[#1C150D]" />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/10" />
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
               <span className="h-[1px] w-8 bg-[#8B9D83]" />
               <span className="text-[#8B9D83] text-[10px] font-black uppercase tracking-[0.6em]">Coming in 2026</span>
               <span className="h-[1px] w-8 bg-[#8B9D83]" />
            </div>

            <h1 className="text-[25vw] md:text-[18vw] font-black uppercase leading-[0.7] tracking-tighter text-[#F9F7F2] opacity-80">
              VER.
            </h1>

            <div className="max-w-xl mx-auto mt-12 space-y-8">
              <p className="text-[#F9F7F2]/60 text-lg md:text-xl leading-relaxed italic font-medium">
                The auditory root system of Pentalks. <br />
                <span className="text-[#8B9D83]">Deep narratives are currently forming.</span>
              </p>
              
              <div className="flex items-center justify-center gap-4 text-[#8B9D83]/40 font-black text-[10px] uppercase tracking-widest pt-4">
                <Activity size={14} className="animate-pulse" /> Live Signal: Pre-Production
              </div>
            </div>
          </motion.div>
        </div>

     
      </section>

      {/* --- PREVIEW SECTION --- */}
      <section className="px-6 md:px-12 py-32 md:py-48 max-w-[1400px] mx-auto bg-[#F9F7F2] rounded-t-[60px] md:rounded-t-[150px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-5xl md:text-7xl font-black text-[#1C150D] uppercase tracking-tighter leading-none mb-8">
              The <br /> <span className="text-[#0f4c39]">Preview.</span>
            </h2>
            <p className="text-[#1C150D]/60 text-base leading-relaxed border-l-2 border-[#8B9D83] pl-6 italic">
              Explore the structural foundations of the conversations we are currently recording. Each show is a module of our future ecosystem.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-24">
            {upcomingShows.map((show, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row gap-10 items-center"
              >
                <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-2xl relative">
                  <img src={show.image} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={show.title} />
                  <div className="absolute inset-0 bg-[#0f4c39]/10 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
                </div>
                <div className="w-full md:w-1/2">
                  <span className="text-[#8B9D83] font-black text-[10px] uppercase tracking-[0.4em] block mb-4">{show.category}</span>
                  <h3 className="text-4xl font-black text-[#1C150D] uppercase tracking-tighter mb-4">{show.title}</h3>
                  <p className="text-[#1C150D]/70 text-sm leading-relaxed mb-8">{show.desc}</p>
                  <div className="flex items-center gap-4 text-[#0f4c39] font-black text-[10px] uppercase tracking-widest border border-[#0f4c39]/20 w-fit px-6 py-3 rounded-full">
                    <Timer size={14} /> Production Phase
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="bg-[#0f4c39] py-32 md:py-48 px-6 md:px-12 text-[#F9F7F2] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 text-[25vw] font-black text-white/[0.03] leading-none uppercase pointer-events-none select-none">
          DEPTH
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <Radio className="text-[#8B9D83] w-12 h-12 mb-10" />
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">
              Why <span className="text-[#8B9D83]">Ver?</span>
            </h2>
            <div className="space-y-10">
              <p className="text-xl md:text-3xl font-bold italic leading-tight">
                "In a world of noise, we create signal. Ver is the resonating shell of Pentalks, where abstract ideas find their voice."
              </p>
              <p className="text-[#F9F7F2]/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                Like the roots that hold a structure together, our conversations explore the foundations of creativity, city-building, and human culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA: FINAL PORTAL (REFINED SCUTE LAYOUT) --- */}
      <section className="py-24 md:py-32 px-6 bg-[#F9F7F2]">
        <div className="max-w-[1300px] mx-auto bg-[#1C150D] p-12 md:p-24 rounded-tl-[80px] md:rounded-tl-[120px] rounded-br-[80px] md:rounded-br-[120px] relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
            {/* Scute Decorative Elements */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Podcast size={180} className="text-[#8B9D83]" />
            </div>
            
            <div className="relative z-10">
              <div className="bg-[#0f4c39] p-5 rounded-full mb-10 shadow-inner w-fit mx-auto">
                <Headphones className="text-[#8B9D83] w-10 h-10" />
              </div>
              <h3 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 max-w-2xl leading-[0.9]">
                Stay Rooted <br /> <span className="text-[#8B9D83]">To The Pulse.</span>
              </h3>
              <p className="text-white/40 max-w-md mb-12 text-lg leading-relaxed font-medium mx-auto">
                We are currently in active development. Reach out to collaborate or learn more about our upcoming broadcast cycle.
              </p>
              
              <Link to="/contact">
                <button className="group bg-[#0f4c39] text-[#F9F7F2] px-12 py-6 rounded-full font-black uppercase tracking-widest text-[11px] flex items-center gap-4 hover:bg-[#8B9D83] hover:text-[#1C150D] transition-all duration-500 shadow-xl">
                  Contact Team <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>
            </div>
            
            {/* Visual sound bars decoration */}
            <div className="absolute -bottom-1 left-0 right-0 flex justify-center gap-1.5 opacity-5 h-24 items-end pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="w-3 bg-white rounded-t-sm" style={{ height: `${20 + Math.random() * 80}%` }} />
              ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default VerPage;