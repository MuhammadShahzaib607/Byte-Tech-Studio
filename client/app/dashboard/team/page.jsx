"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUsers, FiFilter, FiDollarSign, FiCheckCircle, FiClock, FiActivity } from 'react-icons/fi';
import DashboardSideBar from '../../components/DashboardSideBar.jsx';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Static Master Data (In real app, this comes from an API/Database)
  const allOrders = [
    { id: 1, name: "Zain Ahmed", service: "MERN Stack", amount: 85000, status: "Confirm", assignedTo: "Shahzaib" },
    { id: 2, name: "Sara Sheikh", service: "AI Video Gen", amount: 45000, status: "Pending", assignedTo: "Sarika" },
    { id: 3, name: "Hamza Ali", service: "E-Commerce", amount: 120000, status: "Confirm", assignedTo: "Quddos" },
    { id: 4, name: "Arsalan Khan", service: "Dashboard", amount: 150000, status: "Confirm", assignedTo: "Quddos" },
    { id: 5, name: "Nida Fatima", service: "AI Models", amount: 95000, status: "Pending", assignedTo: "Sarika" },
    { id: 6, name: "Ali Raza", service: "Bookkeeping", amount: 30000, status: "Confirm", assignedTo: "Shahzaib" },
  ];

  const teamMembers = ["Sarika", "Quddos", "Shahzaib"];

  // Filtering Logic
  const filteredOrders = useMemo(() => {
    return selectedMember ? allOrders.filter(order => order.assignedTo === selectedMember) : [];
  }, [selectedMember]);

  // Stats Calculation
  const stats = useMemo(() => {
    const data = selectedMember ? filteredOrders : allOrders;
    return {
      total: data.length,
      confirm: data.filter(o => o.status === "Confirm").length,
      pending: data.filter(o => o.status === "Pending").length,
      amount: data.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString(),
    };
  }, [selectedMember, filteredOrders]);

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      <DashboardSideBar />

      <main className="flex-1 lg:ml-64 p-6 md:p-10">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-800 bg-clip-text text-transparent">
            Team Performance
          </h2>
          <p className="text-white text-xs font-bold tracking-[0.3em] uppercase mt-2">
            Byte Tech Studio Human Resources
          </p>
        </div>

        {/* Global Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Tasks', val: stats.total, icon: <FiActivity />, color: 'from-purple-900/40 to-purple-600/20' },
            { label: 'Completed', val: stats.confirm, icon: <FiCheckCircle />, color: 'from-purple-800/40 to-purple-500/20' },
            { label: 'In Progress', val: stats.pending, icon: <FiClock />, color: 'from-purple-950/40 to-purple-800/20' },
            { label: 'Revenue', val: `Rs. ${stats.amount}`, icon: <FiDollarSign />, color: 'from-purple-700/40 to-purple-400/20' },
          ].map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-[2rem] bg-gradient-to-br ${card.color} border border-purple-500/10 shadow-2xl relative overflow-hidden group`}>
              <div className="absolute -right-4 -top-4 text-6xl text-purple-500/5 group-hover:text-purple-500/10 transition-all">{card.icon}</div>
              <p className="text-purple-400 text-[10px] font-black uppercase tracking-widest">{card.label}</p>
              <h3 className="text-2xl font-black mt-1 text-white">{card.val}</h3>
            </motion.div>
          ))}
        </div>

        {/* Filter Section */}
        <div className="bg-[#121212] border border-purple-500/10 rounded-[2.5rem] p-8 mb-8 shadow-inner">
          <div className="flex items-center gap-3 mb-6">
            <FiFilter className="text-purple-500" />
            <h3 className="text-sm font-bold text-purple-200 uppercase tracking-widest">Filter by Specialist</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {teamMembers.map((member) => (
              <button
                key={member}
                onClick={() => setSelectedMember(selectedMember === member ? null : member)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-300 border ${
                  selectedMember === member 
                  ? 'bg-purple-600 border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                  : 'bg-[#0a0a0a] border-purple-500/10 text-gray-500 hover:border-purple-500/40 hover:text-purple-400'
                }`}
              >
                {member}
              </button>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <AnimatePresence mode='wait'>
          {selectedMember ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex justify-between items-end px-4 mb-4">
                <h4 className="text-lg font-bold text-white">Tasks Assigned to <span className="text-purple-500 italic">@{selectedMember}</span></h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{filteredOrders.length} Results Found</p>
              </div>

              {filteredOrders.length > 0 ? filteredOrders.map((order, idx) => (
                <motion.div key={order.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}
                  className="bg-[#121212] border border-purple-500/5 p-6 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center gap-4 min-w-[200px]">
                    <div className="w-10 h-10 rounded-full bg-purple-600/10 flex items-center justify-center font-bold text-purple-500">{idx + 1}</div>
                    <p className="font-bold text-gray-200">{order.name}</p>
                  </div>
                  <div className="bg-purple-900/10 px-4 py-1.5 rounded-full border border-purple-500/10 text-[10px] font-black text-purple-400 uppercase tracking-widest">
                    {order.service}
                  </div>
                  <p className="text-sm font-black text-white">Rs. {order.amount.toLocaleString()}</p>
                  <div className={`text-[10px] font-black px-4 py-1 rounded-lg uppercase ${order.status === 'Confirm' ? 'text-green-500 bg-green-500/5' : 'text-yellow-500 bg-yellow-500/5'}`}>
                    {order.status}
                  </div>
                </motion.div>
              )) : (
                <div className="text-center py-20 bg-[#121212] rounded-[2.5rem] border border-dashed border-purple-500/10">
                  <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">No tasks found for this member</p>
                </div>
              )}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-[#121212] rounded-[2.5rem] border border-dashed border-purple-500/10">
              <FiUsers className="mx-auto text-4xl text-purple-500/20 mb-4" />
              <p className="text-gray-600 font-bold uppercase tracking-widest text-sm italic">
                Select a team member to view their performance log
              </p>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default TeamPage;