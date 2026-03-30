import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const items = [
  "Auditujeme váš aktuální stav a identifikujeme mezery",
  "Navrhujeme strategii šitou na míru vašemu e-shopu",
  "Nastavujeme pokročilé automatizace a lifecycle flows",
  "Segmentujeme databázi podle reálného chování zákazníků",
  "Průběžně optimalizujeme na základě tvrdých dat",
];

const SolutionSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Jedna věc. Do hloubky.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Neřešíme PPC, social ani branding. Soustředíme se výhradně na e-mail marketing — a díky tomu jdeme tam, kde ostatní končí.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <div className="mt-10 space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              <p className="text-lg text-foreground font-body">{item}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.25}>
        <div className="mt-10">
          <Button variant="cta" size="lg" className="text-base px-8 py-5">
            Domluvit hovor zdarma
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SolutionSection;
