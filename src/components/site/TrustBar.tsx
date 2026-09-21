import { Star, MessageCircle, Languages, MapPin } from "lucide-react";

const ITEMS = [
  { icon: Star, label: "4,9 ★ įvertinimas" },
  { icon: MessageCircle, label: "289 atsiliepimai" },
  { icon: Languages, label: "5 kalbos: LT, RU, EN, DE, PL" },
  { icon: MapPin, label: "Goštauto g. 3-2, Vilnius" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {ITEMS.map((it) => (
          <div key={it.label} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/85 font-medium">
            <it.icon size={17} className="text-[var(--gold)] shrink-0" />
            <span className="truncate sm:text-clip">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
