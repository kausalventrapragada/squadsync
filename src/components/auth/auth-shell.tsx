import Link from "next/link";
import { ReactNode } from "react";

export function AuthShell({ children, title, eyebrow, footer }: { children: ReactNode; title: string; eyebrow: string; footer: ReactNode }) {
  return (
    <main className="auth-page">
      <div className="auth-grid" aria-hidden="true" />
      <section className="auth-card" aria-labelledby="auth-title">
        <Link href="/" className="brand-mark">SQUAD <span>SYNC</span></Link>
        <div className="auth-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="auth-title">{title}</h1>
        </div>
        {children}
        <div className="auth-footer">{footer}</div>
      </section>
    </main>
  );
}
