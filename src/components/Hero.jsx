import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import Experience from './ui/Experience';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="min-h-screen flex items-center px-8 md:px-16 pt-20 relative overflow-hidden bg-[#FAF7F2]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Typography & Content */}
        <div className="lg:col-span-7 flex flex-col justify-center z-20 pointer-events-none">
          <div className="font-syne font-bold text-[12vw] lg:text-[9vw] leading-[0.85] text-[#0a0a0a] tracking-tighter">
            <div className="overflow-hidden">
              <span className={`inline-block transition-transform duration-1000 ${loaded ? 'translate-y-0' : 'translate-y-full'}`}>
                DIGITAL
              </span>
            </div>
            <div className="overflow-hidden">
              <span className={`inline-block text-[#C47A3D] transition-transform duration-1000 delay-100 ${loaded ? 'translate-y-0' : 'translate-y-full'}`}>
                STORIES
              </span>
            </div>
            <div className="overflow-hidden">
              <span className={`inline-block transition-transform duration-1000 delay-200 ${loaded ? 'translate-y-0' : 'translate-y-full'}`}>
                FORGED.
              </span>
            </div>
          </div>
          
          <div className={`mt-12 flex flex-col items-start transition-all duration-1000 delay-500 pointer-events-auto ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-[#333333] max-w-md text-lg leading-relaxed mb-8">
              Pentalks is a creative collective blending aesthetics with strategy. We build brands that speak louder than words.
            </p>
            <button className="group bg-[#C47A3D] text-[#FAF7F2] px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#A8652F] transition-colors duration-300 hover-target cursor-pointer">
              Start a Project 
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: 3D Canvas */}
        <div className={`hidden lg:block lg:col-span-5 relative h-[80vh] w-full transition-opacity duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 w-full h-full cursor-move">
            <Canvas dpr={[1, 2]} shadows>
               <Experience />
            </Canvas>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Blob */}
      <div className="absolute top-1/2 right-[-10%] w-[50vw] h-[50vw] bg-[#E5E5E5] rounded-full mix-blend-multiply filter blur-[120px] opacity-50 pointer-events-none z-0" />
    </section>
  );
};

export default Hero;