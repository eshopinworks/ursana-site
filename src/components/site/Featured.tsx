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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="group bg-card rounded-2xl p-7 shadow-[0_4px_30px_-12px_rgba(43,43,43,0.12)] hover:shadow-[0_20px_50px_-20px_rgba(194,168,120,0.4)] hover:-translate-y-1 transition-all duration-500 border border-border/50 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center mb-6 group-hover:bg-[var(--gold)]/30 transition-colors">
                <c.icon size={22} className="text-[var(--gold)]" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-7 flex-1">{c.text}</p>
              {c.externalUrl ? (
                <a
                  href={c.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium tracking-wide border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300 self-start"
                >
                  {c.buttonText}
                  <ExternalLink size={13} />
                </a>
              ) : (
                <BookButton variant="outline" className="self-start">Rezervuoti vizitą</BookButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
