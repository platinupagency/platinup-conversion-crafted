import AnimatedSection from "@/components/AnimatedSection";
import founderImg from "@/assets/founder.png";

const FounderSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <p className="text-sm font-bold uppercase tracking-widest text-gold mb-4 font-display">
          Kdo stojí za PlatinUp
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Osobní přístup, ne korporátní mašina
        </h2>
      </AnimatedSection>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-10 md:gap-14">
        <AnimatedSection delay={0.1} className="flex-shrink-0">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gold/30">
            <img
              src={founderImg}
              alt="Zakladatel PlatinUp"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="text-center md:text-left">
          <h3 className="text-2xl font-bold font-display text-foreground mb-1">
            Jakub
          </h3>
          <p className="text-sm text-gold font-semibold uppercase tracking-wide font-display mb-4">
            Zakladatel & Stratég
          </p>
          <div className="space-y-4 text-lg text-muted-foreground font-body">
            <p>
              E-mail marketing mě baví, protože je to jeden z mála kanálů, kde se dá přesně změřit, co funguje – a co ne. Založil jsem PlatinUp, protože jsem viděl, kolik e-shopů nechává peníze na stole jen proto, že nemají čas nebo know-how na e-mailing.
            </p>
            <p>
              Každému klientovi se věnuji osobně. Žádné šablony, žádné autopiloty – jen strategie šitá na míru a výsledky, které mluví za sebe.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default FounderSection;
