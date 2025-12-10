import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/cursor';
import SmoothScrollManager from './components/SmoothScrollManager';
// Page Views
import Home from './components/pages/Home';
import AboutPage from './components/pages/AboutPage';
import CompaniesPage from './components/pages/CompaniesPage';

const App = () => {
  return (
    <HashRouter>
      <div className="bg-[#FAF7F2] min-h-screen selection:bg-[#C47A3D] selection:text-[#FAF7F2]">
        <Cursor />
        <SmoothScrollManager />
        <Navbar />
        
        <main className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;