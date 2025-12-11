import React, { useEffect, useRef } from 'react';
import { Turtle } from 'lucide-react';

// --- CONFIGURATION ---
const PATH_D = "M 50 400 C 150 400, 200 150, 350 150 C 500 150, 550 450, 700 450 C 850 450, 900 150, 1050 150 C 1200 150, 1250 350, 1350 350";

const CHECKPOINTS = [
  { id: 1, x: 350, y: 150, title: 'DESIGN THAT GROWS', desc: 'Identity that evolves.', align: 'top' },
  { id: 2, x: 700, y: 450, title: 'PENTALKS', desc: 'A new beginning.', align: 'bottom' },
  { id: 3, x: 1050, y: 150, title: 'EXPANSION', desc: 'Finding new currents.', align: 'top' },
  { id: 4, x: 1350, y: 350, title: 'LATECOMERS', desc: 'Found their place.', align: 'right' },
];

export default function TurtleJourney() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const turtleGroupRef = useRef(null);

  // Physics state
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const reqIdRef = useRef(null);

  // 1. Initialize path drawing
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = length;
      pathRef.current.style.strokeDashoffset = length;
    }
  }, []);

  // 2. Physics & Animation Loop
  useEffect(() => {
    const updatePhysics = () => {
      // --- SMOOTHING LOGIC ---
      const diff = targetRef.current - progressRef.current;
      const speed = 0.04; 

      if (Math.abs(diff) > 0.0001) {
        progressRef.current += diff * speed;
      } else {
        progressRef.current = targetRef.current;
      }

      const p = Math.max(0, Math.min(1, progressRef.current));

      // --- PATH LOGIC ---
      if (pathRef.current && turtleGroupRef.current) {
        const path = pathRef.current;
        const len = path.getTotalLength();
        
        const point = path.getPointAtLength(p * len);
        const lookAheadDist = Math.min(len, p * len + 4);
        const nextPoint = path.getPointAtLength(lookAheadDist);
        
        const dy = nextPoint.y - point.y;
        const dx = nextPoint.x - point.x;
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);

        turtleGroupRef.current.setAttribute(
          'transform', 
          `translate(${point.x}, ${point.y}) rotate(${angle})`
        );
        
        path.style.strokeDashoffset = len * (1 - p);
      }

      // --- CHECKPOINT ANIMATIONS ---
      CHECKPOINTS.forEach((_, index) => {
        const el = document.getElementById(`checkpoint-${index}`);
        if (!el) return;

        const triggerPoint = (index + 1) * 0.22;
        let opacity = 0;
        let translateY = 20;

        if (p > triggerPoint - 0.08) {
          const fadeProgress = Math.min(1, (p - (triggerPoint - 0.08)) / 0.08);
          opacity = fadeProgress;
          translateY = 20 - fadeProgress * 20;
        }

        el.style.opacity = opacity;
        el.style.transform = `translateY(${translateY}px)`;
      });

      // --- END TEXT ANIMATION ---
      const endText = document.getElementById('end-text');
      if (endText) {
        const start = 0.9;
        let op = 0;
        if (p > start) op = (p - start) * 10;
        endText.style.opacity = Math.min(1, op);
      }

      reqIdRef.current = requestAnimationFrame(updatePhysics);
    };

    reqIdRef.current = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, []);

  // 3. Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const win = window.innerHeight;
      const scrollDist = -top;
      const total = height - win;
      let progress = scrollDist / total;
      targetRef.current = Math.max(0, Math.min(1, progress));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // --- ROOT CONTAINER: FULL WIDTH BREAKOUT ---
    <div 
      ref={containerRef} 
      className="relative w-screen left-1/2 -translate-x-1/2 h-[400vh] bg-black"
    >
      
      {/* --- STICKY VIEWPORT --- */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

        {/* --- BACKGROUND IMAGE (Static) --- */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
  <img 
    src="/map.png" 
    className="w-full h-full object-cover scale-125 transition-transform duration-[5000ms] ease-out"
  />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")` }}
        />

        {/* --- MAIN SVG SCENE --- */}
        <div className="w-full h-full max-w-[1400px] aspect-video relative flex items-center justify-center z-10">
          <svg viewBox="0 0 1400 600" className="w-full h-full overflow-visible">

            {/* Dashed Background Path */}
            <path
              d={PATH_D}
              fill="none"
              stroke="#e9f0d8"
              strokeWidth="3"
              strokeDasharray="10 10"
              strokeLinecap="round"
              className="opacity-30"
            />

            {/* Solid Animated Path */}
            <path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke="#e9f0d8"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ filter: 'drop-shadow(0 0 8px rgba(233,240,216, 0.4))' }}
            />

            {/* Checkpoints */}
            {CHECKPOINTS.map((point, i) => (
              <g key={i}>
                <circle cx={point.x} cy={point.y} r="8" fill="#e9f0d8" />
                <foreignObject
                  x={point.x - 150}
                  y={point.align === 'top' ? point.y - 150 : point.y + 30}
                  width="300"
                  height="140"
                >
                  <div
                    id={`checkpoint-${i}`}
                    className="flex flex-col items-center text-center h-full justify-center will-change-transform"
                    style={{ opacity: 0 }}
                  >
                    <h4 className="font-sans font-bold text-[#e9f0d8] text-xl uppercase tracking-wider whitespace-nowrap drop-shadow-lg">
                      {point.title}
                    </h4>
                    <p className="font-mono text-white/80 font-bold text-[11px] uppercase tracking-widest mt-1 max-w-[200px] drop-shadow-md">
                      {point.desc}
                    </p>
                  </div>
                </foreignObject>
              </g>
            ))}

            {/* TURTLE CAR (Original Lucide Icon) */}
            <g ref={turtleGroupRef} style={{ pointerEvents: 'none' }}>
              <foreignObject x="-30" y="-30" width="60" height="60">
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ transform: 'scaleX(1)' }} 
                >
                  <div className="relative flex items-center justify-center">
                    <Turtle className="relative w-14 h-14 text-[#2f3d24] fill-[#cddbb6] drop-shadow-2xl" />
                  </div>
                </div>
              </foreignObject>
            </g>

          </svg>

          {/* End Text */}
          <div id="end-text" className="absolute right-10 bottom-10 text-right opacity-0 pointer-events-none">
            <h3 className="text-4xl md:text-5xl font-sans font-bold text-[#e9f0d8] drop-shadow-md leading-none">
              TO BE<br />CONTINUED...
            </h3>
            <p className="text-white/80 font-mono text-xs font-bold tracking-[0.3em] mt-3 drop-shadow-sm">
              JOURNEY OF TURTLES
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}