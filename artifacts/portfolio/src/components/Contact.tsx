import { motion } from "framer-motion";
import { Mail, Github, Globe, Terminal } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-8">
            <Terminal className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Initialize Connection</h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need a full ERP implementation, a complex DGII fiscal integration, or custom systems architecture, my inbox is open. Let's build infrastructure that scales.
          </p>

          <a 
            href="mailto:contact@1111.com.do" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-mono font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" /> EXECUTE_MAILTO
          </a>

          <div className="mt-20 flex justify-center items-center gap-8">
            <a 
              href="https://github.com/fouronesys" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              <Github className="w-5 h-5" /> fouronesys
            </a>
            <div className="w-1 h-1 bg-border rounded-full"></div>
            <a 
              href="https://www.1111.com.do" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              <Globe className="w-5 h-5" /> 1111.com.do
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
