import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Preload the background image
const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = resolve;
    img.onerror = reject;
  });
};

// Text animation variants for Framer Motion
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.05
    }
  }
};

// Variants for each word
const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// AnimatedText component
const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");
  
  return (
    <motion.h1
      className={className}
      variants={textVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ marginRight: "8px", display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default function HomePage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const bgImageUrl = "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80";

  useEffect(() => {
    // Preload the image
    preloadImage(bgImageUrl)
      .then(() => {
        setImageLoaded(true);
      })
      .catch(() => {
        // If image fails to load, show fallback after a short delay
        setTimeout(() => setShowFallback(true), 100);
      });

    // Fallback in case image takes too long to load
    const timeout = setTimeout(() => {
      if (!imageLoaded) setShowFallback(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [bgImageUrl, imageLoaded]);

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ 
        backgroundColor: '#FAF7F2', // Warm cream fallback
        backgroundImage: imageLoaded ? `url(${bgImageUrl})` : 'none',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: 'background-image 0.3s ease'
      }}
    >
      {/* Show a subtle loading indicator until image loads */}
      {!imageLoaded && !showFallback && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#C47A3D] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Overlay for better text readability - only show when image is loaded */}
      {imageLoaded && (
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      )}
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-6 flex items-center z-10"
      >
        <div 
          className="h-10 w-10 mr-2 flex items-center justify-center rounded-md"
          style={{ backgroundColor: '#C47A3D' }}
        >
          <span className="text-white font-bold">P</span>
        </div>
        <span className="text-xl font-semibold text-white">Pentalks</span>
      </motion.div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center text-center w-full max-w-3xl z-10">
        {/* Hero Text */}
        <div className="mb-8">
          <AnimatedText
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
              backgroundColor: '#C47A3D',
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
              color: '#222222'
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