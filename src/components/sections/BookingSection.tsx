import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const CALENDLY_URL = "https://calendly.com/toufarovat17/konzultace-e-mail-marketingu";

const BookingSection = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;
    if (!container) return;

    const widget = document.createElement("div");
    widget.className = "calendly-inline-widget";
    widget.setAttribute("data-url", CALENDLY_URL);
    widget.style.minWidth = "320px";
    widget.style.height = "700px";
    container.appendChild(widget);

    // Re-init Calendly since the element was added after script load
    if ((window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: widget,
      });
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
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
            ref={widgetRef}
            className="mt-10 rounded-xl overflow-hidden"
          />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BookingSection;
