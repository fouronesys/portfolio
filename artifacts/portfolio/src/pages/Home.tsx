import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BootSequence } from "@/components/BootSequence";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LanguageProvider } from "@/i18n/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <BootSequence>
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
          <ScrollProgress />
          <Navigation />

          <main>
            <Hero />
            <About />
            <Projects />
            <Stack />
            <Contact />
          </main>

          <Footer />
        </div>
      </BootSequence>
    </LanguageProvider>
  );
}
