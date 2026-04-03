import AnimatedSection from "@/components/AnimatedSection";

const ProblemSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-xl md:text-2xl font-display font-bold text-foreground italic">
          Většina e-shopů už e-mail marketing „dělá"
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ul className="mt-8 space-y-2 text-lg text-muted-foreground font-body list-disc list-inside text-left max-w-md mx-auto">
          <li>Mají nastavený opuštěný košík.</li>
          <li>Občas rozešlou slevovou kampaň.</li>
          <li>Posílají newsletter celé databázi.</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          A něco to přinese.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body">
          Jenže skutečný potenciál zůstává nevyužitý.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Rozdíl mezi průměrným a výkonným e-mail marketingem není v designu ani v počtu odeslaných e-mailů.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body">
          Rozdíl je v systému, který stojí za tím.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <ul className="mt-8 space-y-2 text-lg text-muted-foreground font-body list-disc list-inside text-left max-w-md mx-auto">
          <li>V promyšlené segmentaci.</li>
          <li>V práci s chováním zákazníků.</li>
          <li>Ve správném načasování.</li>
          <li>V rozhodování podle dat.</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <p className="mt-8 text-lg font-semibold text-foreground font-body">
          Teprve tehdy se e-mail marketing stává jedním z hlavních prodejních kanálů.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default ProblemSection;
