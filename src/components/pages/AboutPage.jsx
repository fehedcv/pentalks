import React from 'react';
import { Target, Users, Layers } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const AboutPage = () => (
  <div className="pt-32 pb-24 px-8 md:px-16 animate-fade-in">
    <SectionHeader title="The Origin Story" />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-7">
        <p className="text-xl md:text-2xl leading-relaxed text-[#0a0a0a] font-light mb-8">Pentalks began as a conversation about the intersection of space and story...</p>
        <p className="text-[#333333] leading-relaxed mb-8">We realized that Architecture (Mukham) and Narrative (Ver) are two sides of the same coin...</p>
      </div>
      <div className="lg:col-span-5 bg-[#E5E5E5] min-h-[400px] rounded-sm relative">
         <div className="absolute inset-0 flex items-center justify-center text-[#0a0a0a]/30 font-syne text-2xl">[Team Photo / Founders]</div>
      </div>
    </div>
    <div className="mt-32">
      <h3 className="font-syne text-3xl font-bold mb-12">Our Mission</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Clarity", text: "Cutting through the noise to find the core message." },
          { icon: Users, title: "Community", text: "Building brands that people actually want to belong to." },
          { icon: Layers, title: "Depth", text: "Creating work that stands up to scrutiny and time." }
        ].map((item, i) => (
          <div key={i} className="border border-[#0a0a0a]/10 p-8 hover:border-[#C47A3D] transition-colors duration-300">
            <item.icon className="w-8 h-8 text-[#C47A3D] mb-4" />
            <h4 className="font-syne text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-[#333333] text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;