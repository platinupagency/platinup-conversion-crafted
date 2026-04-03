import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background text-foreground font-body">
    <Navbar />
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
          Obchodní podmínky
        </h1>

        <p className="text-sm text-muted-foreground mb-8">
          Platné od 1. 1. 2025
        </p>

        <h2>1. Úvodní ustanovení</h2>
        <p>
          Tyto obchodní podmínky (dále jen &bdquo;podmínky&ldquo;) upravují
          smluvní vztah mezi společností BullWebs s.r.o., se sídlem Za Horou
          478, 664 82 Říčany, IČO: 22531301 (dále jen
          &bdquo;poskytovatel&ldquo;), provozující značku PlatinUp, a klientem
          (dále jen &bdquo;objednatel&ldquo;), který využívá služby
          poskytovatele.
        </p>

        <h2>2. Předmět služeb</h2>
        <p>
          Poskytovatel nabízí služby v oblasti e-mail marketingu, zejména:
        </p>
        <ul>
          <li>Tvorbu e-mail marketingové strategie</li>
          <li>Nastavení a správu automatizovaných e-mailových sekvencí (flows)</li>
          <li>Segmentaci databáze kontaktů</li>
          <li>Tvorbu a rozesílku e-mailových kampaní</li>
          <li>Průběžnou optimalizaci na základě dat</li>
        </ul>

        <h2>3. Vznik smluvního vztahu</h2>
        <p>
          Smluvní vztah vzniká na základě písemné dohody (včetně elektronické
          formy) mezi poskytovatelem a objednatelem. Před zahájením spolupráce
          proběhne úvodní konzultace, na jejímž základě poskytovatel připraví
          individuální nabídku.
        </p>

        <h2>4. Cenové podmínky a platební podmínky</h2>
        <p>
          Cena za služby je stanovena individuálně na základě rozsahu spolupráce
          a je specifikována v konkrétní nabídce či smlouvě. Poskytovatel
          využívá model odměňování založený na výkonnosti – pokud e-mail
          marketing negeneruje měřitelné výsledky, objednatel neplatí.
        </p>
        <p>
          Faktury jsou splatné do 14 dnů od jejich vystavení, pokud není
          dohodnuto jinak. V případě prodlení s úhradou je poskytovatel
          oprávněn účtovat zákonný úrok z prodlení.
        </p>

        <h2>5. Práva a povinnosti poskytovatele</h2>
        <ul>
          <li>
            Poskytovat služby s odbornou péčí a v souladu s dohodnutým rozsahem.
          </li>
          <li>
            Informovat objednatele o průběhu a výsledcích spolupráce.
          </li>
          <li>
            Zachovávat mlčenlivost o důvěrných informacích objednatele.
          </li>
        </ul>

        <h2>6. Práva a povinnosti objednatele</h2>
        <ul>
          <li>
            Poskytnout poskytovateli potřebné podklady a přístupy pro výkon
            služeb.
          </li>
          <li>
            Uhradit dohodnutou cenu za služby řádně a včas.
          </li>
          <li>
            Spolupracovat při nastavování strategie a schvalování materiálů.
          </li>
        </ul>

        <h2>7. Ochrana osobních údajů</h2>
        <p>
          Poskytovatel zpracovává osobní údaje v souladu s nařízením GDPR a
          platnými právními předpisy České republiky. Osobní údaje objednatele
          a jeho zákazníků jsou zpracovávány výhradně za účelem plnění
          smluvního vztahu a nejsou předávány třetím stranám bez souhlasu
          objednatele, s výjimkou případů vyžadovaných zákonem.
        </p>

        <h2>8. Mlčenlivost</h2>
        <p>
          Obě strany se zavazují zachovávat mlčenlivost o veškerých důvěrných
          informacích získaných v průběhu spolupráce. Tato povinnost trvá i po
          ukončení smluvního vztahu.
        </p>

        <h2>9. Trvání a ukončení spolupráce</h2>
        <p>
          Smluvní vztah je uzavírán na dobu určitou nebo neurčitou dle dohody
          stran. Kterákoliv strana může spolupráci ukončit písemnou výpovědí s
          výpovědní lhůtou 30 dnů, pokud není dohodnuto jinak.
        </p>
        <p>
          Poskytovatel si vyhrazuje právo ukončit spolupráci okamžitě v případě
          závažného porušení podmínek ze strany objednatele.
        </p>

        <h2>10. Omezení odpovědnosti</h2>
        <p>
          Poskytovatel neodpovídá za výsledky, které jsou ovlivněny faktory
          mimo jeho kontrolu (např. kvalita produktu objednatele, změny na trhu,
          technické problémy na straně objednatele). Poskytovatel nenese
          odpovědnost za nepřímé škody či ušlý zisk.
        </p>

        <h2>11. Závěrečná ustanovení</h2>
        <p>
          Tyto podmínky se řídí právním řádem České republiky. Veškeré spory
          budou řešeny přednostně smírnou cestou. Poskytovatel si vyhrazuje
          právo tyto podmínky jednostranně upravit, přičemž o změnách bude
          objednatele informovat s dostatečným předstihem.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
