"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGrid, FiPlusCircle, FiClock, FiCheckCircle, 
  FiUsers, FiPieChart, FiFileText, FiChevronDown, 
  FiUser, FiMail, FiDollarSign, FiCalendar, FiBriefcase
} from 'react-icons/fi';
import DashboardSideBar from '../../components/DashboardSideBar.jsx';

const CreateOrder = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Select a Service");
  const [selectedAssignee, setSelectedAssignee] = useState("Assign to Member");

  const services = [
    "MERN Stack Web Development", "AI Powered Web Applications", 
    "Custom Admin Dashboard Development", "E-Commerce Store Development",
    "AI Short Films & Video Clips Generation", "AI Brand Models Creation",
    "AI Advertisement & Administrative Tasks", "Full Charge Bookkeeping",
    "All Accounting Softwares", "Month end closing", 
    "Financial Statements", "Bank, profit, supplier and other Reconciliations"
  ];

  const team = ["Sarika", "Quddos", "Shahzaib"];

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* --- SHARED SIDEBAR --- */}
      <DashboardSideBar />

      {/* --- MAIN FORM SECTION --- */}
      <main className="flex-1 lg:ml-64 p-6 md:p-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-3xl"
        >
          {/* Heading with Gradient */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-white inline-block">
              Register New Order
            </h2>
            <p className="text-gray-500 text-sm mt-2 font-medium uppercase tracking-[0.2em]">Byte Tech Studio Management</p>
          </div>

          <form className="bg-[#121212] border border-purple-500/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-purple-400 uppercase ml-2 tracking-widest">Full Name</label>
                <div className="relative flex items-center">
                  <FiUser className="absolute left-4 text-purple-500" />
                  <input type="text" placeholder="John Doe" className="w-full bg-[#0a0a0a] border border-purple-500/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-600 transition-all text-gray-200" />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-purple-400 uppercase ml-2 tracking-widest">Contact Info</label>
                <div className="relative flex items-center">
                  <FiMail className="absolute left-4 text-purple-500" />
                  <input type="text" placeholder="Email or Phone" className="w-full bg-[#0a0a0a] border border-purple-500/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-600 transition-all text-gray-200" />
                </div>
              </div>
            </div>

            {/* Custom Animated Dropdown for Services */}
            <div className="space-y-2 relative">
              <label className="text-xs font-bold text-purple-400 uppercase ml-2 tracking-widest">Selected Service</label>
              <div 
                onClick={() => setIsServiceOpen(!isServiceOpen)}
                className="w-full bg-[#0a0a0a] border border-purple-500/10 rounded-2xl py-4 px-5 text-sm flex justify-between items-center cursor-pointer hover:border-purple-600 transition-all"
              >
                <div className="flex items-center gap-3 font-medium text-gray-300">
                  <FiBriefcase className="text-purple-500" /> {selectedService}
                </div>
                <FiChevronDown className={`text-purple-500 transition-transform duration-300 ${isServiceOpen ? 'rotate-180' : ''}`} />
              </div>

              <AnimatePresence>
                {isServiceOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="absolute w-full mt-2 bg-[#1a1a1a] border border-purple-500/20 rounded-2xl shadow-2xl z-50 max-h-60 overflow-y-auto custom-scrollbar p-2"
                  >
                    {services.map((service, i) => (
                      <div 
                        key={i} 
                        onClick={() => { setSelectedService(service); setIsServiceOpen(false); }}
                        className="px-4 py-3 hover:bg-purple-600 hover:text-white rounded-xl text-xs font-bold text-gray-400 cursor-pointer transition-colors"
                      >
                        {service}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Amount */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-purple-400 uppercase ml-2 tracking-widest">Amount (PKR)</label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-purple-500 font-bold text-xs">Rs.</span>
                  <input type="number" placeholder="50,000" className="w-full bg-[#0a0a0a] border border-purple-500/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-600 transition-all text-gray-200" />
                </div>
              </div>

              {/* Date Select */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-purple-400 uppercase ml-2 tracking-widest">Order Date</label>
                <div className="relative flex items-center">
                  <FiCalendar className="absolute left-4 text-purple-500" />
                  <input type="date" className="w-full bg-[#0a0a0a] border border-purple-500/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-600 transition-all text-gray-200 color-scheme-dark" />
                </div>
              </div>
            </div>

            {/* Assigned To Dropdown */}
            <div className="space-y-2 relative">
              <label className="text-xs font-bold text-purple-400 uppercase ml-2 tracking-widest">Assign Team Member</label>
              <div 
                onClick={() => setIsAssignOpen(!isAssignOpen)}
                className="w-full bg-[#0a0a0a] border border-purple-500/10 rounded-2xl py-4 px-5 text-sm flex justify-between items-center cursor-pointer hover:border-purple-600 transition-all"
              >
                <div className="flex items-center gap-3 font-medium text-gray-300">
                  <FiUsers className="text-purple-500" /> {selectedAssignee}
                </div>
                <FiChevronDown className={`text-purple-500 transition-transform duration-300 ${isAssignOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <AnimatePresence>
                {isAssignOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="absolute w-full mt-2 bg-[#1a1a1a] border border-purple-500/20 rounded-2xl shadow-2xl z-50 p-2"
                  >
                    {team.map((name, i) => (
                      <div 
                        key={i} 
                        onClick={() => { setSelectedAssignee(name); setIsAssignOpen(false); }}
                        className="px-4 py-3 hover:bg-purple-600 hover:text-white rounded-xl text-xs font-bold text-gray-400 cursor-pointer transition-colors"
                      >
                        {name}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-white rounded-2xl font-bold uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(168,85,247,0.3)] mt-8"
            >
              Initialize Order
            </motion.button>

          </form>
        </motion.div>
      </main>

      {/* Global CSS for custom scrollbar (put in globals.css) */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #121212; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #6b21a8; border-radius: 10px; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); }
      `}</style>
    </div>
  );
};

export default CreateOrder;