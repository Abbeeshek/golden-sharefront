import { CreditCard, Building, Landmark, TrendingUp } from "lucide-react";

const integrations = [
  {
    icon: CreditCard,
    label: "Payments",
    description: "Seamless transaction infrastructure",
  },
  {
    icon: Building,
    label: "Banking",
    description: "Integrated financial services",
  },
  {
    icon: Landmark,
    label: "MSME Finance",
    description: "Business growth capital solutions",
  },
  {
    icon: TrendingUp,
    label: "IPO Framework",
    description: "Primary market access pathways",
  },
];

const EcosystemSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
      
      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="opacity-0 animate-fade-up">
            <span className="text-gold/80 text-sm tracking-[0.3em] uppercase font-body mb-4 block">
              Connected Experience
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Ecosystem Integration
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Share Market operates as part of the broader Network Global ecosystem, 
              creating synergies across multiple financial verticals for comprehensive 
              wealth management and business growth.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-gold/50 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {integrations.map((item, index) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 p-6 rounded-lg border border-border/30 bg-card/30 hover:bg-card hover:border-gold/20 transition-all duration-500 opacity-0 animate-scale-in"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
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

export default EcosystemSection;
