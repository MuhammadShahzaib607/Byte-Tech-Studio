"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaRocket, FaCode, FaRobot } from "react-icons/fa";

const HeroSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    // Updated BG to Midnight Purple (#0f0a1a) to match image theme
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0a1a] py-20">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* Dynamic Purple Glows - Consistent with Process Section */}
      <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[100px]" />
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- TEXT CONTENT --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8"
          >
            {/* Badge - Dark Themed */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 bg-purple-900/30 border border-purple-500/20 w-fit px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-purple-300 text-[10px] font-black uppercase tracking-[0.3em]">Next-Gen AI & Web Agency</span>
            </motion.div>

            {/* Main Heading - Crystal Gradient */}
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent"
            >
              Turning Ideas <br /> 
              <span>Into Digital Magic</span>
            </motion.h1>

            {/* Subtext - Improved Contrast for Dark Theme */}
            <motion.p variants={itemVariants} className="text-purple-100/60 text-lg md:text-xl max-w-xl leading-relaxed">
              At <span className="text-purple-400 font-bold">Byte Tech Studio</span>, we architect high-performance MERN stack apps and cutting-edge AI solutions designed for global scale.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
              <button className="group relative bg-purple-600 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl shadow-purple-900/40 hover:bg-purple-500 transition-all cursor-pointer overflow-hidden">
                <span className="relative z-10">Start Your Project</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              
              <button className="px-8 py-4 rounded-2xl font-bold border border-purple-500/20 text-purple-200 hover:bg-purple-500/10 transition-all cursor-pointer backdrop-blur-sm">
                View Our Work
              </button>
            </motion.div>
          </motion.div>

          {/* --- VISUAL CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main Glassmorphic Card */}
            <div className="relative z-20 bg-gradient-to-tr from-purple-500/10 to-transparent border border-purple-500/20 p-[1px] rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-3xl">
              <div className="bg-[#120c1d]/90 rounded-[2.9rem] p-12 aspect-square flex flex-col justify-center items-center text-center">
                 <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="w-56 h-56 bg-gradient-to-b from-purple-500/20 to-transparent rounded-full flex items-center justify-center border border-purple-500/30 relative"
                 >
                    <FaRobot className="text-8xl text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
                    
                    {/* Floating Tech Chips */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-full h-full"
                    >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#1a1425] p-3 rounded-xl border border-purple-500/40 shadow-xl">
                            <FaCode className="text-xl text-purple-300" />
                        </div>
                    </motion.div>

                    <div className="absolute -bottom-4 bg-[#1a1425] px-6 py-2 rounded-full border border-purple-500/30 shadow-lg">
                        <span className="text-purple-400 text-[10px] font-black tracking-widest uppercase">AI Core Active</span>
                    </div>
                 </motion.div>
                 
                 <h3 className="text-2xl font-black mt-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent italic">
                   "Innovating with Intelligence"
                 </h3>
                 <p className="text-purple-100/40 mt-3 text-xs uppercase tracking-[0.2em]">The Future is Byte</p>
              </div>
            </div>

            {/* Glowing Orbs for Depth */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-800/10 rounded-full blur-[60px]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;