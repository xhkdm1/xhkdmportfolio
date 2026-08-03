import Background from "./components/Background";
import BackToTop from "./components/BackToTop";
import CompetitiveAnalysis from "./components/CompetitiveAnalysis";
import ConceptTest from "./components/ConceptTest";
import DeskResearch from "./components/DeskResearch";
import Hero from "./components/Hero";
import Interview from "./components/Interview";
import Problem from "./components/Problem";
import StickySectionNavigation from "./components/StickySectionNavigation";

const navigationItems = [
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "concept", label: "Concept Test" },
];

export default function BaeminPage() {
  return (
    <main className="bg-white text-zinc-950">
      <Hero />

      <StickySectionNavigation items={navigationItems} />

      <section id="problem" className="scroll-mt-24">
        <Background />
        <Problem />
      </section>

      <section id="research" className="scroll-mt-24">
        <DeskResearch />
        <CompetitiveAnalysis />
        <Interview />
      </section>

      <section id="concept" className="scroll-mt-24">
        <ConceptTest />
      </section>

      <BackToTop />
    </main>
  );
}