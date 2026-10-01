export function RolesPreview() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">The useful part of AI</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">You describe the project. Squad Sync works out who you need.</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            The platform should not make idea owners manually translate a rough concept into a list of technical roles. AI turns the project description into structured role recommendations, then explains why people match those roles.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0d0e13] p-5 shadow-2xl shadow-black/20 sm:p-6">
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
            <div>
              <p className="text-sm font-semibold">Smart Traffic Management</p>
              <p className="mt-1 text-xs text-zinc-500">AI-identified roles</p>
            </div>
            <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-300">AI analysis</span>
          </div>
          <div className="mt-4 space-y-2">
            {[
              ["Backend Developer", "Python · APIs · Database", "1 position"],
              ["AI / ML Engineer", "Python · Machine Learning · Data", "1 position"],
              ["IoT Developer", "Sensors · Embedded Systems", "1 position"],
              ["UI/UX Designer", "Interface · User Experience", "1 position"],
            ].map(([role, skills, count]) => (
              <div key={role} className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-zinc-100">{role}</p>
                  <p className="mt-1 truncate text-xs text-zinc-500">{skills}</p>
                </div>
                <span className="shrink-0 text-xs text-zinc-600">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
