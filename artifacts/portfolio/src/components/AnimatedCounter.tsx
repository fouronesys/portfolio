import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const start = 0;
      const end = value;
      if (start === end) return;
      const duration = 500;
      let startTimestamp: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setDisplayValue(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue.toString().padStart(2, '0')}.</span>;
}
