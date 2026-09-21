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
    "inline-flex items-center justify-center rounded-lg font-medium uppercase tracking-wider text-xs transition-all duration-300 focus:outline-none shrink-0";
  const sizes = {
    sm: "px-4 py-2.5 text-xs",
    md: "px-5 py-3 text-xs",
    lg: "px-7 py-3.5 text-xs sm:text-sm",
  };
  const variants = {
    primary:
      "bg-[#221C1A] text-white hover:bg-[var(--gold)] border border-[#221C1A] hover:border-[var(--gold)]",
    outline:
      "border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white",
    ghost:
      "border border-border text-foreground hover:bg-foreground hover:text-background",
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
