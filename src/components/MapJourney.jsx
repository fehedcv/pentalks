import React, { useEffect, useRef, useState } from 'react';
import { Turtle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURATION ---
const PATH_D = "M 100 300 C 300 300, 400 100, 600 100 C 800 100, 900 500, 1100 500 C 1300 500, 1400 300, 1600 300";

const CHECKPOINTS = [
  { id: 1, x: 600, y: 100, progress: 0.35, title: 'Design Evolution', desc: 'Identity that adapts to its environment.', label: 'Node 01' },
  { id: 2, x: 1100, y: 500, progress: 0.65, title: 'Pentalks Core', desc: 'The shell where narrative meets structure.', label: 'Node 02' },
  { id: 3, x: 1600, y: 300, progress: 0.95, title: 'Future Expansion', desc: 'Deep sea currents of creative strategy.', label: 'Node 03' },
];

export default function TurtleJourney() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const turtleGroupRef = useRef(null);
  const [activeCheckpoint, setActiveCheckpoint] = useState(null);

  // Animation Refs
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const reqIdRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = length;
      pathRef.current.style.strokeDashoffset = length;
    }
  }, []);

  useEffect(() => {
    const updatePhysics = () => {
      const diff = targetRef.current - progressRef.current;
      const speed = 0.05; 

      if (Math.abs(diff) > 0.0001) {
        progressRef.current += diff * speed;
      } else {
        progressRef.current = targetRef.current;
      }

      const p = Math.max(0, Math.min(1, progressRef.current));

      if (pathRef.current && turtleGroupRef.current) {
        const path = pathRef.current;
        const len = path.getTotalLength();
        const point = path.getPointAtLength(p * len);
        const lookAheadDist = Math.min(len, p * len + 5);
        const nextPoint = path.getPointAtLength(lookAheadDist);
        
        const dy = nextPoint.y - point.y;
        const dx = nextPoint.x - point.x;
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);

        turtleGroupRef.current.setAttribute(
          'transform', 
          `translate(${point.x}, ${point.y}) rotate(${angle})`
        );
        
        path.style.strokeDashoffset = len * (1 - p);

        // Active Checkpoint Logic
        const currentActive = CHECKPOINTS.find(cp => p > cp.progress - 0.05 && p < cp.progress + 0.05);
        setActiveCheckpoint(currentActive ? currentActive.id : null);
      }

      reqIdRef.current = requestAnimationFrame(updatePhysics);
    };

    reqIdRef.current = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const win = window.innerHeight;
      const progress = (-top) / (height - win);
      targetRef.current = Math.max(0, Math.min(1, progress));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#F9F7F2] overflow-visible">
      
      {/* --- STICKY VIEWPORT --- */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* --- ARCHITECTURAL BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#0f4c39 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F9F7F2] via-transparent to-[#F9F7F2]" />
          
          {/* Vertical Decoration */}
          <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden md:block">
            <p className="font-syne text-[10px] font-black uppercase tracking-[0.8em] text-[#0f4c39]/20 [writing-mode:vertical-lr] rotate-180">
              The Path of Resilience — Node.Structure
            </p>
          </div>
        </div>

        {/* --- INTERACTIVE SVG SCENE --- */}
        <div className="w-full h-full max-w-[1600px] relative z-10 p-12">
          
          {/* Section Title */}
          <div className="absolute top-12 left-12 z-20">
            <h2 className="font-syne text-5xl md:text-7xl font-black text-[#0f4c39] uppercase tracking-tighter leading-none">
              The <br /> <span className="text-[#8B9D83]">Journey.</span>
            </h2>
          </div>

          <svg viewBox="0 0 1800 600" className="w-full h-full overflow-visible translate-y-12">
            {/* Background Trace */}
            <path
              d={PATH_D}
              fill="none"
              stroke="#0f4c39"
              strokeWidth="1"
              strokeDasharray="10 15"
              className="opacity-10"
            />

            {/* Solid Progress Path */}
            <path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke="#0f4c39"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Checkpoint Indicators */}
            {CHECKPOINTS.map((point) => (
              <g key={point.id}>
                <circle 
                  cx={point.x} cy={point.y} r="6" 
                  fill={activeCheckpoint === point.id ? "#8B9D83" : "#0f4c39"}
                  className="transition-colors duration-500" 
                />
                <circle 
                   cx={point.x} cy={point.y} r="12" 
                   fill="none" stroke="#8B9D83" strokeWidth="1" 
                   className={`transition-all duration-700 ${activeCheckpoint === point.id ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`}
                />
              </g>
            ))}

            {/* THE TURTLE --- */}
            <g ref={turtleGroupRef}>
              <foreignObject x="-40" y="-40" width="80" height="80">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative p-3 bg-[#0f4c39] rounded-full shadow-2xl border-4 border-[#F9F7F2]">
                    <Turtle size={24} className="text-[#F9F7F2]" />
                  </div>
                </div>
              </foreignObject>
            </g>
          </svg>

          {/* --- OVERLAY CONTENT: SCUTE CARDS --- */}
          <div className="absolute bottom-12 right-12 w-full max-w-md pointer-events-none">
            <AnimatePresence mode="wait">
              {activeCheckpoint ? (
                <motion.div
                  key={activeCheckpoint}
                  initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                  className="bg-white p-10 rounded-tl-[80px] rounded-br-[80px] shadow-2xl border border-[#0f4c39]/5"
                >
                  <span className="text-[#8B9D83] font-black text-[10px] uppercase tracking-[0.4em] block mb-4">
                    {CHECKPOINTS.find(c => c.id === activeCheckpoint).label}
                  </span>
                  <h3 className="font-syne text-3xl font-black text-[#0f4c39] uppercase tracking-tighter mb-4">
                    {CHECKPOINTS.find(c => c.id === activeCheckpoint).title}
                  </h3>
                  <p className="text-[#1C150D]/60 text-lg leading-relaxed italic border-l-2 border-[#8B9D83] pl-6 mb-6">
                    {CHECKPOINTS.find(c => c.id === activeCheckpoint).desc}
                  </p>
                  <div className="flex items-center gap-2 text-[#0f4c39] font-bold text-xs uppercase tracking-widest">
                    Continue Scrolling <ChevronRight size={14} className="animate-pulse" />
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-right"
                >
                  <p className="font-syne text-xs font-black text-[#0f4c39]/20 uppercase tracking-[0.5em]">
                    Scroll to advance the timeline
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* --- ENDING SECTION --- */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-syne text-[10vw] font-black text-[#0f4c39] uppercase tracking-tighter leading-none mb-8 outline-text">
            To be <br /> continued
          </h2>
          <p className="text-[#8B9D83] font-black uppercase tracking-[0.8em] text-xs">
            Journey of Turtles
          </p>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 2px #0f4c39;
        }
        @media (min-width: 768px) {
          .outline-text { -webkit-text-stroke: 3px #0f4c39; }
        }
      `}</style>
    </div>
  );
}