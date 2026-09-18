import { Star, ArrowRight, MapPin } from "lucide-react";
import { BookButton } from "./BookButton";
import heroImage from "@/assets/hero-studio-light.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-28 sm:pt-32 pb-16 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT: text */}
        <div className="relative">
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[var(--gold)] font-medium">
              Naujamiestis · Vilnius
            </span>
          </div>

          <h1 className="font-serif text-foreground mb-7 [font-size:clamp(2.75rem,6.5vw+1rem,5.75rem)] [line-height:0.98]">
            Profesionali veido estetika
            <br />
            Vilniaus <em className="text-[var(--gold)]">centre</em>
          </h1>

          <p className="text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed mb-10">
            Ursana - grožio ir estetinės priežiūros studija Naujamiestyje, Vilniuje. Čia atliekamos
            veido procedūros, lazerinė depiliacija ir liftingo masažai, pritaikyti individualiems
            jūsų poreikiams.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-12">
            <BookButton size="lg" className="group">
              Rezervuoti vizitą
              <ArrowRight
                size={16}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </BookButton>
            <a
              href="#paslaugos"
              className="inline-flex items-center justify-center px-2 py-3.5 text-sm font-medium text-foreground/80 hover:text-[var(--gold)] transition-colors"
            >
              <span className="border-b border-foreground/30 hover:border-[var(--gold)] pb-0.5">
                Peržiūrėti paslaugas
              </span>
            </a>
          </div>

          {/* mini stats row */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 max-w-md pt-8 border-t border-border">
            <div>
              <div className="font-serif text-2xl sm:text-3xl text-foreground">
                4,9 <span className="text-[var(--gold)]">★</span>
              </div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                įvertinimas
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl text-foreground">289</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                atsiliepimai
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl text-foreground">280+</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                klientų
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: subtle rounded architectural image frame + floating info */}
        <div className="relative lg:h-[620px] h-[420px] sm:h-[500px]">
          {/* hairline offset frame */}
          <div className="absolute -inset-3 sm:-inset-4 border border-[var(--gold)]/40 rounded-2xl pointer-events-none" />

          {/* main image */}
          <div className="absolute inset-0 overflow-hidden rounded-xl border border-border bg-card">
            <img
              src={heroImage}
              alt="Ursana grožio studijos interjeras"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          {/* floating review card */}
          <div className="absolute -bottom-4 left-4 sm:left-6 bg-card rounded-lg px-5 py-4 border border-border max-w-[280px] shadow-sm">
            <div className="flex items-center gap-1 mb-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="fill-[var(--gold)] text-[var(--gold)]"
                />
              ))}
            </div>
            <p className="text-xs text-foreground/85 leading-snug">
              "Puikiai išmano savo darbą. Likau labai patenkinta rezultatu."
            </p>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-2">- Daiva</p>
          </div>

          {/* floating location badge */}
          <div className="hidden sm:flex absolute top-4 -left-3 lg:-left-5 items-center gap-2 bg-card rounded-md px-3.5 py-2 border border-border shadow-sm">
            <MapPin size={13} className="text-[var(--gold)]" />
            <span className="text-xs text-foreground/90 font-medium uppercase tracking-wider">Goštauto g. 3-2</span>
          </div>
        </div>
      </div>
    </section>
  );
}
