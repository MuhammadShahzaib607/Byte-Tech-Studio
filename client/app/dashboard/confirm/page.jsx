"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUser, FiMail, FiZap, FiTarget, FiShield } from 'react-icons/fi';
import DashboardSideBar from '../../components/DashboardSideBar.jsx';

const ConfirmOrders = () => {
  // Static Data for Confirm Orders
  const confirmOrders = [
    { id: 1, name: "Arsalan Khan", contact: "arsalan@tech.com", service: "Custom Admin Dashboard", amount: "150,000", assignee: "Quddos" },
    { id: 2, name: "Ibrahim Malik", contact: "ibrahim@store.pk", service: "E-Commerce Store Development", amount: "210,000", assignee: "Shahzaib" },
    { id: 3, name: "Nida Fatima", contact: "+92 321 9876543", service: "AI Brand Models Creation", amount: "95,000", assignee: "Sarika" },
  ];

  const totalConfirm = confirmOrders.length;

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar Integration */}
      <DashboardSideBar />

      <main className="flex-1 lg:ml-64 p-6 md:p-10">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-200 via-purple-400 to-purple-700 bg-clip-text text-transparent">
              Confirmed Projects
            </h2>
            <p className="text-white text-sm font-medium tracking-widest mt-1 uppercase">
              Byte Tech Studio Success Log
            </p>
          </div>

          {/* Total Count Badge (Confirmed Style) */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-purple-600/10 border border-purple-500/20 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.1)]"
          >
            <FiShield className="text-purple-400 text-xl animate-bounce" />
            <div className="flex flex-col">
              <span className="text-[10px] text-purple-300 font-bold uppercase tracking-tighter">Verified Orders</span>
              <span className="text-xl font-black text-white leading-none">{totalConfirm}</span>
            </div>
          </motion.div>
        </div>

        {/* Confirmed List Section */}
        <div className="grid grid-cols-1 gap-5">
          {confirmOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#121212] border border-purple-500/10 hover:border-purple-500/40 p-6 rounded-[2.5rem] transition-all duration-500 shadow-2xl overflow-hidden"
            >
              {/* Animated Success Background Glow */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/5 blur-[60px] group-hover:bg-purple-600/10 transition-all" />

              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
                
                {/* Client Info */}
                <div className="flex items-center gap-5 min-w-[220px]">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#1a1a1a] to-purple-900/40 border border-purple-500/20 flex items-center justify-center shadow-inner">
                    <FiCheckCircle className="text-purple-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white group-hover:text-purple-300 transition-colors uppercase tracking-tight">
                      {order.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
                      <FiMail className="text-purple-800" />
                      <span className="font-medium italic">{order.contact}</span>
                    </div>
                  </div>
                </div>

                {/* Service Tag */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-[#0a0a0a] border border-purple-900/30 px-5 py-2.5 rounded-2xl shadow-sm">
                    <FiZap className="text-purple-500 text-xs" />
                    <span className="text-[11px] font-black text-purple-200 uppercase tracking-[0.1em]">
                      {order.service}
                    </span>
                  </div>
                </div>

                {/* Amount */}
                <div className="min-w-[140px] lg:text-center">
                  <p className="text-[9px] text-purple-600 font-black uppercase tracking-[0.3em] mb-1">Final Budget</p>
                  <p className="text-md font-black text-purple-200">
                    Rs. {order.amount}
                  </p>
                </div>

                {/* Assignee Details */}
                <div className="flex items-center gap-4 bg-purple-900/10 border border-purple-500/10 px-6 py-3 rounded-[1.5rem] min-w-[180px]">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-[10px] font-bold">
                    {order.assignee.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[8px] text-purple-400 font-bold uppercase tracking-widest leading-tight">Lead Specialist</p>
                    <p className="text-sm font-bold text-white italic">@{order.assignee}</p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <style jsx global>{`
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #4c1d95; border-radius: 20px; }
      `}</style>
    </div>
  );
};

export default ConfirmOrders;