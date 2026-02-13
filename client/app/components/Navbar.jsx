"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Ask AI", href: "/ask-ai" },
    { name: "Contact", href: "/contact" },
  ];

  const phoneNumber = "+923403004439";
  const message = encodeURIComponent(
    "Hello Byte Tech Studio! I visited your website and I am very interested in your premium services like MERN Stack Development and AI Solutions. I would like to discuss my project requirements with you in detail."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <nav className="w-full z-50 bg-[#0f0a1a] shadow-lg shadow-purple-900/10 border border-[#1C1B26] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-22">
          
          {/* --- LOGO SECTION --- */}
          {
            isOpen ||
            <Link href="/" className="flex items-center gap-1 group cursor-pointer">
            <div className="w-11 h-11 bg-charcoal-black rounded-lg flex items-center justify-center group-hover:border-purple-500 transition-all duration-300">
              {/* Image Path empty for you to add */}
              {/* <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /> */}
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent tracking-tight">
              Byte Tech Studio
            </span>
          </Link>
          }

          {/* --- DESKTOP NAV LINKS --- */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-purple-500 text-[14px] tracking-wide transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* --- RIGHT SIDE: CALL & WHATSAPP --- */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="text-right">
              <p className="text-purple-200 font-mono font-medium">{phoneNumber}</p>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-br from-purple-500 via-purple-700 to-purple-900 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl shadow-purple-600/20 hover:shadow-purple-600/40 transition-all border border-purple-400/20"
            >
              <FaWhatsapp className="text-xl" />
              Contact Us
            </motion.a>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-500 p-2 hover:bg-purple-500/10 rounded-full transition-all"
            >
              {isOpen || <HiMenuAlt3 size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-charcoal-black shadow-2xl z-[60] p-8 border-l border-purple-500/20 bg-white pt-15 lg:hidden"
          >
            <div className="flex justify-between mb-8">
                <span className="text-2xl font-black bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent tracking-tight">
              Byte Digital Studio
            </span>
              <button onClick={() => setIsOpen(false)} className="text-purple-500"><HiX size={32} /></button>
            </div>

            
            <div className="flex flex-col space-y-6 pt-10 border-t border-purple-500/50">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[20px] font-bold text-gray-500 hover:text-purple-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-8 border-t border-purple-500/50">
                <p className="text-soft-gray text-sm mb-2 uppercase tracking-widest">Talk to us</p>
                <p className="text-purple-800 text-lg font-mono mb-6">{phoneNumber}</p>
                <a
                  href={whatsappUrl}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-purple-900 text-white py-4 rounded-xl font-bold mt-3"
                >
                  <FaWhatsapp size={22} />
                  Start Your Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;