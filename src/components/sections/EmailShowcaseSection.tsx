import AnimatedSection from "@/components/AnimatedSection";
import email1 from "@/assets/emails/email-1.png";
import email2 from "@/assets/emails/email-2.png";
import email3 from "@/assets/emails/email-3.png";
import email4 from "@/assets/emails/email-4.png";
import email5 from "@/assets/emails/email-5.png";
import email6 from "@/assets/emails/email-6.png";
import email7 from "@/assets/emails/email-7.png";

const emails = [
  { id: 1, src: email1, label: "Propagační kampaň" },
  { id: 2, src: email2, label: "Produktová nabídka" },
  { id: 3, src: email3, label: "Sezónní akce" },
  { id: 4, src: email4, label: "Uvítací e-mail" },
  { id: 5, src: email5, label: "Věrnostní program" },
  { id: 6, src: email6, label: "Flash sale" },
  { id: 7, src: email7, label: "Novinky" },
];

const EmailShowcaseSection = () => (
  <section className="py-24 bg-background-alt">
    <div className="container max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 font-body">
            Naše práce
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
            E-maily, které prodávají
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
            Ukázky e-mailů, které jsme vytvořili pro naše klienty.
          </p>
        </div>
      </AnimatedSection>

      <div className="flex flex-wrap justify-center gap-8">
        {emails.map((email, i) => (
          <AnimatedSection key={email.id} delay={i * 0.15}>
            <div className="group relative w-[320px] md:w-[380px] rounded-xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-muted border-b border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-gold/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="ml-3 text-xs text-muted-foreground font-body">{email.label}</span>
              </div>
              <div className="max-h-[500px] overflow-y-auto scrollbar-thin">
                <img
                  src={email.src}
                  alt={email.label}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EmailShowcaseSection;
