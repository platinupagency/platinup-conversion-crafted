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
    a: `Většina agentur dělá všechno. PPC, social, weby, emailing\u2026 od každého trochu. My děláme jednu věc \u2014 e-mail marketing.

Díky tomu jdeme výrazně víc do hloubky. Neřešíme \u201Esprávu kampaní\u201C, ale budujeme systém, který generuje tržby dlouhodobě.

Nejsme dodavatel. Jsme výkonnostní partner.`,
  },
  {
    q: "My už e-mail marketing děláme. Má to pro nás smysl?",
    a: `Ano.

Typicky vidíme:
\u2013 pár základních automatizací
\u2013 hromadné kampaně bez segmentace
\u2013 minimální práci s daty

Tohle sice generuje nějaké objednávky, ale zdaleka ne maximum.

Rozdíl mezi \u201Eděláme emailing\u201C a \u201Eemailing vydělává\u201C je obrovský. A právě ten řešíme.`,
  },
  {
    q: "Jaké výsledky můžeme očekávat?",
    a: `Záleží na aktuálním stavu vašeho e-shopu.

Pokud už máte databázi a návštěvnost, téměř vždy tam leží nevyužitý potenciál \u2014 často v řádech desítek procent obratu.

Neprodáváme sliby. Budujeme systém, který dlouhodobě zvyšuje tržby z e-mailingu.

A proto jsme placeni za výsledky.`,
  },
  {
    q: "Jak funguje vaše cenotvorba?",
    a: `Neúčtujeme hodinovku ani \u201Esprávu\u201C.

Jsme placeni za výkon.

Pokud e-mail marketing nevydělává, neplatíte nám ani korunu. Naše motivace je stejná jako vaše \u2014 růst.`,
  },
  {
    q: "Není výhodnější najmout si vlastní in-house tým?",
    a: `Ve většině případů ne.

Interní tým znamená:
\u2013 nábor
\u2013 školení
\u2013 fixní náklady
\u2013 nejistý výsledek

Navíc jeden člověk málokdy pokryje strategii, copywriting, data i technickou část.`,
  },
  {
    q: "Kolik času nám to zabere?",
    a: `Minimum.

Na začátku si vyjasníme směr a získáme podklady. Potom už většinu práce řešíme my.

Vy máte přehled o výsledcích, ale nemusíte řešit operativu.`,
  },
  {
    q: "S jakými e-shopy spolupracujete?",
    a: `Se značkami, které mají:
\u2013 kvalitní produkt
\u2013 reálný byznys
\u2013 existující zákazníky a návštěvnost

Nepracujeme s dropshippingem ani projekty bez základu.

Hledáme e-shopy, které chtějí růst dlouhodobě.`,
  },
  {
    q: "Jak rychle uvidíme výsledky?",
    a: `První výsledky se obvykle začnou objevovat v řádu týdnů.

Plný potenciál se ale projeví postupně, jak se systém rozšiřuje a optimalizuje.

E-mail marketing není jednorázová kampaň. Je to dlouhodobý kanál, který roste v čase.`,
  },
  {
    q: "Co když to nebude fungovat?",
    a: "Pak neplatíte.\n\nTo je celé.",
  },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 px-6 bg-background-alt">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Časté otázky
        </h2>
        <p className="mt-2 text-lg text-muted-foreground font-body">
          Odpovědi na to, co nás klienti nejčastěji ptají.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible className="mt-10 text-left">
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
