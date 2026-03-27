import AnimatedSection from "@/components/AnimatedSection";

const ProblemSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          „My už e-mail marketing děláme."
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          To slyšíme často.
        </p>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          A ve většině případů to znamená:
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <ul className="mt-6 space-y-2 text-lg text-muted-foreground font-body list-disc list-inside">
          <li>nastavený opuštěný košík</li>
          <li>občasná kampaň při slevě</li>
          <li>newsletter pro celou databázi</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          A ano — něco to vydělá.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body">
          Ale jen zlomek toho, co by mohlo.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default ProblemSection;
