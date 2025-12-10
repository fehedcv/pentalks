import React from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logogreen.png';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-[#C47A3D]' : 'hover:text-[#C47A3D]';
  };

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
        <Link to="/" className={`transition-colors hover-target ${isActive('/')}`}>
          Home
        </Link>
        <Link to="/about" className={`transition-colors hover-target ${isActive('/about')}`}>
          About
        </Link>
        <Link to="/companies" className={`transition-colors hover-target ${isActive('/companies')}`}>
          Companies
        </Link>
        

      </div>
      <button className="md:hidden text-2xl text-[#0a0a0a]"><Menu /></button>
    </nav>
  );
};

export default Navbar;