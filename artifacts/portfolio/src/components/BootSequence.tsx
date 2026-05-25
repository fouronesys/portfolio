import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BootSequence({ children }: { children: React.ReactNode }) {
  const [hasPlayed, setHasPlayed] = useState(() => {
    return sessionStorage.getItem("boot:played:v1") === "true";
  });
  
  const [step, setStep] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  const fullLines = [
    "> BOOTING JESUS_G.SYS v4.1",
    "> [OK] Loading kernel modules",
    "> [OK] Mounting /erp /dgii /mobile /infra",
    "> [OK] Establishing secure channel",
    "> [OK] System ready"
  ];
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    
    if (mediaQuery.matches && !hasPlayed) {
      setLines([fullLines[fullLines.length - 1]]);
      setTimeout(() => {
        completeBoot();
      }, 300);
      return;
    }
    
    if (!hasPlayed) {
      document.body.style.overflow = "hidden";
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          completeBoot();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      
      let isMounted = true;
      
      const typeLine = (line: string, index: number) => {
        return new Promise<void>((resolve) => {
          let charIndex = 0;
          setLines(prev => {
            const newLines = [...prev];
            newLines[index] = "";
            return newLines;
          });
          
          const typeChar = () => {
            if (!isMounted) return;
            if (charIndex < line.length) {
              setLines(prev => {
                const newLines = [...prev];
                newLines[index] = line.slice(0, charIndex + 1);
                return newLines;
              });
              charIndex++;
              setTimeout(typeChar, Math.random() * 15 + 15);
            } else {
              resolve();
            }
          };
          
          typeChar();
        });
      };
      
      const runSequence = async () => {
        await new Promise(r => setTimeout(r, 200));
        if (!isMounted) return;
        setStep(1); 
        
        for (let i = 0; i < fullLines.length; i++) {
          await typeLine(fullLines[i], i);
          await new Promise(r => setTimeout(r, 100)); 
          if (!isMounted) return;
        }
        
        await new Promise(r => setTimeout(r, 250));
        if (!isMounted) return;
        setStep(2); 
        
        await new Promise(r => setTimeout(r, 600)); 
        if (!isMounted) return;
        setStep(3); 
        
        setTimeout(() => {
          if (isMounted) completeBoot();
        }, 800); 
      };
      
      runSequence();
      
      return () => {
        isMounted = false;
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
    return undefined;
  }, [hasPlayed]);
  
  const completeBoot = () => {
    sessionStorage.setItem("boot:played:v1", "true");
    setHasPlayed(true);
    document.body.style.overflow = "";
  };
  
  if (hasPlayed) {
    return <>{children}</>;
  }
  
  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {!hasPlayed && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-background font-mono text-sm md:text-base text-muted-foreground p-8"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1 relative z-20">
              {lines.map((line, i) => {
                const isOkLine = line.includes("[OK]");
                const parsedLine = isOkLine ? line.replace("> [OK] ", "") : line.replace("> ", "");
                return (
                  <div key={i} className="mb-2">
                    <span className="text-primary mr-2">
                      {"> "}
                      {isOkLine && <span className="text-primary">[OK]</span>}
                    </span>
                    <span>{parsedLine}</span>
                  </div>
                );
              })}
              {step < 2 && (
                <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-2 align-middle" />
              )}
            </div>
            
            {step >= 2 && !isReducedMotion && (
              <motion.div 
                className="absolute left-0 right-0 h-1 bg-primary/50 shadow-[0_0_15px_3px_rgba(0,255,255,0.6)] z-30"
                initial={{ top: 0 }}
                animate={{ top: "100%" }}
                transition={{ duration: 0.6, ease: "linear" }}
              />
            )}
            
            <div className="absolute bottom-8 right-8 text-xs text-muted-foreground flex items-center gap-2 z-40">
              <button onClick={completeBoot} className="hover:text-primary transition-colors focus:outline-none cursor-pointer">
                SKIP [esc]
              </button>
            </div>
            
            {step === 3 && (
              <>
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1/2 bg-background z-10"
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  transition={{ duration: 0.6, ease: [0.8, 0, 0.2, 1] }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1/2 bg-background z-10"
                  initial={{ y: 0 }}
                  animate={{ y: "100%" }}
                  transition={{ duration: 0.6, ease: [0.8, 0, 0.2, 1] }}
                />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        className="min-h-screen"
        initial={!isReducedMotion ? { opacity: 0, y: 20 } : { opacity: 1 }}
        animate={step >= 3 ? { opacity: 1, y: 0 } : (isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 })}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
