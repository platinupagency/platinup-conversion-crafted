import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import GradientMesh from "@/components/backgrounds/GradientMesh";

const PricingSection = () => (
  <section className="relative py-20 md:py-28 px-6 bg-background-alt overflow-hidden">
    <GradientMesh variant="pricing" />
    <div className="relative z-10 max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Model postavený na výkonu.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="mt-8 space-y-2 text-lg text-muted-foreground font-body">
          <p>Žádná hodinovka.</p>
          <p>Žádná měsíční „správa".</p>
        </div>
        <p className="mt-6 text-xl font-bold text-foreground font-display">
          Když nám to nefunguje, neplatíte.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="mt-10 p-8 md:p-12 rounded-2xl border border-foreground/10 bg-foreground/[0.03]">
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground leading-tight">
            Pokud e-mail marketing nevydělává,{" "}
            <span className="text-brand">neplatíte nám ani korunu.</span>
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
