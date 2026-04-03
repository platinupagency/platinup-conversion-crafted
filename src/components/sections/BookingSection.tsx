import AnimatedSection from "@/components/AnimatedSection";

const BookingSection = () => (
  <section className="py-20 md:py-28 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
          Rezervujte si konzultaci
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-body">
          Vyberte si termín, který vám vyhovuje.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="mt-10 rounded-2xl overflow-hidden border border-border">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/toufarovat17/konzultace-e-mail-marketingu"
            style={{ minWidth: 320, height: 700 }}
          />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default BookingSection;
