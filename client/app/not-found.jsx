"use client"; // Framer Motion ke liye zaroori hai
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaHome, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3, delayChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#0f0a1a] flex flex-col items-center justify-center text-white p-6 relative overflow-hidden font-sans">
      
      {/* --- BACKGROUND ELEMENTS (Subtle Purple Glows) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-900/10 rounded-full blur-[80px] pointer-events-none" />

      {/* --- MAIN CONTENT CONTAINER --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 flex flex-col items-center"
      >
        
        {/* --- ANIMATED VISUAL (Floating Robot with Glitch Effect) --- */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="relative mb-8"
        >
          {/* Subtle Glow behind the robot */}
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl transform scale-110"></div>
          
          <div className="relative bg-gradient-to-b from-purple-900/40 to-[#120c1d] p-10 rounded-full border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <FaRobot className="text-8xl md:text-9xl text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            
            {/* Warning Icon Overlay */}
            <motion.div 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-2 -right-2 bg-charcoal-black p-2 rounded-full border border-purple-500/50"
            >
              <FaExclamationTriangle className="text-2xl text-purple-300" />
            </motion.div>
          </div>
        </motion.div>

        {/* --- TEXT CONTENT --- */}
        {/* Modernized 404 Text with Gradient and Shadow */}
        <motion.h1 
          variants={itemVariants}
          className="text-[100px] font-black leading-none bg-gradient-to-b from-white via-purple-300 to-purple-800 bg-clip-text text-transparent tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        >
          404
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-extrabold text-white tracking-tight"
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-purple-100/60 mt-6 mb-12 max-w-lg mx-auto text-lg md:text-xl leading-relaxed"
        >
          Oops! It seems like our AI got lost trying to find this page. It's likely wandered into the wrong dimension. Let's get you back to safety.
        </motion.p>

        {/* --- COOL CTAs --- */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center">
          <Link 
            href="/"
            className="group relative flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-900 rounded-2xl font-black text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <FaHome className="text-xl group-hover:-translate-y-0.5 transition-transform" />
            <span className="relative z-10">Return to Home</span>
          </Link>
          
          <Link 
            href="/contact"
            className="px-10 py-4 rounded-2xl font-bold border border-purple-500/20 text-purple-200 hover:bg-purple-500/10 transition-all cursor-pointer backdrop-blur-sm"
          >
            Report Issue
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}