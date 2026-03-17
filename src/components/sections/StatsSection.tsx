import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { value: "5–25×", label: "dražší je získání nového zákazníka než udržení stávajícího" },
  { value: "42 : 1", label: "průměrná návratnost e-mail marketingu" },
  { value: "81 %", label: "zákazníků je ochotnějších nakoupit znovu na základě e-mailu" },
];

const StatsSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-center text-lg text-muted-foreground font-body max-w-2xl mx-auto">
          Jinými slovy — <span className="font-semibold text-foreground">peníze už máte ve své databázi.</span>{" "}
          Jen z ní netěžíte maximum.
        </p>
      </AnimatedSection>
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-extrabold font-display text-foreground">
                {s.value}
                <span className="inline-block w-2 h-2 rounded-full bg-gold ml-1 -translate-y-4" />
              </p>
              <p className="mt-4 text-muted-foreground font-body">{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <div className="gold-divider mt-20 max-w-xs mx-auto" />
    </div>
  </section>
);

export default StatsSection;
