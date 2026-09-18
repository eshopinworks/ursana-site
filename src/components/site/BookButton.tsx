import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  href?: string;
};

export function BookButton({ children = "Rezervuoti vizitą", variant = "primary", size = "md", className, href = "#paslaugos" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const sizes = { md: "px-6 py-2.5 text-sm", lg: "px-8 py-3.5 text-base" };
  const variants = {
    primary:
      "bg-[var(--gold)] text-white hover:bg-[oklch(0.48_0.1_75)] hover:shadow-lg hover:shadow-[var(--gold)]/30 hover:-translate-y-0.5",
    outline:
      "border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white",
    ghost:
      "border border-white/70 text-white hover:bg-white hover:text-[#2b2b2b] backdrop-blur-sm",
  };
  const isHash = href.startsWith("#");
  return (
    <a
      href={href}
      {...(!isHash && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
    </a>
  );
}
