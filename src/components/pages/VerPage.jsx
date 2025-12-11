import React from 'react';
import { Play, Headphones, Users, Clock, Mic, Radio, Heart, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const VerPage = () => {
  const shows = [
    { 
      title: "The Design Mind", 
      host: "Arjun Mehta", 
      desc: "Conversations with world-renowned architects and designers about creativity and innovation.",
      episodes: 48,
      category: "Design"
    },
    { 
      title: "Build Stories", 
      host: "Priya Sharma", 
      desc: "Behind-the-scenes narratives of iconic buildings and the people who made them.",
      episodes: 32,
      category: "Architecture"
    },
    { 
      title: "Creative Fuel", 
      host: "Rahul Kapoor", 
      desc: "Weekly inspiration for creators, makers, and dreamers navigating the creative industry.",
      episodes: 67,
      category: "Creativity"
    },
    { 
      title: "Urban Pulse", 
      host: "Maya Desai", 
      desc: "Exploring how cities shape culture and how culture shapes cities.",
      episodes: 24,
      category: "Culture"
    },
  ];

  const stats = [
    { number: "500K+", label: "Monthly Listeners" },
    { number: "200+", label: "Episodes Published" },
    { number: "4.9", label: "Average Rating" },
    { number: "50+", label: "Countries Reached" },
  ];

  const latestEpisodes = [
    { show: "The Design Mind", title: "Minimalism in Modern Architecture", duration: "45 min", date: "Dec 8, 2024" },
    { show: "Build Stories", title: "The Story Behind Marina Bay Sands", duration: "38 min", date: "Dec 5, 2024" },
    { show: "Creative Fuel", title: "Finding Your Creative Voice", duration: "52 min", date: "Dec 3, 2024" },
  ];

  return (
    <div className="pt-32 pb-24 animate-fade-in">
      <div className="relative h-[60vh] bg-[#1a1a1a] overflow-hidden mb-24">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="flex gap-1 items-end h-64">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="w-3 bg-[#C47A3D] animate-pulse rounded-t" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.05}s` }} />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-[#1a1a1a]" />
        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <div className="text-[#FAF7F2] max-w-3xl">
            <h1 className="font-syne text-6xl md:text-8xl font-bold mb-6">VER</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide mb-4">Podcast Network</p>
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Stories that resonate. Conversations that inspire. A podcast network dedicated to the creative minds shaping our world.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="bg-[#C47A3D] text-[#FAF7F2] px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-[#A8652F] transition-colors duration-300 hover-target cursor-pointer">
                <Play size={18} fill="currentColor" /> Start Listening
              </button>
              <button className="border border-[#FAF7F2] text-[#FAF7F2] px-8 py-4 rounded-full font-medium hover:bg-[#FAF7F2] hover:text-[#1a1a1a] transition-colors duration-300 hover-target cursor-pointer">
                Subscribe
              </button>
            </div>
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

        <SectionHeader title="Our Shows" subtitle="Curated podcasts for the curious and creative." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {shows.map((show, i) => (
            <div key={i} className="bg-[#0a0a0a] text-[#FAF7F2] p-8 rounded-sm group hover-target cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs uppercase tracking-widest text-[#C47A3D] px-3 py-1 border border-[#C47A3D] rounded-full">{show.category}</span>
                <div className="w-12 h-12 bg-[#C47A3D] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play size={18} fill="white" />
                </div>
              </div>
              <h3 className="font-syne text-2xl font-bold mb-2">{show.title}</h3>
              <p className="text-gray-400 text-sm mb-4">Hosted by {show.host}</p>
              <p className="text-gray-300 leading-relaxed mb-6">{show.desc}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Mic size={14} /> {show.episodes} Episodes</span>
              </div>
            </div>
          ))}
        </div>

        <section className="py-24 bg-[#0a0a0a] text-[#FAF7F2] -mx-8 md:-mx-16 px-8 md:px-16 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <Radio className="w-12 h-12 text-[#C47A3D] mx-auto mb-6" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold leading-tight mb-8">
              Why Ver?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              In a world of noise, we create signal. Ver is more than a podcast network—it's a platform for meaningful dialogue. We believe in the power of voice to educate, inspire, and connect.
            </p>
            <div className="w-24 h-1 bg-[#C47A3D] mx-auto mt-8" />
          </div>
        </section>

        <SectionHeader title="Latest Episodes" subtitle="Fresh content, every week." />
        <div className="space-y-4 mb-24">
          {latestEpisodes.map((ep, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-[#0a0a0a]/10 hover:border-[#C47A3D] transition-colors duration-300 group hover-target cursor-pointer">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-[#C47A3D] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Play size={20} fill="currentColor" />
                </div>
                <div>
                  <span className="text-xs text-[#C47A3D] uppercase tracking-wider">{ep.show}</span>
                  <h4 className="font-syne text-lg font-bold">{ep.title}</h4>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0 text-sm text-[#333333]">
                <span className="flex items-center gap-1"><Clock size={14} /> {ep.duration}</span>
                <span>{ep.date}</span>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-gradient-to-br from-[#C47A3D] to-[#A8652F] text-[#FAF7F2] p-12 md:p-16 rounded-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <Headphones className="w-12 h-12 mb-4" />
              <h3 className="font-syne text-3xl md:text-4xl font-bold mb-4">Never Miss an Episode</h3>
              <p className="text-white/80 max-w-md">
                Subscribe to Ver and get the latest episodes delivered straight to your favorite podcast app.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-[#C47A3D] px-8 py-4 rounded-full font-medium hover:bg-[#0a0a0a] hover:text-white transition-colors duration-300 hover-target cursor-pointer">
                Apple Podcasts
              </button>
              <button className="border border-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#C47A3D] transition-colors duration-300 hover-target cursor-pointer">
                Spotify
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VerPage;
