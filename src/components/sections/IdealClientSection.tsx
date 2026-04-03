import AnimatedSection from "@/components/AnimatedSection";

const IdealClientSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-2xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Nepracujeme s každým.
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-6 text-lg text-muted-foreground font-body">
          Spolupracujeme se značkami, které mají kvalitní produkt, reálný byznys a chtějí růst. E-shop, který má návštěvnost, má zákazníky a chce z toho vytěžit maximum.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-6 text-lg text-muted-foreground font-body italic">
          Pokud hledáte rychlé hacky nebo „někoho na kampaně", nejsme pro vás.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default IdealClientSection;
