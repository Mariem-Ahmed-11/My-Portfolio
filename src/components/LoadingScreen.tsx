import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      setTimeout(onComplete, 800); // Wait for fade-out to finish
    }, 2000); // 2 seconds loading

    return () => clearTimeout(fadeTimer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-2 rounded-full border-4 border-primary/50 border-t-transparent animate-spin" style={{ animationDuration: '1s' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold gradient-text">M</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground uppercase tracking-[4px] font-medium animate-pulse">
          Crafting Experience
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
