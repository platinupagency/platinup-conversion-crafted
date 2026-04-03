import AnimatedSection from "@/components/AnimatedSection";

const InsightSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-2xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Je to systém.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground font-body">
          E-mail marketing není o tom, že „něco posíláte". Je to systém, který musí pracovat s daty, chováním zákazníků a správným načasováním. Bez toho zůstáváte na povrchu.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Většina e-shopů dělá stejné chyby — posílá stejné kampaně všem, nepracuje se segmentací, nemá jasnou strategii a neoptimalizuje na základě dat.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body">
          Výsledek? E-mail marketing sice funguje, ale nevydělává maximum.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Rozdíl mezi průměrným a výkonným e-mail marketingem je zásadní. Ne v designu. Ne v tom, kolik e-mailů pošlete.
        </p>
        <p className="mt-4 text-lg font-semibold text-gold font-display">
          Ale v systému za tím.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Právě tenhle rozdíl rozhoduje, jestli e-mailing jen „doplní" vaše tržby, nebo se stane jedním z vašich hlavních prodejních kanálů.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body">
          A přesně tohle je důvod, proč většina e-shopů nechává v e-mailingu peníze ležet na stole.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default InsightSection;
