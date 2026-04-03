import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";
import { Target, Zap, Users, BarChart3, TrendingUp } from "lucide-react";

const items = [
  { icon: Target, text: "Navrhujeme strategii na míru vašemu e-shopu." },
  { icon: Zap, text: "Budujeme pokročilé automatizace, které pracují 24/7." },
  { icon: Users, text: "Segmentujeme databázi podle reálného chování zákazníků." },
  { icon: BarChart3, text: "Tvoříme kampaně s jasným obchodním cílem." },
  { icon: TrendingUp, text: "Optimalizujeme na základě dat, ne pocitu." },
];

const SolutionSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-2xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Co děláme jinak
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-body text-center">
          Nejsme full-service agentura. Specializujeme se výhradně na e-mail marketing – a právě díky tomu jdeme do hloubky, kde většina agentur končí.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="mt-10 space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl border border-gold/10 bg-gold/[0.03]"
            >
              <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
                <item.icon className="w-4.5 h-4.5 text-gold" />
              </div>
              <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="mt-10 text-center">
          <Button variant="cta" size="lg" className="text-base px-8 py-5" onClick={openCalendly}>
            Domluvit konzultaci zdarma
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SolutionSection;
