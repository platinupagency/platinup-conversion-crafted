import AnimatedSection from "@/components/AnimatedSection";

const ProblemSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-2xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center">
          Většina e-shopů už e-mail marketing „dělá“
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Mají nastavený opuštěný košík. Občas rozešlou slevovou kampaň. Posílají newsletter celé databázi. A něco to přinese.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body">
          Jenže skutečný potenciál zůstává nevyužitý.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Rozdíl mezi průměrným a výkonným e-mail marketingem není v designu ani v počtu odeslaných e-mailů. Rozdíl je v systému, který stojí za tím – v promyšlené segmentaci, v práci s chováním zákazníků, ve správném načasování a v rozhodování podle dat.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <p className="mt-8 text-lg font-semibold text-foreground font-body text-center">
          Teprve tehdy se e-mail marketing stává jedním z hlavních prodejních kanálů.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default ProblemSection;
