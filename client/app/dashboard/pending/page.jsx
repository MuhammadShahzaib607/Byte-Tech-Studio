"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiUser, FiMail, FiZap, FiTarget } from 'react-icons/fi';
import DashboardSideBar from '../../components/DashboardSideBar.jsx';

const PendingOrders = () => {
  // Static Data for Pending Orders
  const pendingOrders = [
    { id: 1, name: "Zain Ahmed", contact: "zain@studio.com", service: "MERN Stack Development", amount: "85,000", assignee: "Shahzaib" },
    { id: 2, name: "Sara Sheikh", contact: "+92 300 1234567", service: "AI Video Generation", amount: "45,000", assignee: "Sarika" },
    { id: 3, name: "Hamza Ali", contact: "hamza@web.com", service: "E-Commerce Store", amount: "120,000", assignee: "Quddos" },
  ];

  const totalPending = pendingOrders.length;

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      {/* Sidebar Integration */}
      <DashboardSideBar />

      <main className="flex-1 lg:ml-64 p-6 md:p-10">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 via-purple-500 to-purple-800 bg-clip-text text-transparent">
              Pending Queue
            </h2>
            <p className="text-white text-sm font-medium tracking-widest mt-1 uppercase">
              Byte Tech Studio Tracking
            </p>
          </div>

          {/* Total Count Badge */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-purple-900/20 border border-purple-500/30 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.1)]"
          >
            <FiClock className="text-purple-500 text-xl animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[10px] text-purple-300 font-bold uppercase tracking-tighter">Total Pending</span>
              <span className="text-xl font-black text-white leading-none">{totalPending}</span>
            </div>
          </motion.div>
        </div>

        {/* Orders List Section */}
        <div className="grid grid-cols-1 gap-4">
          {pendingOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#121212] border border-purple-500/10 hover:border-purple-500/40 p-5 md:p-6 rounded-[2rem] transition-all duration-500 shadow-xl overflow-hidden"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-[50px] group-hover:bg-purple-600/10 transition-all" />

              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                
                {/* Client & Contact */}
                <div className="flex items-center gap-4 min-w-[200px]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center shadow-lg">
                    <FiUser className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                      {order.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
                      <FiMail className="text-purple-600" />
                      <span>{order.contact}</span>
                    </div>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-purple-500/5 border border-purple-500/10 px-4 py-2 rounded-xl">
                    <FiZap className="text-purple-500 text-xs" />
                    <span className="text-xs font-bold text-purple-300 tracking-wide whitespace-nowrap">
                      {order.service}
                    </span>
                  </div>
                </div>

                {/* Amount Section */}
                <div className="min-w-[120px]">
                  <p className="text-[10px] text-purple-500 font-black uppercase tracking-[0.2em] mb-1">Budget</p>
                  <p className="text-lg font-black text-purple-200">
                    Rs. {order.amount}
                  </p>
                </div>

                {/* Assignee Section */}
                <div className="flex items-center gap-3 bg-[#0a0a0a] border border-purple-500/5 px-5 py-2.5 rounded-2xl min-w-[150px]">
                  <FiTarget className="text-purple-600" />
                  <div>
                    <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Assigned To</p>
                    <p className="text-xs font-bold text-purple-200">{order.assignee}</p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Global CSS Fix for Scrollbar */}
      <style jsx global>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #6b21a8; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default PendingOrders;