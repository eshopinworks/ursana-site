import { ExternalLink, ArrowRight } from "lucide-react";
import { BookButton } from "./BookButton";
import { useFadeIn } from "@/hooks/use-fade-in";
import { ELEKTROEPILIACIJA_URL } from "@/lib/site-data";
import kobidoImage from "@/assets/facial-massage-kobido.jpg";
import facialImage from "@/assets/facial-treatment.jpg";
import epilImage from "@/assets/hero-studio-cozy.jpg";
import massageImage from "@/assets/relaxing-body-massage.jpg";

const PROCEDURES = [
  {
    image: epilImage,
    tag: "01 / TIKSLINĖ METODIKA",
    title: "Elektroepiliacija (DECTRO)",
    text: "Vienintelis mediciniškai pripažintas 100% ilgalaikis plaukelių šalinimo metodas su pažangiausia Kanados gamintojo DECTRO įranga. Tinka visų tipų ir spalvų plaukeliams.",
    externalUrl: ELEKTROEPILIACIJA_URL,
    buttonText: "plaukeliusalinimas.lt",
  },
  {
    image: kobidoImage,
    tag: "02 / RANKŲ TECHNIKA",
    title: "Kobido ir veido masažai",
    text: "Japoniškas Kobido, gilus SMAS bei 3D Holivudo liftingo masažai. Natūralus veido raumenų tonizavimas, limfodrenažas ir odos stangrinimas be invazinių procedūrų.",
  },
  {
    image: facialImage,
    tag: "03 / ODOS ATNAUJINIMAS",
    title: "CO₂ karboksiterapija",
    text: "Neinvazinė odos atgaivinimo procedūra, prisotinanti audinius deguonimi, skatinanti kolageno gamybą, lyginanti odos mikroreljefą ir grąžinanti sveiką švytėjimą.",
  },
  {
    image: massageImage,
    tag: "04 / KOMFORTAS IR LYGUMAS",
    title: "Lazerinė depiliacija",
    text: "Šiuolaikiškos diodinės lazerinės technologijos komfortiškam ir saugiam plaukelių augimo stabdymui bet kurioje veido ar kūno zonoje moterims ir vyrams.",
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
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground mb-4">
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
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {p.text}
                </p>

                {p.externalUrl ? (
                  <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-border/60">
                    <a
                      href={p.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
                    >
                      <span>{p.buttonText}</span>
                      <ExternalLink size={13} />
                    </a>
                    <BookButton variant="ghost" size="sm" className="w-full text-xs">
                      Rezervuoti vizitą
                    </BookButton>
                  </div>
                ) : (
                  <div className="mt-auto pt-4 border-t border-border/60">
                    <BookButton variant="primary" size="sm" className="w-full">
                      Rezervuoti vizitą
                    </BookButton>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
