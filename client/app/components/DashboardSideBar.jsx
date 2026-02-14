"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiGrid, FiPlusCircle, FiClock, FiCheckCircle,
    FiUsers, FiPieChart, FiFileText, FiMenu, FiX
} from 'react-icons/fi';
import { IoMdHome } from 'react-icons/io';

const menuItems = [
    { name: 'Dashboard', icon: <FiGrid />, href: '/dashboard' },
    { name: 'Create Order', icon: <FiPlusCircle />, href: '/dashboard/create-order' },
    { name: 'Pending', icon: <FiClock />, href: '/dashboard/pending' },
    { name: 'Confirm', icon: <FiCheckCircle />, href: '/dashboard/confirm' },
    { name: 'Team', icon: <FiUsers />, href: '/dashboard/team' },
    { name: 'Analytics', icon: <FiPieChart />, href: '/dashboard/analytics' },
    { name: 'Forms', icon: <FiFileText />, href: '/dashboard/forms' },
    { name: 'Home', icon: <IoMdHome />, href: '/' },
];

const DashboardSideBar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const SidebarContent = () => (
        <>
            <div className="p-8 flex justify-between items-center">
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent tracking-widest uppercase">
                    DASHBOARD
                </h1>
                {/* Mobile Close Button */}
                <button onClick={toggleSidebar} className="lg:hidden text-purple-500 text-2xl">
                    <FiX />
                </button>
            </div>

            <nav className="flex-1 px-4 space-y-2 mt-4">
                {menuItems.map((item) => (
                    <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                        <div className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group cursor-pointer
                            ${pathname === item.href 
                                ? 'bg-purple-600 shadow-lg shadow-purple-600/20 text-white' 
                                : 'text-gray-500 hover:bg-purple-500/5 hover:text-purple-400'}`}>
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-sm font-semibold tracking-wide">{item.name}</span>
                        </div>
                    </Link>
                ))}
            </nav>
        </>
    );

    return (
        <>
            {/* --- MOBILE TOP HEADER (Sticky) --- */}
            <div className="lg:hidden absolute top-0 left-0 right-0 h-16 px-6 flex items-center justify-end z-40 mb-20">
                <button onClick={toggleSidebar} className="text-purple-500 text-2xl p-2 hover:bg-purple-500/10 rounded-lg">
                    <FiMenu />
                </button>
            </div>

            {/* --- DESKTOP SIDEBAR --- */}
            <aside className="w-64 bg-[#121212] border-r border-purple-500/10 hidden lg:flex flex-col fixed h-full z-50">
                <SidebarContent />
            </aside>

            {/* --- MOBILE OVERLAY SIDEBAR --- */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleSidebar}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
                        />

                        {/* Sidebar Drawer */}
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 w-72 h-full bg-[#121212] border-r border-purple-500/10 z-[70] lg:hidden flex flex-col shadow-2xl shadow-purple-900/20"
                        >
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default DashboardSideBar;