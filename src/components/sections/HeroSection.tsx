import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const HeroSection = () => (
  <section className="pt-32 pb-24 md:pt-44 md:pb-32 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <AnimatedSection>
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-6 font-display">
            E-mail marketing, který vydělává
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground leading-tight">
            Proměníme váš e-mail marketing v jeden z{" "}
            <span className="text-gold">nejvýdělečnějších</span> kanálů.
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg font-body">
            Pomáháme kvalitním e-shopům maximalizovat tržby z databáze pomocí výkonnostního e-mail marketingu.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <p className="mt-4 text-muted-foreground font-body">
            Bez zbytečných kampaní. Bez guessování.<br />
            Jen systém, který generuje objednávky.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Button variant="cta" size="lg" className="text-base px-8 py-6">
              Domluvit hovor zdarma
            </Button>
            <p className="text-sm text-muted-foreground">
              Pokud e-mail marketing nic nevydělá,<br />
              <span className="font-semibold text-foreground">neplatíte nám ani korunu.</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection delay={0.3} className="hidden md:flex justify-center">
        <div className="relative w-72 h-72 lg:w-96 lg:h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/10 via-cta/5 to-transparent blur-3xl" />
          <div className="absolute inset-8 rounded-3xl border border-gold/20 bg-gradient-to-br from-background to-background-alt backdrop-blur-sm" />
          <div className="absolute inset-16 rounded-2xl border border-cta/10 bg-cta/5" />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HeroSection;
