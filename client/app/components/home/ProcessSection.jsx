"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaDraftingCompass, FaLayerGroup, FaRocket } from "react-icons/fa";

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery & Strategy",
      desc: "We dive deep into your vision to architect a strategic roadmap powered by cutting-edge AI and modern frameworks.",
      icon: <FaLightbulb />,
    },
    {
      id: "02",
      title: "Design & Prototype",
      desc: "Crafting immersive UI/UX experiences that blend high-end aesthetics with seamless user functionality.",
      icon: <FaDraftingCompass />,
    },
    {
      id: "03",
      title: "Development & AI",
      desc: "Engineered with the MERN stack and custom AI models to build scalable, intelligent, and robust applications.",
      icon: <FaLayerGroup />,
    },
    {
      id: "04",
      title: "Launch & Optimization",
      desc: "Executing precision deployment followed by data-driven scaling to ensure your business stays ahead of the curve.",
      icon: <FaRocket />,
    },
  ];

  return (
    // Section BG: Deep Midnight Purple (Matches Hero)
    <section className="bg-[#0f0a1a] py-24 relative overflow-hidden">
      
      {/* Background Decorative Glows - Pure Purple Intensity */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-800/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6 justify-center md:justify-start"
          >
            <div className="h-[2px] w-12 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            <span className="text-purple-400 uppercase tracking-[0.4em] text-[10px] font-black">Execution Framework</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white via-purple-300 to-purple-700 bg-clip-text text-transparent"
          >
            Turning Complex Ideas <br /> Into Digital Magic
          </motion.h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[420px] rounded-[3rem] p-8 overflow-hidden bg-purple-950/20 border border-purple-500/10 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-500 backdrop-blur-sm"
            >
              {/* Card Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-b from-purple-600 to-transparent transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* ID Number - Ghost Text (Updated to subtle purple) */}
                <span className="text-7xl font-black text-purple-500/5 mb-4 block group-hover:text-purple-500/10 transition-all">
                  {step.id}
                </span>
                
                {/* Icon with Glowing Shadow */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-900 flex items-center justify-center text-2xl text-white mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
                  {step.title}
                </h3>
                
                <p className="text-purple-100/60 leading-relaxed text-sm group-hover:text-purple-100 transition-colors">
                  {step.desc}
                </p>
              </div>

              {/* Progress Line - Dynamic Filling */}
              <div className="relative z-10 h-1 w-full bg-purple-900/30 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  className="h-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unified Purple CTA Box - Glassmorphism Update */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 relative group"
        >
           <div className="absolute inset-0 bg-purple-600 blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" />
           <div className="relative bg-purple-900/10 border border-purple-500/20 rounded-[3rem] px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-2xl">
              <div className="max-w-xl">
                <h4 className="text-3xl font-black bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-3">Ready to Innovate?</h4>
                <p className="text-purple-200/60 text-lg italic">Share your project details and let Byte Tech Studio build your next breakthrough.</p>
              </div>
              
              <button className="relative overflow-hidden group/btn px-10 py-5 bg-purple-600 text-white font-black rounded-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all">
                 <span className="relative z-10 uppercase tracking-widest text-xs">Kickstart Now</span>
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-700 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;