"use client";
import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactMarkdown from "react-markdown";
import { Send, RotateCcw, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AskAiPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // 1. User ID Logic & Initial Fetch
  useEffect(() => {
    let id = localStorage.getItem("userId");
    if (!id) {
      id = uuidv4();
      localStorage.setItem("userId", id);
    }
    setUserId(id);
    fetchChats(id);
  }, []);

  // 2. Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const fetchChats = async (id) => {
    try {
      const res = await fetch(`https://byte-tech-studio-backend.vercel.app/api/chat/${id}`);
      const data = await res.json();
      console.log(data.data.chats)
      if (data.data.chats) setMessages(data.data.chats);
    } catch (err) {
      console.error("Error fetching chats:", err);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput("");
    setLoading(true);

    try {
      await fetch("https://byte-tech-studio-backend.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          userText,
          selectedLanguage: "English",
        }),
      });
      // Refresh chats after sending
      await fetchChats(userId);
    } catch (err) {
      console.error("Error sending message:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = async () => {
    if (!confirm("Are you sure you want to clear the chat history?")) return;
    try {
      await fetch("https://byte-tech-studio-backend.vercel.app/api/chat", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      setMessages([]);
    } catch (err) {
      console.error("Error resetting chat:", err);
    }
  };

  return (
    <div className="bg-[#0F0A1A] min-h-screen text-white flex flex-col font-sans">

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col max-w-4xl h-[80vh]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-900">
            {/* <h1 className="text-3xl font-bold tracking-tight italic">Ask AI Assistant</h1> */}
          </div>
          <button
            onClick={handleResetChat}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all text-sm cursor-pointer"
          >
            <RotateCcw size={16} className="text-purple-400" />
            Reset Chat
          </button>
        </div>

        {/* Chat Container */}
        <div className="flex-grow bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col relative backdrop-blur-sm shadow-2xl">
          
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth custom-scrollbar"
          >
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-60 px-6">
                <div className="bg-purple-600/20 p-4 rounded-full mb-4">
                    <Sparkles size={40} className="text-[#8D1BE6]" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">Unlock Digital Potential</h3>
                <p className="max-w-xs text-sm text-gray-400 italic">
                  "How can ByteTechStudio transform your business vision today?"
                </p>
              </div>
            ) : (
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <div key={msg._id || index} className="space-y-4">
                    {/* User Message */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex justify-end gap-3"
                    >
                      <div className="bg-[#8D1BE6] p-3 rounded-2xl rounded-tr-none max-w-[85%] md:max-w-[70%] shadow-lg">
                        <p className="text-sm leading-relaxed">{msg.userText}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <User size={16} />
                      </div>
                    </motion.div>

                    {/* AI Message */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex justify-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8D1BE6] to-[#7D00D0] flex items-center justify-center flex-shrink-0">
                        <Bot size={18} />
                      </div>
                      <div className="bg-white/10 border border-white/10 p-4 rounded-2xl rounded-tl-none max-w-[85%] md:max-w-[80%] prose prose-invert prose-sm">
                        <ReactMarkdown>{msg.aiText}</ReactMarkdown>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </AnimatePresence>
            )}
            {loading && (
              <div className="flex gap-2 items-center text-gray-400 text-sm italic ml-10">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce delay-100">●</span>
                <span className="animate-bounce delay-200">●</span>
                AI is thinking...
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-black/40 border-t border-white/10">
            <form onSubmit={handleSendMessage} className="relative max-w-3xl mx-auto">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your query about our AI services..."
                className="w-full bg-[#0F0A1A] border border-white/20 rounded-full py-4 px-6 pr-19 focus:outline-none focus:border-[#8D1BE6] transition-all placeholder:text-gray-500"
              />
              <button
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-[#8D1BE6] hover:bg-[#7D00D0] px-4 rounded-full transition-colors disabled:opacity-50 cursor-pointer"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </main>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(141, 27, 230, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(141, 27, 230, 0.6);
        }
      `}</style>
    </div>
  );
};

export default AskAiPage;