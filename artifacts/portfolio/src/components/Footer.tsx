import { T } from "./T";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
          <span className="text-primary">©</span> {currentYear} Jesus Garcia
        </div>

        <div className="text-xs text-muted-foreground font-mono">
          <T k="footer.status" />: <span className="text-primary"><T k="footer.operational" /></span>
        </div>

        <div className="text-sm text-muted-foreground font-mono">
          Four One Solutions
        </div>
      </div>
    </footer>
  );
}
