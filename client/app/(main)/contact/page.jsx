"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apni logic add kar sakte hain (EmailJS ya Backend API)
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent to Byte Tech Studio.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-[#0f0a1a] min-h-screen pt-20 lg:pt-25 pb-20 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* --- LEFT SIDE: TEXT & INFO --- */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-purple-500" />
                  <span className="text-purple-400 uppercase tracking-[0.4em] text-[10px] font-black">Get In Touch</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent leading-tight mb-8">
                  Let's Build <br /> <span>The Future.</span>
                </h1>
                <p className="text-purple-100/50 text-lg leading-relaxed max-w-md">
                  Have a groundbreaking idea or a complex business problem? We are here to engineer the perfect solution for you. Reach out and let's start the conversation.
                </p>
              </motion.div>

              {/* Contact Details */}
              <div className="space-y-6 pt-8">
                {[
                  { icon: <FaEnvelope />, text: "bytetechstudio19@gmail.com", label: "Email Us" },
                  { icon: <FaWhatsapp />, text: "+92 340 3004439", label: "WhatsApp" },
                  { icon: <FaMapMarkerAlt />, text: "Karachi, Pakistan", label: "Headquarters" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-purple-500 font-black">{item.label}</p>
                      <p className="text-white font-medium">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* --- RIGHT SIDE: CONTACT FORM --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative p-1 rounded-[2.5rem] bg-gradient-to-b from-purple-500/20 to-transparent"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-[#120c1f] rounded-[2.4rem] p-8 md:p-12 space-y-6 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Username */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-purple-400 font-bold ml-2">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      autoComplete="off"
                      required
                      placeholder="Enter your name"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full mt-3 bg-purple-900/10 border border-purple-500/10 rounded-2xl px-6 py-4 text-white placeholder:text-purple-100/20 focus:outline-none focus:border-purple-500/50 transition-all"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-purple-400 font-bold ml-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      required
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full mt-3 bg-purple-900/10 border border-purple-500/10 rounded-2xl px-6 py-4 text-white placeholder:text-purple-100/20 focus:outline-none focus:border-purple-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-purple-400 font-bold ml-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    autoComplete="off"
                    placeholder="+92 000 0000000"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full mt-3 bg-purple-900/10 border border-purple-500/10 rounded-2xl px-6 py-4 text-white placeholder:text-purple-100/20 focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-purple-400 font-bold ml-2">Project Details (Optional)</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your vision..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full mt-3 bg-purple-900/10 border border-purple-500/10 rounded-2xl px-6 py-4 text-white placeholder:text-purple-100/20 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-purple-600 text-white font-black rounded-2xl shadow-[0_10px_30px_rgba(147,51,234,0.3)] hover:bg-purple-500 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs"
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;