import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { openCalendly } from "@/lib/calendly";

const SolutionSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-2xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Nejsme klasická agentura.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground font-body">
          Děláme jednu věc — e-mail marketing. A máme ji do detailu promakanou. Nevytváříme náhodné kampaně. Stavíme systém, který dlouhodobě generuje tržby.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Navrhujeme strategii na míru vašemu e-shopu, nastavujeme pokročilé automatizace, segmentujeme databázi podle chování zákazníků, tvoříme kampaně s jasným cílem a optimalizujeme na základě dat.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Neřešíme PPC. Neřešíme social. Neřešíme branding.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body">
          Díky tomu jdeme do hloubky, kde většina agentur končí.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
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
