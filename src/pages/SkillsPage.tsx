import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import BackToTop from "@/components/BackToTop";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const SkillsPage = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-glow" />
      <div className="bg-grid" />

      <div className="relative z-10">
        <Navbar />

        <div className="pt-24 px-6 max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <Skills />

        <Footer />
      </div>

      <BackToTop />
    </div>
  );
};

export default SkillsPage;
