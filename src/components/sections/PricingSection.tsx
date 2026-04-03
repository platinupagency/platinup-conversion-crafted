import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import GradientMesh from "@/components/backgrounds/GradientMesh";
import { openCalendly } from "@/lib/calendly";

const PricingSection = () => (
  <section className="relative py-20 md:py-28 px-6 bg-background-alt overflow-hidden">
    <GradientMesh variant="pricing" />
    <div className="relative z-10 max-w-3xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          A teď to nejdůležitější.
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Fungujeme na férovém modelu, kde neúčtujeme hodinovou sazbu ani neprodáváme pouhou „správu“. Naše odměna je navázaná přímo na výsledky, které e-mail marketing přináší. Pokud nevydělává, neplatíte.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="mt-10 p-8 md:p-12 rounded-2xl border border-cta/20 bg-cta/5 text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-foreground leading-tight">
            Pokud e-mail marketing nevydělává,{" "}
            <span className="text-cta">neplatíte nám ani korunu.</span>
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="mt-10 text-center">
          <Button variant="cta" size="lg" className="text-base px-8 py-5" onClick={openCalendly}>
            Začít vydělávat z e-mailů
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PricingSection;
