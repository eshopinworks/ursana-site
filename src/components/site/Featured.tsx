import { Sparkles, Waves, HandHeart, Zap, ExternalLink } from "lucide-react";
import { BookButton } from "./BookButton";
import { useFadeIn } from "@/hooks/use-fade-in";
import { ELEKTROEPILIACIJA_URL } from "@/lib/site-data";

const CARDS = [
  {
    icon: Zap,
    title: "Elektroepiliacija",
    text: "Vienintelis 100% efektyvus ilgalaikis plaukelių šalinimo metodas su profesionalia DECTRO įranga. Tinka bet kokio tipo plaukeliams. Nemokama pirminė konsultacija.",
    externalUrl: ELEKTROEPILIACIJA_URL,
    buttonText: "plaukeliusalinimas.lt",
  },
  {
    icon: HandHeart,
    title: "Kobido ir veido masažai",
    text: "Japoniškas Kobido, SMAS bei 3D Holivudo masažai - rankomis atliekamas gilus veido raumenų tonizavimas, stangrinantis kontūrus ir suteikiantis švytėjimo.",
  },
  {
    icon: Sparkles,
    title: "CO₂ karboksiterapija",
    text: "Neinvazinė veido priežiūros procedūra, skatinanti odos regeneraciją, gerinanti odos elastingumą, stangrumą ir glotnumą.",
  },
  {
    icon: Waves,
    title: "Lazerinė depiliacija",
    text: "Šiuolaikiškas diodinis lazeris komfortiškam nepageidaujamų plaukelių augimo mažinimui moterims ir vyrams.",
  },
];

export function Featured() {
  const fade = useFadeIn<HTMLDivElement>();
  return (
    <section className="py-20 sm:py-28">
      <div ref={fade.ref} className={`${fade.className} mx-auto max-w-7xl px-5 sm:px-8`}>
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Dažniausiai pasirenkamos procedūros</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-foreground">Klienčių pamėgtos paslaugos</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="group bg-card rounded-xl p-6 sm:p-7 border border-border hover:border-[#221C1A]/40 transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg border border-[var(--gold)]/40 flex items-center justify-center mb-5 group-hover:border-[var(--gold)] transition-colors">
                <c.icon size={18} className="text-[var(--gold)]" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl mb-3 text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{c.text}</p>
              {c.externalUrl ? (
                <a
                  href={c.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-medium border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300 w-full sm:w-auto mt-auto"
                >
                  <span>{c.buttonText}</span>
                  <ExternalLink size={13} className="shrink-0" />
                </a>
              ) : (
                <BookButton variant="outline" size="sm" className="w-full sm:w-auto mt-auto">
                  Rezervuoti vizitą
                </BookButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
