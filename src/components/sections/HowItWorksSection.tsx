import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";

const HowItWorksSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-2xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Jak spolupráce vypadá?
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-6 text-lg font-semibold text-foreground font-body">
          Postaráme se o celý e-mail marketing za vás.
        </p>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Od strategie, přes implementaci, až po dlouhodobou optimalizaci. Budujeme systém, který přivádí zákazníky zpět, zvyšuje frekvenci nákupů a maximalizuje hodnotu každého kontaktu.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="mt-8 flex justify-center gap-2 text-lg font-semibold font-body">
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
