"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, FaRobot, FaChartPie, FaShoppingCart, 
  FaVideo, FaPalette, FaMicrochip 
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      title: "MERN Stack Development",
      desc: "Architecting robust full-stack solutions with MongoDB, Express, React, and Node.js for high-performance applications.",
      icon: <FaCode />,
      size: "lg:col-span-2",
    },
    {
      title: "AI Powered Apps",
      desc: "Integrating LLMs and Neural Networks into modern web ecosystems.",
      icon: <FaRobot />,
      size: "lg:col-span-1",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Scalable stores with seamless payment gateways and AI-driven recommendations.",
      icon: <FaShoppingCart />,
      size: "lg:col-span-1",
    },
    {
      title: "Custom Dashboards",
      desc: "Data-driven admin panels for complete business control.",
      icon: <FaChartPie />,
      size: "lg:col-span-1",
    },
    {
      title: "AI Brand Models",
      desc: "Generating unique AI personas for high-converting digital marketing.",
      icon: <FaPalette />,
      size: "lg:col-span-1",
    },
    {
      title: "AI Video Generation",
      desc: "Cinematic AI short films and high-fidelity advertisement clips for modern brands.",
      icon: <FaVideo />,
      size: "lg:col-span-2",
    },
  ];

  return (
    <section className="bg-[#0f0a1a] py-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[2px] w-12 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            <span className="text-purple-400 uppercase tracking-[0.4em] text-[10px] font-black">Our Expertise</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-600 bg-clip-text text-transparent leading-[1.2]"
          >
            Digital Ecosystem <br /> & Intelligent Services
          </motion.h2>
        </div>

        {/* Bento Grid - Glassmorphism Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.size} group relative bg-purple-950/10 border border-purple-500/10 rounded-[2.5rem] p-8 overflow-hidden hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm`}
            >
              {/* Inner Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-purple-500 to-transparent transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-[#1a1425] border border-purple-500/20 flex items-center justify-center text-2xl text-purple-400 mb-8 group-hover:scale-110 group-hover:text-white group-hover:bg-purple-600 transition-all duration-500 shadow-xl shadow-purple-900/40">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4 group-hover:to-purple-400 transition-all">
                    {service.title}
                  </h3>
                  
                  <p className="text-purple-100/40 text-sm md:text-base leading-relaxed group-hover:text-purple-100/70 transition-colors">
                    {service.desc}
                  </p>
                </div>

                {/* Footer of Card */}
                <div className="mt-10 flex items-center justify-between border-t border-purple-500/10 pt-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500/60 group-hover:text-purple-400">Premium Solution</span>
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 border border-purple-500/10 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                     <FaMicrochip className="text-sm" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center text-center"
        >
           <p className="text-purple-200/40 text-sm font-bold tracking-widest uppercase mb-6 italic">Ready to redefine your digital limits?</p>
           <button className="group relative px-10 py-4 bg-transparent text-white font-black rounded-2xl border border-purple-500/30 overflow-hidden transition-all">
              <span className="relative z-10 tracking-widest text-xs">VIEW ALL CAPABILITIES</span>
              <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
           </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;