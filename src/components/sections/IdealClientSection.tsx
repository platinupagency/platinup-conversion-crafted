import AnimatedSection from "@/components/AnimatedSection";

const IdealClientSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Nepracujeme s každým.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="mt-6 text-lg text-muted-foreground font-body">
          Spolupracujeme se značkami, které mají kvalitní produkt, reálný byznys a chtějí růst.
        </p>
        <div className="mt-8 space-y-3 text-lg text-foreground font-body">
          <p>E-shop, který:</p>
          <div className="pl-4 space-y-2">
            <div className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              <p>má návštěvnost</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              <p>má zákazníky</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              <p>a chce z toho vytěžit maximum</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="mt-8 text-muted-foreground font-body italic">
          Pokud hledáte rychlé hacky nebo „někoho na kampaně", nejsme pro vás.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default IdealClientSection;
