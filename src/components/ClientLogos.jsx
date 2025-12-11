import React from 'react';

const ClientLogos = () => {
  const clients = [
    "TechVenture",
    "Harmony Spaces",
    "BuildCraft",
    "Urban Studios",
    "CreateLab",
    "DesignFlow",
  ];

  return (
    <section className="py-16 px-8 md:px-16 bg-[#0a0a0a]">
      <div className="text-center mb-12">
        <p className="text-[#FAF7F2]/60 uppercase tracking-widest text-sm font-syne">Trusted By Leading Brands</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
        {clients.map((client, idx) => (
          <div key={idx} className="text-[#FAF7F2]/40 font-syne text-xl md:text-2xl font-bold hover:text-[#C47A3D] transition-colors duration-300 hover-target cursor-pointer">
            {client}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
