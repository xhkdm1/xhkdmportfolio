import ArtieCaseStudyCore from "./ArtieCaseStudyCore";
import ArtieResearchSection from "./ArtieResearchSection";

export default function ArtiePage() {
  return (
    <main>
      <ArtieCaseStudyCore researchSlot={<ArtieResearchSection />} />
    </main>
  );
}
