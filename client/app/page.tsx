import Image from "next/image";
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/home/HeroSection.jsx"
import ServicesSection from "./components/home/ServicesSection.jsx"
import ProcessSection from "./components/home/ProcessSection.jsx"
import CapabilitiesSection from "./components/home/CapabilitiesSection.jsx"
import OrderProcess from "./components/home/OrderProcess.jsx"
import TestimonialsSection from "./components/home/TestimonialsSection.jsx"
import FAQSection from "./components/home/FAQSection.jsx"
import Footer from "./components/Footer.jsx"

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <CapabilitiesSection />
    <OrderProcess />
    <TestimonialsSection />
    <FAQSection />
    <Footer /> 
    </>
  ); 
}
