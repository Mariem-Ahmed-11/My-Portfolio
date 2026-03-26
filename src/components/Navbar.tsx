import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const sectionId = id.toLowerCase();
    const isAboutPage = location.pathname === "/about";
    
    if (id === "About") {
      if (isAboutPage) window.scrollTo({ top: 0, behavior: "smooth" });
      else navigate("/about");
    } else if (id === "Projects") {
      if (location.pathname === "/projects") window.scrollTo({ top: 0, behavior: "smooth" });
      else navigate("/projects");
    } else if (isHome) {
      if (id === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (isAboutPage && id === "Skills") {
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
    } else {
      if (id === "Home") {
        navigate("/");
      } else {
        navigate(`/#${sectionId}`);
      }
    }
  };

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex items-center justify-between relative z-50">
      <Link to="/" className="text-xl font-black gradient-text tracking-tight hover:opacity-80 transition-opacity">
        Portfolio
      </Link>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex items-center gap-6">
          {["Home", "About", "Projects", "Skills"].map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              {link}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
          <button
            onClick={() => isHome ? handleNavClick("Projects") : navigate("/projects")}
            className="btn-gradient px-4 py-2 md:px-5 rounded-lg text-sm font-medium hidden sm:block"
          >
            Hire Me
          </button>
          
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border p-6 flex flex-col gap-4 shadow-lg md:hidden animate-in slide-in-from-top-2">
          {["Home", "About", "Projects", "Skills"].map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-foreground hover:text-primary transition-colors duration-300 text-lg font-medium text-left"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => isHome ? handleNavClick("Projects") : navigate("/projects")}
            className="btn-gradient px-5 py-3 rounded-lg text-sm font-medium w-full mt-2 sm:hidden"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
