import characterImg from "@/assets/character.png";
import standingImg from "@/assets/standing.png";
import talkingImg from "@/assets/talking.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import skills from "@/data/skills";

const stats = [
  { value: `${projects.length}+`, label: "Projects" },
  { value: `${skills.length}+`, label: "Technologies" },
  { value: "2+", label: "Years Learning" },
];

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [imgState, setImgState] = useState<"sitting" | "standing" | "talking">("sitting");
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => setImgState("standing"), 1500);
          setTimeout(() => setImgState("talking"), 3500);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" ref={sectionRef} className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left — star with character */}
        <div className="flex justify-center reveal">
          <div className="relative group cursor-pointer">
            {/* Spinning & Pulsing Star */}
            <div className="w-64 h-64 md:w-80 md:h-80 star-shape bg-gradient-to-br from-primary to-secondary opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12" style={{ animation: 'logo-spin 40s linear infinite' }} />
            
            {/* Character States (Stacked for smooth crossfade animation) */}
            <img
              src={characterImg}
              alt="Mariem Sitting"
              className={`absolute inset-0 w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] float-animation transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:-translate-y-4 ${
                imgState === "sitting" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDuration: '4s' }}
            />
            <img
              src={standingImg}
              alt="Mariem Standing"
              className={`absolute inset-0 w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] float-animation transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:-translate-y-4 ${
                imgState === "standing" ? "opacity-100 translate-y-0" : imgState === "sitting" ? "opacity-0 translate-y-8" : "opacity-0 -translate-y-2"
              }`}
              style={{ animationDuration: '4s' }}
            />
            <img
              src={talkingImg}
              alt="Mariem Talking"
              className={`absolute inset-0 w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] float-animation transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:-translate-y-4 ${
                imgState === "talking" ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ animationDuration: '4s' }}
            />
          </div>
        </div>

        {/* Right — content */}
        <div className="space-y-6 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              About <span className="gradient-text">Mariem</span>
            </h2>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            I'm Mariem Ahmed, a Software Engineering student at We School of Applied Technology. I build production-ready web applications and hardware-integrated solutions with an emphasis on robustness, usability, and measurable value. My work spans frontend engineering, embedded systems, and data-driven interfaces.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            I combine engineering fundamentals with practical product thinking: clean, maintainable code; thoughtful UX; and reliable integrations. I use AI tools to accelerate development while keeping human judgment and quality control central to every decision.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</span>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => isHome ? navigate("/about") : scrollTo("skills")}
            className="btn-gradient px-6 py-3 rounded-lg text-sm font-medium mt-2"
          >
            {isHome ? "Learn More" : "View Skills"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
