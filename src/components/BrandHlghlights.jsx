import React from 'react';
import { ArrowUpRight, Mic } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link
import SectionHeader from './SectionHeader';
import MukhamImage from '/mukhamcover.png'; 

const BrandHighlights = () => {
  return (
    <section className="py-12 px-8 md:px-16">
      <SectionHeader title="Our Ecosystem" subtitle="Distinct entities. One vision." />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Mukham - Wrapped in Link */}
        <Link to="/companies" className="block bg-[#E5E5E5] h-[400px] lg:h-[500px] rounded-sm relative overflow-hidden group hover-target cursor-pointer">
           <div className="absolute inset-0 bg-stone-300 flex items-center justify-center text-stone-500 font-syne text-xl">
                <img src={MukhamImage} alt="Mukham Cover" className="object-cover w-full h-full" />
           </div>
           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
           <div className="absolute bottom-8 left-8 text-white">
             <h3 className="text-4xl font-syne font-bold mb-2">MUKHAM</h3>
             <p className="text-sm uppercase tracking-widest opacity-90">Architectural Studio</p>
           </div>
           <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
             <ArrowUpRight />
           </div>
        </Link>

        {/* Ver - Wrapped in Link */}
        <Link to="/companies" className="block bg-[#0a0a0a] h-[400px] lg:h-[500px] rounded-sm relative overflow-hidden group hover-target cursor-pointer">
           <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="flex gap-1 items-end h-32">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-2 bg-[#C47A3D] animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
           </div>
           <div className="absolute bottom-8 left-8 text-white">
             <h3 className="text-4xl font-syne font-bold mb-2">VER</h3>
             <p className="text-sm uppercase tracking-widest opacity-90">Podcast & Narratives</p>
           </div>
           <div className="absolute top-8 right-8 w-12 h-12 bg-[#C47A3D] rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
             <Mic className="w-5 h-5" />
           </div>
        </Link>
      </div>
    </section>
  );
};

export default BrandHighlights;