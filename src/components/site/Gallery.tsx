import { useState } from "react";
import { X } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import studioInteriorPlants from "@/assets/studio-interior-plants.jpg";
import facialMassageKobido from "@/assets/facial-massage-kobido.jpg";
import studioInteriorClean from "@/assets/studio-interior-clean.jpg";
import facialTreatment from "@/assets/facial-treatment.jpg";
import studioExterior from "@/assets/studio-exterior.jpg";
import relaxingBodyMassage from "@/assets/relaxing-body-massage.jpg";

const ITEMS = [
  { src: studioInteriorPlants, title: "Jauki studijos erdvė", tag: "Studija" },
  { src: facialMassageKobido, title: "Kobido veido masažas", tag: "Masažai" },
  { src: studioInteriorClean, title: "Meistrės darbo vietos", tag: "Studija" },
  { src: facialTreatment, title: "Veido odos priežiūra", tag: "Procedūros" },
  { src: studioExterior, title: "Studijos įėjimas Naujamiestyje", tag: "Aplinka" },
  { src: relaxingBodyMassage, title: "Atpalaiduojantis masažas", tag: "Masažai" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const fade = useFadeIn<HTMLDivElement>();

  return (
    <section id="galerija" className="py-20 sm:py-28 bg-blush-soft">
      <div ref={fade.ref} className={`${fade.className} mx-auto max-w-7xl px-5 sm:px-8`}>
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Galerija</p>
          <h2 className="font-serif text-3xl sm:text-5xl">Studijos erdvė ir procedūros</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {ITEMS.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setActive(i)}
              className="group relative overflow-hidden aspect-[4/3] bg-muted border border-border hover:border-[#221C1A]/40 transition-all duration-300 text-left"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[11px] uppercase tracking-wider text-[var(--gold)] font-medium">{item.tag}</span>
                <span className="text-white text-sm font-serif">{item.title}</span>
              </div>
            </button>
          ))}
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
              className="max-w-[95vw] max-h-[85vh] object-contain border border-white/20"
            />
            <p className="text-white/80 text-sm mt-3 font-serif tracking-wide">{ITEMS[active].title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
