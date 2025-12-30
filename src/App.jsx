import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Core Components (Loaded Immediately)
import Navbar from './components/Navbar';
import SmoothScrollManager from './components/SmoothScrollManager';

// Lazy Loaded Pages (Optimized Loading)
const Home = lazy(() => import('./components/pages/Home'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const CompaniesPage = lazy(() => import('./components/pages/CompaniesPage'));
const MukhamPage = lazy(() => import('./components/pages/MukhamPage'));
const VerPage = lazy(() => import('./components/pages/VerPage'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Helper Component to handle Conditional Footer and Selection Theme
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="bg-[#F9F7F2] min-h-screen selection:bg-[#0f4c39] selection:text-[#F9F7F2]">
      {/* 1. Initialize Smooth Scrolling */}
      <SmoothScrollManager /> 
      
      <Navbar />
      
      <main className="min-h-screen flex flex-col bg-[#F9F7F2]">
        {/* 2. Suspense boundary shows a clean transition while lazy components load */}
        <Suspense fallback={
          <div className="h-screen w-full bg-[#F9F7F2] flex items-center justify-center">
            <div className="w-12 h-[1px] bg-[#0f4c39] animate-pulse" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/mukham" element={<MukhamPage />} />
            <Route path="/ver" element={<VerPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      {/* 3. Conditional Footer: Only rendered on Home Page */}
      {isHomePage && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;