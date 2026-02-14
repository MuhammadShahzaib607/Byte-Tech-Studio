"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiUser, FiTrash2, FiMessageSquare, FiInbox, FiAlertCircle } from 'react-icons/fi';
import DashboardSideBar from '../../components/DashboardSideBar.jsx';

const InquiriesPage = () => {
  // Mock Data for Contact Form Submissions
  const [leads, setLeads] = useState([
    { id: 1, fullname: "Hamza Sheikh", email: "hamza@example.com", phone: "+92 300 1234567", projectDetails: "I need a MERN stack website for my real estate business with a custom dashboard." },
    { id: 2, fullname: "Ayesha Khan", email: "ayesha.k@tech.com", phone: "0321-9876543", projectDetails: "" }, // No details
    { id: 3, fullname: "John Doe", email: "john@global.com", phone: "+1 415 555 2671", projectDetails: "Looking for AI video generation services for a marketing campaign." },
  ]);

  const deleteLead = (id) => {
    setLeads(leads.filter(lead => lead.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      <DashboardSideBar />

      <main className="flex-1 lg:ml-64 p-6 md:p-10 space-y-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-purple-300 via-purple-500 to-purple-800 bg-clip-text text-transparent">
              Client Inquiries
            </h2>
            <p className="text-gray-500 mt-2 text-sm font-medium">
              Manage incoming leads and potential project requests from your website's contact form.
            </p>
          </div>
          
          <div className="bg-purple-900/10 border border-purple-500/20 px-6 py-3 rounded-2xl flex items-center gap-3">
            <FiInbox className="text-purple-500 animate-bounce" />
            <span className="text-xs font-black uppercase tracking-widest text-purple-300">
              {leads.length} New Messages
            </span>
          </div>
        </div>

        {/* --- INQUIRIES LIST --- */}
        <div className="grid grid-cols-1 gap-6">
          <AnimatePresence>
            {leads.length > 0 ? (
              leads.map((lead, index) => (
                <motion.div
                  key={lead.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-[#121212] border border-purple-500/10 hover:border-purple-500/30 p-6 md:p-8 rounded-[2.5rem] transition-all duration-500 shadow-xl overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row justify-between gap-8 relative z-10">
                    
                    {/* Basic Info Column */}
                    <div className="space-y-4 min-w-[250px]">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <FiUser className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors uppercase tracking-tight">
                            {lead.fullname}
                          </h3>
                          <div className="flex items-center gap-2 text-purple-500/60 text-[10px] font-black uppercase tracking-widest">
                            Verified Lead
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-gray-400 hover:text-purple-300 transition-colors text-sm">
                          <FiMail className="text-purple-600" />
                          <span>{lead.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400 hover:text-purple-300 transition-colors text-sm">
                          <FiPhone className="text-purple-600" />
                          <span>{lead.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Details Column (Conditional) */}
                    <div className="flex-1 bg-[#0a0a0a] border border-purple-500/5 rounded-[2rem] p-6 relative">
                      <div className="flex items-center gap-2 mb-3 text-purple-500">
                        <FiMessageSquare size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Message / Details</span>
                      </div>
                      
                      {lead.projectDetails ? (
                        <p className="text-gray-400 text-sm leading-relaxed italic">
                          "{lead.projectDetails}"
                        </p>
                      ) : (
                        <p className="text-gray-600 text-xs italic flex items-center gap-2">
                          <FiAlertCircle /> No additional project details provided.
                        </p>
                      )}
                    </div>

                    {/* Action Column */}
                    <div className="flex items-center justify-center lg:justify-end">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => deleteLead(lead.id)}
                        className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg"
                      >
                        <FiTrash2 size={22} />
                      </motion.button>
                    </div>

                  </div>
                  
                  {/* Subtle Background Glow for each card */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-600/5 blur-[50px] group-hover:bg-purple-600/10 transition-all" />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-[#121212] rounded-[3rem] border border-dashed border-purple-500/10">
                <FiInbox className="mx-auto text-5xl text-purple-500/20 mb-4" />
                <p className="text-gray-500 font-bold uppercase tracking-widest italic">All caught up! No pending inquiries.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* --- BOTTOM TIPS SECTION --- */}
        <div className="bg-gradient-to-r from-purple-900/20 via-[#121212] to-transparent p-8 rounded-[2.5rem] border border-purple-500/10">
          <h4 className="text-purple-400 font-black uppercase tracking-widest text-xs mb-2">Admin Pro Tip:</h4>
          <p className="text-gray-500 text-sm leading-relaxed max-w-3xl">
            Quickly follow up with leads via email or phone within 24 hours to increase conversion rates by up to 60%. 
            Use the delete button to clear out spam or resolved inquiries to keep your Byte Digital Studio dashboard clean.
          </p>
        </div>

      </main>
{/* 
      <style jsx global>{`
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #6b21a8; border-radius: 20px; }
      `}</style> */}
    </div>
  );
};

export default InquiriesPage;