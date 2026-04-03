import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import FloatingOrbs from "@/components/backgrounds/FloatingOrbs";

const IdealClientSection = () => (
  <section className="relative py-20 md:py-28 px-6 overflow-hidden">
    <FloatingOrbs />
    <div className="relative z-10 max-w-3xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Pro koho jsme
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Spolupracujeme se značkami, které mají <span className="font-medium text-foreground">kvalitní produkt</span>, <span className="font-medium text-foreground">stabilní byznys</span> a <span className="font-medium text-foreground">ambici růst</span>. Nepracujeme s každým – kapacitu držíme omezenou, aby každý projekt dostal <span className="font-medium text-foreground">maximální pozornost</span>.
        </p>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Každý projekt řešíme <span className="font-medium text-foreground">individuálně</span>, do detailu a <span className="font-medium text-foreground">dlouhodobě</span> – jako byste měli vlastní <span className="font-medium text-foreground">in-house tým</span>. Jen bez nákladů a bez zdlouhavého budování.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Pokud hledáte rychlé hacky nebo jednorázové kampaně, pravděpodobně si nebudeme rozumět.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body">
          Pokud chcete vybudovat dlouhodobě výkonný systém, spolupráce s námi dává smysl.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="mt-10 text-center">
          <Button variant="cta" size="lg" className="text-base px-8 py-5" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Zjistit, jestli se hodíme
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default IdealClientSection;
