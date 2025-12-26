import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // സ്ക്രീൻ സൈസ് ചെക്ക് ചെയ്യുന്നു
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

  // ഡെസ്ക്ടോപ്പിൽ മാത്രം പ്രവർത്തിക്കുന്ന അനിമേഷൻസ്
  const xGhost = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xMovement = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const steps = [
    { 
      icon: <Search className="w-10 h-10" />, 
      id: "01", 
      title: "Discovery", 
      tag: "GENESIS",
      desc: "We dive deep into understanding your vision, goals, and the essence of what makes you unique." 
    },
    { 
      icon: <Lightbulb className="w-10 h-10" />, 
      id: "02", 
      title: "Strategy", 
      tag: "STRUCTURE",
      desc: "Armed with insights, we craft a strategic roadmap that aligns creativity with purpose." 
    },
    { 
      icon: <PenTool className="w-10 h-10" />, 
      id: "03", 
      title: "Creation", 
      tag: "SYNTHESIS",
      desc: "Our team brings ideas to life through meticulous design and thoughtful execution." 
    },
    { 
      icon: <Rocket className="w-10 h-10" />, 
      id: "04", 
      title: "Launch", 
      tag: "ASCENSION",
      desc: "We deliver polished work and support you as your brand takes flight." 
    },
  ];

  return (
    <section 
      ref={containerRef}
      // മൊബൈലിൽ h-auto, ഡെസ്ക്ടോപ്പിൽ 400vh
      className={`relative bg-[#F9F7F2] md:py-16 ${isMobile ? "h-auto py-24 px-6" : "min-h-[400vh]"}`}
    >
      {/* കണ്ടെയ്നർ: മൊബൈലിൽ സാധാരണ നിലയിലും ഡെസ്ക്ടോപ്പിൽ സ്റ്റിക്കിയായും പ്രവർത്തിക്കും */}
      <div className={`${isMobile ? "relative" : "sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden"}`}>
        
        {/* പശ്ചാത്തല ടെക്സ്റ്റ് (ഡെസ്ക്ടോപ്പിൽ മാത്രം പാരലാക്സ്) */}
        {!isMobile && (
          <motion.h2 
            style={{ x: xGhost }}
            className="absolute top-1/2 -translate-y-1/2 left-0 text-[30vw] font-black text-[#0f4c39]/[0.02] select-none uppercase leading-none whitespace-nowrap"
          >
            Resilience Core
          </motion.h2>
        )}

        <div className={`relative z-30 ${isMobile ? "w-full" : "px-8 md:px-24"}`}>
          
          {/* ഹെഡിംഗ്: How we work */}
          <div className="mb-12 md:mb-20 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-4 md:mb-6"
            >
              <div className="h-[2px] w-12 md:w-16 bg-[#0f4c39]" />
              <span className="text-[10px] font-black tracking-[0.5em] text-[#0f4c39] uppercase">The Workflow Architecture</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl lg:text-[8vw] font-black text-[#1C150D] uppercase tracking-tighter leading-[0.9]">
              How we <br /> 
              <span className="text-transparent stroke-2 stroke-[#0f4c39]">work.</span>
            </h2>
          </div>

          {/* കാർഡുകൾ: മൊബൈലിൽ വെർട്ടിക്കൽ ഗ്രിഡ്, ഡെസ്ക്ടോപ്പിൽ ഹൊറിസോണ്ടൽ മൂവ്‌മെന്റ് */}
          <motion.div 
            style={{ x: isMobile ? "0%" : xMovement }}
            className={`flex ${isMobile ? "flex-col gap-10" : "gap-8 md:gap-12 w-[350%] md:w-[250%]"}`}
          >
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`${isMobile ? "w-full" : "w-[300px] md:w-[480px] flex-shrink-0"} group`}
              >
                {/* മോഡേൺ കാർഡ് ഡിസൈൻ */}
                <div className="relative bg-white border border-[#0f4c39]/10 p-10 md:p-16 rounded-[30px] md:rounded-[40px] shadow-[0_40px_100px_rgba(15,76,57,0.03)] transition-all duration-700 md:group-hover:-translate-y-4 shadow-sm md:group-hover:shadow-[0_60px_120px_rgba(15,76,57,0.06)]">
                  
                  {/* Phase ID */}
                  <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 bg-[#0f4c39] rounded-2xl flex items-center justify-center rotate-6 md:group-hover:rotate-0 transition-transform duration-500 shadow-xl z-20">
                    <span className="text-white font-black text-xl md:text-2xl font-mono">{step.id}</span>
                  </div>

                  <div className="text-[#0f4c39] mb-6 md:mb-8 opacity-60 md:opacity-40 md:group-hover:opacity-100 transition-opacity">
                    {step.icon}
                  </div>

                  <div className="space-y-4">
                    <span className="text-[9px] font-black tracking-[0.4em] text-[#8B9D83] block uppercase italic">
                      // PHASE_{step.tag}
                    </span>
                    
                    <h3 className="text-2xl md:text-4xl font-black text-[#1C150D] uppercase tracking-tighter leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm md:text-lg text-[#1C150D]/50 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* ആമയുടെ ഷെൽ വാട്ടർമാർക്ക് */}
                  <div className="absolute bottom-6 right-6 opacity-5">
                    <svg width="60" height="60" viewBox="0 0 100 100" className="fill-[#0f4c39]">
                      <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .stroke-2 { -webkit-text-stroke: 2.5px #0f4c39; }
        @media (max-width: 768px) {
          .stroke-2 { -webkit-text-stroke: 1.2px #0f4c39; }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;