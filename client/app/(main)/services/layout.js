import { Metadata } from "next";

export const metadata = {
  title: "Services | MERN Stack, AI Video & Brand Solutions | Byte Tech Studio",
  
  description: "Explore our expert services: MERN Stack development, AI-powered web apps, custom admin dashboards, E-commerce stores, AI short films, digital brand models, and AI-automated business tasks.",
  
  keywords: [
    "MERN Stack Web Development",
    "AI Powered Web Applications",
    "AI Short Films Generation",
    "AI Brand Models Creation",
    "Custom Admin Dashboards",
    "E-Commerce Store Development",
    "AI Business Automation",
    "Byte Tech Studio Services"
  ],

  openGraph: {
    title: "Our Services | Byte Tech Studio",
    description: "Modernizing businesses with MERN Stack and Creative AI Solutions.",
    type: "website",
  },
};

export default function ServicesLayout ({children}) {
    return (
        <>
    {children}
    </>
    )
}
