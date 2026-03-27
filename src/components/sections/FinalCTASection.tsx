import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";

const FinalCTASection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Realita je jednoduchá.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="mt-8 space-y-4 text-lg text-muted-foreground font-body max-w-2xl">
          <p>
            Můžete pokračovat tak, jak doteď. Posílat občas kampaně a přicházet o objednávky, které už mohly být vaše.
          </p>
          <p>
            Můžete si najmout agenturu, která vám bude reportovat „hezká čísla", ale reálně nic zásadního nezmění.
          </p>
          <p className="font-semibold text-foreground">
            Nebo můžete začít využívat e-mail marketing naplno.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="gold-divider my-12 max-w-xs" />
        <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">
          Chcete zjistit, kolik peněz vám teď utíká?
        </h3>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Domluvme si krátký hovor a podíváme se na váš e-shop konkrétně.
        </p>
        <CTAButton className="mt-8 text-base px-10 py-6">
          Domluvit hovor zdarma
        </CTAButton>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTASection;
