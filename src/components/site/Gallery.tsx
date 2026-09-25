import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import salonasPagrindine from "@/assets/salonas-pagrindine.jpg";
import veidoMasazas from "@/assets/veido-masazas.jpg";
import lazerineDepiliacija from "@/assets/lazerine-depiliacija.jpg";
import salonasErdve from "@/assets/salonas-erdve.jpg";
import salonasKoridorius from "@/assets/salonas-koridorius.jpg";
import facialTreatment from "@/assets/facial-treatment.jpg";
import { ELEKTROEPILIACIJA_URL } from "@/lib/site-data";

const ITEMS = [
  { src: salonasPagrindine, title: "Visa salono erdvė", tag: "Studija" },
  { src: veidoMasazas, title: "Kobido ir veido masažai", tag: "Masažai" },
  { src: lazerineDepiliacija, title: "Lazerinė depiliacija", tag: "Procedūros" },
  { src: salonasErdve, title: "Jauki poilsio erdvė", tag: "Studija" },
  { src: salonasKoridorius, title: "Studijos interjeras", tag: "Studija" },
  { src: facialTreatment, title: "Veido odos priežiūra", tag: "Procedūros" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const fade = useFadeIn<HTMLDivElement>();

  return (
    <section id="galerija" className="py-20 sm:py-28 bg-background border-t border-border">
      <div ref={fade.ref} className={`${fade.className} mx-auto max-w-7xl px-5 sm:px-8`}>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--gold)] font-medium mb-3">
            Nuotraukų galerija
          </p>
          <h2 className="font-semibold text-3xl sm:text-5xl text-foreground mb-4">
            Studijos erdvė ir procedūros
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Švari, jauki ir kruopščiai įrengta erdvė Vilniaus centre, pritaikyta ramiam Jūsų poilsiui.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {ITEMS.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setActive(i)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-muted border border-border hover:border-[#221C1A]/40 transition-all duration-300 text-left"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[11px] uppercase tracking-wider text-[var(--gold)] font-medium">{item.tag}</span>
                <span className="text-white text-sm font-medium">{item.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Elektroepiliacijos procedūros atliekamos kolegės. Išsamiau:{" "}
            <a
              href={ELEKTROEPILIACIJA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-[var(--gold)] inline-flex items-center gap-1"
            >
              plaukeliusalinimas.lt
              <ExternalLink size={11} />
            </a>
          </p>
        </div>
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
            onClick={() => setActive(null)}
            aria-label="Uždaryti"
          >
            <X size={28} />
          </button>
          <div className="max-w-[95vw] max-h-[90vh] flex flex-col items-center">
            <img
              src={ITEMS[active].src}
              alt={ITEMS[active].title}
              className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg border border-white/20"
            />
            <p className="text-white/90 text-sm mt-3 font-medium tracking-wide">{ITEMS[active].title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
