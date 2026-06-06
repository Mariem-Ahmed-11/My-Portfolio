import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { projects, type Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import BackToTop from "@/components/BackToTop";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  useScrollReveal();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
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

        <div className="pt-12 px-6 max-w-6xl mx-auto">
          <span className="text-xs uppercase tracking-[4px] text-primary font-medium">Projects</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 text-foreground mb-8">All Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative rounded-[16px] overflow-hidden border border-border shadow-sm transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl">
                  <img src={project.images[0]} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{project.shortDesc}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <button onClick={() => setSelected(project)} className="inline-flex items-center gap-2 btn-gradient px-3 py-2 rounded-md text-sm">
                        <ExternalLink className="w-4 h-4" /> View
                      </button>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 btn-ghost px-3 py-2 rounded-md text-sm">
                          <Github className="w-4 h-4" /> Repo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ProjectModal project={selected} onClose={() => setSelected(null)} />

        <Footer />
      </div>

      <BackToTop />
    </div>
  );
};

export default ProjectsPage;
