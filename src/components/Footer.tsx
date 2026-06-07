import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border bg-card/50 backdrop-blur-sm py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <Link to="/" className="text-2xl font-black gradient-text tracking-tight">
              mariem.dev
            </Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-sm">
              Software Engineering student building useful products — frontend, hardware
              integrations and research-backed projects. Available for freelance and
              collaboration.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Quick links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Contact</h4>
            <p className="text-sm text-muted-foreground">Email</p>
            <a href="mailto:mariem.salah.dev@gmail.com" className="text-sm text-primary underline">mariem.salah.dev@gmail.com</a>

            <div className="flex items-center gap-3 mt-5">
              <a href="https://github.com/Mariem-Ahmed-11" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mariem-ahmed-salah-47219139b" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="/Mariem_Ahmed_Salah_CV_ATS.pdf" download="Mariem_Ahmed_Salah_CV_ATS.pdf" aria-label="Download CV" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span className="text-sm">CV</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Mariem Ahmed. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Designed & built by Mariem — mariem.dev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
