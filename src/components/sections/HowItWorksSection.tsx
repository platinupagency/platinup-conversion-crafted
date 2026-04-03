import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";

const HowItWorksSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-2xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Jak spolupráce probíhá
        </h2>
        <p className="mt-6 text-lg text-muted-foreground font-body text-center">
          Začínáme detailní analýzou vašeho současného stavu.
        </p>
        <p className="text-lg text-muted-foreground font-body text-center">
          Identifikujeme nevyužitý potenciál a navrhneme konkrétní strategii.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 text-lg font-semibold text-foreground font-body text-center">
          Následně:
        </p>
        <ul className="mt-4 space-y-3 text-lg text-muted-foreground font-body">
          <li>Nastavíme automatizace a klíčové flows.</li>
          <li>Vytvoříme segmentační strukturu.</li>
          <li>Spustíme výkonnostní kampaně.</li>
          <li>Průběžně optimalizujeme podle dat.</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-8 text-lg text-muted-foreground font-body text-center">
          Vy se soustředíte na produkt a růst firmy.
        </p>
        <p className="text-lg text-muted-foreground font-body text-center">
          My se staráme o to, aby e-mail marketing systematicky zvyšoval hodnotu každého zákazníka.
        </p>
        <div className="mt-4 flex justify-center gap-2 text-lg font-semibold font-body">
          <span className="text-foreground">Vy se soustředíte na byznys.</span>
          <span className="text-gold">My na výkon.</span>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="mt-10 text-center">
          <Button variant="cta" size="lg" className="text-base px-8 py-5" onClick={openCalendly}>
            Domluvit konzultaci zdarma
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HowItWorksSection;
