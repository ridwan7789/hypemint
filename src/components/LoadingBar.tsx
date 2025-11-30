import { useEffect, useState } from "react";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; // Loop
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative h-3 bg-card border border-primary/30 rounded-full overflow-hidden backdrop-blur-sm">
        {/* Holographic effect background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-shimmer" 
             style={{ backgroundSize: "200% 100%" }} />
        
        {/* Progress bar */}
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary relative"
          style={{ 
            width: `${progress}%`,
            transition: "width 0.1s linear",
            boxShadow: "0 0 20px hsl(var(--primary) / 0.8), 0 0 40px hsl(var(--secondary) / 0.5)"
          }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
               style={{ backgroundSize: "200% 100%" }} />
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"
               style={{ backgroundSize: "200% 100%" }} />
        </div>
      </div>
      
      {/* Progress text */}
      <div className="text-center mt-3 font-orbitron text-sm text-primary/80">
        {progress}%
      </div>
    </div>
  );
};

export default LoadingBar;
