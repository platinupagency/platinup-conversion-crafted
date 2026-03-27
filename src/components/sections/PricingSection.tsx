import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import WaveBackground from "@/components/WaveBackground";

const PricingSection = () => (
  <section className="relative py-20 md:py-28 px-6 bg-background-alt overflow-hidden">
    <WaveBackground variant="section" />
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
      <AnimatedSection delay={0.3}>
        <div className="mt-10">
          <Button variant="cta" size="lg" className="text-base px-8 py-5">
            Začít vydělávat z e-mailů
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PricingSection;
