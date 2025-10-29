export function NextSteps() {
  return (
    <section className="flex flex-col gap-6 rounded-2xl border border-dashed border-zinc-300 p-6 dark:border-zinc-700 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-xl font-semibold">Next steps</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Replace this page with your own UI, hook up data sources, and remove
          checklist items once they are complete.
        </p>
      </div>
      <div className="flex flex-col gap-3 text-sm sm:flex-row">
        <a
          className="flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 font-medium text-zinc-50 transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js docs
        </a>
        <a
          className="flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900/40"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Interactive courses
        </a>
      </div>
    </section>
  );
}
