"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaChartLine, FaMagic, FaFingerprint } from "react-icons/fa";

const CapabilitiesSection = () => {
  const features = [
    {
      title: "Hyper-Personalized AI Models",
      desc: "We build custom neural networks that adapt specifically to your unique brand voice and business logic.",
      icon: <FaFingerprint className="text-purple-400" />,
      gradient: "from-purple-400 to-purple-600",
    },
    {
      title: "Scalable MERN Architecture",
      desc: "Our codebases are built for millions. We focus on zero-latency and high-throughput server environments.",
      icon: <FaChartLine className="text-purple-400" />,
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "Enterprise Grade Security",
      desc: "Military-grade encryption for your AI data and web applications, ensuring your digital assets stay protected.",
      icon: <FaShieldAlt className="text-purple-400" />,
      gradient: "from-purple-600 to-purple-800",
    },
    {
      title: "Digital Transformation Magic",
      desc: "From legacy systems to future-ready AI hubs, we bridge the gap between imagination and execution.",
      icon: <FaMagic className="text-purple-400" />,
      gradient: "from-purple-700 to-purple-900",
    },
  ];

  return (
    <section className="bg-[#0f0a1a] py-10 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* --- LEFT SIDE: THE TEXT CONTENT --- */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-[2px] w-12 bg-purple-500" />
                <span className="text-purple-400 uppercase tracking-[0.4em] text-[10px] font-black">Our Capabilities</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent"
              >
                Beyond Code. <br />
                We Build Intelligence.
              </motion.h2>
              <p className="mt-6 text-purple-100/50 text-lg max-w-xl italic">
                Breaking the monotony of standard web development with AI-driven precision.
              </p>
            </div>

            {/* List Items (Replacing Cards) */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-6 items-start cursor-default"
                >
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-purple-900/20 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-400 transition-all duration-500 shadow-lg shadow-purple-900/40">
                    <span className="text-xl group-hover:text-white transition-colors">
                      {feature.icon}
                    </span>
                  </div>
                  <div className="space-y-2 border-b border-purple-500/10 pb-6 w-full">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent group-hover:to-purple-500 transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-purple-100/40 group-hover:text-purple-100/70 transition-colors leading-relaxed text-sm md:text-base">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: INTERACTIVE VISUAL --- */}
          <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
             {/* Large Animated Circle Element */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-purple-500/10 flex items-center justify-center"
             >
                {/* Floating Orbitals */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
                <div className="absolute -bottom-2 left-1/4 w-6 h-6 bg-purple-800 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]" />
                
                {/* Inner Static Glow */}
                <div className="absolute inset-4 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-3xl flex items-center justify-center">
                    <div className="text-center">
                        <motion.span 
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 4 }}
                          className="block text-5xl md:text-7xl font-black text-white/10"
                        >
                            BYTE
                        </motion.span>
                    </div>
                </div>
             </motion.div>

             {/* Floating Stats or Labels to fill space */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ repeat: Infinity, duration: 5 }}
               className="absolute top-10 right-10 bg-purple-900/20 backdrop-blur-md border border-purple-500/30 p-4 rounded-2xl shadow-2xl"
             >
                <p className="text-purple-400 font-black text-xs uppercase tracking-widest">Efficiency</p>
                <h4 className="text-2xl font-black text-white">+99%</h4>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ repeat: Infinity, duration: 6, delay: 1 }}
               className="absolute bottom-10 left-10 bg-purple-900/20 backdrop-blur-md border border-purple-500/30 p-4 rounded-2xl shadow-2xl"
             >
                <p className="text-purple-400 font-black text-xs uppercase tracking-widest">Uptime</p>
                <h4 className="text-2xl font-black text-white">24/7</h4>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;