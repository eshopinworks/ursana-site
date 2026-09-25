import { Star, CheckCircle2, ExternalLink } from "lucide-react";
import { REVIEWS, BOOKING_URL } from "@/lib/site-data";
import { useFadeIn } from "@/hooks/use-fade-in";

export function Reviews() {
  const fade = useFadeIn<HTMLDivElement>();

  return (
    <section id="atsiliepimai" className="py-20 sm:py-28 bg-[#FBF9F6] border-t border-border">
      <div ref={fade.ref} className={`${fade.className} mx-auto max-w-7xl px-5 sm:px-8`}>
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--gold)] font-semibold mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--gold)]" />
            Atsiliepimai ir pasitikėjimas
          </p>
          <h2 className="font-semibold text-3xl sm:text-5xl text-foreground mb-4 tracking-tight">
            Klientų pasitikėjimas, grįstas rezultatais
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Realūs atsiliepimai iš nepriklausomos Treatwell platformos po atliktų veido priežiūros, masažų ir lazerinės depiliacijos procedūrų.
          </p>
        </div>

        {/* Social Proof Stats Bar */}
        <div className="mx-auto max-w-4xl mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 sm:p-6 bg-white rounded-xl border border-border shadow-[0_10px_30px_-15px_rgba(34,28,26,0.06)]">
          <div className="flex items-center gap-3.5 sm:justify-center sm:border-r sm:border-border/80">
            <div className="text-3xl font-bold text-foreground">4,9</div>
            <div>
              <div className="flex text-[var(--gold)] mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-[var(--gold)]" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground font-medium">Treatwell įvertinimas</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 sm:justify-center sm:border-r sm:border-border/80">
            <div className="text-3xl font-bold text-foreground">289+</div>
            <div>
              <div className="text-xs font-semibold text-foreground">Patvirtinti atsiliepimai</div>
              <div className="text-xs text-muted-foreground">Oficialioje sistemoje</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 sm:justify-center">
            <div className="text-3xl font-bold text-[var(--gold)]">100%</div>
            <div>
              <div className="text-xs font-semibold text-foreground">Tikri klientų vizitai</div>
              <div className="text-xs text-muted-foreground">Patvirtinta Treatwell</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name + i}
              className="group relative bg-white rounded-xl border border-border p-6 sm:p-7 flex flex-col justify-between hover:border-[#221C1A]/40 transition-all duration-300 hover:shadow-[0_16px_36px_-12px_rgba(34,28,26,0.08)]"
            >
              <div>
                {/* Top: Stars & Service Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-[var(--gold)]">
                    {Array.from({ length: r.rating || 5 }).map((_, idx) => (
                      <Star key={idx} size={12} className="fill-[var(--gold)]" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--gold)] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[var(--gold)]/30 font-semibold">
                    {r.service}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-foreground/85 leading-relaxed mb-6 font-normal">
                  "{r.text}"
                </p>
              </div>

              {/* Bottom: Reviewer details */}
              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#221C1A] text-white flex items-center justify-center font-semibold text-xs shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-foreground">{r.name}</div>
                    <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <CheckCircle2 size={11} className="text-emerald-600" />
                      <span>Patvirtinta Treatwell</span>
                    </div>
                  </div>
                </div>
                {r.date && (
                  <span className="text-[11px] text-muted-foreground font-medium">
                    {r.date}
                  </span>
                )}
              </div>
            </figure>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-white border border-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_-15px_rgba(34,28,26,0.06)]">
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg text-foreground mb-1">
              Norite pamatyti visus 289 atsiliepimus?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Skaitykite tiesioginius klientų komentarus ir vertinimus oficialiame Treatwell puslapyje.
            </p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 shrink-0 px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider font-semibold bg-[#221C1A] text-white hover:bg-[#342C29] transition-all duration-300 shadow-sm"
          >
            <span>Treatwell atsiliepimai</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
