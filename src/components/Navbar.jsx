import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.png';

const Navbar = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Hide on scroll down, Show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest <= 80) {
      setIsVisible(true);
    } else if (latest < previous) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/companies', label: 'Companies' },
    { path: '/mukham', label: 'Mukham' },
    { path: '/ver', label: 'Ver' },
  ];

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed w-full top-0 z-[100] px-4 py-6 md:px-8 pointer-events-none"
          >
            {/* --- GLASSMORPHISM CONTAINER --- */}
            <div 
              className="max-w-[1400px] mx-auto flex justify-between items-center px-8 py-3 
                         bg-[#0f4c39]/70 backdrop-blur-xl border border-white/10 
                         rounded-tr-[40px] rounded-bl-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
                         pointer-events-auto relative overflow-hidden group"
            >
              {/* Subtle Kinetic Inner Border */}
              <div className="absolute inset-0 border border-white/5 rounded-tr-[40px] rounded-bl-[40px] pointer-events-none" />

              {/* --- LOGO SECTION --- */}
              <Link to="/" className="flex items-center gap-4 z-10">
                <div className="relative w-10 h-10">
                  <motion.img 
                    src={logo} 
                    alt="Logo" 
                    className="w-full h-full object-contain invert brightness-200"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tighter uppercase leading-none text-[#FAF7F2] font-syne">
                    Pentalks
                  </span>
                  <span className="text-[7px] font-bold tracking-[0.5em] text-[#8B9D83] uppercase italic">
                    Node 0.0 // Archetype
                  </span>
                </div>
              </Link>

              {/* --- DESKTOP NAV --- */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className="relative px-6 py-2 transition-colors duration-300"
                  >
                    <span className={`relative z-10 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-500
                      ${location.pathname === link.path 
                        ? "text-[#0f4c39]" 
                        : "text-[#FAF7F2]/60 hover:text-[#FAF7F2]"}`}>
                      {link.label}
                    </span>
                    
                    {location.pathname === link.path && (
                      <motion.div 
                        layoutId="nav-scute"
                        className="absolute inset-0 z-0 bg-[#FAF7F2] rounded-tr-2xl rounded-bl-2xl shadow-lg"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
                
                {/* Asymmetric Action Button */}
                <button className="ml-8 px-8 py-3 bg-[#FAF7F2] text-[#0f4c39] text-[10px] font-black uppercase tracking-[0.2em] 
                                   rounded-tr-2xl rounded-bl-2xl transition-all duration-500 hover:rounded-none shadow-xl hover:shadow-[#FAF7F2]/10">
                  Connect
                </button>
              </div>

              {/* --- MOBILE TOGGLE --- */}
              <button 
                className="lg:hidden w-12 h-12 flex items-center justify-center rounded-tr-2xl rounded-bl-2xl bg-[#FAF7F2] text-[#0f4c39] pointer-events-auto active:scale-95 transition-transform"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={20} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* --- MOBILE MENU (System Dark) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1C150D]/95 backdrop-blur-2xl z-[120] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 flex justify-between items-center border-b border-white/5">
               <span className="text-[10px] font-bold text-[#8B9D83] uppercase tracking-[0.5em]">Portal // Navigation</span>
               <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-14 h-14 flex items-center justify-center rounded-tr-3xl rounded-bl-3xl bg-[#FAF7F2] text-[#0f4c39]"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col justify-center flex-grow px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link 
                    to={link.path} 
                    className={`text-5xl md:text-7xl font-black uppercase tracking-tighter transition-all
                      ${location.pathname === link.path ? "text-[#FAF7F2]" : "text-[#FAF7F2]/20 hover:text-[#FAF7F2]"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-12 border-t border-white/5 flex justify-between items-end">
               <div>
                  <p className="text-[#8B9D83] text-[9px] font-bold uppercase tracking-widest mb-2">// Network</p>
                  <div className="flex gap-4 text-white/40 text-[10px] font-bold uppercase">
                    <a href="#" className="hover:text-[#FAF7F2]">IG</a>
                    <a href="#" className="hover:text-[#FAF7F2]">LI</a>
                  </div>
               </div>
               <span className="text-[8px] text-white/20 uppercase tracking-[0.3em] text-right">
                  Pentalks Parent Corp <br /> System v2.0
               </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;