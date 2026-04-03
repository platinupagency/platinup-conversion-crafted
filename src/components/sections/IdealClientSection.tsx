import AnimatedSection from "@/components/AnimatedSection";

const IdealClientSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-2xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Pro koho jsme
        </h2>
        <p className="mt-6 text-lg text-muted-foreground font-body text-center">
          Spolupracujeme se značkami, které mají kvalitní produkt, stabilní byznys a ambici růst.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-6 text-lg text-muted-foreground font-body text-center">
          Nepracujeme s každým.
        </p>
        <p className="text-lg text-muted-foreground font-body text-center">
          Kapacitu držíme omezenou, aby každý projekt dostal maximální pozornost.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-6 text-lg text-muted-foreground font-body text-center">
          Pokud hledáte rychlé hacky nebo jednorázové kampaně, pravděpodobně si nebudeme rozumět.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body text-center">
          Pokud chcete vybudovat dlouhodobě výkonný systém, spolupráce s námi dává smysl.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default IdealClientSection;
