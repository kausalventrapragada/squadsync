const steps = [
  { n: "01", title: "Post an idea", body: "Describe the problem, what you're building, and the team size you need." },
  { n: "02", title: "AI understands it", body: "Squad Sync extracts the skills, domains, and roles your project actually needs." },
  { n: "03", title: "Find relevant people", body: "Students discover projects based on their specialization, interests, skills, and availability." },
  { n: "04", title: "Form the squad", body: "People request to join. The idea owner reviews applications and accepts the right contributors." },
  { n: "05", title: "Build together", body: "Work from one squad workspace with tasks, private team chat, and GitHub integration." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-white/[0.06] bg-[#0a0a0e]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-24">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">From idea to squad without the guesswork.</h2>
        </div>
        <div className="mt-12 grid gap-0 md:grid-cols-5">
          {steps.map((step) => (
            <article key={step.n} className="border-l border-white/10 px-5 py-2 first:border-l-0 first:pl-0 md:min-h-48">
              <span className="text-xs font-medium text-violet-300">{step.n}</span>
              <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
