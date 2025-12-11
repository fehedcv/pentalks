import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Pentalks transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations.",
      author: "Vikram Patel",
      role: "CEO, TechVenture Labs",
    },
    {
      quote: "Working with the Mukham team was a revelation. They understood our vision and brought it to life in ways we never imagined.",
      author: "Ananya Sharma",
      role: "Founder, Harmony Spaces",
    },
    {
      quote: "The Ver podcast gave us a platform to share our story. Their production quality and storytelling expertise is unmatched.",
      author: "Rajan Mehta",
      role: "Author & Speaker",
    },
  ];

  return (
    <section className="py-24 px-8 md:px-16 bg-[#FAF7F2]">
      <div className="mb-12 md:mb-20">
        <h2 className="text-[#0a0a0a] font-syne text-4xl md:text-6xl font-bold mb-4">What They Say</h2>
        <p className="text-[#333333] text-lg md:text-xl max-w-2xl">Trusted by visionaries and creators across industries.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => (
          <div key={idx} className="bg-white p-8 border border-[#0a0a0a]/10 hover:border-[#C47A3D] transition-colors duration-300 group hover-target">
            <Quote className="w-8 h-8 text-[#C47A3D] mb-6" />
            <p className="text-[#0a0a0a] text-lg leading-relaxed mb-6 italic">"{item.quote}"</p>
            <div className="border-t border-[#0a0a0a]/10 pt-6">
              <p className="font-syne font-bold text-[#0a0a0a]">{item.author}</p>
              <p className="text-sm text-[#333333]">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
