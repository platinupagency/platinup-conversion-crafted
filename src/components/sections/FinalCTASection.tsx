import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import GradientMesh from "@/components/backgrounds/GradientMesh";

const FinalCTASection = () => (
  <section className="relative py-20 md:py-28 px-6 overflow-hidden">
    <GradientMesh variant="cta" />
    <div className="relative z-10 max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Každý den bez systému = ztracené objednávky.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="mt-8 space-y-4 text-lg text-muted-foreground font-body max-w-2xl">
          <p>
            Můžete pokračovat s občasnými kampaněmi a doufat, že to stačí.
          </p>
          <p className="font-semibold text-foreground">
            Nebo můžete začít využívat e-mail marketing tak, aby skutečně vydělával.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="brand-divider my-12 max-w-xs" />
        <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">
          Chcete zjistit, kolik vám uniká?
        </h3>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Domluvme si krátký hovor a podíváme se na váš e-shop konkrétně.
        </p>
        <Button variant="cta" size="lg" className="mt-8 text-base px-10 py-6">
          Domluvit hovor zdarma
        </Button>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTASection;
