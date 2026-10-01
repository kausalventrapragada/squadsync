import Link from "next/link";
import { ReactNode } from "react";

const nav = [["Dashboard", "/app/dashboard", "⌂"], ["Discover", "/app/discover", "◇"], ["My Ideas", "/app/ideas/new", "+"], ["Applications", "/app/applications", "◷"], ["My Squads", "/app/squads/traffic", "□"]];

export function AppShell({ children }: { children: ReactNode }) {
  return <div className="app-shell"><aside className="sidebar"><Link href="/" className="brand-mark">SQUAD <span>SYNC</span></Link><nav aria-label="Main navigation">{nav.map(([label, href, icon]) => <Link href={href} key={label} className={label === "Dashboard" ? "nav-link active" : "nav-link"}><span aria-hidden="true">{icon}</span>{label}</Link>)}</nav><div className="sidebar-bottom"><Link href="#">Settings</Link><Link href="#">Profile</Link></div></aside><div className="app-main"><header className="app-topbar"><span className="mobile-brand brand-mark">SQUAD <span>SYNC</span></span><div className="topbar-actions"><button className="icon-button" aria-label="Notifications">♢</button><div className="avatar" aria-label="Kausal profile">K</div></div></header><main className="app-content">{children}</main><nav className="mobile-nav" aria-label="Mobile navigation">{nav.slice(0, 4).map(([label, href, icon]) => <Link href={href} key={label}><span aria-hidden="true">{icon}</span><small>{label.split(" ")[0]}</small></Link>)}</nav></div></div>;
}
