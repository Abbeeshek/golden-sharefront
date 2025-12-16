import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Pre-title accent */}
          <div className="flex items-center justify-center gap-3 mb-8 opacity-0 animate-fade-up">
            <div className="w-8 h-px bg-gold/50" />
            <span className="text-gold/80 text-xs tracking-[0.4em] uppercase font-body">
              Network Global
            </span>
            <div className="w-8 h-px bg-gold/50" />
          </div>
          
          {/* Main Title */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-8 tracking-tight opacity-0 animate-fade-up animation-delay-100">
            SHARE{" "}
            <span className="relative">
              MARKET
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-body font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            Market Awareness. Structured Participation.{" "}
            <span className="text-foreground">Financial Growth.</span>
          </p>
          
          {/* Subtle CTA indicator */}
          <div className="opacity-0 animate-fade-up animation-delay-300">
            <a 
              href="#about" 
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-300 group"
            >
              <span className="text-xs tracking-[0.3em] uppercase">Discover</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
