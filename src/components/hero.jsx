import React from "react";
import { motion } from "framer-motion";
import BlurText from "./blurtext";
import heroBg from "/hero-bg.png"; // Ensure you have a suitable background image


const AnimatedText = ({ text, className }) => {
  // Split text into words
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

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.05 // This creates the staggered effect for each word
    }
  }
};

// Variants for each word
const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ 
        backgroundImage:`url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >

      


      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center text-center w-full max-w-3xl z-10">
        {/* Hero Text */}
        <div className="mb-6">
          <AnimatedText
            text="Design, Build, Launch Faster than ever"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#222222]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-[#555555]"
          >
            Pentalks helps startups and teams design, build, and launch digital products in record time — with modern tools, sleek design, and powerful automation.
          </motion.p>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-4"
        >
          <a
            href="/#/contact"
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
            href="/#/about"
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