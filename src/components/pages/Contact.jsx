import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Mail, Instagram, Linkedin, MessageCircle, Globe, Phone } from 'lucide-react';

const ContactPage = () => {
  const COLORS = {
    sand: "#F9F7F2",
    moss: "#8B9D83",
    forest: "#0f4c39",
    espresso: "#1C150D",
  };

  const CONTACT_INFO = {
    email: "hello@pentalks.com",
    phone: "+91 98765 43210", // Updated with standard international format
    address: "7th Floor, Resonance Plaza, Mumbai, India"
  };

  return (
    <div className="bg-[#F9F7F2] min-h-screen font-sans selection:bg-[#0f4c39] selection:text-white overflow-hidden">
      
      {/* --- KINETIC GHOST TEXT --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 text-[22vw] font-black uppercase tracking-tighter text-[#0f4c39] opacity-[0.03] select-none whitespace-nowrap">
          INTERACT
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* --- HERO HEADER --- */}
        <section className="mb-24">
          <h1 className="font-syne text-[16vw] md:text-[11vw] font-black uppercase leading-[0.8] tracking-tighter text-[#0f4c39]">
            Open <br /> 
            <span className="outline-text block">Channels.</span>
          </h1>
          <div className="max-w-md mt-10">
            <p className="text-[#1C150D] text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#8B9D83] pl-8">
              Reach out for architectural evolution or narrative expansion. Our ecosystem is ready for your vision.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-stretch">
          
          {/* --- PRIMARY CTA CARD: THE MASSIVE PORTAL --- */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="bg-[#1C150D] h-full p-10 md:p-16 rounded-tl-[100px] rounded-br-[100px] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <Globe size={400} />
              </div>

              <div className="relative z-10">
                <h2 className="font-syne text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                  Start The <br /> <span className="text-[#8B9D83]">Dialogue</span>
                </h2>
                <p className="text-white/40 text-lg md:text-xl mb-12 max-w-sm">
                  The most resilient structures begin with a single resonant conversation.
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-4 md:gap-6">
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="bg-[#0f4c39] text-white px-10 py-6 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-4 hover:bg-[#8B9D83] hover:text-[#1C150D] transition-all duration-500 shadow-xl"
                >
                  {CONTACT_INFO.email} <ArrowUpRight size={20} />
                </a>
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="bg-white/5 border border-white/10 text-white px-10 py-6 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-4 hover:bg-white hover:text-[#1C150D] transition-all duration-500"
                >
                  <Phone size={18} /> {CONTACT_INFO.phone}
                </a>
              </div>
            </motion.div>
          </div>

          {/* --- SECONDARY INFO: THE DIRECT NODES --- */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-10">
            
            {/* LOCATION & CONTACT NODE */}
            <div className="bg-[#0f4c39] p-10 md:p-14 rounded-tr-[100px] rounded-bl-[100px] text-white flex-1 shadow-xl group">
              <h4 className="text-[#8B9D83] font-black uppercase tracking-widest text-[10px] mb-8">Direct Access</h4>
              <div className="space-y-10">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#8B9D83] mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-syne text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight opacity-90 group-hover:opacity-100 transition-opacity">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-[#8B9D83] shrink-0" size={20} />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm md:text-lg font-bold hover:text-[#8B9D83] transition-colors uppercase tracking-widest">
                    {CONTACT_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <MessageCircle className="text-[#8B9D83] shrink-0" size={20} />
                  <a href="#" className="text-sm md:text-lg font-bold hover:text-[#8B9D83] transition-colors uppercase tracking-widest">
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIAL CONNECTION NODE */}
            <div className="bg-white border border-[#0f4c39]/10 p-10 md:p-14 rounded-tl-[100px] rounded-br-[100px] shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-[#8B9D83] font-black uppercase tracking-widest text-[10px] mb-8">Social Signal</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F9F7F2] border border-[#0f4c39]/5 flex items-center justify-center text-[#0f4c39] hover:bg-[#0f4c39] hover:text-white transition-all duration-500 shadow-sm">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F9F7F2] border border-[#0f4c39]/5 flex items-center justify-center text-[#0f4c39] hover:bg-[#0f4c39] hover:text-white transition-all duration-500 shadow-sm">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-[#0f4c39]/5">
                <p className="text-[#1C150D]/30 text-[9px] font-bold uppercase tracking-[0.4em] leading-relaxed">
                  Pentalks Ecosystem / Version 2.0
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- FOOTER PORTAL DECOR --- */}
      <div className="h-48 flex items-center justify-center opacity-5 select-none mt-20">
         <div className="w-full h-[1px] bg-[#0f4c39]" />
         <div className="px-10 font-black text-2xl tracking-[1em] text-[#0f4c39] uppercase whitespace-nowrap">Connect</div>
         <div className="w-full h-[1px] bg-[#0f4c39]" />
      </div>

      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1.5px #0f4c39;
          paint-order: stroke fill;
        }
        @media (min-width: 768px) {
          .outline-text { -webkit-text-stroke: 3px #0f4c39; }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;