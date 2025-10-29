import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="flex w-full max-w-4xl flex-col gap-16 rounded-3xl border border-zinc-200 bg-white px-8 py-16 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:px-16">
        {children}
      </main>
    </div>
  );
}
