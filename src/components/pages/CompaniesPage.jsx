import React from 'react';
import { ArrowRight, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader';

const CompaniesPage = () => (
  <div className="pt-32 pb-24 px-8 md:px-16 animate-fade-in min-h-screen">
    <SectionHeader title="Directory" subtitle="Explore the dedicated microsites of our sub-brands." />
    <div className="grid grid-cols-1 gap-4">
      <Link to="/mukham" className="group relative w-full h-[40vh] bg-[#D4D4D4] overflow-hidden flex items-center justify-center hover-target cursor-pointer transition-all duration-500 hover:h-[50vh]">
        <div className="absolute inset-0 bg-stone-800 mix-blend-multiply opacity-40 group-hover:opacity-60 transition-opacity" />
        <div className="relative z-10 text-center text-[#FAF7F2]">
          <h2 className="text-6xl md:text-8xl font-syne font-bold mb-2">MUKHAM</h2>
          <p className="tracking-[0.5em] text-sm md:text-base uppercase">Architectural Studio</p>
          <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
             <span className="border border-[#FAF7F2] px-8 py-3 rounded-full hover:bg-[#FAF7F2] hover:text-[#0a0a0a] transition-all flex items-center gap-2 mx-auto w-fit">Visit Studio <ArrowRight size={16} /></span>
          </div>
        </div>
      </Link>
      <Link to="/ver" className="group relative w-full h-[40vh] bg-[#1a1a1a] overflow-hidden flex items-center justify-center hover-target cursor-pointer transition-all duration-500 hover:h-[50vh]">
        <div className="absolute inset-0 bg-[#C47A3D] mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative z-10 text-center text-[#FAF7F2]">
          <h2 className="text-6xl md:text-8xl font-syne font-bold mb-2">VER</h2>
          <p className="tracking-[0.5em] text-sm md:text-base uppercase">Podcast Network</p>
          <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
             <span className="border border-[#FAF7F2] px-8 py-3 rounded-full hover:bg-[#FAF7F2] hover:text-[#0a0a0a] transition-all flex items-center gap-2 mx-auto w-fit">Listen Now <Mic size={16} /></span>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default CompaniesPage;
