import { createContext, useContext, useState, useCallback, useMemo, useEffect, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dictionaries, type Lang, type Dict } from "./dictionaries";

type PathOf<T, P extends string = ""> = T extends string
  ? P
  : { [K in keyof T & string]: PathOf<T[K], P extends "" ? K : `${P}.${K}`> }[keyof T & string];

export type TKey = PathOf<Dict>;

type Ctx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TKey) => string;
  isTransitioning: boolean;
  prefersReducedMotion: boolean;
};

const LanguageContext = createContext<Ctx | null>(null);

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("lang:v1");
    if (saved === "en" || saved === "es") return saved;
  } catch {}
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith("es") ? "es" : "en";
}

function resolve(dict: Dict, key: string): string {
  const parts = key.split(".");
  let cur: unknown = dict;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return key;
    }
  }
  return typeof cur === "string" ? cur : key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang:v1", lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((newLang: Lang) => {
    if (newLang === lang) return;
    if (prefersReducedMotion) {
      setLangState(newLang);
      return;
    }
    setIsTransitioning(true);
    setTimeout(() => setLangState(newLang), 80);
    setTimeout(() => setIsTransitioning(false), 900);
  }, [lang, prefersReducedMotion]);

  const t = useCallback(
    (key: TKey) => resolve(dictionaries[lang], key),
    [lang]
  );

  const value = useMemo(
    () => ({ lang, setLang, t, isTransitioning, prefersReducedMotion }),
    [lang, setLang, t, isTransitioning, prefersReducedMotion]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isTransitioning && !prefersReducedMotion && (
          <motion.div
            key="scanline"
            initial={{ top: 0, opacity: 0 }}
            animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", times: [0, 0.15, 0.85, 1] }}
            className="fixed left-0 right-0 h-[2px] bg-primary pointer-events-none z-[60] shadow-[0_0_20px_4px_hsl(var(--primary)/0.6)]"
          />
        )}
      </AnimatePresence>
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
