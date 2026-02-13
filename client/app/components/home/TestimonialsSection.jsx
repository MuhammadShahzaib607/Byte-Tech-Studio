"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const reviews = [
  {
    name: "Azmat Ali Sheikh",
    role: "Project Lead, BrandSocia",
    text: "Byte Tech Studio delivered a high-performance admin dashboard that streamlined our entire workflow. Their technical depth in MERN stack is impressive.",
    rating: 5,
  },
  {
    name: "Omar Farooq",
    role: "Digital Marketing Director",
    text: "The AI brand models and advertisement clips created by them gave our campaign a futuristic edge. Highly professional team with timely delivery.",
    rating: 5,
  },
  {
    name: "Hamza Malik",
    role: "E-commerce Entrepreneur",
    text: "From book-keeping tasks to a fully functional AI-powered store, they handled everything. A true one-stop shop for digital transformation.",
    rating: 5,
  },
];

  return (
    <section className="bg-[#0f0a1a] py-24 relative overflow-hidden border-t border-purple-500/5">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Static Content (4 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
              <span className="text-purple-400 uppercase tracking-[0.4em] text-[10px] font-black">Success Stories</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black leading-[1.1] bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent"
            >
              What Our <br /> 
              <span className="italic">Partners Say</span>
            </motion.h2>
            
            <p className="text-purple-100/40 text-lg leading-relaxed max-w-sm">
              We don't just take orders; we build long-term digital legacies with our global clients.
            </p>
          </div>

          {/* RIGHT: Modern Stacked Reviews (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            {reviews.map((rev, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group p-8 rounded-[2rem] bg-purple-950/10 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-xl"
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-r from-purple-500 to-transparent transition-opacity rounded-[2rem]" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <FaStar key={i} className="text-purple-400 text-xs" />
                      ))}
                    </div>
                    <FaQuoteLeft className="text-purple-500/20 text-3xl group-hover:text-purple-500/40 transition-colors" />
                  </div>

                  <p className="text-purple-100/70 text-base md:text-lg mb-8 leading-relaxed italic">
                    "{rev.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    {/* Placeholder for User Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-900 border border-purple-400/30 flex items-center justify-center font-black text-white text-sm">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold tracking-tight">{rev.name}</h4>
                      <p className="text-purple-500 font-black text-[10px] uppercase tracking-widest">{rev.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;