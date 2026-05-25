import { motion } from "framer-motion";
import { Terminal, ArrowRight, Code2, Database, LayoutTemplate } from "lucide-react";
import { NetworkBackground } from "./NetworkBackground";
import { MagneticButton } from "./MagneticButton";
import { T } from "./T";
import { useLang } from "@/i18n/LanguageContext";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <NetworkBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-mono text-muted-foreground">
                <T k="hero.badge" />
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <T k="hero.titleStart" />{" "}
              <span className="text-primary font-mono">&lt;Enterprise/&gt;</span>{" "}
              <T k="hero.titleEnd" />
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              <T k="hero.body" />
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#projects"
                className="bg-primary text-primary-foreground px-6 py-3 rounded font-mono font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 group"
              >
                {t("hero.viewSystems")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="bg-secondary text-foreground border border-border px-6 py-3 rounded font-mono font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" /> {t("hero.initContact")}
              </MagneticButton>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="flex items-center gap-2 text-foreground font-mono font-bold mb-1">
                  <Database className="w-4 h-4 text-primary" /> <T k="hero.erpLabel" />
                </div>
                <div className="text-sm text-muted-foreground"><T k="hero.erpSub" /></div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-foreground font-mono font-bold mb-1">
                  <LayoutTemplate className="w-4 h-4 text-primary" /> <T k="hero.dgiiLabel" />
                </div>
                <div className="text-sm text-muted-foreground"><T k="hero.dgiiSub" /></div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-foreground font-mono font-bold mb-1">
                  <Code2 className="w-4 h-4 text-primary" /> <T k="hero.stackLabel" />
                </div>
                <div className="text-sm text-muted-foreground"><T k="hero.stackSub" /></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto max-w-md w-full"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative border border-border bg-card">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
              <img
                src="/jesus-garcia.png"
                alt="Jesus Garcia"
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
                <div className="bg-background/80 backdrop-blur text-xs font-mono px-2 py-1 rounded text-primary border border-primary/20">
                  <T k="hero.statusOnline" />
                </div>
                <div className="bg-background/80 backdrop-blur text-[10px] font-mono px-2 py-1 rounded text-muted-foreground border border-border">
                  <T k="hero.sysId" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
                <div className="w-12 h-12 border-r-2 border-b-2 border-primary/50"></div>
              </div>
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <div className="w-12 h-12 border-t-2 border-r-2 border-primary/50"></div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 -right-8 w-full h-full border border-border/50 rounded-xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-full h-full border border-primary/20 rounded-xl border-dashed"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
