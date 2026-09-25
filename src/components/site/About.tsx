import { FALLBACK_IMAGES } from "@/lib/site-data";
import { useFadeIn } from "@/hooks/use-fade-in";
import salonasErdve from "@/assets/salonas-erdve.jpg";
import { Phone } from "lucide-react";

export function About() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="apie" className="py-20 sm:py-28 overflow-hidden bg-background">
      <div
        ref={fade.ref}
        className={`${fade.className} mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center`}
      >
        <div className="order-2 md:order-1">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--gold)] font-medium mb-3">
            Meistrų komanda ir studija
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl mb-6 text-foreground leading-[1.12]">
            Asmeninis dėmesys, švara ir profesionali priežiūra
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-5 text-sm sm:text-base">
            „Ursana“ - tai estetinės priežiūros ir grožio studija Vilniaus centre, Naujamiestyje.
            Salone dirba kvalifikuotų meistrų komanda: veido procedūrų bei lazerinės depiliacijos specialistė,
            patyrę plaukų stilistai-kirpėjai ir kruopštūs manikiūro meistrai.
            Kiekvienas vizitas suplanuotas be skubėjimo, kad jaustumėtės komfortiškai ir ramiai.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6 text-sm sm:text-base">
            Procedūroms atlikti naudojama kokybiška, saugi lazerinė aparatūra bei aukštos kokybės profesionali
            kosmetika, užtikrinanti matomus ir ilgalaikius rezultatus.
          </p>

          <div className="p-4 sm:p-5 rounded-lg bg-[#FAF8F5] border border-border/80 mb-8 text-xs sm:text-sm text-foreground/85 leading-relaxed">
            <div className="font-serif font-semibold text-foreground text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--gold)]" />
              Registracijos tvarka
            </div>
            <div>
              Internetinė registracija (per Treatwell arba BookitNow) vyksta veido procedūroms, masažams ir lazerinei depiliacijai.
              Pas salono kirpėjus bei manikiūro meistrus registracija vykdoma tiesiogiai telefonu:{" "}
              <a href="tel:+37065030443" className="font-semibold text-foreground underline hover:text-[var(--gold)] inline-flex items-center gap-1">
                <Phone size={12} className="inline text-[var(--gold)]" />
                +370 650 30443
              </a>.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
            <div>
              <div className="font-serif text-3xl text-foreground font-medium">280+</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                Laimingų klienčių
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[var(--gold)] font-medium">4,9★</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                Treatwell reitingas
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-foreground font-medium">5</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                Kalbos (LT, EN, RU...)
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-[0_20px_50px_-20px_rgba(34,28,26,0.12)] aspect-[4/5]">
            <img
              src={salonasErdve}
              onError={(e) => ((e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGES[2])}
              alt="Ursana jauki studijos erdvė Vilniuje"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5 text-white">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E0C9A0] font-medium block mb-0.5">
                Privati studijos erdvė Naujamiestyje
              </span>
              <p className="text-xs text-white/90 font-serif">
                Goštauto g. 3-2, Vilnius · Šalia Seimo ir Baltojo tilto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
