import { HeroSection } from "./_components/hero-section";
import { NextSteps } from "./_components/next-steps";
import { StarterChecklist } from "./_components/starter-checklist";
import { ToolingOverview } from "./_components/tooling-overview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="grid gap-8 md:grid-cols-2">
        <StarterChecklist />
        <ToolingOverview />
      </section>
      <NextSteps />
    </>
  );
}
