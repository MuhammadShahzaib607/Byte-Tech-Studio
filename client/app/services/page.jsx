"use client";
import React from "react";
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import { motion } from "framer-motion";
import { 
  FaCode, FaRobot, FaLayerGroup, FaStore, 
  FaFilm, FaUserTie, FaTasks 
} from "react-icons/fa";
import Link from "next/link.js";

const ServicesPage = () => {

const phoneNumber = "+923403004439";
  const message = encodeURIComponent(
    "Hello Byte Digital Studio! I visited your website and I am very interested in your premium services like MERN Stack Development and AI Solutions. I would like to discuss my project requirements with you in detail."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Future-proof Array: Just add or remove objects here
  const services = [
    {
      id: 1,
      title: "MERN Stack Web Development",
      desc: "Building scalable, high-speed web applications using MongoDB, Express, React, and Node.js. We focus on clean architecture and seamless user experiences.",
      icon: <FaCode />,
      accent: "from-purple-400 to-purple-600",
      link: "mern-stack-web-development"
    },
    {
      id: 2,
      title: "AI Powered Web Applications",
      desc: "Integrating intelligent LLMs and automation into your web ecosystem. From chatbots to predictive analysis, we bring AI to your fingertips.",
      icon: <FaRobot />,
      accent: "from-purple-500 to-purple-700",
      link: "ai-powered-web-applications"
    },
    {
      id: 3,
      title: "Custom Admin Dashboard Development",
      desc: "Data-driven control panels designed for businesses that need precision. Manage your entire operation with a custom-built, secure dashboard.",
      icon: <FaLayerGroup />,
      accent: "from-purple-600 to-purple-800",
      link: "custom-admin-dashboard-development"
    },
    {
      id: 4,
      title: "E-Commerce Store Development",
      desc: "Modern storefronts optimized for conversions. We build secure, lightning-fast e-commerce platforms that scale with your sales.",
      icon: <FaStore />,
      accent: "from-purple-700 to-purple-900",
      link: "e-commerce-store-development"
    },
    {
      id: 5,
      title: "AI Short Films & Video Clips",
      desc: "Revolutionizing content creation with AI-generated cinematic short films and viral video clips for social media and marketing.",
      icon: <FaFilm />,
      accent: "from-purple-400 to-purple-600",
      link: "ai-short-films-video-clips"
    },
    {
      id: 6,
      title: "AI Brand Models Creation",
      desc: "Developing unique AI personas and digital brand models that represent your business values without the need for expensive photoshoots.",
      icon: <FaUserTie />,
      accent: "from-purple-500 to-purple-700",
      link: "ai-brand-models-creation"
    },
    {
      id: 7,
      title: "AI Advertisement & Admin Tasks",
      desc: "Streamlining your business with AI-automated administrative tasks and high-converting AI-driven advertisement strategies.",
      icon: <FaTasks />,
      accent: "from-purple-600 to-purple-800",
      link: "ai-advertisement-admin-tasks"
    }
  ];

  return (
    <>
    <Navbar />
    <div className="bg-[#0f0a1a] min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 mb-6"
          >
            <span className="text-purple-400 uppercase tracking-[0.4em] text-[10px] font-black italic">Infinite Solutions</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-100 to-purple-500 bg-clip-text text-transparent leading-tight">
            Our Expertise.
          </h1>
          <p className="mt-6 text-purple-100/40 text-lg max-w-2xl mx-auto italic">
            At Byte Tech Studio, we don't just provide services; we build the future of your business through code and intelligence.
          </p>
        </div>

        {/* --- Services Alternating Sections --- */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col gap-10 items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon Visual Side */}
              <div className="w-full md:w-2/5 flex justify-center">
                <div className={`relative w-40 h-40 md:w-56 md:h-56 rounded-[3rem] bg-gradient-to-br ${service.accent} flex items-center justify-center text-6xl md:text-8xl text-white shadow-[0_0_50px_rgba(168,85,247,0.2)] transform transition-transform group hover:rotate-6`}>
                   {/* Decorative Inner Border */}
                   <div className="absolute inset-2 border-2 border-white/20 rounded-[2.5rem]" />
                   {service.icon}
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="text-purple-500 font-black text-2xl opacity-20 italic">0{index + 1}</span>
                  <div className="h-[2px] w-8 bg-purple-500/30" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                  {service.title}
                </h2>
                
                <p className="text-purple-100/50 text-base md:text-lg leading-relaxed max-w-xl">
                  {service.desc}
                </p>

                <div className="pt-4">
                   <Link href={`/service/${service.link}`} className="px-6 py-2 rounded-xl bg-purple-900/20 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-[0.2em] hover:bg-purple-600 hover:text-white transition-all">
                      Learn More
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom CTA --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 p-12 rounded-[3rem] bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/10 text-center relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
           <h3 className="text-3xl font-black text-white mb-6">Have a specific requirement?</h3>
           <p className="text-purple-100/40 mb-10 max-w-xl mx-auto italic text-sm">Our team is ready to engineer a custom solution tailored specifically to your project's unique challenges.</p>
           <a href={whatsappUrl} target="_blank" className="px-10 py-4 bg-purple-600 text-white font-black rounded-2xl shadow-xl hover:bg-purple-500 transition-all uppercase tracking-widest text-xs">
              Start Your Project
           </a>
        </motion.div>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default ServicesPage;