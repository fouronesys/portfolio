import { useState, useEffect } from "react";
import { Menu, X, Terminal, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import type { TKey } from "@/i18n/LanguageContext";
import { T } from "./T";
import { LanguageToggle } from "./LanguageToggle";

const navItems: { key: TKey; href: string }[] = [
  { key: "nav.about", href: "#about" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.stack", href: "#stack" },
  { key: "nav.contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono font-bold tracking-tight text-foreground">
            JESUS_G<span className="text-primary animate-pulse">_</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <T k={item.key} />
            </a>
          ))}
          <LanguageToggle />
          <a
            href="#contact"
            className="text-sm font-mono bg-primary text-primary-foreground px-4 py-2 rounded font-medium hover:bg-primary/90 transition-colors flex items-center gap-1"
          >
            <T k="nav.cta" /> <ChevronRight className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <motion.nav
          key={lang}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <T k={item.key} />
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
