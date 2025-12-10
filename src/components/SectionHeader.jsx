import React from 'react';

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 md:mb-20">
    <h2 className="text-[#0a0a0a] font-syne text-4xl md:text-6xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-[#333333] text-lg md:text-xl max-w-2xl">{subtitle}</p>}
  </div>
);

export default SectionHeader;