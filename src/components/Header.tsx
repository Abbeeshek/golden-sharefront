import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/30"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-heading text-lg md:text-xl text-foreground tracking-wide group-hover:text-gold transition-colors duration-300">
              SHARE MARKET
            </span>
          </a>

          {/* Nav items */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Ecosystem
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Governance
            </a>
          </nav>

          {/* CTA */}
          <button className="px-5 py-2 text-sm border border-gold/30 text-gold hover:bg-gold/10 rounded transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
