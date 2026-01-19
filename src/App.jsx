import React, { Suspense, lazy, useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Core Components
import Navbar from './components/Navbar';
import ScrollManager from './components/ScrollManager';
import Preloader from './components/PreLoader'; // Create this file (code below)

// Lazy Pages for optimized bundle size
const Home = lazy(() => import('./components/pages/Home'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const CompaniesPage = lazy(() => import('./components/pages/CompaniesPage'));
const MukhamPage = lazy(() => import('./components/pages/MukhamPage'));
const VerPage = lazy(() => import('./components/pages/VerPage'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Optimization: Wait for all assets (images, videos, fonts)
    const handleLoad = () => {
      // Small delay after load for a cinematic fade-out
      setTimeout(() => setIsLoading(false), 1200);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    // Updated background to Espresso to prevent the "white flash" glitch
    <div className="bg-[#1C150D] min-h-screen selection:bg-[#8B9D83] selection:text-[#1C150D]">
      
      {/* 1. Turtle Preloader - Waits for everything */}
      <Preloader isLoading={isLoading} />

      <ScrollManager />

      {/* 2. Main content only fades in once assets are ready */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />

        <main className="min-h-screen flex flex-col">
          <Suspense
            fallback={
              /* Subtle loading state for route changes */
              <div className="h-screen w-full bg-[#1C150D] flex items-center justify-center">
                <div className="w-12 h-[1px] bg-[#8B9D83] animate-pulse" />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/companies" element={<CompaniesPage />} />
              <Route path="/mukham" element={<MukhamPage />} />
              <Route path="/veru" element={<VerPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </motion.div>
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