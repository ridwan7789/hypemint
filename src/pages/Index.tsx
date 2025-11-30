import { Send, Twitter, Music, Globe, Youtube, Copy, FileText } from "lucide-react";
import CyberpunkBackground from "@/components/CyberpunkBackground";
import LoadingBar from "@/components/LoadingBar";
import SocialButton from "@/components/SocialButton";
import logo from "@/assets/hypemint-logo.png";

const Index = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("0xA77b64954d591586fD26d052616617Bc8E4c273D");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Animated background */}
      <CyberpunkBackground />

      {/* Radial gradient overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
                      from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Whitepaper button in top-right corner */}
      <a
        href="https://app.gitbook.com/o/F2li4dnW8QF5JBrjKBVB/s/gPO1rPhR6jG9ENXLKciM/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 z-50 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-2 text-sm font-orbitron text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/20 flex items-center gap-2"
      >
        <FileText size={16} />
        <span>WHITEPAPER</span>
      </a>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Logo with holographic glow */}
        <div className="relative mb-12 animate-float">
          {/* Outer glow rings */}
          <div className="absolute inset-0 blur-3xl opacity-40 animate-pulse-glow"
               style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, transparent 70%)" }} />

          <div className="absolute inset-0 blur-2xl opacity-30 animate-pulse-glow"
               style={{
                 background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)",
                 animationDelay: "1s"
               }} />

          {/* Logo container */}
          <div className="relative">
            <img
              src={logo}
              alt="HypeMint Logo"
              className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
              style={{
                filter: "drop-shadow(0 0 50px hsl(var(--primary) / 0.5)) drop-shadow(0 0 80px hsl(var(--secondary) / 0.3))",
              }}
            />
          </div>

          {/* Particle effects */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-particle-float"
              style={{
                background: i % 3 === 0 ? "hsl(var(--primary))" : i % 3 === 1 ? "hsl(var(--secondary))" : "hsl(var(--accent))",
                left: "50%",
                top: "50%",
                "--tx": `${Math.cos((i / 12) * Math.PI * 2) * 150}px`,
                "--ty": `${Math.sin((i / 12) * Math.PI * 2) * 150}px`,
                animationDelay: `${i * 0.3}s`,
                boxShadow: "0 0 10px currentColor",
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Official CA address with cyberpunk effect and copy functionality */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-lg blur-2xl opacity-60 animate-pulse"></div>
          <div
            className="relative font-orbitron text-sm md:text-base text-center bg-black/70 px-6 py-3 rounded-lg border border-primary/30 backdrop-blur-sm text-primary/90 tracking-wider cursor-pointer group hover:bg-black/80 transition-colors"
            onClick={copyToClipboard}
          >
            OFFICIAL CA : <span className="text-white font-bold tracking-normal">0xA77b64954d591586fD26d052616617Bc8E4c273D</span>
            <button
              className="ml-2 text-primary/70 group-hover:text-primary/100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard();
              }}
              aria-label="Copy address"
            >
              <Copy size={16} />
            </button>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Main title */}
        <h1 className="font-orbitron text-3xl md:text-5xl font-bold text-center mb-4
                       bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent
                       drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">
          WEBSITE IS UNDER DEVELOPMENT
        </h1>

        {/* Subtext */}
        <p className="font-orbitron text-sm md:text-base text-muted-foreground text-center mb-8 max-w-md">
          Join to Official Community for Latest Updates
        </p>

        {/* Loading bar */}
        <div className="w-full max-w-md mb-12">
          <LoadingBar />
        </div>

        {/* Social buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          <SocialButton
            icon={<Send className="w-5 h-5" />}
            label="Telegram"
            url="https://t.me/Hype_Mint"
          />
          <SocialButton
            icon={<Twitter className="w-5 h-5" />}
            label="X (Twitter)"
            url="https://x.com/HypeMintX"
          />
          <SocialButton
            icon={<Music className="w-5 h-5" />}
            label="TikTok"
            url="https://tiktok.com/@hypemintofficial"
          />
          <SocialButton
            icon={<Globe className="w-5 h-5" />}
            label="Website"
            url="https://hypemint.online"
          />
          <SocialButton
            icon={<Youtube className="w-5 h-5" />}
            label="YouTube"
            url="https://youtube.com/@HypeMintOfficial"
          />
        </div>

        {/* Bottom accent line */}
        <div className="mt-12 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </div>
    </div>
  );
};

export default Index;
