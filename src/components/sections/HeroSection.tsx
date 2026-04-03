import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import GradientMesh from "@/components/backgrounds/GradientMesh";
import { openCalendly } from "@/lib/calendly";

const HeroSection = () => (
  <section className="relative min-h-[100dvh] flex items-center px-6 pt-16 overflow-hidden isolate">
    <GradientMesh />
    <div className="relative z-10 max-w-4xl mx-auto w-full py-16 md:py-24 text-center">
      <AnimatedSection>
        <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-6 font-display">
          E-mail marketing, který vydělává
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground leading-tight">
          Proměníme váš e-mail marketing v jeden z{" "}
          <span className="text-gold">nejvýdělečnějších</span> kanálů.
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-body text-left">
          Pomáháme kvalitním e-shopům maximalizovat tržby z databáze pomocí výkonnostního e-mail marketingu.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <p className="mt-4 text-muted-foreground font-body text-left max-w-2xl mx-auto">
          Bez zbytečných kampaní. Bez guessování.<br />
          Jen systém, který generuje objednávky.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <div className="mt-8 flex flex-col items-center gap-6">
          <Button variant="cta" size="lg" className="text-base px-8 py-6 w-fit" onClick={openCalendly}>
            Domluvit konzultaci zdarma
          </Button>
          <p className="text-lg text-muted-foreground font-body">
            Pokud e-mail marketing nic nevydělá,{" "}
            <span className="font-bold text-foreground">neplatíte nám ani korunu.</span>
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HeroSection;
