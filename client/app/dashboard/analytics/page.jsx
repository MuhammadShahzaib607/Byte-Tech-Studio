"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line
} from 'recharts';
import { FiTrendingUp, FiActivity, FiLayers, FiMaximize2 } from 'react-icons/fi';
import DashboardSideBar from '../../components/DashboardSideBar.jsx';

const Analytics = () => {
  // Data points arranged to show high volume of Confirm vs Pending
  const data = [
    { name: 'Jan', pending: 15, confirm: 30 },
    { name: 'Feb', pending: 25, confirm: 45 },
    { name: 'Mar', pending: 20, confirm: 55 },
    { name: 'Apr', pending: 35, confirm: 70 },
    { name: 'May', pending: 30, confirm: 65 },
    { name: 'Jun', pending: 43, confirm: 85 }, // Matches your current stats
  ];

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      <DashboardSideBar />

      <main className="flex-1 lg:ml-64 p-6 md:p-10 space-y-10">
        
        {/* --- HEADER --- */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Operational Growth
            </h2>
            <p className="text-gray-500 mt-2 text-sm font-medium tracking-wide">
              Real-time visualization of Byte Tech Studio's order velocity.
            </p>
          </div>
          <div className="hidden md:flex bg-[#121212] border border-purple-500/10 p-4 rounded-3xl items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-500">
                <FiTrendingUp />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-gray-400">Live Status</span>
          </div>
        </div>

        {/* --- MAIN CHART (Inspired by Image 2 & 3) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-[#121212] border border-purple-500/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Header for Chart */}
          <div className="flex justify-between items-center mb-12 px-4">
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  <span className="text-[10px] font-black uppercase tracking-tighter text-gray-400">Confirmed (85)</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />
                  <span className="text-[10px] font-black uppercase tracking-tighter text-gray-400">Pending (43)</span>
               </div>
            </div>
            <FiMaximize2 className="text-gray-600 cursor-pointer hover:text-purple-500 transition-colors" />
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  {/* Green Gradient for Confirm */}
                  <linearGradient id="colorConfirm" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                  {/* Red Gradient for Pending */}
                  <linearGradient id="colorPending" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#4b5563', fontSize: 11, fontWeight: 700}} 
                  dy={15}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#4b5563', fontSize: 11, fontWeight: 700}} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #ffffff10', borderRadius: '20px', fontSize: '12px' }}
                />

                {/* Confirm Area (Green) */}
                <Area 
                  type="monotone" 
                  dataKey="confirm" 
                  stroke="#22c55e" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorConfirm)" 
                  animationDuration={2000}
                />

                {/* Pending Area (Red) */}
                <Area 
                  type="monotone" 
                  dataKey="pending" 
                  stroke="#ef4444" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorPending)" 
                  animationDuration={2500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Studio Total', val: '128', icon: <FiLayers />, color: 'from-purple-900/20 to-purple-600/10' },
            { label: 'Confirm Rate', val: '66.4%', icon: <FiActivity />, color: 'from-green-900/20 to-green-600/10' },
            { label: 'System Load', val: 'Active', icon: <FiTrendingUp />, color: 'from-red-900/20 to-red-600/10' },
          ].map((item, i) => (
            <div key={i} className={`bg-gradient-to-br ${item.color} border border-white/5 p-8 rounded-[2.5rem] shadow-xl group hover:border-white/10 transition-all`}>
              <div className="text-gray-500 mb-4 group-hover:text-white transition-colors">{item.icon}</div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{item.label}</p>
              <h4 className="text-3xl font-black mt-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent italic">
                {item.val}
              </h4>
            </div>
          ))}
        </div>

      </main>

      <style jsx global>{`
        .recharts-cartesian-grid-horizontal line { stroke: rgba(255,255,255,0.03); }
        .recharts-curve { filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.5)); }
      `}</style>
    </div>
  );
};

export default Analytics;