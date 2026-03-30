import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const items = [
  "přivádí zákazníky zpět",
  "zvyšuje frekvenci nákupů",
  "maximalizuje hodnotu každého kontaktu",
];

const HowItWorksSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Jak spolupráce vypadá?
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="mt-6 text-lg font-semibold text-foreground font-body">
          Postaráme se o celý e-mail marketing za vás.
        </p>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Od strategie, přes implementaci, až po dlouhodobou optimalizaci.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="mt-8 text-lg text-foreground font-body">Budujeme systém, který:</p>
        <div className="mt-4 space-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              <p className="text-lg text-foreground font-body">{item}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <div className="mt-10 flex gap-8">
          <p className="text-lg font-semibold text-foreground font-body">Vy se soustředíte na byznys.</p>
          <p className="text-lg font-semibold text-brand font-body">My na výkon.</p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <div className="mt-10">
          <Button variant="cta" size="lg" className="text-base px-8 py-5">
            Domluvit hovor zdarma
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HowItWorksSection;
