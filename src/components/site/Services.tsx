import { useFadeIn } from "@/hooks/use-fade-in";
import { ExternalLink, CheckCircle2, Shield, Bell } from "lucide-react";
import { BOOKING_URL, BOOKITNOW_URL } from "@/lib/site-data";

export function Services() {
  const fade = useFadeIn<HTMLDivElement>();

  const iframeSrc =
    "https://book.treatwell.lt/salonas/grozio-studija-ursana/?utm_source=widget&utm_medium=partners&utm_campaign=website_embed";

  return (
    <section id="paslaugos" className="py-20 sm:py-28 bg-[#F5F2EC]/60 border-y border-border">
      <div ref={fade.ref} className={fade.className}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 mb-10 text-center">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--gold)] font-medium mb-3">
            Rezervacija internetu
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground mb-4">
            Pasirinkite paslaugą ir patogų vizito laiką
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tiesioginė registracija per oficialią Treatwell sistemą.
            Matykite visas kainas, trukmę bei laisvus laikus realiu laiku.
          </p>

          {/* Reassurance Micro-Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs text-foreground/80">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-border/80">
              <CheckCircle2 size={13} className="text-[var(--gold)]" />
              <span>Momentinis patvirtinimas</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-border/80">
              <Shield size={13} className="text-[var(--gold)]" />
              <span>Nemokamas atšaukimas prieš 24 val.</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-border/80">
              <Bell size={13} className="text-[var(--gold)]" />
              <span>SMS priminimas prieš procedūrą</span>
            </div>
          </div>

          {/* Registration Distinction Notice */}
          <div className="mt-6 p-4 rounded-lg bg-white border border-border/80 text-xs text-foreground/80 max-w-2xl mx-auto text-left sm:text-center leading-relaxed">
            <span className="font-semibold text-foreground">Registracijos informacija:</span> Internetu (Treatwell sistema) patogiai registruojama veido procedūroms, masažams bei lazerinei depiliacijai. Pas salono <strong className="font-semibold text-foreground">kirpėjus bei manikiūro meistrus</strong> registracija vyksta tiesiogiai telefonu:{" "}
            <a href="tel:+37065030443" className="font-semibold text-foreground underline hover:text-[var(--gold)]">
              +370 650 30443
            </a>.
          </div>
        </div>

        <div className="mx-auto w-full sm:max-w-6xl px-4 sm:px-8">
          <div className="overflow-hidden rounded-xl border border-border bg-white shadow-[0_20px_50px_-20px_rgba(34,28,26,0.08)]">
            {/* Elegant Header Strip */}
            <div className="px-5 py-3.5 border-b border-border bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Treatwell tiesioginė rezervacijos sistema</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  <span>Atidaryti Treatwell naujame lange</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Iframe */}
            <iframe
              src={iframeSrc}
              title="Rezervacija per Treatwell"
              style={{ border: 0, width: "100%", height: "860px", display: "block" }}
            />
          </div>

          {/* Alternative Booking Fallback Note */}
          <div className="mt-6 text-center text-xs text-muted-foreground">
            Norite registruotis kitaip? Galite rezervuoti per{" "}
            <a
              href={BOOKITNOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-[var(--gold)]"
            >
              BookitNow sistemą
            </a>{" "}
            arba skambinkite tiesiogiai tel.{" "}
            <a href="tel:+37065030443" className="text-foreground font-medium hover:underline">
              +370 650 30443
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
}
