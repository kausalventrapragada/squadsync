import type { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary: "bg-white text-black hover:bg-zinc-200 shadow-[0_8px_30px_rgba(255,255,255,0.08)]",
  secondary: "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]",
  ghost: "text-zinc-300 hover:bg-white/[0.05] hover:text-white",
};

export function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070a] ${styles[variant]} ${className}`;

  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes}>{children}</button>;
}
