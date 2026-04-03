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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground" style={{ lineHeight: 1.18 }}>
          Proměníme váš e-mail marketing v jeden z{" "}
          <span className="text-gold">nejvýdělečnějších</span> kanálů.
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-body text-left">
          Vaše databáze má větší hodnotu, než si myslíte.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <p className="mt-4 text-muted-foreground font-body text-left max-w-2xl mx-auto text-lg">
          Pomáháme kvalitním e-shopům proměnit e-mail marketing v stabilní a dlouhodobý zdroj tržeb.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <div className="mt-8 flex flex-col items-center gap-6">
          <Button variant="cta" size="lg" className="text-base px-8 py-6 w-fit" onClick={openCalendly}>
            Domluvit konzultaci zdarma
          </Button>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-sm">
            <span className="text-lg text-muted-foreground font-body">
              Pokud e-mail marketing nic nevydělá,{" "}
              <span className="font-bold text-gold">neplatíte nám ani korunu.</span>
            </span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HeroSection;
