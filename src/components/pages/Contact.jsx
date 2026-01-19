import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Mail, Instagram, Linkedin, MessageCircle, Globe, Phone } from 'lucide-react';

const ContactPage = () => {
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

  const CONTACT_INFO = {
    email: "hello@pentalks.com",
    phone: "+91 98765 43210",
    address: "7th Floor, Resonance Plaza, Mumbai, India"
  };

  return (
    <div className="bg-[#1C150D] min-h-screen font-inter selection:bg-[#8B9D83] selection:text-[#1C150D] overflow-hidden">
      
      {/* --- KINETIC GHOST TEXT --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 text-[20vw] font-syne font-800 uppercase tracking-tighter text-[#8B9D83] opacity-[0.02] select-none whitespace-nowrap">
          INTERACT
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* --- HERO HEADER --- */}
        <section className="mb-24 md:mb-32">
          <h1 className="font-syne text-[15vw] md:text-[10vw] font-800 uppercase leading-[0.85] tracking-tighter text-[#FAF7F2]">
            Open <br /> 
            <span className="outline-text-sage block">Channels.</span>
          </h1>
          <div className="max-w-md mt-12">
            <p className="text-[#FAF7F2]/60 text-lg md:text-xl font-light leading-relaxed italic border-l-2 border-[#8B9D83] pl-8">
              Reach out for architectural evolution through <span className="text-[#FAF7F2] font-semibold">Mukham</span> or narrative expansion with <span className="text-[#FAF7F2] font-semibold">Veru Studio</span>.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-stretch">
          
          {/* --- PRIMARY CTA CARD: THE MASSIVE PORTAL --- */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#2A241D] h-full p-10 md:p-16 rounded-tr-[100px] rounded-bl-[100px] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group border border-white/5"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                <Globe size={400} className="text-[#8B9D83]" />
              </div>

              <div className="relative z-10">
                <h2 className="font-syne text-5xl md:text-7xl font-800 uppercase tracking-tighter leading-none mb-10">
                  Start The <br /> <span className="text-[#8B9D83]">Dialogue.</span>
                </h2>
                <p className="text-[#FAF7F2]/40 text-lg md:text-xl mb-14 max-w-sm font-light italic">
                  The most resilient structures begin with a single resonant conversation.
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="bg-[#8B9D83] text-[#1C150D] px-10 py-6 rounded-tr-3xl rounded-bl-3xl font-syne font-800 uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-4 hover:bg-[#FAF7F2] transition-all duration-500 shadow-xl"
                >
                  {CONTACT_INFO.email} <ArrowUpRight size={20} />
                </a>
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="bg-white/5 border border-white/10 text-[#FAF7F2] px-10 py-6 rounded-tr-3xl rounded-bl-3xl font-syne font-800 uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-4 hover:bg-white hover:text-[#1C150D] transition-all duration-500"
                >
                  <Phone size={18} /> {CONTACT_INFO.phone}
                </a>
              </div>
            </motion.div>
          </div>

          {/* --- SECONDARY INFO: THE DIRECT NODES --- */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-10">
            
            {/* LOCATION & CONTACT NODE */}
            <div className="bg-[#1C150D] border border-white/5 p-10 md:p-14 rounded-tr-[80px] rounded-bl-[80px] text-white flex-1 shadow-2xl group">
              <h4 className="text-[#8B9D83] font-bold uppercase tracking-[0.5em] text-[10px] mb-10">Direct Access</h4>
              <div className="space-y-12">
                <div className="flex items-start gap-5">
                  <MapPin className="text-[#8B9D83] mt-1 shrink-0" size={22} />
                  <div>
                    <p className="font-syne text-xl md:text-2xl font-800 uppercase tracking-tighter leading-tight opacity-90">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <Mail className="text-[#8B9D83] shrink-0" size={22} />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm md:text-lg font-bold hover:text-[#8B9D83] transition-colors uppercase tracking-[0.2em]">
                    {CONTACT_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-5">
                  <MessageCircle className="text-[#8B9D83] shrink-0" size={22} />
                  <a href="#" className="text-sm md:text-lg font-bold hover:text-[#8B9D83] transition-colors uppercase tracking-[0.2em]">
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIAL CONNECTION NODE */}
            <div className="bg-[#2A241D] border border-white/5 p-10 md:p-14 rounded-tr-[80px] rounded-bl-[80px] shadow-2xl flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-[#8B9D83] font-bold uppercase tracking-[0.5em] text-[10px] mb-10">Social Signal</h4>
                <div className="flex gap-6">
                  <a href="#" className="w-16 h-16 rounded-full bg-[#1C150D] border border-white/5 flex items-center justify-center text-[#8B9D83] hover:bg-[#8B9D83] hover:text-[#1C150D] transition-all duration-500 shadow-xl">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-16 h-16 rounded-full bg-[#1C150D] border border-white/5 flex items-center justify-center text-[#8B9D83] hover:bg-[#8B9D83] hover:text-[#1C150D] transition-all duration-500 shadow-xl">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
              
              <div className="mt-14 pt-8 border-t border-white/5">
                <p className="text-[#FAF7F2]/20 text-[9px] font-bold uppercase tracking-[0.5em] leading-relaxed">
                  Pentalks Collective / Ecosystem 2.0
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
};

export default ContactPage;