import React from 'react';
import { Building2, Compass, PenTool, Ruler, Eye, CheckCircle2, ArrowUpRight, Zap, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MukhamPage = () => {
  // Service Data with Stock Images
  const services = [
    {
      title: "Architectural Design",
      desc: "Creating innovative structural solutions that balance aesthetic beauty with functional efficiency.",
      img: "/service01.png",
      icon: <Building2 className="text-[white]" size={24} />
    },
    {
      title: "Urban Planning",
      desc: "Developing harmonious community layouts that foster growth, sustainability, and human connection.",
      img: "/service02.png",
      icon: <Compass className="text-[#8B9D83]" size={24} />
    },
    {
      title: "Interior Identity",
      desc: "Designing internal environments that reflect the brand's soul through curated materials and lighting.",
      img: "/service03.png",
      icon: <PenTool className="text-[#8B9D83]" size={24} />
    },
    {
      title: "Structural Integrity",
      desc: "Providing the technical bone-structure to ensure safety, endurance, and architectural longevity.",
      img: "/service04.png",
      icon: <Ruler className="text-[#8B9D83]" size={24} />
    }
  ];

  // Preserved Crew Data
  const crew = [
    { id: "01", name: "Aditya Menon", role: "Founder & Design Lead", status: "CREATIVE HEAD", img: "/crew-01.png", desc: "Visionary leader shaping the architectural face of modern identity." },
    { id: "02", name: "Priya Nair", role: "Chief Architect", status: "STUDIO LEAD", img: "/crew-02.png", desc: "Expert in sustainable facade systems and urban structural narratives." },
    { id: "03", name: "Rahul Kapoor", role: "Structural Engineer", status: "TECHNICAL HEAD", img: "/crew-03.png", desc: "The backbone of Mukham, ensuring every design is rooted in safety." },
    { id: "04", name: "Maya Desai", role: "Interior Designer", status: "IDENTITY HEAD", img: "/crew-04.png", desc: "Crafting the soul within the shell to match our clients' character." },
    { id: "05", name: "Zayan Khan", role: "Project Manager", status: "EXECUTION HEAD", img: "/crew-05.png", desc: "Connecting vision to reality through precision and site management." },
  ];

  return (
    <div className="bg-[#F9F7F2] min-h-screen selection:bg-[#0f4c39] selection:text-white overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* --- HERO SECTION: FULL IMAGE + LARGE CENTERED LOGO --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
   <div className="absolute inset-0 z-0">
  {/* Mobile background */}
  <img
    src="/MukhamHeroBg-mobile.png"
    alt="Hero Background Mobile"
    className="w-full h-full object-cover block md:hidden"
  />

  {/* Desktop background */}
  <img
    src="/MukhamHeroBg.png"
    alt="Hero Background Desktop"
    className="w-full h-full object-cover hidden md:block"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70" />
</div>


        {/* Large Centered Logo Background
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-20">
             <img src="/mugamPng.png" alt="" className="w-[80%] max-w-[800px] h-auto object-contain" />
        </div> */}

        {/* Content Layer */}
        <div className="relative z-20 flex flex-col items-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <img src="/mukham_cover.png" alt="Mukham Branding" className="max-w-[85vw] md:max-w-[50vw] h-auto mb-8 mx-auto" />
            <p className="text-[#8B9D83] text-xs md:text-sm font-bold uppercase tracking-[0.8em] mt-2">Architectural Design Studio</p>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT US --- */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="w-full max-w-[420px] aspect-[4/5] overflow-hidden rounded-tl-[100px] rounded-br-[100px] bg-[#4a250b] flex items-center justify-center shadow-xl">
              <img src="/mukham_logo.png" alt="About" className="h-full w-auto object-contain" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-5xl md:text-8xl font-black text-[#0f4c39] uppercase tracking-tighter leading-[0.8]">
              About <br /> <span className="outline-text">Us.</span>
            </h2>
            <div className="space-y-6">
                <p className="text-[#1C150D] text-lg md:text-2xl font-semibold leading-relaxed italic border-l-4 border-[#8B9D83] pl-6">
                    Mukham Design Studio is a creative architectural and design practice dedicated to crafting meaningful, functional, and aesthetically refined spaces.
                </p>
                <p className="text-[#1C150D]/60 text-base md:text-lg leading-relaxed font-medium">
                    Our approach combines modern design thinking with practical execution, ensuring every project reflects clarity, comfort, and character. We focus on creating spaces that truly match the lifestyle, culture, and personality of our clients.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE SECTION --- */}
      <section className="py-24 bg-white px-6 md:px-12 relative overflow-hidden border-y border-[#0f4c39]/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-7xl font-black text-[#0f4c39] uppercase tracking-tighter mb-12 leading-none">Why Choose <br /> <span className="text-[#8B9D83]">Mukham?</span></h2>
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full bg-[#F9F7F2] flex items-center justify-center shrink-0 border border-[#0f4c39]/10 group-hover:bg-[#0f4c39] transition-colors duration-500"><Zap className="text-[#0f4c39] group-hover:text-white" size={20} /></div>
                <div>
                  <h4 className="font-bold text-xl uppercase text-[#0f4c39] mb-2 tracking-tight">Technical Precision</h4>
                  <p className="text-[#1C150D]/60 text-sm leading-relaxed font-medium">We use industry-leading 3D analysis to ensure that every facade is not only beautiful but structurally flawless.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full bg-[#F9F7F2] flex items-center justify-center shrink-0 border border-[#0f4c39]/10 group-hover:bg-[#0f4c39] transition-colors duration-500"><Landmark className="text-[#0f4c39] group-hover:text-white" size={20} /></div>
                <div>
                  <h4 className="font-bold text-xl uppercase text-[#0f4c39] mb-2 tracking-tight">Cultural Resonance</h4>
                  <p className="text-[#1C150D]/60 text-sm leading-relaxed font-medium">Our designs aren't just modern; they are rooted in the specific heritage and personal story of the space.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-square bg-[#F9F7F2] rounded-tr-[120px] rounded-bl-[120px] relative overflow-hidden border border-[#0f4c39]/5">
             <img src="/whyChoose.png" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Studio Excellence" />
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
     <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
  {/* --- SECTION HEADER --- */}
  <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4">
    <div>
      <h2 className="text-5xl md:text-8xl font-black text-[#0f4c39] uppercase tracking-tighter leading-none">
        Services.
      </h2>
      <p className="text-[#8B9D83] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mt-4">
        Transforming Identity into Space
      </p>
    </div>
    <div className="h-[1px] flex-grow bg-[#0f4c39]/10 hidden md:block ml-12"></div>
  </div>

  {/* --- FIXED ASPECT RATIO SLATS --- */}
  <div className="flex flex-col gap-6 md:gap-10">
    {services.map((service, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative w-full overflow-hidden rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px] shadow-lg border border-[#0f4c39]/5 bg-[#1C150D]"
        /* This style ensures the container height is always exactly 
           calculated based on the 497x148 ratio (approx 29.7% height of width)
        */
        style={{ aspectRatio: '497 / 148' }}
      >
        {/* Background Image - Now set to full width/height with no cropping */}
        <img 
          src={service.img} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-fill md:object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        
        {/* Dynamic Gradient Overlay - Made lighter to show more image detail */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C150D]/90 via-[#1C150D]/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

        {/* Content Container */}
        <div className="absolute inset-0 p-4 md:p-8 lg:px-16 flex items-center justify-between z-10">
          <div className="flex items-center gap-4 md:gap-12">
            {/* Index Number */}
            <span className="hidden lg:block font-black text-white/10 text-7xl xl:text-9xl select-none">
              0{i + 1}
            </span>

            <div className="flex flex-col">
              <div className="flex items-center gap-3 md:gap-4 mb-1 md:mb-3">
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#8B9D83] flex items-center justify-center text-[#1C150D] shrink-0">
                  {/* Scaling the icon for the custom height */}
                  {React.cloneElement(service.icon, { size: 18 })}
                </div>
                <h3 className="text-white text-lg md:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-none">
                  {service.title}
                </h3>
              </div>
              <p className="text-white/60 text-[9px] md:text-sm lg:text-base max-w-[200px] md:max-w-md lg:max-w-xl font-medium leading-relaxed line-clamp-2 md:line-clamp-none">
                {service.desc}
              </p>
            </div>
          </div>

       
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 h-[3px] md:h-[6px] bg-[#8B9D83] w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
      </motion.div>
    ))}
  </div>
</section>
      {/* --- THE CREW: MONOCHROME & NO SHADOWS --- */}
      <section className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="text-center mb-32">
            <h2 className="text-6xl md:text-[8vw] font-black text-[#0f4c39] uppercase tracking-tighter leading-none">The Crew.</h2>
            <div className="h-[2px] w-24 bg-[#8B9D83] mx-auto mt-8 opacity-40" />
        </div>

        <div className="space-y-48 md:space-y-64">
          {crew.map((member, i) => (
            <motion.div 
              key={member.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="relative w-full md:w-1/2">
                <div className={`absolute inset-0 bg-[#0f4c39]/5 -z-10 translate-x-4 translate-y-4
                  ${i % 2 === 0 ? 'rounded-tl-[120px] rounded-br-[120px]' : 'rounded-tr-[120px] rounded-bl-[120px]'}
                `} />
                <div className="aspect-[3/4] overflow-hidden relative ">
                    <img src={member.img} className="w-full h-full object-cover grayscale contrast-125 brightness-95" alt={member.name} />
                    <div className="absolute top-10 right-4 [writing-mode:vertical-lr] text-[10px] font-black text-red-600 tracking-[0.4em] uppercase">
                        {member.status}
                    </div>
                    {/* <div className="absolute bottom-4 left-6 text-white/40 font-black text-8xl select-none leading-none">
                        {member.id}
                    </div> */}
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                {/* <div className="flex items-center justify-center md:justify-start gap-4">
                    <span className="text-[#8B9D83] font-black text-xs tracking-widest">({member.id})</span>
                    <div className="h-[1px] w-12 bg-[#8B9D83]" />
                </div> */}
                <h3 className="text-4xl md:text-6xl font-black text-[#0f4c39] uppercase tracking-tighter leading-none">
                  {member.name}
                </h3>
                <p className="text-[#8B9D83] font-bold uppercase tracking-[0.3em] text-xs">
                  {member.role}
                </p>
                <p className="text-[#1C150D]/60 text-lg italic leading-relaxed border-l-0 md:border-l-4 border-[#8B9D83] md:pl-6 font-medium">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 md:py-40 px-6 text-center bg-[#1C150D] rounded-t-[80px]">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-6 bg-white/5 rounded-full mb-10">
            <Eye className="w-12 h-12 text-[#8B9D83]" />
          </div>
          <h3 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">Ready to show <br /> <span className="text-[#8B9D83]">Your Face?</span></h3>
          <p className="text-white/40 text-base md:text-xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed">Let's transform your ideas into architectural reality. Start a conversation with Mukham Studio today.</p>
          <Link to="/contact">
            <button className="bg-[#0f4c39] text-white px-10 md:px-16 py-6 md:py-8 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#8B9D83] hover:text-[#1C150D] transition-all duration-500 shadow-xl flex items-center justify-center gap-4 mx-auto group">
              Start a Dialogue <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </button>
          </Link>
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
      `}</style>
    </div>
  );
};

export default MukhamPage;