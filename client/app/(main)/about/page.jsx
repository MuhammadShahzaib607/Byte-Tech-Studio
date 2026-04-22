"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaGlobe } from "react-icons/fa";


const AboutPage = () => {
  const founders = [
    {
      name: "Muhammad Shahzaib",
      role: "Co-Founder & CTO",
      desc: "A MERN stack developer building SaaS products, e-commerce stores, and custom CRM dashboards. He specializes in integrating smart AI features into web applications to make them more efficient.",
      gradient: "from-purple-600 to-purple-900",
    },
    {
      name: "Sarika",
      role: "Co-Founder & AI Lead",
      desc: "The creative force behind our brand. Sarika specializes in AI video generation and graphic design, turning simple concepts into high-quality visual experiences.",
      gradient: "from-purple-400 to-purple-600",
    },
];

  return (
    <>
    <div className="bg-[#0f0a1a] min-h-screen pt-20 lg:pt-25 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* --- HERO SECTION: OUR STORY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-purple-500" />
              <span className="text-purple-400 uppercase tracking-[0.4em] text-[10px] font-black">Our Origin Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent leading-tight mb-8">
              Young Minds. <br /> Global Vision.
            </h1>
            <div className="space-y-6 text-purple-100/60 text-lg leading-relaxed">
              <p>
                Byte Tech Studio isn't just another agency; it’s a movement started by a group of passionate youngsters right from the heart of Pakistan. We saw the world shifting towards AI and high-end automation, and we decided that Pakistan’s talent should be at the forefront of this digital revolution.
              </p>
              <p>
                Starting as a small team with nothing but high-end laptops and big dreams, we’ve built a startup that bridges the gap between traditional development and the future of Artificial Intelligence. We don't just build websites; we build digital legacies.
              </p>
            </div>
          </motion.div>

          {/* Side Visual Info */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Founded In", val: "2026", icon: <FaRocket /> },
              { label: "Based In", val: "Pakistan", icon: <FaGlobe /> },
              { label: "Focus", val: "AI & Web", icon: <FaLightbulb /> },
              { label: "Mission", val: "Innovation", icon: <FaRocket /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-purple-950/10 border border-purple-500/10 flex flex-col items-center justify-center text-center group transition-all"
              >
                <div className="text-2xl text-purple-500 mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <h4 className="text-white font-black text-xl">{stat.val}</h4>
                <p className="text-purple-100/30 text-[10px] uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- FOUNDERS SECTION --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-b from-white to-purple-500 bg-clip-text text-transparent mb-4">
            Meet The Visionaries
          </h2>
          <p className="text-purple-100/40 tracking-widest uppercase text-xs font-bold">The Core Architects of Byte Digital Studio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative group p-1 rounded-[2.5rem] bg-gradient-to-b from-purple-500/20 to-transparent"
            >
              <div className="bg-[#120c1f] rounded-[2.4rem] p-8 h-full flex flex-col items-center text-center relative overflow-hidden">
                {/* Image Placeholder */}
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 mb-8 border border-purple-400/30 shadow-2xl flex items-center justify-center text-4xl text-white font-black overflow-hidden">
                  {/* Replace with <img src="..." /> later */}
                  {founder.name.charAt(0)}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {founder.name}
                </h3>
                <p className={`text-sm font-black uppercase tracking-widest bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent mb-6`}>
                  {founder.role}
                </p>
                <p className="text-purple-100/50 text-sm leading-relaxed mb-8">
                  {founder.desc}
                </p>

                {/* Subtle Glow inside card */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;