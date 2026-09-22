import { MapPin, Phone, Clock, Languages, PhoneCall, Mail, ExternalLink } from "lucide-react";
import { BookButton } from "./BookButton";
import { useFadeIn } from "@/hooks/use-fade-in";
import { BOOKITNOW_URL } from "@/lib/site-data";

export function Contact() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="kontaktai" className="py-20 sm:py-28 bg-[#F5F2EC]/60 border-t border-border">
      <div ref={fade.ref} className={`${fade.className} mx-auto max-w-7xl px-5 sm:px-8`}>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--gold)] font-medium mb-3">
            Lokacija ir kontaktai
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground mb-4">
            Laukiame Jūsų „Ursana“ studijoje
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Patogi lokacija Vilniaus centre, šalia Seimo rūmų ir Baltojo tilto.
            Privati ir rami erdvė Jūsų grožio procedūroms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Details Card */}
          <div className="bg-card rounded-xl p-8 sm:p-10 border border-border flex flex-col justify-between shadow-[0_20px_50px_-20px_rgba(34,28,26,0.08)]">
            <div className="space-y-6">
              <div className="flex gap-4 items-start pb-5 border-b border-border/60">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0 text-[var(--gold)]">
                  <MapPin size={17} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-1">
                    Adresas
                  </div>
                  <div className="text-base text-foreground font-serif">
                    A. Goštauto g. 3-2, Vilnius, LT-01105
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Naujamiestis, centras (patogus privažiavimas)
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-5 border-b border-border/60">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0 text-[var(--gold)]">
                  <Clock size={17} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-1">
                    Darbo laikas
                  </div>
                  <div className="text-sm text-foreground space-y-0.5">
                    <div>Pirmadienis - penktadienis: 09:00 - 19:00</div>
                    <div>Šeštadienis: 10:00 - 15:00</div>
                    <div className="text-muted-foreground text-xs">Sekmadienis: nedirbame</div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pb-5 border-b border-border/60">
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0 text-[var(--gold)]">
                    <Phone size={17} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-1">
                      Telefonas
                    </div>
                    <a
                      href="tel:+37065030443"
                      className="text-sm text-foreground hover:text-[var(--gold)] font-medium transition-colors"
                    >
                      +370 650 30443
                    </a>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0 text-[var(--gold)]">
                    <Mail size={17} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-1">
                      El. paštas
                    </div>
                    <a
                      href="mailto:ursanasalonas@gmail.com"
                      className="text-sm text-foreground hover:text-[var(--gold)] transition-colors break-all"
                    >
                      ursanasalonas@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0 text-[var(--gold)]">
                  <Languages size={17} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-1">
                    Aptarnavimo kalbos
                  </div>
                  <div className="text-xs sm:text-sm text-foreground">
                    Lietuvių · English · Русский · Deutsch · Polski
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row flex-wrap gap-3">
              <BookButton size="md" className="w-full sm:w-auto">
                Rezervuoti vizitą
              </BookButton>
              <a
                href={BOOKITNOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg text-xs uppercase tracking-wider font-medium border border-border hover:border-[#221C1A]/40 text-foreground hover:bg-secondary transition-all duration-300 w-full sm:w-auto"
              >
                <span>BookitNow registracija</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="tel:+37065030443"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs uppercase tracking-wider font-medium border border-[#221C1A]/20 text-foreground hover:bg-[#221C1A] hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                <PhoneCall size={13} className="text-[var(--gold)]" />
                Skambinti
              </a>
            </div>
          </div>

          {/* Right Map Card */}
          <div className="overflow-hidden rounded-xl border border-border min-h-[440px] bg-card flex flex-col shadow-[0_20px_50px_-20px_rgba(34,28,26,0.08)]">
            <div className="px-5 py-3 border-b border-border bg-[#FAF8F5] flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium text-foreground flex items-center gap-1.5">
                <MapPin size={13} className="text-[var(--gold)]" />
                A. Goštauto g. 3-2, Vilnius
              </span>
              <span>Naujamiestis</span>
            </div>
            <iframe
              title="Ursana studijos vieta žemėlapyje"
              src="https://www.google.com/maps?q=54.69094,25.27580&z=16&output=embed"
              className="w-full flex-1 min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
