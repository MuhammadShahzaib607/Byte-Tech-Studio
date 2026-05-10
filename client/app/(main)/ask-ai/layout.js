import { Metadata } from "next";

export const metadata= {
  title: "Ask AI Assistant | Interactive AI Chatbot | Byte Tech Studio",
  
  description: "Have questions about our MERN Stack or AI services? Chat with our intelligent AI Assistant powered by Groq API to get instant answers about how Byte Digital Studio can transform your business.",
  
  keywords: [
    "AI Chatbot Assistant",
    "Groq API Web Integration",
    "Interactive AI Assistant",
    "Byte Tech Studio AI",
    "AI Powered Customer Support",
    "Ask AI about Web Development"
  ],

  openGraph: {
    title: "Chat with Byte Tech Studio AI",
    description: "Experience the power of AI automation. Ask our bot anything about our services.",
    type: "website",
  },
};

export default function AskAiLayout ({children}) {
    return (
        <>
    {children}
    </>
    )
}
