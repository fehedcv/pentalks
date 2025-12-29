import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // ടൈമിംഗ് ഫിക്സ്: കാർഡുകൾ 0% മുതൽ 88% വരെ നീങ്ങും, ഉടനെ തന്നെ 88% മുതൽ എക്സിറ്റ് തുടങ്ങും
  const xMovement = useTransform(scrollYProgress, [0, 0.88], ["0%", "-85%"]); 
  const sectionExitX = useTransform(scrollYProgress, [0.88, 1], ["0%", "100%"]);
  const sectionOpacity = useTransform(scrollYProgress, [0.88, 0.98], [1, 0]);

  const xGhost = useTransform(scrollYProgress, [0, 0.88], ["0%", "-30%"]); 
  const yScute = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const steps = [
    { icon: <Search className="w-10 h-10" />, id: "01", title: "Discovery", tag: "GENESIS", desc: "We dive deep into understanding your vision, goals, and the essence of what makes you unique." },
    { icon: <Lightbulb className="w-10 h-10" />, id: "02", title: "Strategy", tag: "STRUCTURE", desc: "Armed with insights, we craft a strategic roadmap that aligns creativity with purpose." },
    { icon: <PenTool className="w-10 h-10" />, id: "03", title: "Creation", tag: "SYNTHESIS", desc: "Our team brings ideas to life through meticulous design and thoughtful execution." },
    { icon: <Rocket className="w-10 h-10" />, id: "04", title: "Launch", tag: "ASCENSION", desc: "We deliver polished work and support you as your brand takes flight." },
  ];

  return (
    <section 
      ref={containerRef}
      // Delay ഒഴിവാക്കാൻ ഹൈറ്റ് 550vh ആയി കുറച്ചു
      className={`relative bg-[#F9F7F2] ${isMobile ? "h-auto" : "min-h-[550vh]"}`}
    >
      {/* TURTLE HOME JOINT */}
      <div className={`absolute top-0 left-0 w-full pointer-events-none z-40 overflow-hidden ${isMobile ? "h-[25vh]" : "h-[40vh]"}`}>
         <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="#0f4c39" d="M0,0L1440,0L1440,224C1320,280,1200,320,960,320C720,320,480,250,240,240C120,235,0,260,0,320Z"></path>
         </svg>
         <motion.div style={{ y: yScute }} className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-overlay">
             <img src="/logogreen.png" alt="Logo" className="w-[150px] md:w-[250px] grayscale brightness-200" />
         </motion.div>
      </div>

      <motion.div 
        style={{ x: isMobile ? 0 : sectionExitX, opacity: isMobile ? 1 : sectionOpacity }}
        className={`${isMobile ? "relative pt-[30vh] pb-24 px-6" : "sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pt-[5vh]"}`}
      >
        {!isMobile && (
          <motion.h2 
            style={{ x: xGhost }}
            className="absolute top-2/3 -translate-y-1/2 left-0 text-[35vw] font-black text-[#0f4c39]/[0.02] select-none uppercase leading-none whitespace-nowrap tracking-tighter"
          >
            Evolution Core
          </motion.h2>
        )}

        <div className={`relative z-30 ${isMobile ? "w-full" : "px-12 md:px-24"}`}>
          <div className="mb-12 md:mb-16 max-w-5xl">
           
            
            <h2 className="text-5xl md:text-7xl lg:text-[9vw] font-black text-[#1C150D] uppercase tracking-tighter leading-[0.85] mb-4">
              How we <br /> 
              {/* "work" വ്യക്തമായി കാണാൻ സ്ട്രോക്ക് സ്റ്റൈൽ റിഫൈൻ ചെയ്തു */}
              <span className="text-transparent outline-text">work.</span>
            </h2>
          </div>

          <motion.div 
            style={{ x: isMobile ? "0%" : xMovement }}
            className={`flex ${isMobile ? "flex-col gap-12" : "gap-12 md:gap-16 w-[450%] md:w-[350%]"}`}
          >
            {steps.map((step, idx) => (
              <div key={idx} className={`${isMobile ? "w-full" : "w-[400px] md:w-[600px] flex-shrink-0"} group`}>
                <div className="relative bg-white border border-[#0f4c39]/10 p-10 md:p-14 lg:p-16 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[30px] rounded-bl-[30px] shadow-[0_40px_100px_rgba(15,76,57,0.03)] transition-all duration-1000 group-hover:-translate-y-4 overflow-hidden min-h-[400px] flex flex-col justify-between">
                  
                  {/* Phase Numeric ID */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#0f4c39] rounded-bl-[40px] flex items-center justify-center">
                    <span className="text-white font-black text-xl md:text-2xl font-mono translate-x-1 -translate-y-1">{step.id}</span>
                  </div>

                  <div className="text-[#0f4c39] mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                    {step.icon}
                  </div>

                  <div className="space-y-4 relative z-10 flex-grow">
                    <span className="text-[9px] font-black tracking-[0.5em] text-[#8B9D83] block uppercase italic">// NODE_{step.tag}</span>
                    <h3 className="text-3xl md:text-5xl font-black text-[#1C150D] uppercase tracking-tighter leading-none mb-4">{step.title}</h3>
                    <p className="text-base md:text-lg text-[#1C150D]/60 font-medium leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>

                  <div className="absolute -bottom-8 -left-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                    <svg width="200" height="200" viewBox="0 0 100 100" className="fill-[#0f4c39]">
                      <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            
            {!isMobile && <div className="w-[100px] flex-shrink-0" />}
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        /* "work" വ്യക്തമായി കാണാൻ വേണ്ടിയുള്ള CSS */
        .outline-text {
          -webkit-text-stroke: 2.5px #0f4c39;
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .outline-text { -webkit-text-stroke: 1.2px #0f4c39; }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;