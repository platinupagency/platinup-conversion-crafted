import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "V čem jste jiní než ostatní agentury?",
    a: "Většina agentur dělá všechno. PPC, social, weby, emailing… od každého trochu. My děláme jednu věc — e-mail marketing.\n\nDíky tomu jdeme výrazně víc do hloubky. Neřešíme „správu kampaní", ale budujeme systém, který generuje tržby dlouhodobě.\n\nNejsme dodavatel. Jsme výkonnostní partner.",
  },
  {
    q: "My už e-mail marketing děláme. Má to pro nás smysl?",
    a: "Ve většině případů ano.\n\nTypicky vidíme:\n– pár základních automatizací\n– hromadné kampaně bez segmentace\n– minimální práci s daty\n\nTohle sice generuje nějaké objednávky, ale zdaleka ne maximum.\n\nRozdíl mezi „děláme emailing" a „emailing vydělává" je obrovský. A právě ten řešíme.",
  },
  {
    q: "Jaké výsledky můžeme očekávat?",
    a: "Záleží na aktuálním stavu vašeho e-shopu.\n\nPokud už máte databázi a návštěvnost, téměř vždy tam leží nevyužitý potenciál — často v řádech desítek procent obratu.\n\nNeprodáváme sliby. Budujeme systém, který dlouhodobě zvyšuje tržby z e-mailingu.\n\nA proto jsme placeni za výsledky.",
  },
  {
    q: "Jak funguje vaše cenotvorba?",
    a: "Neúčtujeme hodinovku ani „správu".\n\nJsme placeni za výkon.\n\nPokud e-mail marketing nevydělává, neplatíte nám ani korunu. Naše motivace je stejná jako vaše — růst.",
  },
  {
    q: "Není výhodnější najmout si vlastní in-house tým?",
    a: "Ve většině případů ne.\n\nInterní tým znamená:\n– nábor\n– školení\n– fixní náklady\n– nejistý výsledek\n\nNavíc jeden člověk málokdy pokryje strategii, copywriting, data i technickou část.\n\nU nás máte sehraný tým specialistů, kteří už ví, co funguje. Bez nákladů a bez zdlouhavého testování.",
  },
  {
    q: "Kolik času nám to zabere?",
    a: "Minimum.\n\nNa začátku si vyjasníme směr a získáme podklady. Potom už většinu práce řešíme my.\n\nVy máte přehled o výsledcích, ale nemusíte řešit operativu.",
  },
  {
    q: "S jakými e-shopy spolupracujete?",
    a: "Se značkami, které mají:\n– kvalitní produkt\n– reálný byznys\n– existující zákazníky a návštěvnost\n\nNepracujeme s dropshippingem ani projekty bez základu.\n\nHledáme e-shopy, které chtějí růst dlouhodobě.",
  },
  {
    q: "Jak rychle uvidíme výsledky?",
    a: "První výsledky se obvykle začnou objevovat v řádu týdnů.\n\nPlný potenciál se ale projeví postupně, jak se systém rozšiřuje a optimalizuje.\n\nE-mail marketing není jednorázová kampaň. Je to dlouhodobý kanál, který roste v čase.",
  },
  {
    q: "Jaké nástroje používáte?",
    a: "Pracujeme s nástroji jako Ecomail, Klaviyo a dalšími.\n\nVýběr vždy přizpůsobujeme konkrétnímu e-shopu tak, aby dával smysl výkonově i ekonomicky.",
  },
  {
    q: "Co když to nebude fungovat?",
    a: "Pak neplatíte.\n\nTo je celé.",
  },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Časté otázky
        </h2>
        <p className="mt-2 text-lg text-muted-foreground font-body">
          Odpovědi na to, co nás klienti nejčastěji ptají.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold font-display text-foreground hover:text-gold transition-colors py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground font-body leading-relaxed pb-5 whitespace-pre-line">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
