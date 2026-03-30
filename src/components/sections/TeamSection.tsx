import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const TeamSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Malý tým. Velký dopad.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="mt-6 text-lg text-muted-foreground font-body">
          Záměrně pracujeme jen s omezeným počtem klientů. Díky tomu se každému projektu věnujeme do detailu.
        </p>
        <div className="mt-8 space-y-3 text-lg text-muted-foreground font-body">
          <p>Žádné šablonové řešení.</p>
          <p>Žádné „číslo v systému".</p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="mt-8 text-lg text-foreground font-semibold font-body">
          S námi máte pocit, že máte vlastní e-mail marketing tým — bez fixních nákladů.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <div className="mt-10">
          <Button variant="cta" size="lg" className="text-base px-8 py-5">
            Zjistit, jestli se hodíme
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TeamSection;
