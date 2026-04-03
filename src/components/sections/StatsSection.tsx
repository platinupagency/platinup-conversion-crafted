import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import GradientMesh from "@/components/backgrounds/GradientMesh";

const stats = [
  { value: "5–25×", text: "dražší je získání nového zákazníka než udržení stávajícího.", source: "Harvard Business School" },
  { value: "42 : 1", text: "průměrná návratnost e-mail marketingu — za každých 100 Kč investovaných se vrátí přibližně 4 200 Kč.", source: "DMA" },
  { value: "81 %", text: "zákazníků pravděpodobněji nakoupí znovu na základě personalizovaných e-mailů.", source: "eMarketer" },
  { value: "4,29 %", text: "průměrný konverzní poměr e-mail marketingu — více než většina ostatních kanálů.", source: "Monetate" },
  { value: "49 %", text: "lidí chce dostávat marketingové e-maily od svých oblíbených značek každý týden.", source: "Statista" },
  { value: "59 %", text: "zákazníků říká, že e-maily ovlivňují jejich nákupní rozhodování.", source: "SaleCycle" },
];

const StatsSection = () => (
  <section className="relative py-20 md:py-28 px-6 overflow-hidden">
    <GradientMesh variant="stats" />
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-xl md:text-2xl font-display font-bold text-foreground italic">
          „E-mail marketing už dnes nemá smysl."
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="mt-10">
          <p className="text-lg text-muted-foreground font-body">To si myslí spousta lidí.</p>
          <p className="text-xl font-bold text-foreground font-display mt-1">
            Realita je ale jiná.
          </p>
          <p className="mt-6 text-lg text-muted-foreground font-body">
            A tady jsou data, která byste měli znát:
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {stats.map((s, i) => (
          <AnimatedSection key={i} delay={0.15 + i * 0.1}>
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 h-full text-left">
              <p className="text-3xl md:text-4xl font-extrabold font-display text-gold">
                {s.value}
              </p>
              <p className="mt-3 text-muted-foreground font-body">{s.text}</p>
              <p className="mt-2 text-xs text-muted-foreground/60 font-body">
                zdroj: {s.source}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.8}>
        <div className="mt-14">
          <p className="text-lg text-muted-foreground font-body">
            Jinými slovy — <span className="font-semibold text-foreground">peníze už máte ve své databázi.</span>
          </p>
          <p className="text-lg text-muted-foreground font-body mt-1">
            Jen z ní netěžíte maximum.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.9}>
        <div className="mt-14 flex items-center gap-6">
          <div className="gold-divider flex-1" />
          <Button variant="cta" size="lg" className="text-base px-8 py-5 shrink-0">
            Chci vytěžit maximum
          </Button>
          <div className="gold-divider flex-1" />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default StatsSection;
