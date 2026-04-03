import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import GradientMesh from "@/components/backgrounds/GradientMesh";
import { openCalendly } from "@/lib/calendly";

const FinalCTASection = () => (
  <section className="relative py-20 md:py-28 px-6 overflow-hidden">
    <GradientMesh variant="cta" />
    <div className="relative z-10 max-w-2xl mx-auto">
      <AnimatedSection>
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-foreground text-center">
          Realita je jednoduchá.
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="mt-8 text-lg text-muted-foreground font-body">
          Můžete pokračovat tak, jak doteď. Posílat občas kampaně a přicházet o objednávky, které už mohly být vaše.
        </p>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Můžete si najmout agenturu, která vám bude reportovat „hezká čísla", ale reálně nic zásadního nezmění.
        </p>
        <p className="mt-4 text-lg font-semibold text-foreground font-body">
          Nebo můžete začít využívat e-mail marketing naplno.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="gold-divider my-12 max-w-xs mx-auto" />
        <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground text-center">
          Chcete zjistit, kolik peněz vám teď utíká?
        </h3>
        <p className="mt-4 text-lg text-muted-foreground font-body text-center">
          Domluvme si krátkou konzultaci a podíváme se na váš e-shop konkrétně.
        </p>
        <div className="mt-8 text-center">
          <Button variant="cta" size="lg" className="text-base px-10 py-6" onClick={openCalendly}>
            Domluvit konzultaci zdarma
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTASection;
