import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.png';

const Navbar = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  // സ്ക്രോൾ ലോജിക്: മുകളിലേക്ക് സ്ക്രോൾ ചെയ്യുമ്പോൾ മാത്രം കാണിക്കുക
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // 1. ഏറ്റവും മുകളിൽ ആണെങ്കിൽ കാണിക്കുക
    if (latest <= 10) {
      setIsVisible(true);
      setIsAtTop(true);
    } 
    // 2. മുകളിലേക്ക് സ്ക്രോൾ ചെയ്യുകയാണെങ്കിൽ കാണിക്കുക (latest < previous)
    else if (latest < previous) {
      setIsVisible(true);
      setIsAtTop(false);
    } 
    // 3. താഴേക്ക് സ്ക്രോൾ ചെയ്യുകയാണെങ്കിൽ മറയ്ക്കുക
    else {
      setIsVisible(false);
      setIsAtTop(false);
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed w-full top-0 z-[100] px-4 py-6 md:px-10 pointer-events-none"
          >
            <div 
              className={`max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-full border transition-all duration-500 pointer-events-auto
                ${!isAtTop 
                  ? "bg-[#FAF7F2]/80 backdrop-blur-xl border-[#8B9D83]/20 shadow-lg py-2" 
                  : "bg-transparent border-transparent"}`}
            >
              {/* --- LOGO SECTION --- */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10">
                  <motion.img 
                    src={logo} 
                    alt="Pentalks Logo" 
                    className="w-full h-full object-contain"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-tighter text-[#1C150D] leading-none uppercase">
                    Pentalks
                  </span>
                  <span className="text-[7px] font-bold tracking-[0.3em] text-[#8B9D83] uppercase">
                    Mother Company
                  </span>
                </div>
              </Link>

              {/* --- DESKTOP NAV --- */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className="relative px-5 py-2 group"
                  >
                    <span className={`relative z-10 text-[11px] font-bold uppercase tracking-widest transition-colors
                      ${location.pathname === link.path ? "text-white" : "text-[#1C150D] hover:text-[#0f4c39]"}`}>
                      {link.label}
                    </span>
                    {location.pathname === link.path && (
                      <motion.div 
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#0f4c39] rounded-full z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
                <button className="ml-4 px-6 py-2 bg-[#8B9D83] text-[#FAF7F2] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#0f4c39] transition-all">
                  Connect
                </button>
              </div>

              {/* --- MOBILE TOGGLE --- */}
              <button 
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#0f4c39] text-white pointer-events-auto"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={20} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0f4c39] z-[110] flex flex-col"
          >
            {/* Background Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
              <img src={logo} alt="Watermark" className="w-[150%] max-w-none rotate-12" />
            </div>

            <div className="p-8 flex justify-end">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col justify-center flex-grow px-12 gap-8 relative z-10">
              <span className="text-[#8B9D83] text-[10px] font-bold tracking-[0.5em] uppercase">Navigation</span>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    className={`flex items-center justify-between text-5xl font-black uppercase tracking-tighter
                      ${location.pathname === link.path ? "text-white" : "text-white/40"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                    <ChevronRight className="text-[#8B9D83]" size={32} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-12 flex justify-between items-end border-t border-white/5 relative z-10">
              <div className="flex flex-col gap-1">
                <p className="text-[#8B9D83] text-[10px] font-bold uppercase tracking-widest italic">Steady Foundation</p>
                <p className="text-white/40 text-[9px]">© 2025 Vynx Webworks</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;