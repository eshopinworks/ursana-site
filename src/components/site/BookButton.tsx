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
    "inline-flex items-center justify-center rounded-lg font-medium uppercase tracking-[0.15em] text-xs transition-all duration-300 focus:outline-none";
  const sizes = { md: "px-6 py-3.5", lg: "px-8 py-4 text-sm" };
  const variants = {
    primary:
      "bg-[#221C1A] text-white hover:bg-[var(--gold)] border border-[#221C1A] hover:border-[var(--gold)]",
    outline:
      "border border-[#221C1A]/40 text-[#221C1A] hover:bg-[#221C1A] hover:text-white",
    ghost:
      "border border-white/60 text-white hover:bg-white hover:text-[#221C1A]",
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
