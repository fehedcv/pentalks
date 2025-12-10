import React from 'react';

const Footer = () => (
  <footer className="bg-[#0a0a0a] text-[#FAF7F2] px-8 md:px-16 py-24 mt-auto">
    <div className="flex flex-col md:flex-row justify-between mb-24">
      <div className="font-syne text-5xl md:text-7xl font-bold leading-tight">
        Let's build <br /> <span className="text-[#333333]">something iconique.</span>
      </div>
      <div className="mt-12 md:mt-0 flex flex-col gap-4 items-start">
        <button className="bg-[#FAF7F2] text-[#0a0a0a] px-8 py-4 rounded-full font-medium hover:bg-[#C47A3D] hover:text-[#FAF7F2] transition-colors duration-300 hover-target">Get in touch</button>
        <span className="text-[#333333]">hello@pentalks.studio</span>
      </div>
    </div>
    <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between text-[#E5E5E5] opacity-60 text-sm">
      <p>&copy; 2024 Pentalks Studio.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <span className="hover:text-[#C47A3D] hover-target cursor-pointer">Instagram</span>
        <span className="hover:text-[#C47A3D] hover-target cursor-pointer">LinkedIn</span>
      </div>
    </div>
  </footer>
);

export default Footer;