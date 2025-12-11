import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logogreen.png';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'text-[#C47A3D]' : 'hover:text-[#C47A3D]';
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/companies', label: 'Companies' },
    { path: '/mukham', label: 'Mukham' },
    { path: '/ver', label: 'Ver' },
  ];

  return (
    <nav className="flex justify-between items-center py-6 px-8 md:px-16 fixed w-full top-0 z-50 backdrop-blur-md bg-[#FAF7F2]/80">
      <Link to="/" className="flex items-center gap-4 hover-target cursor-pointer group">
        <div className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-110">
          <img src={logo} alt="Pentalks Logo" className="w-full h-full object-contain" />
        </div>
        <div className="text-xl font-bold font-syne tracking-tighter text-[#0a0a0a]">
          PENTALKS.
        </div>
      </Link>

      <div className="hidden md:flex gap-8 text-sm font-medium text-[#0a0a0a]">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} className={`transition-colors hover-target ${isActive(link.path)}`}>
            {link.label}
          </Link>
        ))}
      </div>

      <button 
        className="md:hidden text-2xl text-[#0a0a0a] z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FAF7F2] z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-2xl font-syne font-bold transition-colors ${isActive(link.path)}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
