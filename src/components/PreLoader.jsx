import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-[#1C150D] flex flex-col items-center justify-center"
        >
          {/* THE TURTLE SHELL (SCUTE) LOADER */}
          <div className="relative">
            {/* Pulsing Outer Shell */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="w-32 h-32 md:w-48 md:h-48 border border-[#8B9D83]/20 rounded-tr-[40px] rounded-bl-[40px] md:rounded-tr-[60px] md:rounded-bl-[60px]"
            />

            {/* Inner "Veru" (Root) Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg 
                width="40" height="40" viewBox="0 0 100 100" 
                className="fill-[#8B9D83]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
              </motion.svg>
            </div>
          </div>

          {/* BRAND TEXT */}
          <div className="mt-12 overflow-hidden text-center">
            <motion.h2 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="font-syne text-[#FAF7F2] text-xl md:text-2xl font-800 uppercase tracking-[0.5em]"
            >
              Pentalks
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-[1px] bg-[#8B9D83] mt-2"
            />
            <p className="font-inter text-[#8B9D83]/50 text-[10px] uppercase tracking-[0.3em] mt-4 italic">
              Architecting Resonance...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;