import { ExternalLink } from "lucide-react";

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  url: string;
}

const SocialButton = ({ icon, label, url }: SocialButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative px-6 py-3 bg-card/50 border border-primary/30 rounded-lg backdrop-blur-sm 
                 transition-all duration-300 hover:border-primary hover:bg-primary/10 
                 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
    >
      <div className="flex items-center gap-3 font-orbitron text-sm">
        <span className="text-primary group-hover:text-secondary transition-colors">{icon}</span>
        <span className="text-foreground/90 group-hover:text-foreground transition-colors">{label}</span>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
      </div>
      
      {/* Holographic shimmer effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/10 to-transparent 
                      opacity-0 group-hover:opacity-100 group-hover:animate-shimmer pointer-events-none"
           style={{ backgroundSize: "200% 100%" }} />
    </a>
  );
};

export default SocialButton;
