import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "FourOneERP",
    description: "Modular, multi-functional ERP system built in TypeScript from the ground up. Full enterprise resource planning: inventory, accounting, purchasing, and HR.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    type: "Enterprise System"
  },
  {
    title: "Odoo NCF/DGII Suite",
    description: "Production Odoo modules for Dominican fiscal compliance. Handles NCF generation, DGII tax authority integration, and electronic receipt management.",
    tags: ["Python", "Odoo v14/v17", "PostgreSQL", "API Integration"],
    type: "Fiscal Infrastructure"
  },
  {
    title: "FourOnePOS",
    description: "Point of sale system integrated with Odoo NCF for legal fiscal receipts in the Dominican Republic. Built for high reliability in retail environments.",
    tags: ["TypeScript", "Odoo API", "React"],
    type: "Point of Sale"
  },
  {
    title: "RNC/DGII Validator",
    description: "Tools for validating Dominican business registry (RNC) numbers against DGII APIs in real-time, ensuring data accuracy for B2B transactions.",
    tags: ["Python", "HTML5", "REST API"],
    type: "Validation Service"
  },
  {
    title: "ConstruLink",
    description: "Comprehensive application designed specifically for the construction sector to manage projects, resources, and timelines.",
    tags: ["TypeScript", "React", "Node.js"],
    type: "Industry App"
  },
  {
    title: "Alive Foundation",
    description: "Web application deployed via CapRover for Festival de la Inclusion 2026. Managing events, participants, and foundational operations.",
    tags: ["TypeScript", "CapRover", "Docker"],
    type: "Web Application"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">02.</span> Systems Built
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl -z-10"></div>
              <div className="h-full p-6 border border-border bg-card/40 rounded-xl flex flex-col hover:border-primary/50 transition-colors backdrop-blur-sm">
                <div className="flex justify-between items-start mb-6">
                  <FolderGit2 className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-mono text-primary mb-2">{project.type}</div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
