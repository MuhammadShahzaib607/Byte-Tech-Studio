"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiMoreVertical,
    FiEdit2, FiTrash2, FiRefreshCw, FiSearch
} from 'react-icons/fi';
import DashboardSideBar from "../components/DashboardSideBar.jsx"

const Dashboard = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const stats = [
        { label: 'Total Orders', value: '128', color: 'from-purple-600 to-purple-900' },
        { label: 'Pending Orders', value: '43', color: 'from-[#1a1a1a] to-purple-900/40' },
        { label: 'Confirm Orders', value: '85', color: 'from-purple-500 to-indigo-900' },
        { label: 'Total Amount', value: '12,450', color: 'from-[#2a0e4a] to-[#121212]' },
    ];

    const orders = [
        { id: 1, name: "Zain Ahmed", contact: "zain@studio.com", service: "MERN Stack", amount: "9000", date: "Feb 14, 2026", status: "Confirm", assigned: "Ali Khan" },
        { id: 2, name: "Sara Sheikh", contact: "0300-1234567", service: "AI Video Gen", amount: "3450", date: "Feb 13, 2026", status: "Pending", assigned: "Ayesha" },
    ];

    return (
        <div className="flex min-h-screen bg-[#0a0a0a] text-white overflow-hidden">

            {/* --- SIDEBAR --- */}
            <DashboardSideBar />

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 lg:ml-64 p-6 md:p-10 bg-[#0a0a0a]">

                {/* Top Header */}
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            Operational Overview
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">Byte Tech Studio Admin Panel</p>
                    </div>
                    <div className="hidden md:flex items-center bg-[#121212] border border-purple-500/20 rounded-full px-4 py-2">
                        <FiSearch className="text-purple-500" />
                        <input type="text" placeholder="Search orders..." className="bg-transparent border-none focus:outline-none px-3 text-sm text-gray-300 w-48" />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                            className={`p-6 rounded-[2rem] bg-gradient-to-br ${stat.color} border border-white/5 shadow-2xl transition-transform hover:scale-[1.02] cursor-default`}
                        >
                            <p className="text-purple-200/60 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                            <h3 className="text-3xl font-bold mt-2 text-white">{stat.value}</h3>
                        </motion.div>
                    ))}
                </div>

                {/* Table Section */}
                <div className="bg-[#121212] border border-purple-500/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <div className="px-8 py-6 border-b border-purple-500/5 flex justify-between items-center bg-[#151515]">
                        <h3 className="text-lg font-bold text-white tracking-tight">Recent Orders Log</h3>
                        <button className="text-xs font-bold text-purple-400 uppercase tracking-widest hover:text-white transition-colors">View All</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-gray-500 text-[11px] uppercase tracking-[0.2em] bg-[#1a1a1a]/50">
                                    <th className="px-8 py-5 font-bold">Client Name</th>
                                    <th className="px-8 py-5 font-bold">Contact Info</th>
                                    <th className="px-8 py-5 font-bold">Project</th>
                                    <th className="px-8 py-5 font-bold text-center">Amount</th>
                                    <th className="px-8 py-5 font-bold">Status</th>
                                    <th className="px-8 py-5 font-bold">Assignee</th>
                                    <th className="px-8 py-5 font-bold text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-purple-500/5">
                                {orders.map((order) => (
                                    <tr key={order.id} className="group hover:bg-purple-600/[0.03] transition-all">
                                        <td className="px-8 py-6">
                                            <p className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">{order.name}</p>
                                            <p className="text-[10px] text-gray-600 mt-1">{order.date}</p>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-gray-400 font-medium">{order.contact}</td>
                                        <td className="px-8 py-6 whitespace-nowrap">
                                            <span className="inline-flex items-center justify-center bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-lg text-[11px] font-bold border border-purple-500/20 shadow-sm">
                                                {order.service}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-center text-sm font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                                           Rs. {order.amount}
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full animate-pulse ${order.status === 'Confirm' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                                <span className={`text-[11px] font-black uppercase tracking-wider ${order.status === 'Confirm' ? 'text-green-500' : 'text-yellow-500'}`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-gray-500 font-semibold italic">@{order.assigned}</td>
                                        <td className="px-8 py-6 text-center relative">
                                            <button
                                                onClick={() => setActiveDropdown(activeDropdown === order.id ? null : order.id)}
                                                className="w-10 h-10 rounded-full hover:bg-purple-500/20 flex items-center justify-center text-gray-500 transition-all z-100"
                                            >
                                                <FiMoreVertical size={20} />
                                            </button>

                                            {/* Floating Dropdown */}
                                            <AnimatePresence>
                                                {activeDropdown === order.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                                        className="absolute right-16 top-17 w-48 bg-[#1a1a1a] border border-purple-500/20 rounded-2xl shadow-2xl z-[100] p-2 backdrop-blur-xl "
                                                    >
                                                        <button className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-300 hover:bg-purple-600 hover:text-white rounded-xl transition-all">
                                                            <FiEdit2 /> Edit Project
                                                        </button>
                                                        <button className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-300 hover:bg-purple-600 hover:text-white rounded-xl transition-all">
                                                            <FiRefreshCw /> {order.status === 'Confirm' ? 'Set Pending' : 'Set Confirm'}
                                                        </button>
                                                        <div className="h-[1px] bg-purple-500/10 my-1" />
                                                        <button className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
                                                            <FiTrash2 /> Delete Order
                                                        </button>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;