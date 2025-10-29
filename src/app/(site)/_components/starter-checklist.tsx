export function StarterChecklist() {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
      <h2 className="text-xl font-semibold">Get started</h2>
      <ol className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        <li>
          1. Install dependencies with <code>npm install</code> (or your
          preferred package manager).
        </li>
        <li>
          2. Duplicate `.env.example` into `.env.local` and fill in the values
          for your environment.
        </li>
        <li>
          3. Update project metadata in `src/app/layout.tsx` and documentation
          in `README.md`.
        </li>
      </ol>
    </article>
  );
}
