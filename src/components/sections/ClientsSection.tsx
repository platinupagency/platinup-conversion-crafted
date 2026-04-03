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
  <section className="relative z-10 py-20 bg-background">
    <div className="text-center mb-10">
      <p className="relative z-20 text-sm font-bold uppercase tracking-widest text-gold font-display opacity-100">
        Spolupracovali jsme s
      </p>
    </div>
    <div className="overflow-hidden w-full">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...clients, ...clients, ...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center mx-8 md:mx-12 shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.size} w-auto object-contain transition-all duration-500 grayscale opacity-60 hover:grayscale-0 hover:opacity-100`}
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
      </div>
    </section>
);

export default ClientsSection;
