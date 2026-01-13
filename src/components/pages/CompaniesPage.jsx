import React from 'react';
import { ArrowRight, Mic, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CompaniesPage = () => {
  return (
    <div className="bg-[#F9F7F2] min-h-screen selection:bg-[#0f4c39] selection:text-white overflow-x-hidden">
      
      {/* --- TOP SECTION --- */}
      <section className="pt-32 md:pt-48 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex-1">
            <h1 className="font-syne text-[15vw] md:text-[9vw] font-black uppercase leading-[0.8] tracking-tighter text-[#0f4c39]">
              The <br /> <span className="outline-text">Directory.</span>
            </h1>
          </div>
          <div className="max-w-xs pb-4">
            <p className="text-[#1C150D]/60 text-sm md:text-base font-medium leading-relaxed border-l-2 border-[#8B9D83] pl-6 uppercase tracking-wider">
              Explore our creative studios and networks.
            </p>
          </div>
        </div>
      </section>

      {/* --- STUDIO GRID --- */}
      <section className="px-6 md:px-12 pb-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* MUKHAM CARD (Architecture) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/mukham" className="group block relative aspect-[4/5] md:aspect-square overflow-hidden rounded-tl-[80px] md:rounded-tl-[150px] rounded-br-[80px] md:rounded-br-[150px] bg-white shadow-2xl">
              {/* Background Image */}
              <img 
                src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325515/MukhamMain_sc22th.png" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 "
                alt="Mukham Architectural Studio"
              />
              
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-[#0f4c39]/40 group-hover:bg-[#0f4c39]/20 transition-colors duration-500" />
              
              {/* Card Content */}
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-lg">
                    <Building2 className="text-[#0f4c39] w-6 h-6" />
                  </div>
                  <span className="text-white/20 font-syne text-5xl md:text-7xl font-black">01</span>
                </div>
                
                <div className="space-y-3">
                  <h2 className="text-white font-syne text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                    MUKHAM
                  </h2>
                  <p className="text-[#8B9D83] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                    Architectural Studio
                  </p>
                  <div className="pt-6 overflow-hidden">
                    <span className="inline-flex items-center gap-4 bg-white text-[#0f4c39] px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] translate-y-24 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                      Enter Studio <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* VER CARD (Audio) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/ver" className="group block relative aspect-[4/5] md:aspect-square overflow-hidden rounded-tr-[80px] md:rounded-tr-[150px] rounded-bl-[80px] md:rounded-bl-[150px] bg-[#1C150D] shadow-2xl">
              {/* Background Image */}
              <img 
                src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325515/VeruImg_wsobph.png" 
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 "
                alt="Ver Audio Network"
              />
              
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
              
              {/* Card Content */}
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-[#8B9D83] p-4 rounded-full shadow-lg">
                    <Mic className="text-[#1C150D] w-6 h-6" />
                  </div>
                  <span className="text-white/10 font-syne text-5xl md:text-7xl font-black">02</span>
                </div>
                
                <div className="space-y-3">
                  <h2 className="text-[#F9F7F2] font-syne text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                    VERU
                  </h2>
                  <p className="text-[#8B9D83] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                    Audio Network
                  </p>
                  <div className="pt-6 overflow-hidden">
                    <span className="inline-flex items-center gap-4 bg-[#8B9D83] text-[#1C150D] px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] translate-y-24 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                      Listen Now <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </section>

     

      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1.5px #0f4c39;
        }
        @media (min-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 3px #0f4c39;
          }
        }
      `}</style>
    </div>
  );
};

export default CompaniesPage;