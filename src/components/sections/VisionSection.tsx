const VisionSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/50 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold/80 text-sm tracking-[0.3em] uppercase font-body mb-6 block opacity-0 animate-fade-up">
            Our Vision
          </span>
          
          <blockquote className="opacity-0 animate-fade-up animation-delay-100">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
              "Empowering individuals and enterprises to participate in capital markets 
              with{" "}
              <span className="text-gold">knowledge</span>,{" "}
              <span className="text-gold">discipline</span>, and{" "}
              <span className="text-gold">responsibility</span> — building a generation 
              of informed market participants."
            </p>
          </blockquote>
          
          <div className="flex items-center justify-center gap-3 opacity-0 animate-fade-up animation-delay-200">
            <div className="w-12 h-px bg-gold/30" />
            <span className="text-muted-foreground text-sm tracking-widest uppercase">
              Network Global
            </span>
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
