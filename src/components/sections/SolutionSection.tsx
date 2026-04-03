import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";

const SolutionSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-2xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Co děláme jinak
        </h2>
        <p className="mt-6 text-lg text-muted-foreground font-body text-center">
          Nejsme full-service agentura.
        </p>
        <p className="mt-4 text-lg text-muted-foreground font-body text-center">
          Specializujeme se výhradně na e-mail marketing — a právě díky tomu jdeme do hloubky, kde většina agentur končí.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ul className="mt-8 space-y-3 text-lg text-muted-foreground font-body">
          <li>Navrhujeme strategii na míru vašemu e-shopu.</li>
          <li>Budujeme pokročilé automatizace, které pracují 24/7.</li>
          <li>Segmentujeme databázi podle reálného chování zákazníků.</li>
          <li>Tvoříme kampaně s jasným obchodním cílem.</li>
          <li>Optimalizujeme na základě dat, ne pocitu.</li>
        </ul>
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
