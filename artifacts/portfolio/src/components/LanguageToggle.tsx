import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/dictionaries";
import { motion } from "framer-motion";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="relative inline-flex items-center rounded border border-border bg-secondary/40 backdrop-blur-sm p-0.5 font-mono text-xs"
    >
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            aria-label={`Switch language to ${l.label}`}
            className={`relative z-10 px-3 py-1.5 rounded transition-colors duration-200 ${
              active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-toggle-pill"
                className="absolute inset-0 bg-primary rounded -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
