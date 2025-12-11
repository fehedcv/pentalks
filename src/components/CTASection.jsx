import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CTASection = () => (
  <section className="py-24 px-8 md:px-16 bg-gradient-to-br from-[#C47A3D] to-[#A8652F] text-[#FAF7F2]">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-syne text-4xl md:text-6xl font-bold mb-6">
        Ready to Create Something Extraordinary?
      </h2>
      <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
        Whether it's a brand, a building, or a story—we're here to help you make your mark.
      </p>
      <button className="bg-[#FAF7F2] text-[#C47A3D] px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 mx-auto hover:bg-[#0a0a0a] hover:text-[#FAF7F2] transition-colors duration-300 hover-target cursor-pointer">
        Let's Talk <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </section>
);

export default CTASection;
