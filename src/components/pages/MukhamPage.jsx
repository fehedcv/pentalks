import React from 'react';
import { ArrowUpRight, Building2, Compass, PenTool, Ruler, Eye, Award } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const MukhamPage = () => {
  const services = [
    { icon: Building2, title: "Architectural Design", desc: "From concept to completion, we create spaces that inspire and endure." },
    { icon: Compass, title: "Urban Planning", desc: "Thoughtful city planning that balances growth with community needs." },
    { icon: PenTool, title: "Interior Design", desc: "Curated interiors that reflect personality and purpose." },
    { icon: Ruler, title: "Structural Consulting", desc: "Engineering expertise that ensures safety and innovation." },
  ];

  const projects = [
    { name: "The Meridian Tower", location: "Mumbai, India", type: "Commercial", year: "2024" },
    { name: "Serene Villas", location: "Goa, India", type: "Residential", year: "2023" },
    { name: "Cultural Heritage Center", location: "Jaipur, India", type: "Public", year: "2023" },
    { name: "Tech Park Innovation Hub", location: "Bangalore, India", type: "Commercial", year: "2022" },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "12", label: "Years Experience" },
    { number: "25+", label: "Design Awards" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="pt-32 pb-24 animate-fade-in">
      <div className="relative h-[60vh] bg-stone-800 overflow-hidden mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-stone-800/50" />
        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <div className="text-[#FAF7F2] max-w-3xl">
            <h1 className="font-syne text-6xl md:text-8xl font-bold mb-6">MUKHAM</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide mb-4">Architectural Studio</p>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Where vision meets structure. We design spaces that tell stories, evoke emotions, and stand the test of time.
            </p>
            <button className="mt-8 bg-[#C47A3D] text-[#FAF7F2] px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#A8652F] transition-colors duration-300 hover-target cursor-pointer">
              View Portfolio <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-[#0a0a0a]/10 py-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-syne text-4xl md:text-5xl font-bold text-[#C47A3D] mb-2">{stat.number}</div>
              <div className="text-[#333333] text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <SectionHeader title="Our Services" subtitle="Comprehensive architectural solutions tailored to your vision." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, i) => (
            <div key={i} className="border border-[#0a0a0a]/10 p-8 hover:border-[#C47A3D] transition-colors duration-300 group hover-target">
              <service.icon className="w-10 h-10 text-[#C47A3D] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-syne text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[#333333] text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <section className="py-24 bg-[#0a0a0a] text-[#FAF7F2] -mx-8 md:-mx-16 px-8 md:px-16 mb-24">
          <div className="max-w-4xl">
            <h2 className="font-syne text-3xl md:text-5xl font-bold leading-tight mb-8">
              Design Philosophy
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              At Mukham, we believe architecture is more than buildings—it's the art of creating experiences. Every line we draw, every material we choose, every space we shape is guided by a deep understanding of human behavior and environmental harmony.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our approach blends traditional wisdom with contemporary innovation. We honor the cultural context of each project while pushing the boundaries of what's possible. The result? Spaces that feel both timeless and forward-thinking.
            </p>
          </div>
        </section>

        <SectionHeader title="Featured Projects" subtitle="A selection of our most impactful work." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {projects.map((project, i) => (
            <div key={i} className="group relative h-[350px] bg-[#E5E5E5] rounded-sm overflow-hidden hover-target cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-[#FAF7F2]">
                <span className="text-xs uppercase tracking-widest text-[#C47A3D] mb-2 block">{project.type} • {project.year}</span>
                <h3 className="font-syne text-2xl font-bold mb-1">{project.name}</h3>
                <p className="text-sm opacity-80">{project.location}</p>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={18} />
              </div>
            </div>
          ))}
        </div>

        <section className="bg-[#FAF7F2] border border-[#0a0a0a]/10 p-12 md:p-16 text-center">
          <Eye className="w-12 h-12 text-[#C47A3D] mx-auto mb-6" />
          <h3 className="font-syne text-3xl md:text-4xl font-bold mb-4">Have a Vision?</h3>
          <p className="text-[#333333] max-w-xl mx-auto mb-8">
            Let's transform your ideas into architectural reality. Whether it's a home, office, or public space, we're here to bring your dreams to life.
          </p>
          <button className="bg-[#0a0a0a] text-[#FAF7F2] px-8 py-4 rounded-full font-medium hover:bg-[#C47A3D] transition-colors duration-300 hover-target cursor-pointer">
            Start a Conversation
          </button>
        </section>
      </div>
    </div>
  );
};

export default MukhamPage;
