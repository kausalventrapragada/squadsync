import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-6 sm:pt-28 lg:pb-32 lg:pt-32">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5 text-xs font-medium text-violet-200">
            <span className="size-1.5 rounded-full bg-violet-300" />
            Build better teams, faster
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Have an idea? <span className="text-zinc-400">Find the people to build it.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Squad Sync connects ideas with people whose skills, interests, and availability fit the project — then gives the new squad a focused place to build together.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/register" className="w-full sm:w-auto">Find a team <span aria-hidden>→</span></Button>
            <Button href="/register" variant="secondary" className="w-full sm:w-auto">Post an idea</Button>
          </div>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-3" aria-label="Product flow">
          {[
            ["01", "Post", "Share what you're trying to build."],
            ["02", "Match", "AI identifies roles and relevant people."],
            ["03", "Build", "Form a squad and move the project forward."],
          ].map(([number, title, description]) => (
            <div key={number} className="border-t border-white/10 pt-4">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                <span className="text-violet-300">{number}</span>
                <span>{title}</span>
              </div>
              <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
