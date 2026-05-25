import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2, Smartphone } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { T } from "./T";
import type { TKey } from "@/i18n/LanguageContext";

type Project = {
  title: string;
  descKey: TKey;
  tags: string[];
  typeKey: TKey;
  github: string | null;
  live: string | null;
  mobile: boolean;
};

const projects: Project[] = [
  {
    title: "Grúa RD",
    descKey: "projects.items.gruard",
    tags: ["React Native", "TypeScript", "iOS", "Android", "Live"],
    typeKey: "projects.types.mobile",
    github: null,
    live: "https://play.google.com/store/apps/details?id=com.fouronesolutions.gruard",
    mobile: true,
  },
  {
    title: "Solutions Rent",
    descKey: "projects.items.solutionsrent",
    tags: ["React Native", "TypeScript", "iOS", "Android", "In Review"],
    typeKey: "projects.types.mobile",
    github: null,
    live: "https://solutionsrentcar.do/WEB",
    mobile: true,
  },
  {
    title: "FourOneERP",
    descKey: "projects.items.fouroneerp",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    typeKey: "projects.types.enterprise",
    github: "https://github.com/fouronesys/fouronesysERP",
    live: null,
    mobile: false,
  },
  {
    title: "FourOnePOS",
    descKey: "projects.items.fouronepos",
    tags: ["TypeScript", "DGII", "React"],
    typeKey: "projects.types.pos",
    github: "https://github.com/fouronesys/fouronepos",
    live: null,
    mobile: false,
  },
  {
    title: "KlkChat",
    descKey: "projects.items.klkchat",
    tags: ["TypeScript", "React", "WebSockets"],
    typeKey: "projects.types.comm",
    github: "https://github.com/appgruard/klkchat",
    live: null,
    mobile: false,
  },
  {
    title: "RNC/DGII Validator",
    descKey: "projects.items.validator",
    tags: ["Python", "HTML5", "REST API"],
    typeKey: "projects.types.validation",
    github: "https://github.com/fouronesys/DgiiRncValidator",
    live: null,
    mobile: false,
  },
  {
    title: "Wedding Invite Flow",
    descKey: "projects.items.wedding",
    tags: ["TypeScript", "React", "Vite"],
    typeKey: "projects.types.digital",
    github: "https://github.com/appgruard/Wedding-Invite-Flow",
    live: null,
    mobile: false,
  },
  {
    title: "ConstruLink",
    descKey: "projects.items.construlink",
    tags: ["TypeScript", "React", "Node.js"],
    typeKey: "projects.types.industry",
    github: "https://github.com/fouronesys/construlink",
    live: null,
    mobile: false,
  },
  {
    title: "RentaCar",
    descKey: "projects.items.rentacar",
    tags: ["PHP", "MySQL", "REST API"],
    typeKey: "projects.types.business",
    github: null,
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
            <span className="text-primary font-mono text-xl"><AnimatedCounter value={2} /></span>{" "}
            <T k="projects.heading" />
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
                  <div className="text-xs font-mono text-primary mb-2">
                    <T k={project.typeKey} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-8 flex-grow leading-relaxed">
                  <T k={project.descKey} />
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
