import React from 'react';
import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    { icon: Search, number: "01", title: "Discovery", desc: "We dive deep into understanding your vision, goals, and the essence of what makes you unique." },
    { icon: Lightbulb, number: "02", title: "Strategy", desc: "Armed with insights, we craft a strategic roadmap that aligns creativity with purpose." },
    { icon: PenTool, number: "03", title: "Creation", desc: "Our team brings ideas to life through meticulous design and thoughtful execution." },
    { icon: Rocket, number: "04", title: "Launch", desc: "We deliver polished work and support you as your brand takes flight." },
  ];

  return (
    <section className="py-24 px-8 md:px-16 bg-[#FAF7F2]">
      <div className="mb-12 md:mb-20">
        <h2 className="text-[#0a0a0a] font-syne text-4xl md:text-6xl font-bold mb-4">How We Work</h2>
        <p className="text-[#333333] text-lg md:text-xl max-w-2xl">A refined process that turns ideas into iconic brands.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group hover-target">
            <div className="text-[#C47A3D]/20 font-syne text-8xl font-bold absolute -top-4 -left-2">{step.number}</div>
            <div className="relative pt-12">
              <step.icon className="w-8 h-8 text-[#C47A3D] mb-4" />
              <h3 className="font-syne text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-[#333333] leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
