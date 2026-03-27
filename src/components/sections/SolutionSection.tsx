import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";

const items = [
  "Navrhujeme strategii na míru vašemu e-shopu",
  "Nastavujeme pokročilé automatizace (flows)",
  "Segmentujeme databázi podle chování zákazníků",
  "Tvoříme kampaně s jasným cílem",
  "Optimalizujeme na základě dat",
];

const SolutionSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Nejsme klasická agentura.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Děláme jednu věc — e-mail marketing. A máme ji do detailu promakanou.
        </p>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Nevytváříme náhodné kampaně. Stavíme systém, který dlouhodobě generuje tržby.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <div className="mt-10 space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              <p className="text-lg text-foreground font-body">{item}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.25}>
        <p className="mt-10 text-muted-foreground font-body">
          Neřešíme PPC. Neřešíme social. Neřešíme branding.
        </p>
        <p className="mt-2 font-semibold text-foreground font-body">
          Díky tomu jdeme do hloubky, kde většina agentur končí.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.35}>
        <div className="mt-10">
          <CTAButton className="text-base px-8 py-5">
            Domluvit hovor zdarma
          </CTAButton>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SolutionSection;
