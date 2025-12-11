import React from 'react';
import { Target, Users, Layers, Award, Globe, Heart, Briefcase, Calendar } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const AboutPage = () => {
  const team = [
    { name: "Aditya Menon", role: "Founder & Creative Director", desc: "Visionary leader with 15+ years in brand strategy and design." },
    { name: "Priya Nair", role: "Head of Architecture", desc: "Award-winning architect specializing in sustainable design." },
    { name: "Rahul Kapoor", role: "Audio Director", desc: "Former radio producer turned podcast innovator." },
    { name: "Maya Desai", role: "Strategy Lead", desc: "Brand strategist with experience at Fortune 500 companies." },
  ];

  const values = [
    { icon: Target, title: "Clarity", text: "Cutting through the noise to find the core message that defines your brand." },
    { icon: Users, title: "Community", text: "Building brands that people actually want to belong to and engage with." },
    { icon: Layers, title: "Depth", text: "Creating work that stands up to scrutiny and the test of time." },
    { icon: Heart, title: "Passion", text: "Every project receives our full creative energy and dedication." },
  ];

  const milestones = [
    { year: "2018", title: "The Beginning", desc: "Pentalks founded with a vision to blend architecture and storytelling." },
    { year: "2019", title: "Mukham Launch", desc: "Our architectural studio opened its doors, completing 10 projects in year one." },
    { year: "2021", title: "Ver Podcast Network", desc: "Launched our podcast network, reaching 100K listeners in 6 months." },
    { year: "2023", title: "Global Expansion", desc: "Expanded operations to serve clients across 15+ countries." },
    { year: "2024", title: "Award Recognition", desc: "Received multiple design and innovation awards for our work." },
  ];

  return (
    <div className="pt-32 pb-24 px-8 md:px-16 animate-fade-in">
      <SectionHeader title="The Origin Story" subtitle="How a conversation about space and story became something bigger." />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-7">
          <p className="text-xl md:text-2xl leading-relaxed text-[#0a0a0a] font-light mb-8">
            Pentalks began as a conversation about the intersection of space and story. We asked ourselves: what if the principles that make great architecture could be applied to building brands?
          </p>
          <p className="text-[#333333] leading-relaxed mb-8">
            We realized that Architecture (Mukham) and Narrative (Ver) are two sides of the same coin. Both require structure, both need soul, and both must stand the test of time. From this insight, Pentalks was born—a creative collective that builds brands the way architects build landmarks.
          </p>
          <p className="text-[#333333] leading-relaxed">
            Today, we work with visionaries across industries—from tech startups to heritage brands, from urban developers to independent creators. Our mission remains the same: to craft experiences that leave lasting impressions.
          </p>
        </div>
        <div className="lg:col-span-5 bg-[#E5E5E5] min-h-[400px] rounded-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-8 text-[#FAF7F2]">
            <p className="font-syne text-2xl font-bold">Est. 2018</p>
            <p className="text-sm opacity-80">Mumbai, India</p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-[#0a0a0a] text-[#FAF7F2] -mx-8 md:-mx-16 px-8 md:px-16 mb-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-syne text-3xl md:text-5xl font-bold leading-tight mb-6">
            Our Values
          </h2>
          <p className="text-gray-400">The principles that guide everything we do.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-16 h-16 bg-[#C47A3D] rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-syne text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionHeader title="Our Journey" subtitle="Key milestones in the Pentalks story." />
      <div className="relative mb-24">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#C47A3D]/30" />
        <div className="space-y-12">
          {milestones.map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-start gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                <span className="text-[#C47A3D] font-syne font-bold text-lg">{item.year}</span>
                <h4 className="font-syne text-2xl font-bold mt-1 mb-2">{item.title}</h4>
                <p className="text-[#333333]">{item.desc}</p>
              </div>
              <div className="relative">
                <div className="w-8 h-8 bg-[#C47A3D] rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>

      <SectionHeader title="Meet the Team" subtitle="The creative minds behind Pentalks." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {team.map((member, i) => (
          <div key={i} className="group hover-target">
            <div className="bg-[#E5E5E5] h-[300px] rounded-sm mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-[#C47A3D] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <h4 className="font-syne text-xl font-bold mb-1">{member.name}</h4>
            <p className="text-[#C47A3D] text-sm font-medium mb-2">{member.role}</p>
            <p className="text-[#333333] text-sm">{member.desc}</p>
          </div>
        ))}
      </div>

      <section className="bg-gradient-to-br from-[#C47A3D] to-[#A8652F] text-[#FAF7F2] p-12 md:p-16 rounded-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Globe className="w-12 h-12 mb-4" />
            <h3 className="font-syne text-3xl md:text-4xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-white/80 max-w-md">
              We're always looking for talented individuals who share our passion for creativity and excellence.
            </p>
          </div>
          <button className="bg-white text-[#C47A3D] px-8 py-4 rounded-full font-medium hover:bg-[#0a0a0a] hover:text-white transition-colors duration-300 hover-target cursor-pointer flex items-center gap-2">
            <Briefcase size={18} /> View Careers
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
