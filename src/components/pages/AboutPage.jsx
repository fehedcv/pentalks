import React from 'react';
import { Target, Users, Layers, Heart, Globe, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const COLORS = {
    sand: "#F9F7F2",
    moss: "#8B9D83",
    forest: "#0f4c39",
    espresso: "#1C150D",
    white: "#FFFFFF"
  };

  const team = [
    { 
      name: "Aditya Menon", 
      role: "Founder & Creative Director", 
      desc: "Visionary leader with 15+ years in brand strategy and design.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      name: "Priya Nair", 
      role: "Head of Architecture", 
      desc: "Award-winning architect specializing in sustainable design.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      name: "Rahul Kapoor", 
      role: "Audio Director", 
      desc: "Former radio producer turned podcast innovator.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      name: "Maya Desai", 
      role: "Strategy Lead", 
      desc: "Brand strategist with experience at Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
    },
  ];

  const values = [
    { icon: Target, title: "Clarity", text: "Cutting through the noise to find the core message that defines your brand." },
    { icon: Users, title: "Community", text: "Building brands that people actually want to belong to and engage with." },
    { icon: Layers, title: "Depth", text: "Creating work that stands up to scrutiny and the test of time." },
    { icon: Heart, title: "Passion", text: "Every project receives our full creative energy and dedication." },
  ];

  const milestones = [
    { year: "2018", title: "The Beginning", desc: "Pentalks founded with a vision to blend architecture and storytelling." },
    { year: "2019", title: "Mukham Launch", desc: "Our architectural studio opened its doors, completing 10 projects in year one." },
    { year: "2021", title: "Ver Podcast Network", desc: "Launched our podcast network, reaching 100K listeners in 6 months." },
    { year: "2023", title: "Global Expansion", desc: "Expanded operations to serve clients across 15+ countries." },
    { year: "2024", title: "Award Recognition", desc: "Received multiple design and innovation awards for our work." },
  ];

  return (
    <div className="bg-[#F9F7F2] min-h-screen font-sans selection:bg-[#0f4c39] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
          <div className="flex-1 z-10">
            <h1 className="font-syne text-[14vw] md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter text-[#0f4c39]">
              The <br /> Origin <br /> 
              <span className="outline-text">Story.</span>
            </h1>
          </div>
          <div className="flex-1 lg:max-w-md pb-4">
            <p className="text-[#1C150D] text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#8B9D83] pl-6">
              How a conversation about space and story became something bigger.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE NARRATIVE --- */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[4/5] bg-[#0f4c39] rounded-tl-[120px] rounded-br-[120px] relative overflow-hidden group shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop" 
                alt="Architecture"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c39] to-transparent opacity-40" />
               <div className="absolute bottom-10 left-10 text-white z-10">
                  <p className="font-syne text-6xl font-black opacity-20">PENT.</p>
               </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 order-1 lg:order-2">
            <p className="text-2xl md:text-4xl font-syne font-bold text-[#0f4c39] leading-tight tracking-tighter uppercase">
                Architecture & Narrative <br /> are two sides of the same coin.
            </p>
            <div className="space-y-6 text-[#1C150D]/80 text-lg leading-relaxed max-w-2xl">
              <p>
                Pentalks began as a conversation about the intersection of space and story. We realized that both require structure, both need soul, and both must stand the test of time.
              </p>
              <p>
                From this insight, Pentalks was born—a creative collective that builds brands the way architects build landmarks. Today, we work with visionaries across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES: DARK MODE SHELL --- */}
      <section className="bg-[#0f4c39] py-24 md:py-32 px-6 md:px-12 rounded-t-[60px] md:rounded-t-[150px] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2 className="font-syne text-5xl md:text-7xl font-black text-[#F9F7F2] uppercase tracking-tighter">
              Our <br /> <span className="text-[#8B9D83]">Values</span>
            </h2>
            <p className="text-[#F9F7F2]/60 max-w-xs font-bold uppercase tracking-widest text-[10px]">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {values.map((item, i) => (
              <div key={i} className="bg-[#0f4c39] p-10 group hover:bg-[#155a45] transition-colors duration-500">
                <item.icon className="w-10 h-10 text-[#8B9D83] mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="font-syne text-xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MILESTONES --- */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <h2 className="font-syne text-5xl font-black text-[#0f4c39] uppercase tracking-tighter mb-16 text-center">Our Journey</h2>
        <div className="relative border-l-2 border-[#0f4c39]/10 ml-4 md:ml-auto md:mr-auto max-w-3xl space-y-16">
          {milestones.map((ms, i) => (
            <div key={i} className="relative pl-12">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0f4c39]" />
              <span className="font-syne text-[#8B9D83] font-black text-2xl block mb-2">{ms.year}</span>
              <h4 className="text-[#0f4c39] text-2xl font-black uppercase tracking-tight mb-2">{ms.title}</h4>
              <p className="text-[#1C150D]/70 max-w-md leading-relaxed">{ms.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TEAM: FULL COLOR ALWAYS --- */}
      <section className="py-24 px-6 md:px-12 bg-white rounded-b-[60px] md:rounded-b-[150px] shadow-sm">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="font-syne text-5xl font-black text-[#0f4c39] uppercase tracking-tighter">Meet the Team</h2>
            <div className="h-1 w-24 bg-[#8B9D83] mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <div key={i} className="group">
                {/* Removed grayscale classes - Image is always normal color */}
                <div className="aspect-[3/4] bg-[#F9F7F2] rounded-tl-[80px] rounded-br-[80px] mb-6 overflow-hidden relative transition-all duration-700">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[#0f4c39] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo opacity-10" />
                </div>
                <h4 className="font-syne text-xl font-bold text-[#0f4c39] mb-1 uppercase tracking-tighter">{member.name}</h4>
                <p className="text-[#8B9D83] text-[10px] font-black uppercase tracking-[0.2em] mb-4">{member.role}</p>
                <p className="text-[#1C150D]/60 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW CTA SECTION: INITIATE DIALOGUE --- */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#1C150D] p-12 md:p-24 rounded-tl-[100px] rounded-br-[100px] relative overflow-hidden flex flex-col items-center text-center shadow-2xl group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <Globe size={400} className="text-white" />
            </div>
            
         <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative z-10"
>
  <h2 className="font-syne text-[10vw] md:text-[6vw] font-black uppercase leading-[0.8] tracking-tighter text-white mb-8">
    Start a <br /> 
    <span className="text-[#8B9D83]">Conversation.</span>
  </h2>

  <p className="text-white/40 text-lg md:text-xl max-w-xl mx-auto mb-12 italic">
    Ready to work together on your brand or project?  
    Let’s talk and build something meaningful.
  </p>

  <div className="flex flex-col sm:flex-row gap-6 justify-center">
    {/* EMAIL */}
    <a 
      href="mailto:hello@pentalks.com"
      className="bg-[#0f4c39] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center gap-4 hover:bg-[#8B9D83] hover:text-[#1C150D] transition-all duration-500 shadow-xl"
    >
      Send Email <ArrowUpRight size={18} />
    </a>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/919XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/5 border border-white/10 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center gap-4 hover:bg-white hover:text-[#1C150D] transition-all duration-500"
    >
      Chat on WhatsApp <MessageCircle size={18} />
    </a>
  </div>
</motion.div>

        </div>
      </section>

      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1.5px #0f4c39;
        }
        @media (min-width: 768px) {
          .outline-text { -webkit-text-stroke: 3px #0f4c39; }
        }
        .ease-expo {
            transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
      `}</style>
    </div>
  );
};

export default AboutPage;