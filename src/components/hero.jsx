import React from "react";
import { motion } from "framer-motion";
import BlurText from "./blurtext";

export default function HomePage() {
  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ 
        backgroundImage: "../assets/hero-bg.png",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-6 flex items-center z-10"
      >
        <img src="/image.png" alt="Pentalks Logo" className="h-10 w-10 mr-2" />
        <span className="text-xl font-semibold text-white">Pentalks</span>
      </motion.div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center text-center w-full max-w-3xl z-10">
        {/* Hero Text */}
        <div className="mb-8">
          <BlurText
            text="Launch Faster. Build Smarter."
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-white"
          >
            Pentalks helps startups and teams design, build, and launch digital products in record time — with modern tools, sleek design, and powerful automation.
          </motion.p>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-4"
        >
          <a
            href="#get-started"
            className="px-8 py-3 font-medium rounded-lg shadow-md transition text-center"
            style={{ 
              backgroundColor: '#C47A3D', // Refined terracotta
              color: 'white'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#A8652F'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#C47A3D'}
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="px-8 py-3 font-medium rounded-lg transition text-center bg-white bg-opacity-90"
            style={{ 
              color: '#222222' // Deep neutral text
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#FAF7F2';
              e.target.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            }}
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
}