"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaFacebookF, FaInstagram, FaLinkedinIn, 
  FaWhatsapp, FaEnvelope, FaPhoneAlt 
} from "react-icons/fa";

const Footer = () => {
  const phoneNumber = "+923403004439";
  const email = "hello@bytedigitalstudio.com";
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaWhatsapp />, href: `https://wa.me/${phoneNumber}` },
  ];

  return (
    <footer className="bg-[#0f0a1a] pt-20 pb-10 relative overflow-hidden border-t border-purple-500/10">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* --- BRAND SECTION --- */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-black shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                B
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Byte Tech Studio
              </span>
            </Link>
            <p className="text-purple-100/40 text-sm leading-relaxed">
              Empowering brands with AI-driven intelligence and high-performance MERN stack solutions. We turn complex ideas into digital reality.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-purple-900/20 border border-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* --- QUICK LINKS --- */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-purple-100/50 hover:text-purple-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-purple-500 group-hover:w-3 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- CONTACT INFO --- */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Get In Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-purple-100/50 group">
                <div className="w-8 h-8 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <FaEnvelope size={14} />
                </div>
                <span className="text-sm truncate">{email}</span>
              </li>
              <li className="flex items-center gap-4 text-purple-100/50 group">
                <div className="w-8 h-8 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <FaPhoneAlt size={14} />
                </div>
                <span className="text-sm font-mono">{phoneNumber}</span>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="inline-block mt-2 text-purple-400 font-bold text-xs uppercase tracking-widest border-b border-purple-400/20 pb-1 hover:border-purple-400 transition-all"
                >
                  About BTS →
                </Link>
              </li>
            </ul>
          </div>

          {/* --- NEWSLETTER / EXTRA TEXT --- */}
          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-widest uppercase text-xs">Digital Excellence</h4>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/10">
              <p className="text-purple-100/60 text-sm italic leading-relaxed">
                "Our mission is to bridge the gap between human creativity and Artificial Intelligence."
              </p>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-purple-500/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-purple-100/30 text-[11px] font-medium tracking-wider text-center md:text-left">
            Copyright © Byte Tech Studio 2026. All Rights Reserved.
          </p>
          
          <div className="flex gap-8">
            <Link href="/privacy" className="text-purple-100/30 hover:text-purple-400 text-[11px] transition-colors uppercase tracking-widest">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-purple-100/30 hover:text-purple-400 text-[11px] transition-colors uppercase tracking-widest">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;