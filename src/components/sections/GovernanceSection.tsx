import { Scale, Eye, AlertTriangle, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: Scale,
    title: "Compliance Awareness",
    description: "Understanding regulatory frameworks and market guidelines",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication of risks, fees, and processes",
  },
  {
    icon: AlertTriangle,
    title: "Risk Education",
    description: "Comprehensive understanding of market volatility",
  },
  {
    icon: BookOpen,
    title: "Ethical Standards",
    description: "Commitment to fair and responsible practices",
  },
];

const GovernanceSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold/80 text-sm tracking-[0.3em] uppercase font-body mb-4 block opacity-0 animate-fade-up">
              Our Commitment
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
              Governance & Responsibility
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-200">
              Built on pillars of integrity, ensuring every participant operates 
              within a framework of accountability and informed awareness.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group flex items-start gap-5 p-6 rounded-lg bg-card/50 border border-border/30 hover:border-gold/20 transition-all duration-500 opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                  <pillar.icon className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
