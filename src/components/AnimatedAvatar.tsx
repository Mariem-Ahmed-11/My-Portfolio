import { useEffect, useRef, useState } from "react";

const AnimatedAvatar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Use the inView state to trigger CSS classes for the steps
  return (
    <div ref={containerRef} className="relative w-64 h-64 md:w-80 md:h-80 mx-auto flex items-center justify-center">
      {/* Background Star (Fades out in Step 3) */}
      <div 
        className={`absolute inset-0 star-shape bg-gradient-to-br from-primary to-secondary transition-opacity duration-1000 ease-in-out ${
          inView ? "opacity-0 delay-[2000ms]" : "opacity-90"
        }`} 
      />

      <svg 
        viewBox="0 0 200 200" 
        className="relative z-10 w-full h-full drop-shadow-xl overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="screen-clip">
            <rect x="0" y="0" width="40" height="25" rx="2" />
          </clipPath>
        </defs>

        {/* --- GIRL --- */}
        <g 
          className={`transition-transform duration-1000 ease-in-out ${
            inView ? "translate-y-[-20px] scale-[1.05] delay-[1000ms]" : "translate-y-[10px] scale-100"
          }`}
          style={{ transformOrigin: 'center bottom' }}
        >
          {/* Hair back */}
          <path d="M 75 70 C 70 120, 130 120, 125 70 Z" fill="#2d3748" />

          {/* Body (Sitting to Standing Transition is simulated by translating the whole group up, and adjusting the legs) */}
          <rect x="85" y="110" width="30" height="40" rx="10" fill="currentColor" className="text-primary" />
          
          {/* Base Head */}
          <circle cx="100" cy="85" r="22" fill="#fcd5ce" />

          {/* Hair front */}
          <path d="M 78 80 C 85 60, 115 60, 122 80 C 110 70, 90 70, 78 80 Z" fill="#1a202c" />
          
          {/* Face Elements */}
          <g>
            {/* Eyes */}
            <circle cx="92" cy="85" r="2.5" fill="#1a202c" />
            <circle cx="108" cy="85" r="2.5" fill="#1a202c" />
            
            {/* Mouth (Default straight, transitions to smile in Step 4) */}
            <path 
              d="M 95 95 Q 100 95 105 95" 
              fill="transparent" 
              stroke="#e53e3e" 
              strokeWidth="2" 
              strokeLinecap="round"
              className={`transition-all duration-700 ease-in-out ${
                inView ? "opacity-0 delay-[3000ms]" : "opacity-100"
              }`}
            />
            {/* Smile Path */}
            <path 
              d="M 94 94 Q 100 102 106 94" 
              fill="transparent" 
              stroke="#e53e3e" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              className={`transition-all duration-700 ease-in-out ${
                inView ? "opacity-100 delay-[3000ms]" : "opacity-0"
              }`}
            />
          </g>

          {/* Arms */}
          <path 
            d="M 85 115 Q 70 130 85 140" 
            fill="transparent" 
            stroke="#fcd5ce" 
            strokeWidth="8" 
            strokeLinecap="round" 
            className={`transition-all duration-1000 ease-in-out ${
              inView ? "translate-y-2 delay-[1000ms]" : ""
            }`}
          />
          <path 
            d="M 115 115 Q 130 130 115 140" 
            fill="transparent" 
            stroke="#fcd5ce" 
            strokeWidth="8" 
            strokeLinecap="round" 
            className={`transition-all duration-1000 ease-in-out ${
              inView ? "translate-y-2 delay-[1000ms]" : ""
            }`}
          />

          {/* Legs (Sitting originally, extending when standing) */}
          <g className={`transition-all duration-1000 ease-in-out ${
            inView ? "opacity-0 delay-[1000ms]" : "opacity-100"
          }`}>
            {/* Sitting legs visible */}
            <path d="M 90 145 L 80 155 L 80 175" fill="transparent" stroke="#2d3748" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 110 145 L 120 155 L 120 175" fill="transparent" stroke="#2d3748" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          
          {/* Standing legs */}
          <g className={`transition-all duration-1000 ease-in-out ${
            inView ? "opacity-100 delay-[1000ms]" : "opacity-0"
          }`}>
            <path d="M 90 145 L 90 185" fill="transparent" stroke="#2d3748" strokeWidth="12" strokeLinecap="round" />
            <path d="M 110 145 L 110 185" fill="transparent" stroke="#2d3748" strokeWidth="12" strokeLinecap="round" />
          </g>
        </g>

        {/* --- DESK & LAPTOP --- */}
        <g 
          className={`transition-transform duration-1000 ease-in-out ${
            inView ? "translate-y-[40px] opacity-0 delay-[1000ms]" : "translate-y-0 opacity-100"
          }`}
        >
          {/* Desk Surface */}
          <rect x="50" y="160" width="100" height="8" rx="4" fill="currentColor" className="text-secondary" />
          
          {/* Laptop Base */}
          <path d="M 75 160 L 125 160 L 130 165 L 70 165 Z" fill="#718096" />
          
          {/* Laptop Screen (Rotates down in Step 1) */}
          <g 
            className={`transition-transform duration-800 ease-in-out ${
              inView ? "rotate-[80deg] translate-y-2 scale-90 opacity-40 delay-[200ms]" : "rotate-0 scale-100 opacity-100"
            }`}
            style={{ transformOrigin: '100px 160px' }}
          >
            <rect x="75" y="130" width="50" height="30" rx="3" fill="#4a5568" />
            <rect x="80" y="132" width="40" height="25" rx="1" fill="#1a202c" />
            
            {/* Screen glow overlay simulating code/editor */}
            <g clipPath="url(#screen-clip)" transform="translate(80, 132)">
              <rect x="2" y="4" width="20" height="2" fill="currentColor" className="text-primary opacity-80" />
              <rect x="2" y="8" width="15" height="2" fill="currentColor" className="text-primary opacity-50" />
              <rect x="2" y="12" width="25" height="2" fill="currentColor" className="text-secondary opacity-60" />
              <rect x="2" y="16" width="10" height="2" fill="currentColor" className="text-primary opacity-70" />
            </g>
          </g>
        </g>
        
      </svg>
    </div>
  );
};

export default AnimatedAvatar;
