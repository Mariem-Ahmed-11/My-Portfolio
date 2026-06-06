import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollReveal();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {/* Background effects */}
      <div className="bg-glow" />
      <div className="bg-grid" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        {/* Footer */}
        <Footer />
      </div>

      <BackToTop />
    </>
  );
};

export default Index;
