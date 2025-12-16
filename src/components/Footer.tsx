const Footer = () => {
  return (
    <footer className="relative py-16 bg-background border-t border-border/30">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <span className="font-heading text-xl text-foreground">
              Share Market
            </span>
            <span className="text-muted-foreground text-sm">
              by Network Global
            </span>
          </div>
          
          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Network Global. All rights reserved.
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border/20">
          <p className="text-xs text-muted-foreground/60 text-center max-w-3xl mx-auto leading-relaxed">
            Investments in securities market are subject to market risks. Read all related documents carefully before investing. 
            The content provided is for informational purposes only and should not be construed as financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
