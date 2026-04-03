import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const BookingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
            Rezervujte si konzultaci zdarma
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            Vyberte si termín, který vám vyhovuje.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div
            ref={containerRef}
            className="mt-10 rounded-xl overflow-hidden"
          >
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
};

export default BookingSection;
