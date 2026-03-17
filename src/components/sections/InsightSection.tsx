import AnimatedSection from "@/components/AnimatedSection";

const InsightSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Problém není v e-mail marketingu.
        </h2>
        <p className="mt-2 text-xl font-semibold text-gold font-display">
          Problém je v tom, jak se dělá.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="mt-10 space-y-3 text-lg text-muted-foreground font-body">
          <p>Většina e-shopů funguje bez strategie.</p>
          <p>Posílá kampaně na celou databázi.</p>
          <p>Pracuje s minimální segmentací.</p>
          <p>Neoptimalizuje na základě dat.</p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="mt-10 text-xl font-bold font-display text-foreground">
          Výsledek?
        </p>
        <p className="mt-2 text-lg text-muted-foreground font-body">
          E-mail marketing „něco málo vydělá", ale zdaleka ne tolik, kolik by mohl.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default InsightSection;
