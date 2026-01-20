import React, { useLayoutEffect } from 'react';
import { Building2, Compass, PenTool, Ruler, Eye, ArrowUpRight, Zap, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MukhamPage = () => {
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

  const services = [
    {
      title: "Architectural Design",
      desc: "Creating innovative structural solutions that balance aesthetic beauty with functional efficiency.",
      img: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326028/service01_px1grb.png",
      icon: <Building2 size={24} />
    },
    {
      title: "Urban Planning",
      desc: "Developing harmonious community layouts that foster growth, sustainability, and human connection.",
      img: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326039/service02_yjh4sc.png",
      icon: <Compass size={24} />
    },
    {
      title: "Interior Identity",
      desc: "Designing internal environments that reflect the brand's soul through curated materials and lighting.",
      img: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326040/service03_rarrut.png",
      icon: <PenTool size={24} />
    },
    {
      title: "Structural Integrity",
      desc: "Providing the technical bone-structure to ensure safety, endurance, and architectural longevity.",
      img: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326040/service04_lwoqpy.png",
      icon: <Ruler size={24} />
    }
  ];

  const crew = [
    { id: "01", name: "Aditya Menon", role: "Founder & Design Lead", status: "CREATIVE HEAD", img: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326688/crew-01_1_gn3yd6.png", desc: "Visionary leader shaping the architectural face of modern identity." },
    { id: "02", name: "Priya Nair", role: "Chief Architect", status: "STUDIO LEAD", img: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325816/crew-02_rkfhyi.png", desc: "Expert in sustainable facade systems and urban structural narratives." },
    { id: "03", name: "Rahul Kapoor", role: "Structural Engineer", status: "TECHNICAL HEAD", img: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325815/crew-03_s9zjfe.png", desc: "The backbone of Mukham, ensuring every design is rooted in safety." },
    { id: "04", name: "Maya Desai", role: "Interior Designer", status: "IDENTITY HEAD", img: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325816/crew-04_l6e2ui.png", desc: "Crafting the soul within the shell to match our clients' character." },
    { id: "05", name: "Zayan Khan", role: "Project Manager", status: "EXECUTION HEAD", img: "https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325826/crew-05_lgqse6.png", desc: "Connecting vision to reality through precision and site management." },
  ];

  return (
    <div className="bg-[#1C150D] min-h-screen selection:bg-[#8B9D83] selection:text-[#1C150D] overflow-x-hidden font-inter">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326030/MukhamHeroBg-mobile_losfv8.png" alt="Hero Mobile" className="w-full h-full object-cover block md:hidden" />
          <img src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326029/MukhamHeroBg_kd7sx4.png" alt="Hero Desktop" className="w-full h-full object-cover hidden md:block" />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-20 flex flex-col items-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <img src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326027/mukham_cover_mo3ttq.png" alt="Mukham Branding" className="max-w-[90vw] md:max-w-[45vw] h-auto mb-8 mx-auto" />
            <p className="font-syne text-[#8B9D83] text-[10px] md:text-sm font-800 uppercase tracking-[0.5em] md:tracking-[0.8em] mt-4">Architectural Design Studio</p>
          </motion.div>
        </div>
      </section>

    <section className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-tr-[120px] rounded-bl-[120px] bg-[#3f200f] flex items-center justify-center shadow-2xl border border-white/5">
              <img src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326027/mukham_logo_qkrps5.png" alt="Logo" className="h-full w-auto object-contain opacity-80" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-10">
            <h2 className="font-syne text-6xl md:text-9xl font-800 text-[#FAF7F2] uppercase tracking-tighter leading-[0.85]">
              About <br /> <span className="outline-text-sage">Us.</span>
            </h2>
            <div className="space-y-8">
                <p className="text-[#FAF7F2] text-xl md:text-3xl font-semibold leading-relaxed italic border-l-4 border-[#8B9D83] pl-8">
                    Mukham Design Studio is the architectural pillar of the collective, dedicated to crafting refined structural masterpieces.
                </p>
                <p className="text-[#FAF7F2]/50 text-lg md:text-xl leading-relaxed font-light">
                    Our approach combines modern structural precision with practical execution, ensuring every project reflects character and longevity. We focus on creating spaces that harmonize with the lifestyle and culture of our clients.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE SECTION --- */}
      <section className="py-20 md:py-32 bg-[#2A241D] px-6 md:px-12 relative overflow-hidden rounded-tr-[60px] md:rounded-tr-[180px] rounded-bl-[60px] md:rounded-bl-[180px]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-syne text-4xl md:text-7xl lg:text-8xl font-800 text-[#FAF7F2] uppercase tracking-tighter mb-8 md:mb-12 leading-none">Why Choose <br /> <span className="text-[#8B9D83]">Mukham?</span></h2>
            <div className="space-y-8 md:space-y-10">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 group text-center md:text-left items-center md:items-start">
                <div className="w-14 h-14 rounded-full bg-[#1C150D] flex items-center justify-center shrink-0 border border-[#8B9D83]/20 group-hover:bg-[#8B9D83] transition-all duration-500">
                  <Zap className="text-[#8B9D83] group-hover:text-[#1C150D]" size={24} />
                </div>
                <div>
                  <h4 className="font-syne font-800 text-xl md:text-2xl uppercase text-[#FAF7F2] mb-2 md:mb-3 tracking-tight">Technical Precision</h4>
                  <p className="text-[#FAF7F2]/40 text-sm md:text-base leading-relaxed font-light">We use industry-leading 3D analysis to ensure that every facade is structurally flawless and visually striking.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 group text-center md:text-left items-center md:items-start">
                <div className="w-14 h-14 rounded-full bg-[#1C150D] flex items-center justify-center shrink-0 border border-[#8B9D83]/20 group-hover:bg-[#8B9D83] transition-all duration-500">
                  <Landmark className="text-[#8B9D83] group-hover:text-[#1C150D]" size={24} />
                </div>
                <div>
                  <h4 className="font-syne font-800 text-xl md:text-2xl uppercase text-[#FAF7F2] mb-2 md:mb-3 tracking-tight">Cultural Resonance</h4>
                  <p className="text-[#FAF7F2]/40 text-sm md:text-base leading-relaxed font-light">Our designs aren't just modern; they are rooted in the specific heritage and personal narrative of the space.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-square bg-[#1C150D] rounded-tr-[80px] md:rounded-tr-[100px] rounded-bl-[80px] md:rounded-bl-[100px] relative overflow-hidden border border-white/5 shadow-2xl">
             <img src="https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768326283/whyChoose_gqbiiv.png" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Studio Excellence" />
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 md:mb-24 gap-4 md:gap-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <h2 className="font-syne text-5xl md:text-8xl lg:text-9xl font-800 text-[#FAF7F2] uppercase tracking-tighter leading-none">Services.</h2>
            <p className="font-inter text-[#8B9D83] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mt-4 md:mt-6">Transforming Identity into Space</p>
          </div>
          <div className="h-[1px] flex-grow bg-[#8B9D83]/10 hidden md:block ml-16"></div>
        </div>

        <div className="flex flex-col gap-6 md:gap-12">
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="group relative w-full overflow-hidden rounded-tr-[40px] md:rounded-tr-[100px] rounded-bl-[40px] md:rounded-bl-[100px] shadow-2xl border border-white/5 bg-[#2A241D] aspect-[2/1] md:aspect-[497/148]">
              <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C150D]/95 via-[#1C150D]/60 to-transparent" />
              <div className="absolute inset-0 p-4 md:p-12 flex items-center justify-between z-10">
                <div className="flex items-center gap-4 md:gap-16">
                  <span className="hidden lg:block font-syne font-800 text-[#FAF7F2]/10 text-8xl xl:text-[10rem] select-none">0{i + 1}</span>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#8B9D83] flex items-center justify-center text-[#1C150D] shrink-0">
                        {React.cloneElement(service.icon, { size: 18 })}
                      </div>
                      <h3 className="text-[#FAF7F2] text-lg md:text-3xl lg:text-4xl font-syne font-800 uppercase tracking-tighter leading-none">{service.title}</h3>
                    </div>
                    <p className="font-inter text-[#FAF7F2]/50 text-[10px] md:text-base lg:text-lg max-w-xl font-light leading-relaxed line-clamp-3 md:line-clamp-none">{service.desc}</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[4px] md:h-[8px] bg-[#8B9D83] w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- THE CREW --- */}
         <section className="py-32 md:py-48 px-6 md:px-12 max-w-[1300px] mx-auto">
           <div className="text-center mb-32">
               <h2 className="font-syne text-6xl md:text-[8vw] font-800 text-[#FAF7F2] uppercase tracking-tighter leading-none">The Crew.</h2>
               <div className="h-[2px] w-32 bg-[#8B9D83] mx-auto mt-10 opacity-40" />
           </div>
   
           <div className="space-y-48 md:space-y-72">
             {crew.map((member, i) => (
               <motion.div 
                 key={member.id} 
                 initial={{ opacity: 0, y: 50 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 viewport={{ once: true }}
                 className={`flex flex-col md:flex-row items-center gap-16 md:gap-32 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} group`}
               >
                 <div className="relative w-full md:w-1/2">
                   {/* FIXED IMAGE: Removed background offset, added group-hover scale, and object-cover */}
                   <div className="aspect-[3/4.5] overflow-hidden relative rounded-tr-[100px] rounded-bl-[100px] ">
                       <img 
                         src={member.img} 
                         className="w-full h-full object-cover object-top grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                         alt={member.name} 
                       />
                       <div className="absolute top-10 right-6 [writing-mode:vertical-lr] text-[10px] font-800 text-[#8B9D83] tracking-[0.5em] uppercase">{member.status}</div>
                   </div>
                 </div>
                 <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                   <h3 className="font-syne text-5xl md:text-7xl font-800 text-[#FAF7F2] uppercase tracking-tighter leading-none">{member.name}</h3>
                   <p className="font-inter text-[#8B9D83] font-bold uppercase tracking-[0.4em] text-xs">{member.role}</p>
                   <p className="font-inter text-[#FAF7F2]/50 text-xl font-light italic leading-relaxed border-l-0 md:border-l-4 border-[#8B9D83]/20 md:pl-8">{member.desc}</p>
                 </div>
               </motion.div>
             ))}
           </div>
         </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 md:py-48 px-6 text-center bg-[#2A241D] rounded-tr-[60px] md:rounded-tr-[100px] rounded-bl-[60px] md:rounded-bl-[100px]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-block p-6 md:p-8 bg-[#1C150D] rounded-full mb-8 md:mb-12 border border-white/5 shadow-2xl">
            <Eye className="w-10 h-10 md:w-14 md:h-14 text-[#8B9D83]" />
          </div>
          <h3 className="font-syne text-4xl md:text-[7vw] font-800 text-[#FAF7F2] uppercase tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12">Ready to show <br /> <span className="text-[#8B9D83]">Your Face?</span></h3>
          <p className="font-inter text-[#FAF7F2]/40 text-base md:text-xl lg:text-2xl mb-12 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed">Let's transform your vision into architectural reality. Start a dialogue with Mukham Studio today.</p>
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#8B9D83] text-[#1C150D] px-8 md:px-20 py-6 md:py-9 rounded-tr-[30px] md:rounded-tr-[40px] rounded-bl-[30px] md:rounded-bl-[40px] font-syne font-800 uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#FAF7F2] transition-all duration-700 shadow-2xl flex items-center justify-center gap-4 md:gap-6 mx-auto group">
              <span>Start a Dialogue</span> 
              <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" size={20} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MukhamPage;