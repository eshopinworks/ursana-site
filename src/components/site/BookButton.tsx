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
      "bg-[#221C1A] text-white hover:bg-[#38302C] border border-[#221C1A] shadow-sm",
    outline:
      "border border-border hover:border-[#221C1A]/50 text-foreground hover:bg-[#221C1A] hover:text-white bg-transparent",
    ghost:
      "border border-border text-foreground hover:bg-secondary",
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
