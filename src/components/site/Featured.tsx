import { BookButton } from "./BookButton";
import { useFadeIn } from "@/hooks/use-fade-in";
import veidoMasazasImage from "@/assets/veido-masazas.jpg";
import lazerineImage from "@/assets/lazerine-depiliacija.jpg";
import facialImage from "@/assets/facial-treatment.jpg";
import cleanImage from "@/assets/studio-interior-clean.jpg";

const PROCEDURES = [
  {
    image: veidoMasazasImage,
    tag: "01 / RANKŲ TECHNIKA",
    title: "Kobido ir veido masažai",
    text: "Japoniškas Kobido, gilus SMAS bei 3D Holivudo liftingo masažai. Natūralus veido raumenų tonizavimas, limfodrenažas ir odos stangrinimas be invazinių procedūrų.",
  },
  {
    image: lazerineImage,
    tag: "02 / ŠIUOLAIKINĖS TECHNOLOGIJOS",
    title: "Lazerinė depiliacija",
    text: "Kokybiška, saugi ir efektyvi procedūra komfortiškam plaukelių augimo stabdymui bet kurioje veido ar kūno zonoje moterims ir vyrams.",
  },
  {
    image: facialImage,
    tag: "03 / ODOS ATNAUJINIMAS",
    title: "CO₂ karboksiterapija ir valymas",
    text: "Neinvazinė odos atgaivinimo procedūra, prisotinanti audinius deguonimi, skatinanti kolageno gamybą, lyginanti odos mikroreljefą ir grąžinanti sveiką švytėjimą.",
  },
  {
    image: cleanImage,
    tag: "04 / TIKSLINĖ PRIEŽIŪRA",
    title: "Regeneruojančios procedūros",
    text: "Rūgštiniai atkuriamieji valymai (Natinuel), stangrinamosios kolageno kaukės bei radijo bangų liftingas individualiai pagal Jūsų odos poreikius.",
  },
];

export function Featured() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div ref={fade.ref} className={`${fade.className} mx-auto max-w-7xl px-5 sm:px-8`}>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--gold)] font-medium mb-3">
            Procedūrų katalogas
          </p>
          <h2 className="font-semibold text-3xl sm:text-5xl text-foreground mb-4">
            Klienčių pamėgtos paslaugos
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Kiekviena procedūra atliekama su sertifikuota įranga arba preciziškomis rankų technikomis,
            užtikrinant maksimalų komfortą ir matomus rezultatus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCEDURES.map((p) => (
            <article
              key={p.title}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-[#221C1A]/40 transition-all duration-300 flex flex-col hover:shadow-[0_16px_36px_-12px_rgba(34,28,26,0.08)]"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/11] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] font-semibold mb-2">
                  {p.tag}
                </span>
                <h3 className="font-semibold text-xl sm:text-2xl text-foreground mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {p.text}
                </p>

                <div className="mt-auto pt-4 border-t border-border/60">
                  <BookButton variant="primary" size="sm" className="w-full">
                    Rezervuoti vizitą
                  </BookButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
