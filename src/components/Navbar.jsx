import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react'; // Added ArrowUpRight for flair
import { Link, useLocation } from 'react-router-dom';
const logoAsset = 'https://res.cloudinary.com/dmtzmgbkj/image/upload/f_webp/v1768325094/og_logo_hsjtzo.png'; 

const Navbar = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed w-full top-0 z-[100] border-b border-white/10 bg-[#0f4c39]/80 backdrop-blur-xl transition-colors duration-500"
          >
            <div className="w-full flex justify-between items-center px-6 md:px-12 py-4 relative overflow-hidden group">
              
              {/* --- LOGO SECTION --- */}
              <Link to="/" className="flex items-center gap-4 z-10">
                <div className="relative">
                    <img 
                      src={logoAsset} 
                      alt="Pentalks Logo" 
                      className="w-24 md:w-28 object-contain"
                    />
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
                        className="absolute inset-0 z-0 bg-[#FAF7F2] rounded-tr-xl rounded-bl-xl"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
                
                {/* SET ROUTING FOR DESKTOP CONNECT BUTTON */}
                <Link to="/contact">
                  <button className="ml-8 px-8 py-2.5 bg-[#FAF7F2] text-[#0f4c39] text-[10px] font-black uppercase tracking-[0.2em] 
                                   rounded-tr-xl rounded-bl-xl transition-all duration-300 hover:rounded-none shadow-xl">
                    Connect
                  </button>
                </Link>
              </div>

              {/* --- MOBILE TOGGLE --- */}
              <button 
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-tr-xl rounded-bl-xl bg-[#FAF7F2] text-[#0f4c39] transition-transform active:scale-90"
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
            className="fixed inset-0 bg-[#1C150D] z-[120] flex flex-col"
          >
            {/* Header */}
            <div className="p-8 flex justify-between items-center border-b border-white/5">
                <span className="text-[10px] font-bold text-[#8B9D83] uppercase tracking-[0.5em]">Pentalks-Navigation</span>
                <button 
                 onClick={() => setMobileMenuOpen(false)}
                 className="w-12 h-12 flex items-center justify-center rounded-tr-2xl rounded-bl-2xl bg-[#FAF7F2] text-[#0f4c39]"
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
                    className={`text-5xl font-black uppercase tracking-tighter transition-all
                      ${location.pathname === link.path ? "text-[#FAF7F2]" : "text-[#FAF7F2]/20"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* CONNECT BUTTON IN MOBILE DRAWER */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * (navLinks.length) }}
                className="mt-8 pt-8 border-t border-white/5"
              >
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full py-6 bg-[#0f4c39] text-[#FAF7F2] text-xl font-black uppercase tracking-widest 
                                   rounded-tr-3xl rounded-bl-3xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
                    Connect <ArrowUpRight size={24} />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="p-10 border-t border-white/5 flex justify-between items-end">
                <div>
                   {/* <p className="text-[#8B9D83] text-[9px] font-bold uppercase tracking-widest mb-2">// Network</p> */}
                   <div className="flex gap-6 text-white/40 text-[10px] font-bold uppercase">
                     <a href="#" className="hover:text-[#FAF7F2]">IG</a>
                     <a href="#" className="hover:text-[#FAF7F2]">LI</a>
                   </div>
                </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;