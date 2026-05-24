import { motion } from "framer-motion";
import { 
  SiTypescript, 
  SiPython, 
  SiJavascript, 
  SiGnubash, 
  SiNodedotjs, 
  SiExpress, 
  SiOdoo, 
  SiErpnext, 
  SiDocker, 
  SiLinux, 
  SiPostgresql, 
  SiReact, 
  SiHtml5, 
  SiVite 
} from "react-icons/si";

const stack = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Shell/Bash", icon: SiGnubash },
    ]
  },
  {
    category: "Backend & ERP",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Odoo v14/v17", icon: SiOdoo },
      { name: "ERPNext", icon: SiErpnext },
    ]
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Linux Server", icon: SiLinux },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "CapRover", icon: SiDocker }, // Fallback icon for CapRover
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "HTML5", icon: SiHtml5 },
      { name: "Vite", icon: SiVite },
    ]
  }
];

export function Stack() {
  return (
    <section id="stack" className="py-24 bg-card/50 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">03.</span> Technical Stack
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {stack.map((group, i) => (
            <motion.div
              key={i}
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
                    <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
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
