import { Star, CheckCircle, ExternalLink, Quote } from "lucide-react";
import { REVIEWS, BOOKING_URL } from "@/lib/site-data";
import { useFadeIn } from "@/hooks/use-fade-in";

export function Reviews() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="atsiliepimai" className="py-20 sm:py-28 bg-background">
      <div ref={fade.ref} className={`${fade.className} mx-auto max-w-7xl px-5 sm:px-8`}>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--gold)] font-medium mb-3">
            Atsiliepimai ir pasitikėjimas
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl mb-4 text-foreground">
            Klientų įvertinimas 4,9 iš 5 ★
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Remiantis daugiau nei 289 nepriklausomais klientų atsiliepimais oficialioje Treatwell platformoje.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 6).map((r) => (
            <figure
              key={r.name}
              className="bg-card rounded-xl border border-border p-7 sm:p-8 hover:border-[#221C1A]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_16px_36px_-12px_rgba(34,28,26,0.08)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-[var(--gold)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="fill-[var(--gold)]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 font-medium">
                    <CheckCircle size={10} />
                    Patvirtintas vizitas
                  </span>
                </div>

                <blockquote className="font-serif text-base sm:text-lg italic text-foreground/90 leading-relaxed mb-6">
                  "{r.text}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">{r.name}</span>
                <span className="text-[11px] text-muted-foreground">Treatwell atsiliepimas</span>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border hover:border-[#221C1A]/40 bg-card hover:bg-[#221C1A] text-foreground hover:text-white px-7 py-3.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 shadow-sm"
          >
            <span>Skaityti visus 289 atsiliepimus Treatwell sistemoje</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
