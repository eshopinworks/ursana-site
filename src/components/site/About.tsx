import { FALLBACK_IMAGES } from "@/lib/site-data";
import { useFadeIn } from "@/hooks/use-fade-in";
import studioInteriorPlants from "@/assets/studio-interior-plants.jpg";

export function About() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section id="apie" className="py-20 sm:py-28 overflow-hidden">
      <div ref={fade.ref} className={`${fade.className} mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center`}>
        <div className="order-2 md:order-1">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Apie mus</p>
          <h2 className="font-serif text-3xl sm:text-5xl mb-6 leading-tight">
            Profesionali priežiūra ir dėmesys kiekvienai klientei
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-5">
            Ursana - grožio ir estetinės priežiūros studija Vilniaus centre, Naujamiestyje. Čia
            profesionali įranga, ilgametė specialistės patirtis ir individualus dėmesys derinami
            tam, kad kiekviena procedūra būtų atliekama kruopščiai, saugiai ir jaukiai.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-5">
            Klientus aptarnaujame lietuvių, rusų, anglų, vokiečių ir lenkų kalbomis. Studiją jau
            įvertino daugiau nei 280 klientų - vidutinis įvertinimas siekia{" "}
            <span className="text-[var(--gold)] font-medium">4,9 iš 5</span>.
          </p>
          <div className="flex gap-8 pt-4 border-t border-border/60">
            <div>
              <div className="font-serif text-3xl text-[var(--gold)]">280+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Klientų</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[var(--gold)]">4,9★</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Įvertinimas</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[var(--gold)]">5</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Kalbos</div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-3 sm:-inset-4 border border-[var(--gold)]/40 rounded-2xl pointer-events-none" />
          <img
            src={studioInteriorPlants}
            onError={(e) => ((e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGES[2])}
            alt="Ursana jauki studijos erdvė Vilniuje"
            className="relative w-full aspect-[4/5] object-cover rounded-xl border border-border"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
