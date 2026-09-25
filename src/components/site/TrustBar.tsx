import { Star, Sparkles, Languages, MapPin } from "lucide-react";

const PILLARS = [
  {
    icon: Star,
    label: "4,9 ★ Įvertinimas",
    desc: "289 atsiliepimai Treatwell",
  },
  {
    icon: Sparkles,
    label: "Lazerinė depiliacija",
    desc: "Kokybiškos ir saugios procedūros",
  },
  {
    icon: Languages,
    label: "5 Kalbos",
    desc: "LT, RU, EN, DE, PL",
  },
  {
    icon: MapPin,
    label: "Goštauto g. 3-2",
    desc: "Naujamiestis, Vilnius",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-[#F5F2EC]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-7 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {PILLARS.map((p, idx) => (
          <div
            key={p.label}
            className={`flex items-start gap-3.5 ${
              idx !== 0 ? "lg:border-l lg:border-border/80 lg:pl-8" : ""
            }`}
          >
            <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center shrink-0 mt-0.5 text-[var(--gold)]">
              <p.icon size={15} />
            </div>
            <div>
              <div className="text-sm sm:text-base font-semibold text-foreground tracking-tight">
                {p.label}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {p.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
