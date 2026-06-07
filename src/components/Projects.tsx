import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project, onSelect }: { project: any, onSelect: (p: Project) => void }) => {
  if (project.isPlaceholder) {
    return (
      <div className="relative rounded-[20px] border border-dashed border-primary/30 overflow-hidden flex items-center justify-center w-[300px] md:w-[400px] aspect-[3/2] bg-primary/5 flex-shrink-0 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_hsla(25,95%,53%,0.15)] hover:border-primary/60">
        <div className="text-center">
          <span className="text-2xl font-black gradient-text">Coming Soon</span>
          <p className="text-xs text-muted-foreground mt-2">More projects on the way</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-card relative rounded-[20px] border border-border overflow-hidden cursor-pointer group flex-shrink-0 w-[300px] md:w-[400px] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
    >
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full aspect-[3/2] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="project-overlay absolute inset-0 glass flex flex-col items-center justify-center text-center p-6 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
        <p className="text-sm text-muted-foreground max-w-xs">{project.shortDesc}</p>
        <button
          onClick={() => onSelect(project)}
          className="btn-gradient px-5 py-2.5 rounded-lg text-sm font-medium mt-2 inline-flex items-center gap-2"
        >
          Show Details →
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  // show newest projects first so recently added projects (like E-commerce Dashboard) appear in the slider
  const sorted = [...projects].slice().sort((a, b) => Number((b as any).id) - Number((a as any).id));
  const allProjects = [...sorted, { id: 'placeholder', isPlaceholder: true }];

  return (
    <>
      <section id="projects" className="relative z-10 py-24 overflow-hidden">
        <div className="reveal px-6 md:px-12 max-w-6xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[4px] text-primary font-medium">Projects</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 text-foreground">Things I've built</h2>
        </div>

        <div className="scroll-container">
          <div className="fade-edge-left"></div>
          <div className="fade-edge-right"></div>
          
          <div className="scroll-content">
            {allProjects.map((project, index) => (
              <ProjectCard key={`${project.id}-${index}`} project={project} onSelect={setSelected} />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Projects;
