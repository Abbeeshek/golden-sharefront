const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-16 items-start">
            {/* Left column - Label */}
            <div className="opacity-0 animate-fade-up">
              <span className="text-gold/80 text-sm tracking-[0.3em] uppercase font-body">
                About
              </span>
              <div className="w-16 h-px bg-gold/30 mt-4" />
            </div>
            
            {/* Right column - Content */}
            <div className="space-y-6 opacity-0 animate-fade-up animation-delay-100">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
                A Knowledge-Driven Approach to Equity Markets
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Share Market represents a comprehensive initiative within the Network Global 
                  ecosystem, designed to bridge the gap between market complexity and individual 
                  understanding. We believe that informed participation is the foundation of 
                  sustainable financial growth.
                </p>
                <p>
                  Through structured education, curated insights, and a supportive community 
                  framework, we enable members to navigate equity markets with clarity and 
                  confidence. Our approach emphasizes disciplined participation over speculation, 
                  long-term value creation over short-term gains.
                </p>
              </div>
              
              {/* Stats or highlights */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                <div className="opacity-0 animate-scale-in animation-delay-200">
                  <div className="text-2xl md:text-3xl font-heading text-foreground mb-1">
                    Expert
                  </div>
                  <div className="text-xs text-muted-foreground tracking-wide uppercase">
                    Guidance
                  </div>
                </div>
                <div className="opacity-0 animate-scale-in animation-delay-300">
                  <div className="text-2xl md:text-3xl font-heading text-foreground mb-1">
                    Secure
                  </div>
                  <div className="text-xs text-muted-foreground tracking-wide uppercase">
                    Framework
                  </div>
                </div>
                <div className="opacity-0 animate-scale-in animation-delay-400">
                  <div className="text-2xl md:text-3xl font-heading text-foreground mb-1">
                    Growth
                  </div>
                  <div className="text-xs text-muted-foreground tracking-wide uppercase">
                    Focused
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
