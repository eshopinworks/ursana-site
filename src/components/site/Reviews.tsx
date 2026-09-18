import { Star } from "lucide-react";
import { REVIEWS, BOOKING_URL } from "@/lib/site-data";
import { useFadeIn } from "@/hooks/use-fade-in";

function Stars({ size = 13 }: { size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

export function Reviews() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="atsiliepimai" className="py-20 sm:py-28">
      <div ref={fade.ref} className={`${fade.className} mx-auto max-w-6xl px-5 sm:px-8`}>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">Atsiliepimai</p>
          <h2 className="font-serif text-3xl sm:text-5xl mb-3">4,9 ★</h2>
          <p className="text-muted-foreground">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline hover:text-gold transition-colors"
            >
              Remiantis 289 klientų atsiliepimais
            </a>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="relative bg-surface rounded-xl p-7 overflow-hidden hover:shadow-[0_12px_32px_-12px_rgba(43,43,43,0.12)] hover:-translate-y-0.5 transition-all duration-500 group"
            >
              {/* Left gold accent */}
              <div className="absolute left-0 top-7 bottom-7 w-[3px] bg-gold/70 rounded-r-full group-hover:bg-gold transition-colors duration-500" />

              {/* Decorative quote mark */}
              <span className="absolute top-3 right-5 font-serif text-5xl text-gold/10 leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              <div className="pl-5 relative">
                {/* Avatar + name */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-background border border-border/60 flex items-center justify-center font-serif text-sm font-medium text-gold shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-serif text-[15px] text-foreground leading-tight">
                      {r.name}
                    </div>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-muted-foreground tracking-wider uppercase mt-0.5 hover:text-gold transition-colors"
                    >
                      Patvirtintas atsiliepimas
                    </a>
                  </div>
                </div>

                {/* Stars */}
                <div className="mt-3">
                  <Stars />
                </div>

                {/* Quote */}
                <blockquote className="mt-3 text-sm leading-[1.7] text-foreground/80">
                  {r.text}
                </blockquote>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-gold text-gold hover:bg-gold hover:text-[#1a1a1a] px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
          >
            Skaityti visus atsiliepimus
          </a>
        </div>
      </div>
    </section>
  );
}
