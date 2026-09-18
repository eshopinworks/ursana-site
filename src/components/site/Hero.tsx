import { Star, ArrowRight, MapPin } from "lucide-react";
import { BookButton } from "./BookButton";
import { FALLBACK_IMAGES } from "@/lib/site-data";
import heroAsset from "@/assets/hero-studio-light.jpg.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-28 sm:pt-32 pb-16 sm:pb-24"
    >
      {/* decorative background flourishes */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-blush-soft blur-3xl opacity-70" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-[var(--gold)]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

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

        {/* RIGHT: image with offset frame + floating chips */}
        <div className="relative lg:h-[640px] h-[440px] sm:h-[520px]">
          {/* blush frame */}
          <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-3/4 h-3/4 rounded-3xl bg-blush" />
          {/* gold thin frame */}
          <div className="absolute bottom-6 -left-3 sm:-left-6 w-2/3 h-1/2 rounded-3xl border border-[var(--gold)]/60" />

          {/* main image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(43,43,43,0.4)]">
            <img
              src={heroAsset.url}
              onError={(e) =>
                ((e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGES[0])
              }
              alt="Ursana grožio studijos interjeras"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* floating review chip */}
          <div className="absolute -bottom-5 left-4 sm:left-8 bg-card rounded-2xl px-5 py-4 shadow-[0_20px_50px_-20px_rgba(43,43,43,0.35)] border border-border max-w-[260px]">
            <div className="flex items-center gap-1 mb-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className="fill-[var(--gold)] text-[var(--gold)]"
                />
              ))}
            </div>
            <p className="text-xs text-foreground/80 leading-snug italic">
              "Puikiai išmano savo darbą. Likau labai patenkinta rezultatu."
            </p>
            <p className="text-[11px] text-muted-foreground mt-1.5">- Daiva</p>
          </div>

          {/* floating location pill */}
          <div className="hidden sm:flex absolute top-6 -left-4 lg:-left-6 items-center gap-2 bg-background/95 backdrop-blur-md rounded-full pl-3 pr-4 py-2 shadow-lg border border-border">
            <MapPin size={14} className="text-[var(--gold)]" />
            <span className="text-xs text-foreground/85 font-medium">Goštauto g. 3-2</span>
          </div>
        </div>
      </div>
    </section>
  );
}
