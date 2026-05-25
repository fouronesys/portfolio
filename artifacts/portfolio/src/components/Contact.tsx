import { motion } from "framer-motion";
import { Mail, Github, Globe, Terminal } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { T } from "./T";
import { useLang } from "@/i18n/LanguageContext";

export function Contact() {
  const { t } = useLang();
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

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <T k="contact.heading" />
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            <T k="contact.body" />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@fourone.com.do"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-mono font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" /> {t("contact.mailto")}
            </a>
            <a
              href="https://wa.me/18293519324"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-primary/40 text-primary px-8 py-4 rounded font-mono font-bold text-lg hover:bg-primary/10 transition-all hover:scale-105"
            >
              <SiWhatsapp className="w-5 h-5" /> {t("contact.whatsapp")}
            </a>
          </div>

          <div className="mt-20 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <a
              href="https://github.com/fouronesys"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              <Github className="w-5 h-5" /> fouronesys
            </a>
            <div className="w-1 h-1 bg-border rounded-full hidden sm:block"></div>
            <a
              href="https://wa.me/18293519324"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              <SiWhatsapp className="w-5 h-5" /> +1 829 351 9324
            </a>
            <div className="w-1 h-1 bg-border rounded-full hidden sm:block"></div>
            <a
              href="https://fourone.com.do"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              <Globe className="w-5 h-5" /> fourone.com.do
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
