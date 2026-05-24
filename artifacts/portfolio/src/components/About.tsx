import { motion } from "framer-motion";
import { Terminal, Server, ShieldCheck, Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/50 border-y border-border relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span> Background
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
              As the founder of <span className="text-foreground font-medium">Four One Solutions</span>, I don't just write code — I architect complete business systems. My work lives at the intersection of business logic, fiscal compliance, and robust technical infrastructure.
            </p>
            <p>
              I specialize in <strong className="text-foreground">ERP implementations</strong> and deep customization, particularly within the Odoo ecosystem. I build solutions that handle the critical operations of real businesses: inventory, accounting, point of sale, and human resources.
            </p>
            <p>
              In the Dominican Republic, fiscal compliance is non-negotiable. I am an expert in integrating systems with the <strong className="text-foreground">DGII (Direccion General de Impuestos Internos)</strong>. I develop production-ready modules for NCF (Numeros de Comprobantes Fiscales) generation, real-time RNC validation, and electronic receipt management.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {[
              {
                icon: <Server className="w-6 h-6 text-primary" />,
                title: "End-to-End Architecture",
                desc: "From database design to frontend implementation, building full systems in TypeScript and Python."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-primary" />,
                title: "Fiscal Compliance",
                desc: "Deep integration with DGII APIs for NCF generation and electronic receipts."
              },
              {
                icon: <Cpu className="w-6 h-6 text-primary" />,
                title: "DevOps & Infrastructure",
                desc: "Deploying and maintaining applications using CapRover, Docker, and Linux environments."
              }
            ].map((item, i) => (
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
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
