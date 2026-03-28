import AnimatedSection from "@/components/AnimatedSection";
import ceskeMydlo from "@/assets/clients/ceske-mydlo.png";
import lesen from "@/assets/clients/lesen.webp";
import va from "@/assets/clients/va.png";
import medovaKralovna from "@/assets/clients/medova-kralovna.png";
import tereweb from "@/assets/logo_tereweb.png";

const clients = [
  { name: "České mýdlo", logo: ceskeMydlo, size: "h-14 md:h-20" },
  { name: "LESEN", logo: lesen, size: "h-8 md:h-10" },
  { name: "VA", logo: va, size: "h-10 md:h-14" },
  { name: "Medová Královna", logo: medovaKralovna, size: "h-12 md:h-16" },
  { name: "Tereweb", logo: tereweb, size: "h-12 md:h-16" },
];

const ClientsSection = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-5xl mx-auto px-6 text-center">
      <AnimatedSection>
        <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-10 font-body">
          Spolupracovali jsme s
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.size} w-auto object-contain transition-all duration-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100`}
                style={{ filter: "brightness(0.35)", transition: "filter 0.5s, opacity 0.5s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "brightness(1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "brightness(0.35)";
                }}
              />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ClientsSection;
