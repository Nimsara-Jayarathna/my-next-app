export function HeroSection() {
  return (
    <section className="flex flex-col gap-4">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
        Next.js Starter Template
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Kick off your next project with a clean baseline.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        This workspace gives you a production-ready Next.js setup with
        TypeScript, sensible defaults, and documentation to guide your team.
        Use it as the foundation for any new product or proof of concept.
      </p>
    </section>
  );
}
