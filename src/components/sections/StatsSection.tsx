import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import GradientMesh from "@/components/backgrounds/GradientMesh";

const stats = [
  { value: "5–25×", label: "dražší je získání nového zákazníka než udržení stávajícího" },
  { value: "42 : 1", label: "průměrná návratnost e-mail marketingu" },
  { value: "81 %", label: "zákazníků je ochotnějších nakoupit znovu na základě e-mailu" },
];

const StatsSection = () => (
  <section className="relative py-20 md:py-28 px-6 overflow-hidden">
    <GradientMesh />
    <div className="relative z-10 max-w-4xl mx-auto">
      <AnimatedSection>
        <p className="text-lg text-muted-foreground font-body max-w-2xl">
          Jinými slovy — <span className="font-semibold text-foreground">peníze už máte ve své databázi.</span>{" "}
          Jen z ní netěžíte maximum.
        </p>
      </AnimatedSection>
      <div className="mt-14 grid sm:grid-cols-3 gap-10">
        {stats.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold font-display text-foreground">
                {s.value}
                <span className="inline-block w-2 h-2 rounded-full bg-gold ml-1 -translate-y-3" />
              </p>
              <p className="mt-3 text-muted-foreground font-body">{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection delay={0.5}>
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
