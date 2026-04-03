import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const IdealClientSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-2xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Pro koho jsme
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Spolupracujeme se značkami, které mají kvalitní produkt, stabilní byznys a ambici růst. Nepracujeme s každým – kapacitu držíme omezenou, aby každý projekt dostal maximální pozornost.
        </p>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Každý projekt řešíme individuálně, do detailu a dlouhodobě – jako byste měli vlastní in-house tým. Jen bez nákladů a bez zdlouhavého budování.
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
