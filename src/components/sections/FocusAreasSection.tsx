import { TrendingUp, Users, Shield } from "lucide-react";

const focusAreas = [
  {
    icon: TrendingUp,
    title: "Market Education & Awareness",
    description:
      "Comprehensive learning resources designed to demystify equity markets, providing foundational knowledge and advanced insights for informed decision-making.",
  },
  {
    icon: Users,
    title: "Structured Participation",
    description:
      "A systematic framework enabling members to engage with market opportunities through disciplined strategies and risk-managed approaches.",
  },
  {
    icon: Shield,
    title: "Investor Support Ecosystem",
    description:
      "End-to-end support infrastructure including research, analysis tools, and expert guidance to navigate complex market dynamics with confidence.",
  },
];

const FocusAreasSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-gold/80 text-sm tracking-[0.3em] uppercase font-body mb-4 block opacity-0 animate-fade-up">
            Our Approach
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
            Core Focus Areas
          </h2>
          <div className="w-16 h-px bg-gold/30 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className={`group relative bg-card border border-border/50 rounded-lg p-8 md:p-10 hover:border-gold/20 transition-all duration-500 opacity-0 animate-scale-in`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <area.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">
                  {area.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
