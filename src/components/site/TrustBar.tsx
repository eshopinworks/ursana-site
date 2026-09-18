import { Star, MessageCircle, Languages, MapPin } from "lucide-react";

const ITEMS = [
  { icon: Star, label: "4,9 ★ įvertinimas" },
  { icon: MessageCircle, label: "289 atsiliepimai" },
  { icon: Languages, label: "Aptarnaujame 5 kalbomis: LT, RU, EN, DE, PL" },
  { icon: MapPin, label: "Goštauto g. 3-2, Vilnius" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {ITEMS.map((it) => (
          <div key={it.label} className="flex items-center gap-3 text-sm text-foreground/85">
            <it.icon size={18} className="text-[var(--gold)] shrink-0" />
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
