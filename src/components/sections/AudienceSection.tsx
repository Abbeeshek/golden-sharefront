import { Briefcase, GraduationCap, Building2, Users2 } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Beginners",
    description: "Starting your market journey with foundational knowledge",
  },
  {
    icon: Users2,
    title: "Active Investors",
    description: "Enhancing strategies with advanced tools and insights",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Integrating market participation with career growth",
  },
  {
    icon: Building2,
    title: "Network Members",
    description: "Leveraging ecosystem benefits for financial objectives",
  },
];

const AudienceSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-gold/80 text-sm tracking-[0.3em] uppercase font-body mb-4 block opacity-0 animate-fade-up">
            Target Audience
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 opacity-0 animate-fade-up animation-delay-100">
            Who It Is For
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            Designed to serve diverse participants at every stage of their financial journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group text-center p-8 rounded-lg border border-border/30 bg-card/50 hover:bg-card hover:border-gold/20 transition-all duration-500 opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                <audience.icon className="w-7 h-7 text-muted-foreground group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-heading text-xl text-foreground mb-3">
                {audience.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
