import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const PricingSection = () => (
  <section className="py-24 md:py-32 px-6 bg-background-alt">
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          A teď to nejdůležitější.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="mt-8 space-y-2 text-lg text-muted-foreground font-body">
          <p>Neúčtujeme hodinovku.</p>
          <p>Neúčtujeme „správu".</p>
        </div>
        <p className="mt-6 text-xl font-bold text-foreground font-display">
          Jsme placeni za výsledky.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="mt-10 p-8 md:p-12 rounded-2xl border border-cta/20 bg-cta/5">
          <p className="text-2xl md:text-3xl font-extrabold font-display text-foreground">
            Pokud e-mail marketing nevydělává,{" "}
            <span className="text-cta">neplatíte nám ani korunu.</span>
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PricingSection;
