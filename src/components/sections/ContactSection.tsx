import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", website: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      website: form.website.trim(),
      message: form.message.trim(),
    };

    if (!trimmed.name || !trimmed.email) {
      toast({ title: "Vyplňte prosím jméno a e-mail.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed.email)) {
      toast({ title: "Zadejte platný e-mail.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: { name: trimmed.name, email: trimmed.email, website: trimmed.website, message: trimmed.message },
      });

      if (error) throw error;

      setForm({ name: "", email: "", website: "", message: "" });
      toast({ title: "Odesláno!", description: "Ozveme se vám co nejdříve." });
    } catch (err) {
      console.error("Send error:", err);
      toast({ title: "Chyba při odesílání.", description: "Zkuste to prosím znovu.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground">
                Domluvte si hovor zdarma
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="mt-4 text-lg text-muted-foreground font-body">
                Vyplňte formulář a podíváme se na váš e-shop konkrétně. Bez závazků.
              </p>
              <div className="mt-8 space-y-4 text-muted-foreground font-body">
                <div className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  <p>Zanalyzujeme váš aktuální stav</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  <p>Ukážeme, kde leží nevyužitý potenciál</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  <p>Navrhneme konkrétní postup</p>
                </div>
              </div>
              <p className="mt-8 text-sm text-muted-foreground font-body">
                Pokud e-mail marketing nic nevydělá,{" "}
                <span className="font-semibold text-foreground">neplatíte nám ani korunu.</span>
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8 rounded-2xl border border-border bg-background-alt">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                  Jméno *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jan Novák"
                  maxLength={100}
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jan@eshop.cz"
                  maxLength={255}
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                  Web e-shopu
                </label>
                <Input
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  placeholder="www.vaseshop.cz"
                  maxLength={200}
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5 font-body">
                  Zpráva
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Řekněte nám víc o vašem e-shopu…"
                  maxLength={1000}
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>
              <Button variant="cta" size="lg" type="submit" className="w-full text-base py-5" disabled={loading}>
                {loading ? "Odesílám…" : "Odeslat"}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
