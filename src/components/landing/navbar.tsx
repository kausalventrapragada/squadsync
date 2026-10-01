import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#07070a]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Squad Sync home">
          <span className="grid size-8 place-items-center rounded-lg bg-violet-500 text-sm font-bold text-white shadow-[0_0_24px_rgba(139,92,246,0.24)]">S</span>
          <span className="font-semibold tracking-tight">Squad Sync</span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary navigation">
          <a href="#how-it-works" className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white">How it works</a>
          <a href="#why" className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white">Why Squad Sync</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button href="/login" variant="ghost" className="hidden sm:inline-flex">Sign in</Button>
          <Button href="/register" variant="secondary">Get started</Button>
        </div>
      </div>
    </header>
  );
}
