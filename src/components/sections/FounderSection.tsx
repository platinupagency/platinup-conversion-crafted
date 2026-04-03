import AnimatedSection from "@/components/AnimatedSection";
import founderImg from "@/assets/founder.png";

const FounderSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-sm font-bold uppercase tracking-widest text-gold mb-4 font-display">
          Kdo stojí za PlatinUp
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Osobní přístup, ne korporátní mašina
        </h2>
      </AnimatedSection>

      <div className="mt-12 flex flex-col items-center gap-10">
        <AnimatedSection delay={0.1} className="flex-shrink-0">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gold/30">
            <img
              src={founderImg}
              alt="Zakladatel PlatinUp"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="text-center">
          <h3 className="text-2xl font-bold font-display text-foreground mb-1">
            Tereza Toufarová
          </h3>
          <p className="text-sm text-gold font-semibold uppercase tracking-wide font-display mb-4">
            FOUNDER
          </p>
          <div className="space-y-4 text-lg text-muted-foreground font-body max-w-2xl mx-auto text-left">
            <p>
              PlatinUp jsem založila s vizí pomáhat e-shopům dosahovat jejich maximálního potenciálu. A také ukázat, že e-mail marketing je stejně důležitý jako placená reklama.
            </p>
            <p>
              Věřím, že za každým úspěšným e-shopem stojí promyšlená komunikace se zákazníky. Proto ke každému projektu přistupujeme s důrazem na detail, data a reálné výsledky – ne prázdné sliby.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default FounderSection;
