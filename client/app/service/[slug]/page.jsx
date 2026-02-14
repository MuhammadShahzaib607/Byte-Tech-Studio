"use client";
import React from "react";
import Navbar from "../../components/Navbar.jsx"
import Footer from "../../components/Footer.jsx"
import { motion } from "framer-motion";
import { 
  FaCode, FaRobot, FaLayerGroup, FaStore, 
  FaFilm, FaUserTie, FaTasks, FaChevronRight 
} from "react-icons/fa";
import Link from "next/link";

// Detailed Content Mapping
const serviceDetails = {
  "mern-stack-web-development": {
    title: "Mern Stack Web Development",
    icon: <FaCode />,
    paras: [
      "Our MERN Stack expertise is built on the foundation of performance and scalability. We utilize MongoDB for flexible data storage, Express and Node.js for a lightning-fast backend, and React for highly interactive user interfaces. This combination allows us to build everything from complex SaaS platforms to lightweight business tools that work flawlessly under heavy traffic.",
      "Beyond just writing code, we focus on 'Clean Architecture.' This means your application is modular, easy to update, and secure from external threats. We integrate state management tools and optimized APIs to ensure that the transition between data and design is seamless, providing your users with a smooth, app-like experience in their browser.",
      "At Byte Tech Studio, we don't believe in one-size-fits-all. Every line of JavaScript is written to solve your specific business challenges, ensuring that your web presence is not just a site, but a powerful asset that drives growth and engagement."
    ]
  },
  "ai-powered-web-applications": {
    title: "AI Powered Web Applications",
    icon: <FaRobot />,
    paras: [
      "We bridge the gap between traditional web apps and future-ready intelligence. By integrating Large Language Models (LLMs) and custom neural networks, we transform static websites into dynamic, thinking machines. Whether it's automated customer support or complex data prediction, our AI solutions are designed to learn and adapt.",
      "Our team specializes in creating seamless API integrations with OpenAI, Anthropic, and open-source models like Llama. We don't just 'add a chatbot'; we build features like automated content generation, intelligent search algorithms, and personalized user flows that anticipate what your customer needs before they even ask.",
      "Security and ethics are at the heart of our AI development. We ensure that all AI integrations are data-compliant and optimized for speed, so your application remains fast while delivering mind-bending capabilities that set you apart from the competition."
    ]
  },
  "custom-admin-dashboard-development": {
    title: "Custom Admin Dashboard Development",
    icon: <FaLayerGroup />,
    paras: [
      "Data is useless if you can't visualize and control it. Our custom admin dashboards provide a high-level overview of your entire business operation in one secure location. We design these panels specifically for decision-makers, focusing on real-time analytics, user management, and automated reporting.",
      "Built with security as a priority, our dashboards feature multi-level authentication and role-based access control. Whether you're managing inventory, tracking sales, or monitoring server health, we create intuitive interfaces that make complex data sets easy to understand and act upon.",
      "We eliminate the need for multiple third-party tools by consolidating all your administrative needs into one unified interface. It's not just a dashboard; it's your business's central nervous system, built to improve efficiency and reduce manual workload."
    ]
  },
  "e-commerce-store-development": {
    title: "E-commerce Store Development",
    icon: <FaStore />,
    paras: [
      "In the world of online shopping, speed and trust are everything. We build e-commerce platforms that load instantly and provide a secure, frictionless path to purchase. From custom product builders to complex inventory synchronization, we ensure your store is ready to handle global demand.",
      "Our solutions go beyond standard templates. We focus on 'Conversion Rate Optimization' (CRO), ensuring that the UI/UX guides users naturally toward the checkout. We integrate secure payment gateways (Stripe, PayPal, etc.) and build custom shopping carts that reduce abandonment rates.",
      "Whether you are a startup or an established brand, our e-commerce solutions are built to scale. As your product catalog grows, your site's performance remains consistent, backed by optimized databases and content delivery networks (CDNs)."
    ]
  },
  "ai-short-films-video-clips": {
    title: "AI Short Films Video Clips",
    icon: <FaFilm />,
    paras: [
      "Visual storytelling has entered a new era. We leverage state-of-the-art AI video generation tools to create cinematic short films and viral-ready clips. This service allows brands to produce high-quality visual content without the massive overhead of traditional film sets and crews.",
      "Our process involves AI-driven scriptwriting, scene generation, and native audio synthesis. We can create hyper-realistic environments or stylized animations that align perfectly with your brand identity. These clips are optimized for engagement on platforms like Instagram Reels, TikTok, and YouTube.",
      "By blending human creativity with generative AI, we deliver content that is not only visually stunning but also strategically aligned with your marketing goals. It’s high-fidelity production at the speed of thought."
    ]
  },
  "ai-brand-models-creation": {
    title: "AI Brand Models Creation",
    icon: <FaUserTie />,
    paras: [
      "Give your brand a face that never sleeps. We create unique, hyper-realistic AI personas and brand models that represent your business in advertisements, social media, and customer interactions. These models are tailored to match your brand's specific demographics and aesthetic values.",
      "Gone are the days of expensive photoshoots and talent scouting. Our AI brand models can be placed in any environment, wearing any outfit, and expressing any emotion. This provides you with an infinite supply of marketing material that is consistent and instantly recognizable.",
      "These digital ambassadors are perfect for brands looking to maintain a futuristic and innovative image. We ensure that every AI model is high-resolution and indistinguishable from real photography, giving your brand a premium edge."
    ]
  },
  "ai-advertisement-admin-tasks": {
    title: "AI Advertisement Admin Tasks",
    icon: <FaTasks />,
    paras: [
      "We redefine productivity by automating the mundane. Our AI-driven administrative solutions handle everything from automated email sorting and scheduling to complex book-keeping. This allows your team to focus on high-level strategy while the AI manages the repetitive tasks.",
      "In the realm of advertising, our AI tools analyze market trends and user behavior to generate high-converting ad copy and visual assets. We use data-driven insights to optimize your ad spend, ensuring that every dollar is targeted toward the right audience at the right time.",
      "Efficiency is our core mission. By integrating AI into your daily operations, we help you reduce human error, speed up response times, and create a lean, agile business model that can compete in the modern digital landscape."
    ]
  }
};

