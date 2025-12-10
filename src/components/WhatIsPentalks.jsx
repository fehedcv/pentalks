import React from 'react';
import { Layers, Box, Mic } from 'lucide-react';

const WhatIsPentalks = () => {
  const items = [
    { icon: <Layers className="w-6 h-6" />, title: "Creative Collective", desc: "A gathering of diverse minds solving complex problems." },
    { icon: <Box className="w-6 h-6" />, title: "Design Studio", desc: "Crafting visual identities and digital experiences that last." },
    { icon: <Mic className="w-6 h-6" />, title: "Content Brand", desc: "Producing narratives that resonate through audio and text." },
  ];

  return (
    <section className="py-24 px-8 md:px-16 bg-[#FAF7F2]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#0a0a0a]/10 pt-12">
        {items.map((item, idx) => (
          <div key={idx} className="group hover-target">
            <div className="w-12 h-12 bg-[#E5E5E5] rounded-full flex items-center justify-center text-[#0a0a0a] mb-6 group-hover:bg-[#C47A3D] group-hover:text-white transition-colors duration-300">{item.icon}</div>
            <h3 className="font-syne text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-[#333333]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIsPentalks;