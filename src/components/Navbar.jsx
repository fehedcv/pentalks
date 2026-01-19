import React, { useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react'; 
import { Link, useLocation } from 'react-router-dom';

const logoAsset = 'https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325094/og_logo_hsjtzo.png'; 

const Navbar = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  // --- FONT INTEGRATION ---
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;600;700&display=swap');
      .font-syne { font-family: 'Syne', sans-serif; }
      .font-inter { font-family: 'Inter', sans-serif; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setIsAtTop(latest < 50);

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
    { path: '/companies', label: 'Collective' },
    { path: '/mukham', label: 'Mukham' },
    { path: '/veru', label: 'Veru Studio' },
  ];

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed w-full top-0 z-[100] border-b transition-all duration-500 font-inter
              ${isAtTop 
                ? "bg-white/5 backdrop-blur-md border-white/5" 
                : "bg-[#1C150D]/95 backdrop-blur-xl border-[#8B9D83]/20 shadow-2xl"
              }`}
          >
            <div className="w-full flex justify-between items-center px-6 md:px-12 py-4 relative overflow-hidden group">
              
              {/* --- LOGO SECTION --- */}
              <Link to="/" className="flex items-center gap-4 z-10">
                <img 
                  src={logoAsset} 
                  alt="Pentalks Logo" 
                  className="w-24 md:w-28 object-contain transition-transform hover:scale-105"
                />
              </Link>

              {/* --- DESKTOP NAV --- */}
              <div className="hidden lg:flex items-center gap-1 z-10">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className="relative px-6 py-2 transition-colors duration-300"
                  >
                    <span className={`relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500
                      ${location.pathname === link.path 
                        ? (isAtTop ? "text-[#FAF7F2]" : "text-[#8B9D83]") 
                        : "text-[#FAF7F2]/60 hover:text-[#FAF7F2]"}`}>
                      {link.label}
                    </span>
                    
                    {location.pathname === link.path && (
                      <motion.div 
                        layoutId="nav-scute"
                        className={`absolute inset-0 z-0 rounded-tr-xl rounded-bl-xl
                          ${isAtTop ? "bg-white/10" : "bg-[#8B9D83]/10"}`}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
                
                {/* --- CONNECT BUTTON WITH RECTANGLE HOVER --- */}
                <Link to="/contact">
                  <button className={`ml-8 px-8 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] 
                    rounded-tr-xl rounded-bl-xl 
                    hover:rounded-none
                    transition-all duration-700 ease-in-out shadow-xl
                    ${isAtTop 
                      ? "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-[#1C150D]" 
                      : "bg-[#8B9D83] text-[#FAF7F2]"
                    }`}>
                    Connect
                  </button>
                </Link>
              </div>

              {/* --- MOBILE TOGGLE --- */}
              <button 
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-tr-xl rounded-bl-xl bg-[#8B9D83] text-[#FAF7F2] transition-transform active:scale-90 z-10"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={18} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#1C150D] z-[120] flex flex-col font-syne"
          >
            {/* Header */}
            <div className="p-8 flex justify-between items-center border-b border-white/5">
                <span className="text-[10px] font-bold text-[#8B9D83] uppercase tracking-[0.5em] font-inter">The Pentalks Collective</span>
                <button 
                 onClick={() => setMobileMenuOpen(false)}
                 className="w-12 h-12 flex items-center justify-center rounded-tr-2xl rounded-bl-2xl bg-[#8B9D83] text-[#FAF7F2]"
               >
                 <X size={20} />
               </button>
            </div>

            {/* Links */}
            <div className="flex flex-col justify-center flex-grow px-8 gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link 
                    to={link.path} 
                    className={`text-5xl font-800 uppercase tracking-tighter transition-all
                      ${location.pathname === link.path ? "text-[#8B9D83]" : "text-[#FAF7F2]/20 hover:text-[#FAF7F2]/40"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * (navLinks.length) }}
                className="mt-8 pt-8 border-t border-white/5"
              >
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full py-6 bg-[#8B9D83] text-[#FAF7F2] text-xl font-bold uppercase tracking-widest font-inter
                                    rounded-tr-3xl rounded-bl-3xl flex items-center justify-center gap-3 active:scale-95 transition-transform hover:rounded-none duration-700 ease-in-out">
                    Connect <ArrowUpRight size={24} />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="p-10 border-t border-white/5 flex justify-between items-center font-inter">
                <div className="flex gap-6 text-white/40 text-[10px] font-bold uppercase">
                  <a href="#" className="hover:text-[#8B9D83]">Instagram</a>
                  <a href="#" className="hover:text-[#8B9D83]">LinkedIn</a>
                </div>
                <span className="text-[9px] text-white/10 uppercase font-black tracking-widest">Pentalks © 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;