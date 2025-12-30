import React, { useState } from 'react';
import { Building2, Compass, PenTool, Ruler, Eye, CheckCircle2, X, Maximize2, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
const MukhamPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const services = [
    { icon: Building2, title: "Facade Design", desc: "Crafting the unique 'face' of structures that define their character." },
    { icon: Compass, title: "Urban Planning", desc: "Organizing the features of a city to create a harmonious expression." },
    { icon: PenTool, title: "Interior Identity", desc: "Designing internal souls that complement the external facade." },
    { icon: Ruler, title: "Structural Integrity", desc: "The bone structure that allows for beautiful architectural expression." },
  ];

  const projects = [
    { 
      id: 1, 
      name: "The Meridian Tower", 
      location: "Mumbai, India", 
      type: "Commercial", 
      year: "2024", 
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      details: "A striking vertical expression of glass and light, representing the modern face of Mumbai’s commercial evolution."
    },
    { 
      id: 2, 
      name: "Serene Villas", 
      location: "Goa, India", 
      type: "Residential", 
      year: "2023", 
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
      details: "Organic facades that breathe. These villas act as the face of luxury nestled within natural tropical silhouettes."
    },
    { 
      id: 3, 
      name: "Heritage Center", 
      location: "Jaipur, India", 
      type: "Public", 
      year: "2023", 
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      details: "A traditional face meeting a modern body. This center preserves Jaipur’s identity through historical motifs."
    },
    { 
      id: 4, 
      name: "Innovation Hub", 
      location: "Bangalore, India", 
      type: "Commercial", 
      year: "2022", 
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      details: "The face of productivity. A tech-forward exterior designed to mirror the innovation happening within."
    },
  ];

  return (
    <div className="bg-[#F9F7F2] min-h-screen font-sans selection:bg-[#0f4c39] selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION: THE FACE OF ARCHITECTURE --- */}
      <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
  src="/mukham-bg.png"
  alt="Facial facade"
  className="w-full h-full max-w-full object-cover block"
/>

          <div className="absolute inset-0 bg-black/50 md:bg-black/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 text-center px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-syne text-[18vw] md:text-[14vw] font-black uppercase leading-[0.7] tracking-tighter text-white drop-shadow-2xl">
              MUKHAM
            </h1>
            <div className="mt-4 md:mt-6 flex flex-col items-center">
              <div className="h-12 md:h-20 w-[1px] bg-[#8B9D83] mb-4 md:mb-6" />
              <p className="text-[#8B9D83] text-[10px] md:text-base font-black uppercase tracking-[0.5em] md:tracking-[0.8em] ml-[0.5em]">
                The Face of Identity
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute inset-6 md:inset-12 border border-white/20 pointer-events-none" />
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="font-syne text-4xl md:text-8xl font-black text-[#0f4c39] uppercase tracking-tighter leading-none mb-8 md:mb-12">
          Architecture <br /> <span className="outline-text">Is the Mask.</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
           <p className="text-[#1C150D] text-lg md:text-2xl font-medium leading-relaxed italic border-l-4 border-[#8B9D83] pl-6 md:pl-8 text-left">
              In Sanskrit, 'Mukham' represents the face—the gateway to the soul. We believe a building's facade is its first dialogue with the world.
           </p>
           <p className="text-[#1C150D]/60 text-base md:text-lg text-left leading-relaxed">
              Every project we undertake is treated as a unique portrait. We don't just build structures; we craft identities that stand the test of time.
           </p>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section className="px-6 md:px-12 pb-20 md:pb-32 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-16">
          <h2 className="font-syne text-3xl md:text-6xl font-black text-[#0f4c39] uppercase tracking-tighter">The Expressions</h2>
          <div className="h-[2px] flex-grow bg-[#0f4c39]/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative"
            >
              <div className="aspect-[16/11] overflow-hidden rounded-tl-[40px] md:rounded-tl-[80px] rounded-br-[40px] md:rounded-br-[80px] shadow-xl relative">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 border-[10px] md:border-[15px] border-[#F9F7F2]/0 group-hover:border-[#F9F7F2]/20 transition-all duration-500" />
              </div>
              
              <div className="mt-6 md:mt-8 flex justify-between items-end px-2">
                <div>
                  <span className="text-[#8B9D83] font-black text-[9px] md:text-[10px] uppercase tracking-widest">{project.type} // {project.year}</span>
                  <h3 className="font-syne text-2xl md:text-3xl font-black text-[#0f4c39] uppercase tracking-tighter mt-1">{project.name}</h3>
                </div>
                <div className="p-3 md:p-4 bg-[#0f4c39] text-white rounded-full scale-90 md:scale-0 md:group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- POPUP MODAL: RESPONSIVE --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-[#1C150D]/95 backdrop-blur-md"
          >
            <motion.div 
              layoutId={`project-${selectedProject.id}`}
              className="bg-[#F9F7F2] w-full max-w-6xl h-fit max-h-[90vh] overflow-y-auto md:overflow-hidden rounded-tl-[40px] md:rounded-tl-[100px] rounded-br-[40px] md:rounded-br-[100px] flex flex-col md:flex-row shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-[#0f4c39] text-white p-2 md:p-3 rounded-full hover:rotate-90 transition-transform duration-500"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-3/5 h-[35vh] md:h-auto shrink-0">
                <img src={selectedProject.img} className="w-full h-full object-cover" alt={selectedProject.name} />
              </div>

              <div className="w-full md:w-2/5 p-6 md:p-16 flex flex-col justify-center bg-white md:bg-transparent">
                <span className="text-[#8B9D83] font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-3 md:mb-4 text-center md:text-left">Expressing Structure</span>
                <h2 className="font-syne text-3xl md:text-6xl font-black text-[#0f4c39] uppercase tracking-tighter leading-none mb-6 md:mb-8 text-center md:text-left">
                  {selectedProject.name}
                </h2>
                
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                  <div className="flex items-center gap-3 md:gap-4 text-[#1C150D]/60 uppercase tracking-widest text-[9px] md:text-[10px] font-bold">
                    <MapPin size={14} className="text-[#8B9D83]" /> {selectedProject.location}
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 text-[#1C150D]/60 uppercase tracking-widest text-[9px] md:text-[10px] font-bold">
                    <Calendar size={14} className="text-[#8B9D83]" /> {selectedProject.year}
                  </div>
                  <p className="text-[#1C150D]/70 text-sm md:text-lg leading-relaxed italic border-l-2 border-[#8B9D83] pl-4 md:pl-6 text-left">
                    {selectedProject.details}
                  </p>
                </div>

                <button className="bg-[#0f4c39] text-white py-4 md:py-5 px-8 md:px-10 rounded-full font-black uppercase tracking-widest text-[9px] md:text-[10px] w-full md:w-fit hover:bg-[#1C150D] transition-colors">
                  Inquire About Facade Design
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SERVICES: DARK MODE GRID --- */}
      <section className="bg-[#0f4c39] py-20 md:py-32 rounded-t-[40px] md:rounded-t-[150px] px-6 md:px-12 text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <h2 className="font-syne text-4xl md:text-8xl font-black uppercase tracking-tighter mb-12 md:mb-20 text-center">
            The Features <br /> <span className="text-[#8B9D83]">Of Design.</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {services.map((service, i) => (
              <div key={i} className="group border-t border-[#8B9D83]/20 pt-8 md:pt-10 text-center md:text-left">
                <service.icon className="w-8 h-8 md:w-10 md:h-10 text-[#8B9D83] mb-6 md:mb-8 group-hover:scale-125 transition-transform duration-500 mx-auto md:mx-0" />
                <h3 className="font-syne text-lg md:text-xl font-bold uppercase mb-3 md:mb-4 tracking-tight">{service.title}</h3>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 text-[20vw] font-black text-white/[0.03] leading-none uppercase pointer-events-none select-none">
          MUKHAM
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 md:py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Eye className="w-12 h-12 md:w-16 md:h-16 text-[#0f4c39] mx-auto mb-8 md:mb-10" />
          <h3 className="font-syne text-4xl md:text-8xl font-black text-[#0f4c39] uppercase tracking-tighter leading-none mb-8 md:mb-10">
            Ready to show <br /> <span className="text-[#8B9D83]">Your Face?</span>
          </h3>
          <p className="text-[#1C150D]/60 text-base md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto font-medium">
             Let's transform your ideas into architectural reality. We are ready to craft the facade of your next big vision.
          </p>
          <Link to="/contact">
          <button className="bg-[#1C150D] text-white px-10 md:px-12 py-5 md:py-6 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#0f4c39] transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 md:gap-4 mx-auto w-full sm:w-fit">
            Start a Conversation <CheckCircle2 size={18} />
          </button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px #0f4c39;
        }
        @media (min-width: 768px) {
          .outline-text { -webkit-text-stroke: 3px #0f4c39; }
        }
      `}</style>
    </div>
  );
};

export default MukhamPage;