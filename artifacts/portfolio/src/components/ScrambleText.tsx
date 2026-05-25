import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

const CHARS = "01ABCDEFGHJKLMNPQRSTUVWXYZ#$%&*+=<>/\\|";
const randChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

type Props = {
  children: string;
  className?: string;
  duration?: number;
};

export function ScrambleText({ children, className, duration = 700 }: Props) {
  const { isTransitioning, prefersReducedMotion } = useLang();
  const [displayed, setDisplayed] = useState(children);
  const targetRef = useRef(children);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    targetRef.current = children;
    if (prefersReducedMotion || !isTransitioning) {
      setDisplayed(children);
      return;
    }

    const target = children;
    const startTime = performance.now();
    const settleTimes = target.split("").map(() => 150 + Math.random() * (duration - 200));

    const tick = (now: number) => {
      const elapsed = now - startTime;
      if (elapsed >= duration) {
        setDisplayed(target);
        rafRef.current = null;
        return;
      }
      let out = "";
      for (let i = 0; i < target.length; i++) {
        const ch = target[i];
        if (elapsed >= settleTimes[i] || ch === " " || ch === "\n") {
          out += ch;
        } else {
          out += randChar();
        }
      }
      setDisplayed(out);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [children, isTransitioning, prefersReducedMotion, duration]);

  return <span className={className}>{displayed}</span>;
}
