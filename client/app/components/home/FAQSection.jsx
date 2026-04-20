"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi";

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services does Byte Tech Studio offer?",
      answer: "We specialize in MERN Stack Development, AI-Powered Applications, Custom Admin Dashboards, E-Commerce Stores, and AI Content Generation including short films and brand models.",
    },
    {
      id: 2,
      question: "How do I start a project with you?",
      answer: "The simplest way is to click the 'Order Now' button. It will connect you directly to our WhatsApp where we can discuss your requirements and provide a strategic roadmap.",
    },
    {
      id: 3,
      question: "Can you integrate AI into my existing website?",
      answer: "Yes, we can seamlessly integrate custom AI models, LLMs, and automation tools into your current MERN or React-based applications to enhance functionality.",
    },
    {
      id: 4,
      question: "Do you provide administrative and book-keeping services?",
      answer: "Absolutely. Along with technical development, we handle AI-driven administrative tasks and professional book-keeping to help manage your business operations efficiently.",
    },
    {
      id: 5,
      question: "How long does a typical project take?",
      answer: "Timeline depends on the complexity. A custom dashboard might take 2-4 weeks, while AI branding or video clips can be delivered within days. We prioritize quality and precision.",
    },
  ];

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-[#0f0a1a] pt-10 pb-20 relative overflow-hidden">
      {/* Background Decor Glow */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/20 mb-6"
          >
            <span className="text-purple-400 uppercase tracking-[0.4em] text-[10px] font-black italic">Support Center</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent"
          >
            Frequently Asked <br /> Questions
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: faq.id * 0.1 }}
              className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                activeId === faq.id 
                ? "bg-purple-950/20 border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.1)]" 
                : "bg-purple-950/10 border-purple-500/10 hover:border-purple-500/30"
              }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-bold tracking-tight transition-colors duration-300 pr-5 ${
                  activeId === faq.id ? "text-white" : "text-purple-100/70"
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeId === faq.id ? "bg-purple-600 text-white rotate-180" : "bg-purple-900/40 text-purple-400 border border-purple-500/10"
                }`}>
                  {activeId === faq.id ? <HiMinus size={20} /> : <HiPlus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8">
                      <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/20 to-transparent mb-6" />
                      <p className="text-purple-100/50 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-purple-400/40 text-sm italic tracking-wide">
            Can't find what you're looking for? 
            <span className="block mt-2 text-purple-400 font-black uppercase tracking-tighter text-lg cursor-pointer hover:text-white transition-all underline decoration-purple-500/30 underline-offset-8">
              Chat with Byte Tech Team
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;