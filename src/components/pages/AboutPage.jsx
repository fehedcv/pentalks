import React, { useLayoutEffect } from 'react';
import { Target, Users, Layers, Heart, Globe, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
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

  const team = [
    { 
      name: "Ahmed", 
      role: "Founder & Creative Director", 
      desc: "Visionary leader architecting the synergy between brand strategy and design.",
      image: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325855/ahmed_rdtpcp.jpg" 
    },
    { 
      name: "Anshif", 
      role: "Head of Architecture // Mukham", 
      desc: "Specializing in the structural precision that defines the physical presence of the collective.",
      image: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325856/anshif_kfqjye.jpg" 
    },
    { 
      name: "Hashim", 
      role: "Audio Director // Veru Studio", 
      desc: "Innovating the auditory narratives that provide the collective's human resonance.",
      image: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325856/hashim_inm6zm.jpg" 
    },
    { 
      name: "Sakeeb", 
      role: "Strategy Lead", 
      desc: "Building the strategic roadmaps that bridge structural logic with narrative soul.",
      image: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325856/sakeeb_wp9hpl.jpg" 
    },
  ];

  const values = [
    { icon: Target, title: "Precision", text: "Mukham's core—standardizing every detail to ensure structural integrity." },
    { icon: Users, title: "Resonance", text: "Veru's heartbeat—crafting narratives that people engage with on a human level." },
    { icon: Layers, title: "Symphony", text: "The Collective vision—merging structure and story into a unified legacy." },
    { icon: Heart, title: "Soul", text: "The energy fueling every archetype, structure, and narrative we build." },
  ];

  const milestones = [
    { year: "2021", title: "MPTC Foundation", desc: "Establishing our technical base focused on multimedia excellence." },
    { year: "2024", title: "Pentalks Emergence", desc: "The birth of the parent collective bridging space and storytelling." },
    { year: "2025", title: "Mukham Launch", desc: "A dedicated studio crafting premium architectural masterpieces." },
    { year: "2026", title: "Veru Evolution", desc: "Capturing human stories through our specialized narrative network." }
  ];

  return (
    <div className="bg-[#1C150D] min-h-screen font-inter selection:bg-[#8B9D83] selection:text-[#1C150D]">
      
      {/* --- HERO SECTION (Updated to Dark) --- */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
          <div className="flex-1 z-10">
            <h1 className="font-syne text-[15vw] md:text-[9vw] font-800 uppercase leading-[0.85] tracking-tighter text-[#FAF7F2]">
              The <br /> Collective <br /> 
              <span className="outline-text-sage">Story.</span>
            </h1>
          </div>
          <div className="flex-1 lg:max-w-md pb-4">
            <p className="text-[#FAF7F2]/60 text-lg md:text-xl font-light leading-relaxed italic border-l-2 border-[#8B9D83] pl-8">
              Where architectural precision meets the resonance of human story.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE NARRATIVE (Updated to Dark) --- */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[4/5] bg-[#2A241D] rounded-tr-[100px] rounded-bl-[100px] relative overflow-hidden shadow-2xl">
               <img 
                src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325744/about-img_md7ibn.png" 
                alt="Architecture"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#1C150D] via-transparent to-transparent opacity-60" />
            
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center space-y-10 order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-syne font-800 text-[#FAF7F2] leading-[1.1] tracking-tighter uppercase">
                Structure & Narrative <br /> are two sides of the same coin.
            </h2>
            <div className="space-y-8 text-[#FAF7F2]/50 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              <p>
                Pentalks began as a dialogue on the intersection of space and story. We realized that both require a foundation of precision, a core of resonance, and the ability to stand the test of time.
              </p>
              <p>
                From this insight, the collective was born—an ecosystem that builds brands through the structural mastery of <span className="text-[#FAF7F2] font-bold">Mukham</span> and the narrative depth of <span className="text-[#FAF7F2] font-bold">Veru Studio</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES: ESPRESSO SHELL (No Hover Shape Change) --- */}
      <section className="bg-[#2A241D] py-24 md:py-40 px-6 md:px-12 rounded-tr-[80px] md:rounded-tr-[180px] rounded-bl-[80px] md:rounded-bl-[180px] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
            <h2 className="font-syne text-6xl md:text-8xl font-800 text-[#FAF7F2] uppercase tracking-tighter leading-none">
              The <br /> <span className="text-[#8B9D83]">Ethos.</span>
            </h2>
            <p className="text-[#8B9D83]/60 max-w-xs font-bold uppercase tracking-[0.4em] text-[10px]">
              The principles of the symphony.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {values.map((item, i) => (
              <div key={i} className="bg-[#1C150D] p-12 group transition-colors duration-500">
                <item.icon className="w-10 h-10 text-[#8B9D83] mb-10 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="font-syne text-2xl font-800 text-[#FAF7F2] mb-6 uppercase tracking-tight">{item.title}</h4>
                <p className="text-[#FAF7F2]/40 text-sm md:text-base leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MILESTONES (Updated to Dark) --- */}
      <section className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto">
        <h2 className="font-syne text-6xl md:text-7xl font-800 text-[#FAF7F2] uppercase tracking-tighter mb-24 text-center">The Journey</h2>
        <div className="relative border-l-2 border-[#8B9D83]/10 ml-4 md:mx-auto max-w-3xl space-y-24">
          {milestones.map((ms, i) => (
            <div key={i} className="relative pl-12 group">
              <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-[#8B9D83]" />
              <span className="font-syne text-[#8B9D83] font-800 text-3xl block mb-3">{ms.year}</span>
              <h4 className="font-syne text-[#FAF7F2] text-2xl md:text-3xl font-800 uppercase tracking-tight mb-4">{ms.title}</h4>
              <p className="text-[#FAF7F2]/40 max-w-lg leading-relaxed font-light text-lg">{ms.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TEAM: Fixed Image Visibility & Dark Theme --- */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-[#1C150D]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24">
            <h2 className="font-syne text-6xl md:text-7xl font-800 text-[#FAF7F2] uppercase tracking-tighter">The Visionaries</h2>
            <div className="h-[2px] w-24 bg-[#8B9D83] mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {team.map((member, i) => (
              <div key={i} className="group">
                {/* FIXED TEAM IMAGE: Reduced rounding to ensure faces are visible & fixed to dark bg */}
                <div className="aspect-[3/4.5] bg-[#2A241D] rounded-tr-[60px] rounded-bl-[60px] mb-8 overflow-hidden relative shadow-2xl">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C150D] via-transparent to-transparent opacity-40" />
                </div>
                <h4 className="font-syne text-2xl font-800 text-[#FAF7F2] mb-1 uppercase tracking-tighter">{member.name}</h4>
                <p className="text-[#8B9D83] text-[10px] font-bold uppercase tracking-[0.4em] mb-6">{member.role}</p>
                <p className="text-[#FAF7F2]/40 text-base leading-relaxed font-light">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION (Consistent Dark Theme) --- */}
      <section className="py-32 px-6 bg-[#1C150D]">
        <div className="max-w-[1200px] mx-auto bg-[#2A241D] p-12 md:p-24 rounded-tr-[100px] rounded-bl-[100px] relative overflow-hidden flex flex-col items-center text-center shadow-2xl group border border-white/5">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 group-hover:scale-110">
                <Globe size={400} className="text-white" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="font-syne text-[12vw] md:text-[6vw] font-800 uppercase leading-[0.85] tracking-tighter text-[#FAF7F2] mb-10">
                Initiate <br /> 
                <span className="text-[#8B9D83]">Dialogue.</span>
              </h2>

              <p className="text-[#FAF7F2]/40 text-xl md:text-2xl max-w-xl mx-auto mb-16 font-light italic">
                Ready to architect the resonance of your brand? Let’s initiate the symphony.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <a 
                  href="mailto:hello@pentalks.com"
                  className="bg-[#8B9D83] text-[#1C150D] px-12 py-6 rounded-tr-3xl rounded-bl-3xl font-syne font-800 uppercase tracking-widest text-[11px] flex items-center gap-4 transition-all duration-500 hover:bg-[#FAF7F2] shadow-xl"
                >
                  Send Inquiry <ArrowUpRight size={20} />
                </a>

                <a
                  href="https://wa.me/919XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 text-[#FAF7F2] px-12 py-6 rounded-tr-3xl rounded-bl-3xl font-syne font-800 uppercase tracking-widest text-[11px] flex items-center gap-4 transition-all duration-500 hover:bg-white hover:text-[#1C150D]"
                >
                  Connect on WhatsApp <MessageCircle size={20} />
                </a>
              </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;