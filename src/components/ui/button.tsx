import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { href?: string; variant?: "primary" | "secondary" | "ghost"; children: ReactNode };

export function Button({ variant = "primary", href, className = "", children, type = "button", ...props }: Props) {
  const classes = `button button-${variant} ${className}`;
  if (href) return <Link className={classes} href={href}>{children}</Link>;
  return <button className={classes} type={type} {...props}>{children}</button>;
}
