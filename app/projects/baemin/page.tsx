import BackToTop from "./components/BackToTop";
import DecisionLimits from "./components/DecisionLimits";
import Exploration from "./components/Exploration";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Research from "./components/Research";
import StickySectionNavigation from "./components/StickySectionNavigation";
import Validation from "./components/Validation";

const navigationItems = [
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "exploration", label: "Exploration" },
  { id: "validation", label: "Validation" },
  { id: "decision-limits", label: "Decision & Limits" },
];

export default function BaeminPage() {
  return (
    <main className="bg-white text-zinc-950">
      <Hero />

      <StickySectionNavigation items={navigationItems} />

      <section id="problem" className="scroll-mt-24">
        <Problem />
      </section>

      <section id="research" className="scroll-mt-24">
        <Research />
      </section>

      <section id="exploration" className="scroll-mt-24">
        <Exploration />
      </section>

      <section id="validation" className="scroll-mt-24">
        <Validation />
      </section>

      <section id="decision-limits" className="scroll-mt-24">
        <DecisionLimits />
      </section>

      <BackToTop />
    </main>
  );
}
