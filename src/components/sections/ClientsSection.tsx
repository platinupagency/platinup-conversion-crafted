import AnimatedSection from "@/components/AnimatedSection";
import ceskeMydlo from "@/assets/clients/ceske-mydlo.png";
import lesen from "@/assets/clients/lesen.webp";
import va from "@/assets/clients/va.png";
import medovaKralovna from "@/assets/clients/medova-kralovna.png";

const clients = [
  { name: "České mýdlo", logo: ceskeMydlo },
  { name: "LESEN", logo: lesen },
  { name: "VA", logo: va },
  { name: "Medová Královna", logo: medovaKralovna },
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
            <div key={client.name} className="flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "grayscale(100%) brightness(0.35)" }}
              />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ClientsSection;
