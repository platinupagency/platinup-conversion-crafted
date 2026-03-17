import AnimatedSection from "@/components/AnimatedSection";

const ProblemSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Možná e-mail marketing už děláte.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="mt-8 space-y-2 text-lg text-muted-foreground font-body">
          <p>Občas pošlete kampaň.</p>
          <p>Máte nastavený opuštěný košík.</p>
          <p>Sbíráte kontakty.</p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          A něco málo to vydělá.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body">
          Ale realita je, že většina e-shopů využívá e-mail marketing jen na zlomek jeho potenciálu.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default ProblemSection;
