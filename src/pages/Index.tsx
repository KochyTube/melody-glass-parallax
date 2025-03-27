
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-musician-dark overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
