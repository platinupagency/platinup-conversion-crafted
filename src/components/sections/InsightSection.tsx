import AnimatedSection from "@/components/AnimatedSection";

const InsightSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-lg text-muted-foreground font-body">
          E-mail marketing totiž není o tom, že „něco posíláte".
        </p>
        <p className="mt-4 text-2xl md:text-3xl font-extrabold font-display text-foreground">
          Je to systém.
        </p>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Systém, který musí pracovat s daty, chováním zákazníků a správným načasováním.
        </p>
        <p className="mt-2 text-lg text-muted-foreground font-body">
          Bez toho zůstáváte na povrchu.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-12 text-xl font-bold font-display text-foreground">
          Většina e-shopů dělá stejné chyby:
        </p>
        <ul className="mt-6 space-y-2 text-lg text-muted-foreground font-body list-disc list-inside text-left max-w-md mx-auto">
          <li>posílá stejné kampaně všem</li>
          <li>nepracuje se segmentací</li>
          <li>nemá jasnou strategii</li>
          <li>neoptimalizuje na základě dat</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-10 text-xl font-bold font-display text-foreground">
          Výsledek?
        </p>
        <p className="mt-2 text-lg text-muted-foreground font-body">
          E-mail marketing sice funguje…
          <br />
          ale nevydělává maximum.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="mt-12">
          <p className="text-lg font-semibold text-foreground font-body">
            Rozdíl mezi průměrným a výkonným e-mail marketingem je zásadní.
          </p>
          <div className="mt-4 space-y-1 text-lg text-muted-foreground font-body">
            <p>Ne v designu.</p>
            <p>Ne v tom, kolik e-mailů pošlete.</p>
          </div>
          <p className="mt-4 text-xl font-bold text-gold font-display">
            Ale v systému za tím.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="mt-12">
          <p className="text-lg text-muted-foreground font-body">
            Právě tenhle rozdíl rozhoduje, jestli:
          </p>
          <ul className="mt-4 space-y-2 text-lg text-muted-foreground font-body list-disc list-inside text-left max-w-lg mx-auto">
            <li>e-mailing jen „doplní" vaše tržby</li>
            <li>nebo se stane jedním z vašich hlavních prodejních kanálů</li>
          </ul>
          <p className="mt-8 text-lg font-semibold text-foreground font-body">
            A přesně tohle je důvod, proč většina e-shopů nechává v e-mailingu peníze ležet na stole.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default InsightSection;
