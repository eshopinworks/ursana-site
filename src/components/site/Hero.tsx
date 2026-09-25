import { ArrowRight, Star } from "lucide-react";
import { BookButton } from "./BookButton";
import heroImage from "@/assets/salonas-pagrindine.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-28 sm:pt-36 pb-16 sm:pb-24"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* LEFT: Editorial Typography */}
        <div className="relative">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-secondary/80 border border-border text-[11px] uppercase tracking-[0.2em] text-foreground/80 font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-none bg-[var(--gold)]" />
            Naujamiestis · A. Goštauto g. 3-2, Vilnius
          </div>

          <h1 className="font-semibold text-foreground text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-6">
            Veido estetika ir pažangios technologijos{" "}
            <span className="font-semibold text-[var(--gold)]">Vilniaus centre</span>
          </h1>

          <p className="text-base sm:text-lg text-foreground/75 max-w-xl leading-relaxed mb-8">
            Grožio studija „Ursana“ - individualiai parinktos veido procedūros,
            japoniškas Kobido masažas ir kokybiška lazerinė depiliacija.
            Rami, privati erdvė Vilniaus centre ir profesionalus dėmesys kiekvienos moters poreikiams.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <BookButton size="lg" className="group">
              Rezervuoti vizitą
              <ArrowRight
                size={15}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </BookButton>
            <a
              href="#paslaugos"
              className="inline-flex items-center justify-center px-5 py-3.5 text-xs uppercase tracking-wider font-medium text-foreground/80 hover:text-foreground border border-border hover:border-[#221C1A]/40 rounded-lg transition-colors"
            >
              Paslaugų sąrašas
            </a>
          </div>

          {/* Understated Editorial Proof Bar */}
          <div className="pt-6 border-t border-border flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-foreground">4,9</span>
              <div className="flex text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} className="fill-[var(--gold)]" />
                ))}
              </div>
              <span className="text-[11px] text-muted-foreground ml-1">/ 289 Treatwell atsiliepimai</span>
            </div>
            <span className="hidden sm:inline text-border">|</span>
            <div className="text-[11px] tracking-wide">
              <span className="font-medium text-foreground">280+</span> nuolatinių klienčių
            </div>
            <span className="hidden sm:inline text-border">|</span>
            <div className="text-[11px] tracking-wide text-foreground/80">
              Kokybiška lazerinė depiliacija
            </div>
          </div>
        </div>

        {/* RIGHT: High-end Architectural Portrait Presentation */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-[0_20px_50px_-20px_rgba(34,28,26,0.12)] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
            <img
              src={heroImage}
              alt="Ursana grožio studijos erdvė Vilniuje"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Elegant Bottom Editorial Inset Plaque */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-7 flex flex-col justify-end text-white">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#E0C9A0] font-medium mb-1">
                Ursana · Naujamiestis
              </span>
              <p className="text-lg sm:text-xl font-medium text-white/95 leading-snug">
                Privati ir jauki aplinka Jūsų odos priežiūros ritualams
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
