export function ToolingOverview() {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <h2 className="text-xl font-semibold">Included tooling</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        <li>• App Router with TypeScript and strict linting</li>
        <li>• Preconfigured Tailwind-friendly design tokens</li>
        <li>• Ready-to-go ESLint, Prettier, and PostCSS setup</li>
        <li>• Sensible defaults for metadata, fonts, and theming</li>
      </ul>
    </article>
  );
}
