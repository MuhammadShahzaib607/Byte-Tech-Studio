"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaComments, FaRocket, FaFileSignature } from "react-icons/fa";

const OrderProcess = () => {
  const phoneNumber = "+923403004439";
  const message = encodeURIComponent(
    "Hello Byte Digital Studio! I want to place an order and discuss my project requirements."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const steps = [
    {
      title: "Connect via WhatsApp",
      desc: "Simply click the 'Order Now' button below. It will instantly connect you with our lead consultant to discuss your vision in real-time.",
      icon: <FaComments />,
      gradient: "from-purple-400 to-purple-600",
    },
    {
      title: "Strategy & Quote",
      desc: "We analyze your requirements, provide a transparent roadmap, and finalize the budget that fits your business goals perfectly.",
      icon: <FaFileSignature />,
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "Deployment & Delivery",
      desc: "Our engineers build, test, and launch your project. We don't just deliver code; we deliver a high-performance digital asset.",
      icon: <FaRocket />,
      gradient: "from-purple-600 to-purple-900",
    },
  ];

  return (
    <section className="bg-[#0f0a1a] py-14 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/20 mb-6"
          >
            <span className="text-purple-400 uppercase tracking-[0.4em] text-[10px] font-black">Fast-Track Process</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent leading-tight"
          >
            Ready to Start? <br /> It's Just 3 Steps Away.
          </motion.h2>
        </div>

        {/* Vertical Steps Flow */}
        <div className="relative space-y-16">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-purple-800/20 to-transparent hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <h3 className="text-2xl font-black bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-4 italic">
                  {step.title}
                </h3>
                <p className="text-purple-100/50 text-base md:text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Center Icon Node */}
              <div className="relative z-20 flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1425] border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center text-xl text-purple-400 transition-transform hover:rotate-12">
                  {step.icon}
                </div>
              </div>

              {/* Spacer for alignment */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Massive Order Now Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 text-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-purple-600 text-white rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-[0_20px_50px_rgba(147,51,234,0.3)] hover:shadow-[0_25px_60px_rgba(147,51,234,0.5)] transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaWhatsapp className="text-3xl animate-bounce" />
              Order Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <p className="mt-6 text-purple-500 font-bold animate-pulse text-sm tracking-widest uppercase">
            Clicking will open WhatsApp directly
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderProcess;