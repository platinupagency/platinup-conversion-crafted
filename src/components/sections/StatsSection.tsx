import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import GradientMesh from "@/components/backgrounds/GradientMesh";

const stats = [
  { value: "30–50 %", text: "tržeb e-shopů pochází z opakovaných nákupů — e-mail marketing je klíčový kanál pro jejich maximalizaci." },
  { value: "3–5×", text: "vyšší konverzní poměr mají personalizované e-maily oproti hromadným kampaním posílaným celé databázi." },
  { value: "120+", text: "automatizovaných scénářů jsme nasadili napříč e-shopy, se kterými spolupracujeme." },
  { value: "< 48 h", text: "— tolik trvá, než spustíme první automatizace. Žádné měsíce příprav." },
];

const StatsSection = () => (
  <section className="relative py-20 md:py-28 px-6 overflow-hidden">
    <GradientMesh variant="stats" />
    <div className="relative z-10 max-w-4xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-4 font-display">
          Proč e-mail marketing
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Vaše databáze je goldmine.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Většina e-shopů ji nevyužívá ani z poloviny.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {stats.map((s, i) => (
          <AnimatedSection key={i} delay={0.1 + i * 0.08}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 h-full">
              <p className="text-3xl md:text-4xl font-extrabold font-display text-brand">
                {s.value}
              </p>
              <p className="mt-3 text-muted-foreground font-body">{s.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <div className="mt-14">
          <p className="text-lg text-muted-foreground font-body">
            E-mail marketing není jen „posílání newsletterů".
          </p>
          <p className="text-lg font-semibold text-foreground font-body mt-2">
            Je to systém, který přeměňuje kontakty na tržby. Automaticky.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <div className="mt-12 flex items-center gap-6">
          <div className="brand-divider flex-1" />
          <Button variant="cta" size="lg" className="text-base px-8 py-5 shrink-0">
            Chci vytěžit maximum
          </Button>
          <div className="brand-divider flex-1" />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default StatsSection;
