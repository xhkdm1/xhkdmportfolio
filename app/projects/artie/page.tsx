import ArtieCaseStudyCore from "./ArtieCaseStudyCore";
import ArtieResearchSection from "./ArtieResearchSection";
import BackToTop from "./BackToTop";

export default function ArtiePage() {
  return (
    <main>
      <ArtieCaseStudyCore researchSlot={<ArtieResearchSection />} />
      <BackToTop /> 
    </main>
  );
}
