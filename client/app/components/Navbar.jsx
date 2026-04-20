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

  // Animation variants for Mobile Menu
  const menuVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: { type: "tween", duration: 0.4 } },
    exit: { y: "-100%", transition: { type: "tween", duration: 0.4 } },
  };

  const itemContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <nav className="w-full z-50 bg-[#0f0a1a] shadow-lg shadow-purple-900/10 border border-[#1C1B26] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-22">
          
          {/* --- LOGO SECTION --- */}
          {isOpen || (
            <Link href="/" className="flex items-center gap-1 group cursor-pointer">
              <div className="w-11 h-11 bg-charcoal-black rounded-lg flex items-center justify-center group-hover:border-purple-500 transition-all duration-300">
                {/* Logo Placeholder */}
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent tracking-tight">
                Byte Tech Studio
              </span>
            </Link>
          )}

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
              onClick={() => {
                window.document.body.style.overflow = "hidden"
                setIsOpen(!isOpen)
              }}
              className="text-purple-500 p-2 hover:bg-purple-500/10 rounded-full transition-all"
            >
              <HiMenuAlt3 size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* --- FULL SCREEN MOBILE NAVIGATION --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-full h-full bg-[#0f0a1a] z-[60] flex flex-col p-8 lg:hidden"
          >
            {/* Header: Logo and Close Button */}
            <div className="flex justify-between items-center mb-10">
              <Link href="/" onClick={()=> {
                window.document.body.style.overflow = "auto"
                setIsOpen(false)
              }} className="text-2xl font-black bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent tracking-tight">
                Byte Tech Studio
              </Link>
              <button onClick={() => {
                window.document.body.style.overflow = "auto"
                setIsOpen(false)
                }} className="text-purple-500 p-2 border border-purple-500/20 rounded-lg">
                <HiX size={32} />
              </button>
            </div>

            {/* Menu Items */}
            <motion.div 
              variants={itemContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col space-y-8"
            >
              {navLinks.map((link) => (
                <motion.div variants={itemVariants} key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => {
                window.document.body.style.overflow = "auto"
                setIsOpen(false)
                }}
                    className="text-[20px] font-bold text-gray-300 hover:text-purple-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="border-t border-purple-500/20 pt-8 mt-10"
            >
              <p className="text-purple-400 text-sm uppercase tracking-widest mb-6">Talk to us</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-purple-600 to-purple-900 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <FaWhatsapp size={22} />
                Start Your Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;