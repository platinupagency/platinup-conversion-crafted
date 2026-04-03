import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const TeamSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Zároveň nejsme žádná obří agentura.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="mt-6 text-lg text-muted-foreground font-body">
          Jsme malý, přátelský tým lidí, kterým záleží na výsledcích.
        </p>
        <div className="mt-8 space-y-3 text-lg text-muted-foreground font-body">
          <p>Nebereme desítky klientů najednou.</p>
          <p>Nejedete u nás v systému jako číslo.</p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="mt-8 text-lg text-foreground font-semibold font-body">
          Každý projekt řešíme individuálně, do detailu a dlouhodobě.
        </p>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Chceme, aby pro vás e-mail marketing fungoval stejně, jako byste měli vlastní in-house tým. Jen bez nákladů a bez zdlouhavého budování.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <div className="mt-10">
          <Button variant="cta" size="lg" className="text-base px-8 py-5">
            Zjistit, jestli se hodíme
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default TeamSection;
