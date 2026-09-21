import { useFadeIn } from "@/hooks/use-fade-in";

export function Services() {
  const fade = useFadeIn<HTMLDivElement>();

  const iframeSrc =
    "https://book.treatwell.lt/salonas/grozio-studija-ursana/?utm_source=widget&utm_medium=partners&utm_campaign=website_embed";

  return (
    <section id="paslaugos" className="py-20 sm:py-28 bg-blush-soft overflow-x-hidden">
      <div ref={fade.ref} className={fade.className}>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-3">Paslaugos ir registracija</p>
            <h2 className="font-serif text-3xl sm:text-5xl mb-3">Registracija internetu</h2>
            <p className="text-sm text-muted-foreground">Pasirinkite norimą paslaugą ir patogų vizito laiką tiesiogiai sistemoje</p>
          </div>
        </div>

        <div className="mx-auto w-full sm:max-w-6xl px-4 sm:px-8">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              src={iframeSrc}
              title="Rezervacija per Treatwell"
              style={{ border: 0, width: "100%", height: "900px", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
