import AnimatedSection from "@/components/AnimatedSection";

const DifferentiationSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Neděláme „správu".
        </h2>
        <p className="mt-2 text-xl font-semibold text-brand font-display">
          Budujeme prodejní systém.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="mt-8 space-y-4 text-lg text-muted-foreground font-body max-w-2xl">
          <p>
            Většina agentur vám pošle pár kampaní a reportuje open rate. My stavíme infrastrukturu, která konvertuje — automatizace, segmentace, lifecycle e-maily.
          </p>
          <p className="font-semibold text-foreground">
            Každý e-mail má jasný cíl: generovat objednávky.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default DifferentiationSection;
