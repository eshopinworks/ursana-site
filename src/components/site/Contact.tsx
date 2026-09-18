import { MapPin, Phone, Clock, Languages, PhoneCall, Mail } from "lucide-react";
import { BookButton } from "./BookButton";
import { useFadeIn } from "@/hooks/use-fade-in";

export function Contact() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="kontaktai" className="py-20 sm:py-28 bg-blush-soft">
      <div ref={fade.ref} className={`${fade.className} mx-auto max-w-7xl px-5 sm:px-8`}>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Kontaktai</p>
          <h2 className="font-serif text-3xl sm:text-5xl">Laukiame jūsų Ursana studijoje</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="bg-card rounded-2xl p-8 sm:p-10 border border-border/50 shadow-[0_8px_40px_-20px_rgba(43,43,43,0.15)] flex flex-col">
            <ul className="space-y-7 flex-1">
              <li className="flex gap-4">
                <MapPin size={20} className="text-[var(--gold)] mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Adresas</div>
                  <div className="text-foreground">Goštauto g. 3-2, Vilnius, 01105</div>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-[var(--gold)] mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Telefonas</div>
                  <a href="tel:+37065030443" className="text-foreground hover:text-[var(--gold)]">
                    +370 650 30443
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock size={20} className="text-[var(--gold)] mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Darbo laikas</div>
                  <div className="text-foreground space-y-0.5 text-sm">
                    <div>Pirmadienis-penktadienis: 09:00-19:00</div>
                    <div>Šeštadienis: 10:00-15:00</div>
                    <div className="text-muted-foreground">Sekmadienis: nedirbame</div>
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-[var(--gold)] mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">El. paštas</div>
                  <a href="mailto:ursanasalonas@gmail.com" className="text-foreground hover:text-[var(--gold)]">
                    ursanasalonas@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Languages size={20} className="text-[var(--gold)] mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Kalbos</div>
                  <div className="text-foreground">Lietuvių · Русский · English · Deutsch · Polski</div>
                </div>
              </li>
            </ul>
            <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-3">
              <BookButton size="lg" className="w-full sm:w-auto">Rezervuoti vizitą</BookButton>
              <a
                href="tel:+37065030443"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium border border-[var(--gold)]/60 text-foreground hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] transition-colors"
              >
                <PhoneCall size={16} className="text-[var(--gold)]" />
                Skambinti
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_-20px_rgba(43,43,43,0.2)] border border-border/50 min-h-[420px]">
            <iframe
              title="Ursana studijos vieta žemėlapyje"
              src="https://www.google.com/maps?q=54.69094,25.27580&z=16&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
