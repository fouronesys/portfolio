import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2, Smartphone } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const projects = [
  {
    title: "FourOneERP",
    description: "Modular, multi-functional ERP system built in TypeScript from the ground up. Full enterprise resource planning: inventory, accounting, purchasing, and HR.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    type: "Enterprise System",
    github: "https://github.com/fouronesys/fouronesysERP",
    live: null,
    mobile: false,
  },
  {
    title: "Odoo NCF/DGII Suite",
    description: "Production Odoo modules for Dominican fiscal compliance. Handles NCF generation, DGII tax authority integration, and electronic receipt management for Odoo v14 and v17.",
    tags: ["Python", "Odoo v14/v17", "PostgreSQL", "API Integration"],
    type: "Fiscal Infrastructure",
    github: "https://github.com/fouronesys/odoo17ncf-dgii",
    live: null,
    mobile: false,
  },
  {
    title: "Gruard",
    description: "iOS & Android platform connecting drivers with certified tow trucks and roadside assistance across the Dominican Republic. Real-time dispatch, live tracking, and mobile-first UX.",
    tags: ["React Native", "TypeScript", "iOS", "Android"],
    type: "Mobile Platform",
    github: "https://github.com/appgruard",
    live: "https://gruard.com",
    mobile: true,
  },
  {
    title: "FourOnePOS",
    description: "Point of sale system integrated with Odoo NCF for legal fiscal receipts in the Dominican Republic. Built for high reliability in retail environments.",
    tags: ["TypeScript", "Odoo API", "React"],
    type: "Point of Sale",
    github: "https://github.com/fouronesys/fouronepos",
    live: null,
    mobile: false,
  },
  {
    title: "KlkChat",
    description: "Real-time chat application built in TypeScript. Full-featured messaging platform with a clean, modern interface designed for speed and reliability.",
    tags: ["TypeScript", "React", "WebSockets"],
    type: "Communication App",
    github: "https://github.com/appgruard/klkchat",
    live: null,
    mobile: false,
  },
  {
    title: "RNC/DGII Validator",
    description: "Tools for validating Dominican business registry (RNC) numbers against DGII APIs in real-time, ensuring data accuracy for B2B transactions.",
    tags: ["Python", "HTML5", "REST API"],
    type: "Validation Service",
    github: "https://github.com/fouronesys/DgiiRncValidator",
    live: null,
    mobile: false,
  },
  {
    title: "Wedding Invite Flow",
    description: "Digital wedding invitation platform with personalized RSVP flows, guest management, and elegant animated invitation experiences. Built for multiple clients.",
    tags: ["TypeScript", "React", "Vite"],
    type: "Digital Product",
    github: "https://github.com/appgruard/Wedding-Invite-Flow",
    live: null,
    mobile: false,
  },
  {
    title: "ConstruLink",
    description: "Comprehensive application designed for the construction sector to manage projects, resources, and operational timelines with precision.",
    tags: ["TypeScript", "React", "Node.js"],
    type: "Industry App",
    github: "https://github.com/fouronesys/construlink",
    live: null,
    mobile: false,
  },
  {
    title: "RentaCar",
    description: "Complete car rental management system: fleet administration, reservations, customer tracking, and billing for vehicle rental businesses.",
    tags: ["PHP", "MySQL", "REST API"],
    type: "Business System",
    github: "https://github.com/appgruard/rentacar",
    live: null,
    mobile: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl"><AnimatedCounter value={2} /></span> Systems Built
          </h2>
          <div className="h-1 w-20 bg-primary/50 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              data-testid={`card-project-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl -z-10"></div>
              <div className="h-full p-6 border border-border bg-card/40 rounded-xl flex flex-col hover:border-primary/50 transition-colors backdrop-blur-sm">
                <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                    <FolderGit2 className="w-10 h-10 text-primary" />
                    {project.mobile && (
                      <Smartphone className="w-4 h-4 text-primary absolute -bottom-1 -right-1 bg-background rounded-full p-0.5" />
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-github-${i}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-live-${i}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
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