const ServiceDetailPage = ({ params }) => {

    const phoneNumber = "+923403004439";
  const message = encodeURIComponent(
    "Hello Byte Tech Studio! I visited your website and I am very interested in your premium services like MERN Stack Development and AI Solutions. I would like to discuss my project requirements with you in detail."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  // Decoding the slug to match our keys
  const { slug } = React.use(params);
  const data = serviceDetails[slug] || {
    title: "Service Not Found",
    icon: <FaRobot />,
    paras: ["The service you are looking for is currently being engineered. Please check back later."]
  };

  return (
    <>
    <Navbar />
    <div className="bg-[#0f0a1a] min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Dynamic Glow Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Breadcrumb & Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 mb-12 text-purple-400/60 text-xs font-bold uppercase tracking-widest"
        >
          <Link href="/services" className="hover:text-purple-400 cursor-pointer">Services</Link>
          <FaChevronRight className="text-[10px]" />
          <span className="text-purple-400">{data.title}</span>
        </motion.div>

        {/* --- Header Section --- */}
        <header className="mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center text-3xl text-white mb-8 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            {data.icon}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent leading-tight"
          >
            {data.title}
          </motion.h1>
          <div className="h-1 w-24 bg-purple-600 mt-6 rounded-full" />
        </header>

        {/* --- Content Body --- */}
        <div className="space-y-12">
          {data.paras.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="text-purple-100/60 text-lg md:text-xl leading-[1.8] font-medium"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* --- Action Section --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-10 rounded-[3rem] bg-purple-950/10 border border-purple-500/10 text-center relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500"
        >
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-white mb-4 italic">Ready to integrate this into your workflow?</h2>
            <p className="text-purple-100/40 text-sm mb-8 max-w-lg mx-auto uppercase tracking-widest font-bold">Byte Digital Studio is standing by to bring your vision to life.</p>
            <a href={whatsappUrl} target="_blank" className="px-12 py-5 bg-purple-600 text-white font-black rounded-2xl shadow-xl hover:bg-purple-500 transition-all uppercase tracking-[0.2em] text-xs cursor-pointer">
               Contact Now
            </a>
          </div>
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ServiceDetailPage;