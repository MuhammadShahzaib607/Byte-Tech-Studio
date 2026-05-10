import { Metadata } from "next";

export const metadata = {
  title: "About Us | Meet the Visionaries behind Byte Tech Studio",
  
  description: "Learn about Byte Digital Studio, a Pakistan-based startup by Muhammad Shahzaib & Sarika. We bridge the gap between MERN Stack development and AI innovation to build digital legacies.",
  
  keywords: [
    "Byte Digital Studio Founders",
    "Muhammad Shahzaib MERN Developer",
    "Sarika AI Video Lead",
    "AI Startup Pakistan",
    "Creative Tech Agency Pakistan",
    "Digital Legacies Byte Tech Studio"
  ],

  openGraph: {
    title: "About Byte Tech Studio | Our Story & Vision",
    description: "From a small team in Pakistan to a powerhouse of AI & Web Development.",
    type: "profile",
  },
};

export default function AboutLayout ({children}) {
    return (
        <>
    {children}
    </>
    )
}
