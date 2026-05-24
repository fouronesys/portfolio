import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import {
  SiTypescript,
  SiPython,
  SiJavascript,
  SiPhp,
  SiGnubash,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiLinux,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiHtml5,
  SiVite,
  SiAndroid,
  SiApple,
  SiExpo,
} from "react-icons/si";

const stack = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "PHP", icon: SiPhp },
      { name: "Shell/Bash", icon: SiGnubash },
    ],
  },
  {
    category: "Backend & ERP",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Odoo v14/v17", icon: SiPython },
      { name: "Custom ERP", icon: SiTypescript },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
      { name: "Android", icon: SiAndroid },
      { name: "iOS", icon: SiApple },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "HTML5", icon: SiHtml5 },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Linux Server", icon: SiLinux },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
];

export function Stack() {
  return (
    <section id="stack" className="py-24 bg-card/50 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl"><AnimatedCounter value={3} /></span> Technical Stack
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {stack.map((group, i) => (
            <motion.div
              key={i}
              data-testid={`stack-group-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-mono text-foreground mb-6 border-b border-border pb-2">
                // {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors group"
                  >
                    <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
