import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";

const HowItWorksSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Jak spolupráce probíhá
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Začínáme <span className="font-medium text-foreground">detailní analýzou</span> vašeho současného stavu. Identifikujeme <span className="font-medium text-foreground">nevyužitý potenciál</span> a navrhneme <span className="font-medium text-foreground">konkrétní strategii</span>.
        </p>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Následně nastavíme <span className="font-medium text-foreground">automatizace a klíčové flows</span>, vytvoříme <span className="font-medium text-foreground">segmentační strukturu</span>, spustíme <span className="font-medium text-foreground">výkonnostní kampaně</span> a průběžně <span className="font-medium text-foreground">optimalizujeme podle dat</span>.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Vy se soustředíte na produkt a růst firmy. My se staráme o to, aby e-mail marketing <span className="font-medium text-foreground">systematicky zvyšoval hodnotu každého zákazníka</span>.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body">
          Vy se soustředíte na byznys. <span className="text-gold">My na výkon.</span>
        </p>
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
