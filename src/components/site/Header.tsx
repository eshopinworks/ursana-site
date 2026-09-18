import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BookButton } from "./BookButton";
import { cn } from "@/lib/utils";

const PHONE = "+37065030443";
const PHONE_DISPLAY = "+370 650 30443";

const NAV = [
  { href: "#paslaugos", label: "Paslaugos" },
  { href: "#apie", label: "Apie" },
  { href: "https://plaukeliusalinimas.lt/", label: "Elektroepiliacija", external: true },
  { href: "#galerija", label: "Galerija" },
  { href: "#atsiliepimai", label: "Atsiliepimai" },
  { href: "#kontaktai", label: "Kontaktai" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-background/95 backdrop-blur-xl border-b",
        scrolled
          ? "border-border shadow-sm py-3"
          : "border-border/50 py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-foreground">
          URSANA
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              target={n.external ? "_blank" : undefined}
              rel={n.external ? "noopener noreferrer" : undefined}
              className={cn(
                "text-sm transition-colors",
                n.external
                  ? "text-[var(--gold)] font-medium hover:underline flex items-center gap-1"
                  : "text-foreground/80 hover:text-[var(--gold)]",
              )}
            >
              {n.label}
              {n.external && <span className="text-[10px] tracking-normal uppercase bg-[var(--gold)]/10 px-1.5 py-0.5 rounded text-[var(--gold)]">išorinis</span>}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-[var(--gold)]/50 text-foreground hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] transition-colors"
          >
            <Phone size={14} className="text-[var(--gold)]" />
            Skambinti
          </a>
          <BookButton>Rezervuoti vizitą</BookButton>
        </div>
        <button
          aria-label="Meniu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden bg-background/98 backdrop-blur-xl transition-[max-height,opacity,border-color] duration-500 ease-out",
          open
            ? "max-h-[480px] opacity-100 border-t border-border"
            : "max-h-0 opacity-0 border-t border-transparent",
        )}
      >
        <div className="px-5 py-6 flex flex-col gap-1">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              target={n.external ? "_blank" : undefined}
              rel={n.external ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              className={cn(
                "block py-3 text-base text-foreground/85 hover:text-[var(--gold)] border-b border-border/40 transition-all duration-500",
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3",
                n.external && "text-[var(--gold)] font-medium",
              )}
            >
              {n.label} {n.external && "↗"}
            </a>
          ))}
          <div
            style={{ transitionDelay: open ? `${80 + NAV.length * 60}ms` : "0ms" }}
            className={cn(
              "mt-5 transition-all duration-500",
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
            )}
          >
            <BookButton className="w-full">Rezervuoti vizitą</BookButton>
            <a
              href={`tel:${PHONE}`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium border border-[var(--gold)]/50 text-foreground hover:bg-[var(--gold)]/10"
            >
              <Phone size={14} className="text-[var(--gold)]" />
              Skambinti {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
