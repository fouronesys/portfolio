import { motion } from "framer-motion";
import { Server, ShieldCheck, Cpu } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { T } from "./T";
import type { TKey } from "@/i18n/LanguageContext";

type Card = {
  icon: React.ReactNode;
  titleKey: TKey;
  descKey: TKey;
};

const cards: Card[] = [
  {
    icon: <Server className="w-6 h-6 text-primary" />,
    titleKey: "about.card1Title",
    descKey: "about.card1Desc",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    titleKey: "about.card2Title",
    descKey: "about.card2Desc",
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    titleKey: "about.card3Title",
    descKey: "about.card3Desc",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card/50 border-y border-border relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl"><AnimatedCounter value={1} /></span>{" "}
            <T k="about.heading" />
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              <T k="about.p1Start" />{" "}
              <span className="text-foreground font-medium"><T k="about.p1Company" /></span>
              <T k="about.p1End" />
            </p>
            <p>
              <T k="about.p2Start" />{" "}
              <strong className="text-foreground"><T k="about.p2Bold" /></strong>
              <T k="about.p2End" />
            </p>
            <p>
              <T k="about.p3Start" />{" "}
              <strong className="text-foreground"><T k="about.p3Bold" /></strong>
              <T k="about.p3End" />
            </p>
          </motion.div>

          <div className="grid gap-6">
            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded bg-secondary group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      <T k={item.titleKey} />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <T k={item.descKey} />
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
