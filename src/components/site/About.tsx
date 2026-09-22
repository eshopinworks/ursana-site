import { FALLBACK_IMAGES } from "@/lib/site-data";
import { useFadeIn } from "@/hooks/use-fade-in";
import studioInteriorPlants from "@/assets/studio-interior-plants.jpg";

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
            Meistrė ir studija
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl mb-6 text-foreground leading-[1.12]">
            Asmeninis dėmesys, švara ir pažangios technologijos
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-5 text-sm sm:text-base">
            „Ursana“ - tai privati estetinės priežiūros studija Vilniaus centre, Naujamiestyje.
            Čia nėra skubėjimo ar konvejerio principo: kiekvienas vizitas suplanuotas taip, kad
            meistrė Svetlana Stepanova visą savo dėmesį skirtų išskirtinai Jūsų odos poreikiams.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-8 text-sm sm:text-base">
            Procedūroms naudojama tik sertifikuota, pasaulyje pripažinta įranga (įskaitant Kanados
            gamintojo DECTRO elektroepiliacijos technologiją) bei aukštos kokybės profesionali
            kosmetika. Tai vieta, kurioje komfortas dera su ilgalaikiu rezultatu.
          </p>

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
              src={studioInteriorPlants}
              onError={(e) => ((e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGES[2])}
              alt="Ursana jauki studijos erdvė Vilniuje"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5 text-white">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E0C9A0] font-medium block mb-0.5">
                Privati erdvė Naujamiestyje
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
