import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const PentalksSlowPortal = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen bg-[#F9F7F2]" />;

  return <PortalContent />;
};

const PortalContent = () => {
  const containerRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const realImageRef = useRef(null);
  const titleRef = useRef(null);
  const portalRef = useRef(null);

  const COLORS = {
    sand: "#F9F7F2",
    sage: "#8B9D83",
    forest: "#0f4c39",
    espresso: "#1C150D",
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollDistance = window.innerWidth < 768 ? "+=3000" : "+=6000";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: scrollDistance,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(titleRef.current, {
        opacity: 0,
        y: -80,
        filter: "blur(15px)",
        ease: "power2.inOut",
      }, 0);

      tl.to(logoWrapperRef.current, {
        top: "50%",
        right: "50%",
        xPercent: 50,
        yPercent: -50,
        rotation: 360,
        scale: window.innerWidth < 768 ? 0.8 : 1.1,
        ease: "expo.inOut",
      }, 0.2);

      tl.fromTo(
        realImageRef.current,
        { opacity: 0, scale: 0.6, filter: "blur(15px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2 },
        1
      );

      tl.fromTo(".drawing-heading",
        { strokeDashoffset: 1000, strokeDasharray: 1000 },
        { strokeDashoffset: 0, duration: 3 },
        1.5
      );

      tl.fromTo(".drawing-desc",
        { strokeDashoffset: 800, strokeDasharray: 800 },
        { strokeDashoffset: 0, duration: 3 },
        2
      );

      tl.to([".drawing-heading", ".drawing-desc"], {
        fill: COLORS.forest,
        duration: 2,
      }, 4);

      tl.to(logoWrapperRef.current, {
        scale: window.innerWidth < 768 ? 100 : 180,
        duration: 5,
        ease: "expo.in",
      }, 6);

      tl.to(portalRef.current, { 
        opacity: 1, 
        visibility: "visible", 
        duration: 1 
      }, 9);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#F9F7F2] overflow-x-hidden font-syne">

      {/* HERO SECTION */}
      <motion.section
        style={{ opacity: contentOpacity }}
        className="absolute inset-0 z-20 flex items-center"
      >
        {/* Background Shape */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-[75vh] bg-[#0f4c39]"
            style={{
 clipPath: window.innerWidth >= 768 
      ? 'polygon(0 0,100% 0,100% 75%,50% 100%,0 75%)' // desktop
      :  'polygon(0 0,100% 0,100% 85%,50% 100%,0 85%)'      //mobile
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={titleRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center"
          >
            {/* TEXT */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left lg:-translate-y-2">
              <h1 className="text-[#F9F7F2] font-semibold tracking-tight leading-tight
                text-[clamp(5rem,7vw,5.5rem)]
                lg:text-[clamp(7rem,6vw,7.5rem)]
              ">
                Dual <br />
                <span className="font-bold">Entities</span>
              </h1>

              <p className="max-w-lg mx-auto lg:mx-0 text-[#1C150D] text-base md:text-lg leading-relaxed border-l-4 border-[#8B9D83] pl-5">
                Pentalks is the parent ecosystem that supports both technical and
                creative journeys with balance and clarity.
              </p>
            </div>

            {/* THEME CARDS */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-8">
              <div className="bg-[#F9F7F2] p-7 rounded-3xl shadow-xl">
                <h3 className="text-[#0f4c39] font-semibold text-2xl leading-snug">
                  Designing<br />Spaces
                </h3>
              </div>

              <div className="bg-[#1C150D] p-7 rounded-3xl shadow-xl">
                <h3 className="text-[#F9F7F2] font-semibold text-2xl leading-snug">
                  Voices of<br />Impact
                </h3>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* LOGO & SVG (UNCHANGED) */}
      <div
        ref={logoWrapperRef}
        className="fixed top-1/2  right-6 md:right-20 z-30 -translate-y-1/2 pointer-events-none flex flex-col items-center"
      >
        <img
          ref={realImageRef}
          src="logogreen.png"
          alt="Pentalks"
          className="w-20 h-20 md:w-44 md:h-44 object-contain mb-6"
        />

        <svg className="w-[280px] md:w-[550px] overflow-visible" viewBox="0 0 500 120">
          <text x="50%" y="40%" textAnchor="middle" dominantBaseline="middle"
            className="drawing-heading text-6xl font-black uppercase tracking-tighter"
            fill="none" stroke={COLORS.forest} strokeWidth="1.5">
            PENTALKS
          </text>
          <text x="50%" y="85%" textAnchor="middle" dominantBaseline="middle"
            className="drawing-desc text-xl font-bold tracking-[0.6em] uppercase "
            fill="none" stroke={COLORS.forest} strokeWidth="0.8">
            Journey of Turtles
          </text>
        </svg>
      </div>

      {/* FINAL PORTAL */}
      <div ref={portalRef} className=" fixed inset-0 bg-[#0f4c39] opacity-0 invisible z-[60] flex items-center justify-center text-center">
        <h2 className="text-[#F9F7F2] text-5xl  md:text-8xl font-black uppercase tracking-widest">
          Let's Begin
        </h2>
      </div>

      <style jsx>{`
        // @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap');
        // .font-syne { font-family: 'Syne', sans-serif; }
        .drawing-heading, .drawing-desc 
        { 
        transition: fill 0.5s ease;  
        }
      `}</style>
    </div>
  );
};

export default PentalksSlowPortal;