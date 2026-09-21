import { MapPin, Phone, Clock, Languages, PhoneCall, Mail } from "lucide-react";
import { BookButton } from "./BookButton";
import { useFadeIn } from "@/hooks/use-fade-in";
import { BOOKITNOW_URL } from "@/lib/site-data";

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
          <div className="bg-card rounded-xl p-8 sm:p-10 border border-border flex flex-col">
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
            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row flex-wrap gap-3">
              <BookButton size="md" className="w-full sm:w-auto">
                Rezervuoti vizitą
              </BookButton>
              <a
                href={BOOKITNOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs uppercase tracking-wider font-medium border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                BookitNow registracija
              </a>
              <a
                href="tel:+37065030443"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs uppercase tracking-wider font-medium border border-[#221C1A]/30 text-foreground hover:bg-[#221C1A] hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                <PhoneCall size={14} className="text-[var(--gold)]" />
                Skambinti
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border min-h-[420px] bg-card">
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
