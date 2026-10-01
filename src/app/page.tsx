import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Navbar } from "@/components/landing/navbar";
import { RolesPreview } from "@/components/landing/roles-preview";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070a]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <RolesPreview />
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-6 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Ready when you are</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Bring the idea. Find the squad.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500">Create your profile, discover relevant projects, or publish an idea that needs people.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/register">Get started</Button>
            <Button href="/login" variant="secondary">Sign in</Button>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© 2026 Squad Sync</span>
          <span>Ideas · People · Skills · Roles · Squad</span>
        </div>
      </footer>
    </main>
  );
}
